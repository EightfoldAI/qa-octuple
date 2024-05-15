import { TextItem, TextItems } from './types';
import * as pdfjs from 'pdfjs-dist';

import pdfjsWorker from 'pdfjs-dist/build/pdf.worker.entry';
pdfjs.GlobalWorkerOptions.workerSrc = pdfjsWorker;

import type { TextItem as PdfjsTextItem } from 'pdfjs-dist/types/src/display/api';

const isEmptySpace = (textItem: TextItem) =>
  !textItem.hasEOL && textItem.text.trim() === '';

export const readPdf = async (fileUrl: string): Promise<TextItems> => {
  const pdffile = await pdfjs.getDocument(fileUrl).promise;
  const numPages = pdffile.numPages;

  const pagePromises = Array.from({ length: numPages }, async (_, i) => {
    const page = await pdffile.getPage(i + 1);
    const textContent = await page.getTextContent();

    await page.getOperatorList();
    const commonObjs = page.commonObjs;

    return textContent.items.map((item) => {
      const {
        str: text,
        dir,
        transform,
        fontName: pdfFontName,
        ...otherProps
      } = item as PdfjsTextItem;

      const x = transform[4];
      const y = transform[5];

      const fontObj = commonObjs.get(pdfFontName);
      const fontName = fontObj.name;

      const newText = text.replace(/--/g, '-');

      return {
        ...otherProps,
        fontName,
        text: newText,
        x,
        y,
      };
    });
  });

  let textItems = (await Promise.all(pagePromises)).flat();

  textItems = textItems.filter((textItem) => !isEmptySpace(textItem));

  return textItems;
};
