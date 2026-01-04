import { supabase, isSupabaseConfigured } from '../lib/supabase';
import type { CloudProgress, CloudQuizResult, ExerciseResult } from '../types';

// Generate a unique user ID for anonymous users
const getUserId = (): string => {
  let userId = localStorage.getItem('python-course-user-id');
  if (!userId) {
    userId = `anon_${Date.now()}_${Math.random().toString(36).substring(2, 9)}`;
    localStorage.setItem('python-course-user-id', userId);
  }
  return userId;
};

// Sync progress to Supabase
export const syncProgressToCloud = async (progress: CloudProgress): Promise<boolean> => {
  if (!isSupabaseConfigured() || !supabase) {
    return false;
  }

  try {
    const userId = getUserId();

    const { error } = await supabase
      .from('user_progress')
      .upsert({
        user_id: userId,
        completed_sections: progress.completedSections,
        quiz_results: progress.quizResults,
        exercise_results: progress.exerciseResults,
        total_study_time: progress.totalStudyTime,
        achievements: progress.achievements,
        last_chapter: progress.lastChapter,
        last_section: progress.lastSection,
        updated_at: new Date().toISOString()
      }, {
        onConflict: 'user_id'
      });

    if (error) {
      console.error('Error syncing progress:', error);
      return false;
    }

    return true;
  } catch (err) {
    console.error('Failed to sync progress:', err);
    return false;
  }
};

// Fetch progress from Supabase
export const fetchProgressFromCloud = async (): Promise<CloudProgress | null> => {
  if (!isSupabaseConfigured() || !supabase) {
    return null;
  }

  try {
    const userId = getUserId();

    const { data, error } = await supabase
      .from('user_progress')
      .select('*')
      .eq('user_id', userId)
      .single();

    if (error) {
      if (error.code === 'PGRST116') {
        // No data found - new user
        return null;
      }
      console.error('Error fetching progress:', error);
      return null;
    }

    if (!data) return null;

    return {
      completedSections: (data.completed_sections as string[]) || [],
      quizResults: (data.quiz_results as CloudQuizResult[]) || [],
      exerciseResults: (data.exercise_results as ExerciseResult[]) || [],
      totalStudyTime: (data.total_study_time as number) || 0,
      achievements: (data.achievements as string[]) || [],
      lastChapter: (data.last_chapter as number) || 0,
      lastSection: (data.last_section as number) || 0
    };
  } catch (err) {
    console.error('Failed to fetch progress:', err);
    return null;
  }
};

// Save quiz attempt
export const saveQuizAttempt = async (
  quizId: string,
  score: number,
  totalQuestions: number,
  answers: Record<string, string>
): Promise<boolean> => {
  if (!isSupabaseConfigured() || !supabase) {
    return false;
  }

  try {
    const userId = getUserId();

    const { error } = await supabase
      .from('quiz_attempts')
      .insert({
        user_id: userId,
        quiz_id: quizId,
        score,
        total_questions: totalQuestions,
        answers
      });

    if (error) {
      console.error('Error saving quiz attempt:', error);
      return false;
    }

    return true;
  } catch (err) {
    console.error('Failed to save quiz attempt:', err);
    return false;
  }
};

// Save exercise attempt
export const saveExerciseAttempt = async (
  exerciseId: string,
  code: string,
  completed: boolean,
  hintsUsed: number,
  solutionViewed: boolean
): Promise<boolean> => {
  if (!isSupabaseConfigured() || !supabase) {
    return false;
  }

  try {
    const userId = getUserId();

    const { error } = await supabase
      .from('exercise_attempts')
      .insert({
        user_id: userId,
        exercise_id: exerciseId,
        code,
        completed,
        hints_used: hintsUsed,
        solution_viewed: solutionViewed
      });

    if (error) {
      console.error('Error saving exercise attempt:', error);
      return false;
    }

    return true;
  } catch (err) {
    console.error('Failed to save exercise attempt:', err);
    return false;
  }
};

// Get quiz history for a specific quiz
export const getQuizHistory = async (quizId: string) => {
  if (!isSupabaseConfigured() || !supabase) {
    return [];
  }

  try {
    const userId = getUserId();

    const { data, error } = await supabase
      .from('quiz_attempts')
      .select('*')
      .eq('user_id', userId)
      .eq('quiz_id', quizId)
      .order('completed_at', { ascending: false });

    if (error) {
      console.error('Error fetching quiz history:', error);
      return [];
    }

    return data || [];
  } catch (err) {
    console.error('Failed to fetch quiz history:', err);
    return [];
  }
};
