
export enum Page {
  HOME = 'home',
  PROJECTS = 'projects',
  PROJECT_DETAIL = 'project_detail',
  AI_EXPLORATION = 'ai_exploration',
  HIGHLIGHTS = 'highlights',
  ABOUT = 'about'
}

export interface Project {
  id: string;
  title: string;
  description: string;
  category: string;
  imageUrl: string;
  color: string;
  date?: string;
  // Demo相关数据
  demoTitle?: string;
  demoDescription?: string;
  demoLink?: string;
  demoBuildTime?: string;
  // 详情页面数据
  background?: string;
  research?: string[];
  designProcess?: {
    title: string;
    description: string;
    image?: string;
  }[];
  results?: {
    metric: string;
    value: string;
    description: string;
  }[];
  gallery?: string[];
}

export interface Principle {
  title: string;
  description: string;
  icon: string;
}

export interface SystemPost {
  id: string;
  title: string;
  date: string;
  summary: string;
  imageUrl: string;
  tag: string;
  principles?: Principle[];
  details?: string;
}

export type HighlightId = 'accessibility' | 'research' | 'design-system';

export interface TimelineItem {
  year: string;
  company: string;
  desc: string;
}
