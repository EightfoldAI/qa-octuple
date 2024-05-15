import { ResumeKey } from '../redux/types';
import { Line, Lines, ResumeSectionToLines, TextItem } from './types';

export const PROFILE_SECTION: ResumeKey = 'profile';

const SECTION_TITLE_PRIMARY_KEYWORDS = [
  'experience',
  'education',
  'project',
  'skill',
];

const SECTION_TITLE_SECONDARY_KEYWORDS = [
  'job',
  'course',
  'extracurricular',
  'objective',
  'summary',
  'award',
  'honor',
  'project',
];

const SECTION_TITLE_KEYWORDS = [
  ...SECTION_TITLE_PRIMARY_KEYWORDS,
  ...SECTION_TITLE_SECONDARY_KEYWORDS,
];

export const groupLinesIntoSections = (lines: Lines) => {
  let sections: ResumeSectionToLines = {};
  let sectionName: string = PROFILE_SECTION;
  let currentSectionLines: any = [];

  for (let i: number = 0; i < lines.length; ++i) {
    const [firstItem] = lines[i];
    const text = firstItem?.text.trim();

    if (isSectionTitle(lines[i], i)) {
      sections[sectionName] = [...currentSectionLines];
      sectionName = text;
      currentSectionLines = [];
    } else {
      currentSectionLines.push(lines[i]);
    }
  }

  if (currentSectionLines.length > 0) {
    sections[sectionName] = [...currentSectionLines];
  }

  return sections;
};

const isSectionTitle = (line: Line, lineNumber: number) => {
  const isWithinFirstTwoLines = lineNumber < 2;
  const isLineLengthNotOne = line.length !== 1;

  if (isWithinFirstTwoLines || isLineLengthNotOne) {
    return false;
  }

  const textItem = line[0];

  if (textItemIsBold(textItem) && textContainsLetterAndIsAllUpperCase(textItem)) {
    return true;
  }

  const text = textItem.text.trim();

  const textHasAtMost2Words =
    text.split(' ').filter((s) => s !== '&').length <= 2;
  const startsWithCapitalLetter = /^[A-Z]/.test(text);

  return (
    textHasAtMost2Words &&
    textContainsOnlyLettersSpacesAmpersands(textItem) &&
    startsWithCapitalLetter &&
    SECTION_TITLE_KEYWORDS.some((keyword) => text.toLowerCase().includes(keyword))
  );
};

export const textItemIsBold = (item: TextItem) => isTextItemBold(item.fontName);

const isTextItemBold = (fontName: string) =>
  fontName.toLowerCase().includes('bold');

export const textContainsLetter = (item: TextItem) => /[a-zA-Z]/.test(item.text);

export const textContainsLetterAndIsAllUpperCase = (item: TextItem) =>
  textContainsLetter(item) && item.text.toUpperCase() === item.text;

export const textContainsOnlyLettersSpacesAmpersands = (item: TextItem) =>
  /^[A-Za-z\s&]+$/.test(item.text);
