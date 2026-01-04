// User Progress Types
export interface UserProgress {
  odUsuario: string;
  currentChapter: number;
  currentSection: number;
  completedSections: Record<string, boolean>; // "0-1", "0-2", etc.
  quizResults: Record<string, QuizResult>;
  completedExercises: string[];
  totalStudyTime: number; // minutes
  lastActivity: Date;
  streak: number;
  achievements: string[];
}

export interface QuizResult {
  score: number;
  totalQuestions: number;
  answers: Record<number, string | string[]>;
  completedAt: Date;
  aiFeedback?: string;
  passed: boolean;
}

// Exercise Result for cloud sync
export interface ExerciseResult {
  exerciseId: string;
  completed: boolean;
  code: string;
  hintsUsed: number;
  solutionViewed: boolean;
  completedAt: string;
}

// Cloud sync progress format
export interface CloudProgress {
  completedSections: string[];
  quizResults: CloudQuizResult[];
  exerciseResults: ExerciseResult[];
  totalStudyTime: number;
  achievements: string[];
  lastChapter: number;
  lastSection: number;
}

export interface CloudQuizResult {
  quizId: string;
  score: number;
  totalQuestions: number;
  completedAt: string;
  answers: Record<string, string>;
}

// Content Types
export type ContentBlock =
  | HeadingBlock
  | ParagraphBlock
  | CodeBlock
  | TableBlock
  | ListBlock
  | CalloutBlock
  | QuizLinkBlock
  | ExerciseLinkBlock;

export interface HeadingBlock {
  type: 'heading';
  level: 1 | 2 | 3;
  text: string;
  id?: string;
}

export interface ParagraphBlock {
  type: 'paragraph';
  text: string;
}

export interface CodeBlock {
  type: 'code';
  language: string;
  code: string;
  executable?: boolean;
  filename?: string;
}

export interface TableBlock {
  type: 'table';
  headers: string[];
  rows: string[][];
}

export interface ListBlock {
  type: 'list';
  ordered: boolean;
  items: string[];
}

export interface CalloutBlock {
  type: 'callout';
  variant: 'info' | 'warning' | 'tip' | 'error';
  title?: string;
  content: string;
}

export interface QuizLinkBlock {
  type: 'quiz-link';
  quizId: string;
  title: string;
}

export interface ExerciseLinkBlock {
  type: 'exercise-link';
  exerciseId: string;
  title: string;
}

// Chapter and Section Types
export interface Chapter {
  id: number;
  title: string;
  description: string;
  icon: string;
  sections: Section[];
  estimatedTime: number; // minutes
}

export interface Section {
  id: string;
  title: string;
  content: ContentBlock[];
  estimatedTime: number; // minutes
}

// Quiz Types
export interface Quiz {
  id: string;
  chapterId: number;
  title: string;
  description: string;
  questions: QuizQuestion[];
  passingScore: number; // percentage
  timeLimit?: number; // minutes
}

export interface QuizQuestion {
  id: string;
  type: 'multiple-choice' | 'code' | 'true-false' | 'fill-blank';
  question: string;
  code?: string;
  options?: string[];
  correctAnswer: string | string[];
  explanation: string;
  difficulty: 'easy' | 'medium' | 'hard';
  points?: number;
}

// Exercise Types
export interface Exercise {
  id: string;
  chapterId: number;
  title: string;
  instructions: string;
  initialCode: string;
  solution: string;
  hints: string[];
  testCases?: TestCase[];
  difficulty: 'easy' | 'medium' | 'hard';
}

export interface TestCase {
  input: string;
  expectedOutput: string;
  description: string;
}

// AI Integration Types
export interface ClaudeOptions {
  chapterContext: string;
  userCode?: string;
  quizResults?: QuizResult;
  question?: string;
}

export interface ClaudeResponse {
  content: string;
  usage?: {
    inputTokens: number;
    outputTokens: number;
  };
}

// Flashcard Types
export interface Flashcard {
  id: string;
  front: string;
  back: string;
  category: string;
  chapterId: number;
  lastReviewed?: Date;
  nextReview?: Date;
  repetitions: number;
  easeFactor: number;
}

// Achievement Types
export interface Achievement {
  id: string;
  title: string;
  description: string;
  icon: string;
  unlockedAt?: Date;
  condition: AchievementCondition;
}

export interface AchievementCondition {
  type: 'chapter_complete' | 'quiz_perfect' | 'streak' | 'exercises_complete' | 'time_spent';
  value: number;
}

// Note Types
export interface Note {
  id: string;
  sectionId: string;
  content: string;
  createdAt: Date;
  updatedAt: Date;
}

// Navigation Types
export interface NavItem {
  id: string;
  title: string;
  path: string;
  icon?: string;
  children?: NavItem[];
}

// Settings Types
export interface UserSettings {
  theme: 'dark' | 'light' | 'system';
  fontSize: 'small' | 'medium' | 'large';
  codeEditorTheme: string;
  showLineNumbers: boolean;
  autoSave: boolean;
  quizMode: 'one-at-time' | 'all-at-once';
  showImmediateFeedback: boolean;
  // Reading mode settings
  readingModeEnabled: boolean;
  narrationEnabled: boolean;
  narrationSpeed: number; // 0.5 to 2
  narrationVoiceLang: string; // e.g., 'es-ES', 'en-US'
}
