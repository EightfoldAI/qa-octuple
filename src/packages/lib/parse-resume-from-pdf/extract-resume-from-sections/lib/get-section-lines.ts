import { Lines, ResumeSectionToLines } from '../../types';

export const getSectionLinesByKeywords = (
  sections: ResumeSectionToLines,
  keywords: string[]
): Lines => {
  for (const [sectionName, sectionLines] of Object.entries(sections)) {
    const hasKeyWord = keywords.some((keyword) =>
      sectionName.toLowerCase().includes(keyword)
    );
    if (hasKeyWord) {
      return sectionLines;
    }
  }

  return [];
};
