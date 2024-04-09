import React from 'react';
import type { NextPageProps } from '@/@types/global';
import { IconName, LinkButtonVariant } from '@eightfold.ai/octuple';

export const jobs = {
  softwareengineer: 'Software Engineer',
  productmanager: 'Product Manager',
  sdet: 'SDET',
  machinelearningengineer: 'Machine Learning Engineer',
  director: 'Director',
  leadengineer: 'Lead Engineer',
  seniorengineer: 'Senior Engineer',
  memberoftechnicalstaff: 'Member of Technical Staff',
  principalengineer: 'Principal Engineer',
  functionalconsultant: 'Functional Consultant',
  uxdesigner: 'UX Designer',
  dealdeskmanager: 'Deal Desk Manager',
  technicalsupportengineer: 'Technical Support Engineer',
  accountant: 'Accountant',
  productdeliverymanager: 'Product Delivery Manager',
};

export const langs = {
  en: 'English',
  it: 'Italiano',
  es: 'Español',
  fr: 'Français',
  pt: 'Português',
  nb: 'Norsk',
  de: 'Deutsch',
  ja: '日本語',
  ms: 'Bahasa melayu',
  'zh-CN': '中文 (简体)',
  'zh-TW': '中文 (繁體)',
  ko: '한국어',
  th: 'ภาษาไทย',
  hr: 'Hrvatski',
  uk: 'Yкраїнська',
  nl: 'Nederlands',
  pl: 'Polski',
  el: 'Ελληνικά',
  hu: 'Magyar',
  cs: 'čeština',
  tr: 'Türkçe',
  ru: 'Pусский',
  ht: 'Haitian',
  he: 'עברית',
  'pt-BR': 'Brazilian Português',
  da: 'Dansk',
  fi: 'Suomi',
  sv: 'Svenska',
};

export const locations = {
  current: 'Current location',
  bengalaru: 'Bengalaru, Karnataka, India',
  noida: 'Noida, Uttar Pradesh, India',
  santa: 'Santa Clara, CA, United States',
  london: 'London, England, United Kingdom',
  hybrid: 'Hybrid',
};

export interface AppProps {
  searchParams?: NextPageProps['searchParams'];
}

export interface LaunchPadNavItem {
  disabled: boolean;
  text: string;
  url: string;
  variant: LinkButtonVariant;
}

export interface PCSNavItem {
  disabled: boolean;
  text: string;
  url: string;
  variant: LinkButtonVariant;
}

export interface PerksItem {
  description?: string;
  icon?: IconName;
}

export interface VideoItem {
  description?: string;
  title?: string;
  desktopVideo?: React.ReactNode;
  mobileVideo?: React.ReactNode;
}

export interface NewsItem {
  image?: string;
  description?: string;
  title?: string;
  url?: string;
}

export interface Department {
  role?: string;
  index?: number;
  selected?: boolean;
}

export interface Employee {
  department?: string;
  index?: number;
  initials?: string;
  level?: number;
  location?: string;
  name?: string;
  selected?: boolean;
  skills?: string[];
  title?: string;
}

export interface Job {
  name?: string;
  index?: number;
  selected?: boolean;
}

export interface Seniority {
  level?: number;
  index?: number;
  selected?: boolean;
  title?: string;
}

export interface Skill {
  name?: string;
  index?: number;
  selected?: boolean;
}

export interface Workplace {
  location?: string;
  index?: number;
  selected?: boolean;
}

export interface Role {
  cart?: boolean;
  geo?: string | string[];
  index?: number;
  jd?: React.ReactNode;
  level?: number;
  location?: string;
  priority?: number;
  role?: string;
  selected?: boolean;
  skills?: string[];
  title?: string;
}
