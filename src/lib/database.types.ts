export interface Database {
  public: {
    Tables: {
      user_progress: {
        Row: {
          id: string;
          user_id: string;
          completed_sections: string[];
          quiz_results: any[];
          exercise_results: any[];
          total_study_time: number;
          achievements: string[];
          last_chapter: number;
          last_section: number;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          user_id: string;
          completed_sections?: string[];
          quiz_results?: any[];
          exercise_results?: any[];
          total_study_time?: number;
          achievements?: string[];
          last_chapter?: number;
          last_section?: number;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          user_id?: string;
          completed_sections?: string[];
          quiz_results?: any[];
          exercise_results?: any[];
          total_study_time?: number;
          achievements?: string[];
          last_chapter?: number;
          last_section?: number;
          updated_at?: string;
        };
        Relationships: [];
      };
      quiz_attempts: {
        Row: {
          id: string;
          user_id: string;
          quiz_id: string;
          score: number;
          total_questions: number;
          answers: Record<string, string>;
          completed_at: string;
        };
        Insert: {
          id?: string;
          user_id: string;
          quiz_id: string;
          score: number;
          total_questions: number;
          answers?: Record<string, string>;
          completed_at?: string;
        };
        Update: {
          score?: number;
          answers?: Record<string, string>;
        };
        Relationships: [];
      };
      exercise_attempts: {
        Row: {
          id: string;
          user_id: string;
          exercise_id: string;
          code: string;
          completed: boolean;
          hints_used: number;
          solution_viewed: boolean;
          completed_at: string;
        };
        Insert: {
          id?: string;
          user_id: string;
          exercise_id: string;
          code: string;
          completed?: boolean;
          hints_used?: number;
          solution_viewed?: boolean;
          completed_at?: string;
        };
        Update: {
          code?: string;
          completed?: boolean;
          hints_used?: number;
          solution_viewed?: boolean;
        };
        Relationships: [];
      };
    };
    Views: {};
    Functions: {};
    Enums: {};
    CompositeTypes: {};
  };
}
