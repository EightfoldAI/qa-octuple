import React from 'react';
import type { NextPageProps } from '@/@types/global';
import { ButtonVariant, IconName, LinkButtonVariant } from '@eightfold.ai/octuple';

export interface AppProps {
  searchParams?: NextPageProps['searchParams'];
}

export interface LaunchPadNavItem {
  disabled: boolean;
  index: number;
  text: string;
  launchPadNavigationSubList?: LaunchPadNavItem[];
  url?: string;
  variant?: ButtonVariant | LinkButtonVariant;
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
  description?: string;
  image?: string;
  index?: number;
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
