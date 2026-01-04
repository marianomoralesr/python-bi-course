import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { UserProgress, QuizResult, CloudProgress, CloudQuizResult } from '../types';
import { syncProgressToCloud, fetchProgressFromCloud, saveQuizAttempt } from '../services/progressSync';

interface ProgressState extends UserProgress {
  // Cloud sync state
  isSyncing: boolean;
  lastSyncedAt: Date | null;

  // Actions
  setCurrentLocation: (chapter: number, section: number) => void;
  markSectionComplete: (chapterId: number, sectionId: string) => void;
  saveQuizResult: (quizId: string, result: QuizResult) => void;
  markExerciseComplete: (exerciseId: string) => void;
  addStudyTime: (minutes: number) => void;
  updateStreak: () => void;
  addAchievement: (achievementId: string) => void;
  resetProgress: () => void;
  getChapterProgress: (chapterId: number, totalSections: number) => number;
  getOverallProgress: (totalSections: number) => number;

  // Cloud sync actions
  syncToCloud: () => Promise<boolean>;
  loadFromCloud: () => Promise<boolean>;
}

const initialState: UserProgress = {
  odUsuario: crypto.randomUUID(),
  currentChapter: 0,
  currentSection: 0,
  completedSections: {},
  quizResults: {},
  completedExercises: [],
  totalStudyTime: 0,
  lastActivity: new Date(),
  streak: 0,
  achievements: [],
};

// Debounce helper for cloud sync
let syncTimeout: ReturnType<typeof setTimeout> | null = null;
const debouncedSync = (syncFn: () => void) => {
  if (syncTimeout) clearTimeout(syncTimeout);
  syncTimeout = setTimeout(() => {
    syncFn();
  }, 2000); // Sync after 2 seconds of inactivity
};

// Convert store QuizResult to cloud format
const convertQuizAnswersToCloud = (answers: Record<number, string | string[]>): Record<string, string> => {
  const result: Record<string, string> = {};
  for (const [key, value] of Object.entries(answers)) {
    result[key] = Array.isArray(value) ? value.join(',') : value;
  }
  return result;
};

export const useProgressStore = create<ProgressState>()(
  persist(
    (set, get) => ({
      ...initialState,
      isSyncing: false,
      lastSyncedAt: null,

      setCurrentLocation: (chapter: number, section: number) => {
        set({
          currentChapter: chapter,
          currentSection: section,
          lastActivity: new Date(),
        });
        debouncedSync(() => { get().syncToCloud(); });
      },

      markSectionComplete: (chapterId: number, sectionId: string) => {
        const key = `${chapterId}-${sectionId}`;
        set((state) => ({
          completedSections: {
            ...state.completedSections,
            [key]: true,
          },
          lastActivity: new Date(),
        }));
        debouncedSync(() => { get().syncToCloud(); });
      },

      saveQuizResult: (quizId: string, result: QuizResult) => {
        set((state) => ({
          quizResults: {
            ...state.quizResults,
            [quizId]: result,
          },
          lastActivity: new Date(),
        }));

        // Save to cloud immediately for quiz results
        const cloudAnswers = convertQuizAnswersToCloud(result.answers);
        saveQuizAttempt(quizId, result.score, result.totalQuestions, cloudAnswers);
        debouncedSync(() => { get().syncToCloud(); });
      },

      markExerciseComplete: (exerciseId: string) => {
        set((state) => ({
          completedExercises: state.completedExercises.includes(exerciseId)
            ? state.completedExercises
            : [...state.completedExercises, exerciseId],
          lastActivity: new Date(),
        }));
        debouncedSync(() => { get().syncToCloud(); });
      },

      addStudyTime: (minutes: number) => {
        set((state) => ({
          totalStudyTime: state.totalStudyTime + minutes,
          lastActivity: new Date(),
        }));
        debouncedSync(() => { get().syncToCloud(); });
      },

      updateStreak: () => {
        const now = new Date();
        const lastActivity = new Date(get().lastActivity);
        const diffDays = Math.floor(
          (now.getTime() - lastActivity.getTime()) / (1000 * 60 * 60 * 24)
        );

        if (diffDays === 1) {
          set((state) => ({ streak: state.streak + 1 }));
        } else if (diffDays > 1) {
          set({ streak: 1 });
        }
      },

      addAchievement: (achievementId: string) => {
        set((state) => ({
          achievements: state.achievements.includes(achievementId)
            ? state.achievements
            : [...state.achievements, achievementId],
        }));
        debouncedSync(() => { get().syncToCloud(); });
      },

      resetProgress: () => {
        set({
          ...initialState,
          odUsuario: get().odUsuario,
          isSyncing: false,
          lastSyncedAt: null,
        });
        get().syncToCloud();
      },

      getChapterProgress: (chapterId: number, totalSections: number) => {
        const state = get();
        const completedCount = Object.keys(state.completedSections).filter(
          (key) => key.startsWith(`${chapterId}-`) && state.completedSections[key]
        ).length;
        return totalSections > 0 ? (completedCount / totalSections) * 100 : 0;
      },

      getOverallProgress: (totalSections: number) => {
        const state = get();
        const completedCount = Object.values(state.completedSections).filter(
          Boolean
        ).length;
        return totalSections > 0 ? (completedCount / totalSections) * 100 : 0;
      },

      // Cloud sync methods
      syncToCloud: async () => {
        const state = get();
        set({ isSyncing: true });

        // Convert store format to cloud format
        const cloudProgress: CloudProgress = {
          completedSections: Object.keys(state.completedSections).filter(k => state.completedSections[k]),
          quizResults: Object.entries(state.quizResults).map(([quizId, result]) => ({
            quizId,
            score: result.score,
            totalQuestions: result.totalQuestions,
            completedAt: result.completedAt instanceof Date
              ? result.completedAt.toISOString()
              : String(result.completedAt),
            answers: convertQuizAnswersToCloud(result.answers),
          })),
          exerciseResults: state.completedExercises.map(id => ({
            exerciseId: id,
            completed: true,
            code: '',
            hintsUsed: 0,
            solutionViewed: false,
            completedAt: new Date().toISOString(),
          })),
          totalStudyTime: state.totalStudyTime,
          achievements: state.achievements,
          lastChapter: state.currentChapter,
          lastSection: state.currentSection,
        };

        const success = await syncProgressToCloud(cloudProgress);

        set({
          isSyncing: false,
          lastSyncedAt: success ? new Date() : state.lastSyncedAt,
        });

        return success;
      },

      loadFromCloud: async () => {
        set({ isSyncing: true });

        const cloudProgress = await fetchProgressFromCloud();

        if (cloudProgress) {
          // Merge cloud progress with local (cloud takes precedence for completions)
          const state = get();

          // Merge completed sections
          const mergedSections: Record<string, boolean> = { ...state.completedSections };
          cloudProgress.completedSections.forEach((key: string) => {
            mergedSections[key] = true;
          });

          // Merge quiz results (keep better score)
          const mergedQuizResults: Record<string, QuizResult> = { ...state.quizResults };
          cloudProgress.quizResults.forEach((cloudResult: CloudQuizResult) => {
            const existing = mergedQuizResults[cloudResult.quizId];
            if (!existing || cloudResult.score > existing.score) {
              // Convert cloud format back to store format
              const answers: Record<number, string | string[]> = {};
              for (const [key, value] of Object.entries(cloudResult.answers)) {
                const numKey = parseInt(key, 10);
                answers[numKey] = value.includes(',') ? value.split(',') : value;
              }
              mergedQuizResults[cloudResult.quizId] = {
                score: cloudResult.score,
                totalQuestions: cloudResult.totalQuestions,
                answers,
                completedAt: new Date(cloudResult.completedAt),
                passed: cloudResult.score >= (cloudResult.totalQuestions * 0.7),
              };
            }
          });

          // Merge completed exercises
          const cloudExerciseIds = cloudProgress.exerciseResults
            .filter(e => e.completed)
            .map(e => e.exerciseId);
          const mergedExercises = [...new Set([...state.completedExercises, ...cloudExerciseIds])];

          set({
            completedSections: mergedSections,
            quizResults: mergedQuizResults,
            completedExercises: mergedExercises,
            totalStudyTime: Math.max(state.totalStudyTime, cloudProgress.totalStudyTime),
            achievements: [...new Set([...state.achievements, ...cloudProgress.achievements])],
            currentChapter: cloudProgress.lastChapter || state.currentChapter,
            currentSection: cloudProgress.lastSection || state.currentSection,
            isSyncing: false,
            lastSyncedAt: new Date(),
          });

          return true;
        }

        set({ isSyncing: false });
        return false;
      },
    }),
    {
      name: 'python-bi-progress',
      partialize: (state) => ({
        odUsuario: state.odUsuario,
        currentChapter: state.currentChapter,
        currentSection: state.currentSection,
        completedSections: state.completedSections,
        quizResults: state.quizResults,
        completedExercises: state.completedExercises,
        totalStudyTime: state.totalStudyTime,
        lastActivity: state.lastActivity,
        streak: state.streak,
        achievements: state.achievements,
      }),
    }
  )
);
