import { ResumeWorkExperience } from '../../redux/types';
import { textItemIsBold } from '../group-lines-into-sections';
import { FeatureSet, ResumeSectionToLines, TextItem } from '../types';
import { textContainsNumber } from './extract-profile';
import {
  getBulletPointsFromLines,
  getDescriptionLinesIdx,
} from './lib/bullet-points';
import { DATE_FEATURE_SETS, createTextInclusionChecker } from './lib/common-features';
import { getTextWithHighestFeatureScore } from './lib/match-scoring-system';
import { getSectionLinesByKeywords } from './lib/get-section-lines';
import { divideSectionIntoSubsections } from './lib/subsections';

const WORK_EXPERIENCE_KEYWORDS_LOWERCASE = [
  'work',
  'experience',
  'employment',
  'history',
  'job',
];

const JOB_TITLES = [
  'Analyst',
  'Agent',
  'Administrator',
  'Architect',
  'Assistant',
  'Associate',
  'CTO',
];

const textContainsJobTitle = (item: TextItem) =>
  JOB_TITLES.some((jobTitle) =>
    item.text.split(/\s/).some((word) => word === jobTitle)
  );

const textHasMoreThanFiveWords = (item: TextItem) => item.text.split(/\s/).length > 5;

const JOB_TITLE_FEATURE_LIST: FeatureSet[] = [
  [textContainsJobTitle, 4],
  [textContainsNumber, -4],
  [textHasMoreThanFiveWords, -2],
];

export const extractWorkExperience = (sections: ResumeSectionToLines) => {
  const workExperience: ResumeWorkExperience[] = [];
  const workExperienceScores: any[] = []; // TODO strongly type.
  const lines = getSectionLinesByKeywords(
    sections,
    WORK_EXPERIENCE_KEYWORDS_LOWERCASE
  );
  const subsections = divideSectionIntoSubsections(lines);

  for (const subsectionLines of subsections) {
    const descriptionLinesIdx = getDescriptionLinesIdx(subsectionLines) ?? 2;

    const subsectionInfoTextItems = subsectionLines
      .slice(0, descriptionLinesIdx)
      .flat();

    const [date, dateScores] = getTextWithHighestFeatureScore(
      subsectionInfoTextItems,
      DATE_FEATURE_SETS
    );

    const [jobTitle, jonTitleScores] = getTextWithHighestFeatureScore(
      subsectionInfoTextItems,
      JOB_TITLE_FEATURE_LIST
    );

    const COMPANY_FEATURE_SET: FeatureSet[] = [
      [textItemIsBold, 2],
      [createTextInclusionChecker(date), -4],
      [createTextInclusionChecker(jobTitle), -4],
    ];

    const [company, companyScores] = getTextWithHighestFeatureScore(
      subsectionInfoTextItems,
      COMPANY_FEATURE_SET,
      false
    );

    const subsectionDescriptionLines =
      subsectionLines.slice(descriptionLinesIdx);
    const description = getBulletPointsFromLines(subsectionDescriptionLines);

    workExperience.push({ company, jobTitle, date, description });
    workExperienceScores.push({
      companyScores,
      jonTitleScores,
      dateScores,
    });
  }

  return { workExperience, workExperienceScores };
};
