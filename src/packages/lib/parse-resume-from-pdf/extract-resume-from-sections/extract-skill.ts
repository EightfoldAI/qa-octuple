import { initialFeaturedSkills } from '../../redux/resumeSlice';
import { ResumeSkills } from '../../redux/types';
import { deepClone } from '../deep-clone';
import { ResumeSectionToLines } from '../types';
import {
  getBulletPointsFromLines,
  getDescriptionLinesIdx,
} from './lib/bullet-points';
import { getSectionLinesByKeywords } from './lib/get-section-lines';

export const extractSkills = (sections: ResumeSectionToLines) => {
  const lines = getSectionLinesByKeywords(sections, ['skill']);
  const descriptionLineIdx = getDescriptionLinesIdx(lines) ?? 0;
  const descriptionLines = lines.slice(descriptionLineIdx);
  const description = getBulletPointsFromLines(descriptionLines);

  const featuredSkills = deepClone(initialFeaturedSkills);
  if (descriptionLineIdx !== 0) {
    const featuredSkillLines = lines.slice(0, descriptionLineIdx);
    const featuredSkillsTextItems = featuredSkillLines
      .flat()
      .filter((item) => item.text.trim())
      .slice(0, 6);

    featuredSkillsTextItems.forEach((item, i) => {
      featuredSkills[i].skill = item.text;
    });
  }

  const skills: ResumeSkills = {
    featuredSkills,
    description,
  };

  return { skills };
};
