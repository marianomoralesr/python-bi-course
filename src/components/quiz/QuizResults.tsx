import { Link } from 'react-router-dom';
import {
  Award,
  Trophy,
  TrendingUp,
  RotateCcw,
  Eye,
  CheckCircle2,
  XCircle,
  Target,
  Star,
  Sparkles
} from 'lucide-react';
import type { Quiz } from '../../types';
import clsx from 'clsx';

interface QuizResultsProps {
  quiz: Quiz;
  result: {
    score: number;
    totalQuestions: number;
    passed: boolean;
    incorrectQuestions: string[];
  };
  answers: Record<string, string>;
  previousBestScore: number;
  improved: boolean;
  onRetake: () => void;
  onReview: () => void;
}

export function QuizResults({
  quiz,
  result,
  answers,
  previousBestScore,
  improved,
  onRetake,
  onReview
}: QuizResultsProps) {
  const correctCount = result.totalQuestions - result.incorrectQuestions.length;
  const isPerfect = result.score === 100;

  const getGrade = (score: number) => {
    if (score >= 90) return { letter: 'A', color: 'text-success', label: 'Excellent!' };
    if (score >= 80) return { letter: 'B', color: 'text-primary', label: 'Great Job!' };
    if (score >= 70) return { letter: 'C', color: 'text-accent', label: 'Good Work!' };
    if (score >= 60) return { letter: 'D', color: 'text-warning', label: 'Keep Practicing!' };
    return { letter: 'F', color: 'text-error', label: 'Try Again!' };
  };

  const grade = getGrade(result.score);

  return (
    <div className="max-w-2xl mx-auto animate-fadeIn">
      {/* Celebration effect for perfect/passing scores */}
      {result.passed && (
        <div className="fixed inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-20 left-1/4 animate-bounce delay-100">
            <Sparkles className="w-6 h-6 text-accent" />
          </div>
          <div className="absolute top-32 right-1/4 animate-bounce delay-300">
            <Star className="w-5 h-5 text-primary" />
          </div>
          <div className="absolute top-24 left-1/3 animate-bounce delay-500">
            <Star className="w-4 h-4 text-success" />
          </div>
        </div>
      )}

      {/* Result Card */}
      <div
        className={clsx(
          'rounded-3xl border-2 p-8 text-center mb-8 transition-all duration-500',
          result.passed
            ? 'bg-gradient-to-br from-success/10 to-success/5 border-success/30'
            : 'bg-gradient-to-br from-accent/10 to-accent/5 border-accent/30'
        )}
      >
        {/* Trophy/Status Icon */}
        <div
          className={clsx(
            'w-20 h-20 mx-auto mb-6 rounded-full flex items-center justify-center',
            result.passed ? 'bg-success/20' : 'bg-accent/20'
          )}
        >
          {isPerfect ? (
            <Trophy className="w-10 h-10 text-success" />
          ) : result.passed ? (
            <Award className="w-10 h-10 text-success" />
          ) : (
            <Target className="w-10 h-10 text-accent" />
          )}
        </div>

        {/* Title */}
        <h1 className="text-2xl md:text-3xl font-bold text-text mb-2">
          {isPerfect ? 'Perfect Score!' : result.passed ? 'Quiz Passed!' : 'Almost There!'}
        </h1>
        <p className="text-text-secondary mb-6">{quiz.title}</p>

        {/* Score Circle */}
        <div className="relative w-40 h-40 mx-auto mb-6">
          <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
            {/* Background circle */}
            <circle
              cx="50"
              cy="50"
              r="45"
              fill="none"
              stroke="currentColor"
              strokeWidth="8"
              className="text-surface"
            />
            {/* Progress circle */}
            <circle
              cx="50"
              cy="50"
              r="45"
              fill="none"
              stroke="currentColor"
              strokeWidth="8"
              strokeLinecap="round"
              strokeDasharray={`${result.score * 2.83} 283`}
              className={clsx(
                'transition-all duration-1000',
                result.passed ? 'text-success' : 'text-accent'
              )}
            />
          </svg>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className={clsx('text-4xl font-bold', grade.color)}>
              {result.score}%
            </span>
            <span className="text-lg font-bold text-text-secondary">
              {grade.letter}
            </span>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 mb-6">
          <div className="bg-background/50 rounded-xl p-4">
            <CheckCircle2 className="w-6 h-6 mx-auto mb-2 text-success" />
            <div className="text-2xl font-bold text-text">{correctCount}</div>
            <div className="text-xs text-text-secondary">Correct</div>
          </div>
          <div className="bg-background/50 rounded-xl p-4">
            <XCircle className="w-6 h-6 mx-auto mb-2 text-error" />
            <div className="text-2xl font-bold text-text">
              {result.incorrectQuestions.length}
            </div>
            <div className="text-xs text-text-secondary">Incorrect</div>
          </div>
          <div className="bg-background/50 rounded-xl p-4">
            <Target className="w-6 h-6 mx-auto mb-2 text-primary" />
            <div className="text-2xl font-bold text-text">{quiz.passingScore}%</div>
            <div className="text-xs text-text-secondary">Passing</div>
          </div>
        </div>

        {/* Improvement indicator */}
        {previousBestScore > 0 && (
          <div
            className={clsx(
              'inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium',
              improved
                ? 'bg-success/20 text-success'
                : 'bg-surface text-text-secondary'
            )}
          >
            {improved ? (
              <>
                <TrendingUp className="w-4 h-4" />
                Improved by {result.score - previousBestScore}%!
              </>
            ) : result.score === previousBestScore ? (
              <>
                <Award className="w-4 h-4" />
                Matched your best score!
              </>
            ) : (
              <>
                <Award className="w-4 h-4" />
                Your best: {previousBestScore}%
              </>
            )}
          </div>
        )}
      </div>

      {/* Question breakdown */}
      <div className="bg-surface rounded-2xl border border-border p-6 mb-8">
        <h3 className="font-semibold text-text mb-4">Question Breakdown</h3>
        <div className="space-y-2">
          {quiz.questions.map((question, index) => {
            const isCorrect = !result.incorrectQuestions.includes(question.id);
            return (
              <div
                key={question.id}
                className={clsx(
                  'flex items-center gap-3 p-3 rounded-lg',
                  isCorrect ? 'bg-success/10' : 'bg-error/10'
                )}
              >
                <div
                  className={clsx(
                    'w-6 h-6 rounded-full flex items-center justify-center',
                    isCorrect ? 'bg-success' : 'bg-error'
                  )}
                >
                  {isCorrect ? (
                    <CheckCircle2 className="w-4 h-4 text-white" />
                  ) : (
                    <XCircle className="w-4 h-4 text-white" />
                  )}
                </div>
                <span className="flex-1 text-sm text-text truncate">
                  Question {index + 1}: {question.question.slice(0, 50)}
                  {question.question.length > 50 && '...'}
                </span>
                <span
                  className={clsx(
                    'text-xs font-medium px-2 py-1 rounded',
                    {
                      easy: 'bg-success/20 text-success',
                      medium: 'bg-accent/20 text-accent',
                      hard: 'bg-error/20 text-error'
                    }[question.difficulty]
                  )}
                >
                  {question.difficulty}
                </span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Actions */}
      <div className="flex flex-col sm:flex-row gap-4">
        <button
          onClick={onReview}
          className="flex-1 btn btn-secondary flex items-center justify-center gap-2"
        >
          <Eye className="w-4 h-4" />
          Review Answers
        </button>
        <button
          onClick={onRetake}
          className="flex-1 btn btn-primary flex items-center justify-center gap-2"
        >
          <RotateCcw className="w-4 h-4" />
          {result.passed ? 'Try Again' : 'Retake Quiz'}
        </button>
      </div>

      {/* Back to chapter link */}
      <div className="text-center mt-6">
        <Link
          to={`/chapter/${quiz.chapterId}/section/${quiz.chapterId === 0 ? 'python-basics' : 'conditionals'}`}
          className="text-text-secondary hover:text-primary transition-colors text-sm"
        >
          Back to Chapter {quiz.chapterId}
        </Link>
      </div>
    </div>
  );
}
