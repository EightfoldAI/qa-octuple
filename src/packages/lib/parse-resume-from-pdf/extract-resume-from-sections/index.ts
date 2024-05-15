import { Resume } from '../../redux/types';
import { ResumeSectionToLines } from '../types';
import { extractEducation } from './extract-education';
import { extractProfile } from './extract-profile';
import { extractProject } from './extract-project';
import { extractSkills } from './extract-skill';
import { extractWorkExperience } from './extract-work-experience';

export const extractResumeFromSections = (
  sections: ResumeSectionToLines
): Resume => {
  const { profile } = extractProfile(sections);
  const { education } = extractEducation(sections);
  const { workExperience } = extractWorkExperience(sections);
  const { projects } = extractProject(sections);
  const { skills } = extractSkills(sections);

  return {
    profile,
    education,
    workExperience,
    projects,
    skills,
    custom: {
      description: [],
    },
  };
};
