import { ResumeProject } from '../../redux/types';
import { textItemIsBold } from '../group-lines-into-sections';
import { FeatureSet, ResumeSectionToLines, TextItem } from '../types';
import {
  getBulletPointsFromLines,
  getDescriptionLinesIdx,
} from './lib/bullet-points';
import {
  DATE_FEATURE_SETS,
  createTextInclusionChecker,
} from './lib/common-features';
import { getTextWithHighestFeatureScore } from './lib/match-scoring-system';
import { getSectionLinesByKeywords } from './lib/get-section-lines';
import { divideSectionIntoSubsections } from './lib/subsections';

export const extractProject = (sections: ResumeSectionToLines) => {
  const projects: ResumeProject[] = [];
  const projectScores: any[] = []; // TODO strongly type.
  const lines = getSectionLinesByKeywords(sections, ['project']);
  const subsections = divideSectionIntoSubsections(lines);

  const extractAndScore = (
    subsectionInfoTextItems: TextItem[],
    featureSets: FeatureSet[],
    useAllMatches?: boolean
  ) =>
    getTextWithHighestFeatureScore(
      subsectionInfoTextItems,
      featureSets,
      undefined,
      useAllMatches
    );

  for (const subsectionLines of subsections) {
    const descriptionLineIdx = getDescriptionLinesIdx(subsectionLines) ?? 1;

    const subsectionInfoTextItems = subsectionLines
      .slice(0, descriptionLineIdx)
      .flat();

    const [date, dateScores] = extractAndScore(
      subsectionInfoTextItems,
      DATE_FEATURE_SETS
    );

    const PROJECT_FEATURE_SET: FeatureSet[] = [
      [textItemIsBold, 2],
      [createTextInclusionChecker(date), -4],
    ];

    const [project, projectScore] = extractAndScore(
      subsectionInfoTextItems,
      PROJECT_FEATURE_SET,
      false
    );

    const descriptionLines = subsectionLines.slice(descriptionLineIdx);
    const description = getBulletPointsFromLines(descriptionLines);

    projects.push({ project, date, description });
    projectScores.push({
      projectScore,
      dateScores,
    });
  }

  return { projects, projectScores };
};
