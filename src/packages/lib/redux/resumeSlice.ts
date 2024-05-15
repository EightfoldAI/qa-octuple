import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import {
  FeaturedSkill,
  Resume,
  ResumeEducation,
  ResumeProfile,
  ResumeProject,
  ResumeSkills,
  ResumeWorkExperience,
} from './types';
import { ShowForm } from './settingsSlice';
import { RootState } from './store';

export const initialProfile: ResumeProfile = {
  name: '',
  summary: '',
  email: '',
  phone: '',
  location: '',
  url: '',
};

export const initialWorkExperience: ResumeWorkExperience = {
  company: '',
  jobTitle: '',
  date: '',
  description: [],
};

export const initialEducation: ResumeEducation = {
  school: '',
  date: '',
  degree: '',
  gpa: '',
  description: [],
};

export const initialProject: ResumeProject = {
  project: '',
  date: '',
  description: [],
};

export const initialFeaturedSkill: FeaturedSkill = { skill: '', rating: 4 };
export const initialFeaturedSkills: FeaturedSkill[] = Array(6).fill({
  ...initialFeaturedSkill,
});

export const initialSkills: ResumeSkills = {
  featuredSkills: initialFeaturedSkills,
  description: [],
};

export const initialCustom = {
  description: [],
};

export const initialResumeState: Resume = {
  profile: initialProfile,
  workExperience: [initialWorkExperience],
  education: [initialEducation],
  projects: [initialProject],
  skills: initialSkills,
  custom: initialCustom,
};

export type CreateChangeActionWithDescriptions<T> = {
  idx: number;
} & (
  | {
      field: Exclude<keyof T, 'description'>;
      value: string;
    }
  | {
      field: 'description';
      value: string[];
    }
);

export const resumeSlice = createSlice({
  name: 'resume',
  initialState: initialResumeState,
  reducers: {
    changeProfile: (
      draft,
      action: PayloadAction<{ field: keyof ResumeProfile; value: string }>
    ) => {
      const { field, value } = action.payload;
      draft.profile[field] = value;
    },

    changeWorkExperience: (
      draft,
      action: PayloadAction<
        CreateChangeActionWithDescriptions<ResumeWorkExperience>
      >
    ) => {
      const { idx, field, value } = action.payload;
      const workExperience = draft.workExperience[idx];
      workExperience[field] = value as any;
    },
    changeEducations: (
      draft,
      action: PayloadAction<CreateChangeActionWithDescriptions<ResumeEducation>>
    ) => {
      const { idx, field, value } = action.payload;
      const education = draft.education[idx];
      education[field] = value as any;
    },
    changeProjects: (
      draft,
      action: PayloadAction<CreateChangeActionWithDescriptions<ResumeProject>>
    ) => {
      const { idx, field, value } = action.payload;
      const project = draft.projects[idx];
      project[field] = value as any;
    },
    changeSkills: (
      draft,
      action: PayloadAction<
        | { field: 'description'; value: string[] }
        | {
            field: 'featuredSkills';
            idx: number;
            skill: string;
            rating: number;
          }
      >
    ) => {
      const { field } = action.payload;
      if (field === 'description') {
        const { value } = action.payload;
        draft.skills.description = value;
      } else {
        const { idx, skill, rating } = action.payload;
        const featuredSkill = draft.skills.featuredSkills[idx];
        featuredSkill.skill = skill;
        featuredSkill.rating = rating;
      }
    },
    changeCustom: (
      draft,
      action: PayloadAction<{ field: 'description'; value: string[] }>
    ) => {
      const { value } = action.payload;
      draft.custom.description = value;
    },
    addSectionInForm: (draft, action: PayloadAction<{ form: ShowForm }>) => {
      const { form } = action.payload;
      switch (form) {
        case 'workExperience': {
          draft.workExperience.push(structuredClone(initialWorkExperience));
          return draft;
        }
        case 'education': {
          draft.education.push(structuredClone(initialEducation));
          return draft;
        }
        case 'projects': {
          draft.projects.push(structuredClone(initialProject));
          return draft;
        }
      }
    },
    moveSectionInForm: (
      draft,
      action: PayloadAction<{
        form: ShowForm;
        idx: number;
        direction: 'up' | 'down';
      }>
    ) => {
      const { form, idx, direction } = action.payload;
      if (form !== 'skills' && form !== 'custom') {
        if (
          (idx === 0 && direction === 'up') ||
          (idx === draft[form].length - 1 && direction === 'down')
        ) {
          return draft;
        }

        const section = draft[form][idx];
        if (direction === 'up') {
          draft[form][idx] = draft[form][idx - 1];
          draft[form][idx - 1] = section;
        } else {
          draft[form][idx] = draft[form][idx + 1];
          draft[form][idx + 1] = section;
        }
      }
    },
    deleteSectionInFormByIdx: (
      draft,
      action: PayloadAction<{ form: ShowForm; idx: number }>
    ) => {
      const { form, idx } = action.payload;
      if (form !== 'skills' && form !== 'custom') {
        draft[form].splice(idx, 1);
      }
    },
    setResume: (draft, action: PayloadAction<Resume>) => {
      return action.payload;
    },
  },
});

export const {
  changeCustom,
  changeEducations,
  changeProjects,
  changeProfile,
  changeSkills,
  changeWorkExperience,
  addSectionInForm,
  moveSectionInForm,
  deleteSectionInFormByIdx,
  setResume,
} = resumeSlice.actions;

export const selectResume = (state: RootState) => state.resume;
export const selectProfile = (state: RootState) => state.resume.profile;
export const selectWorkExperiences = (state: RootState) =>
  state.resume.workExperience;
export const selectEducations = (state: RootState) => state.resume.education;
export const selectProjects = (state: RootState) => state.resume.projects;
export const selectSkills = (state: RootState) => state.resume.skills;
export const selectCustom = (state: RootState) => state.resume.custom;

export default resumeSlice.reducer;
