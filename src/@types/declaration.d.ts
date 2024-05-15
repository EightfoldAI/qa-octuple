declare interface Window {
  i18nLang: string;
  is_mobile?: () => boolean;
}

declare module '*.svg' {
  const content: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  export default content;
}

declare module '*.svg?url' {
  const content: string;
  export default content;
}

declare module 'pdfjs-dist/build/pdf.worker.entry';
