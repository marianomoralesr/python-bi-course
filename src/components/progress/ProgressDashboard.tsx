import { Link } from 'react-router-dom';
import {
  Trophy,
  Clock,
  Flame,
  Target,
  BookOpen,
  FileQuestion,
  Code2,
  TrendingUp,
  Award,
  Star,
  CheckCircle,
  ChevronRight,
  Play
} from 'lucide-react';
import { useProgressStore } from '../../stores/progressStore';
import { chapters, getTotalSections } from '../../content/chapters';
import { quizzes } from '../../content/quizzes';
import { exercises } from '../../content/exercises';
import clsx from 'clsx';

export function ProgressDashboard() {
  const {
    completedSections,
    quizResults,
    completedExercises,
    totalStudyTime,
    streak,
    achievements,
    currentChapter,
    currentSection
  } = useProgressStore();

  const totalSections = getTotalSections();
  const completedSectionCount = Object.values(completedSections).filter(Boolean).length;
  const overallProgress = Math.round((completedSectionCount / totalSections) * 100);

  const passedQuizzes = Object.values(quizResults).filter(r => r.passed).length;
  const totalQuizzes = quizzes.length;

  const completedExerciseCount = completedExercises.length;
  const totalExercises = exercises.length;

  // Calculate average quiz score
  const quizScores = Object.values(quizResults);
  const avgQuizScore = quizScores.length > 0
    ? Math.round(quizScores.reduce((a, b) => a + b.score, 0) / quizScores.length)
    : 0;

  // Format study time
  const formatTime = (minutes: number) => {
    if (minutes < 60) return `${minutes} min`;
    const hours = Math.floor(minutes / 60);
    const mins = minutes % 60;
    return mins > 0 ? `${hours}h ${mins}m` : `${hours} hours`;
  };

  // Get current chapter/section for continue button
  const currentChapterData = chapters[currentChapter];
  const currentSectionData = currentChapterData?.sections[currentSection];

  return (
    <div className="space-y-8 animate-fadeIn">
      {/* Welcome section */}
      <div className="bg-gradient-to-br from-primary/20 via-surface to-secondary/10 rounded-3xl p-6 md:p-8 border border-primary/20">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-text mb-2">
              Welcome back!
            </h1>
            <p className="text-text-secondary">
              {overallProgress === 0
                ? "Ready to start your Python journey?"
                : overallProgress === 100
                ? "Congratulations! You've completed the course!"
                : `You're ${overallProgress}% through the course. Keep going!`}
            </p>
          </div>

          {currentChapterData && currentSectionData && overallProgress < 100 && (
            <Link
              to={`/chapter/${currentChapter}/section/${currentSectionData.id}`}
              className="btn btn-primary flex items-center gap-2 whitespace-nowrap"
            >
              <Play className="w-4 h-4" />
              Continue Learning
            </Link>
          )}
        </div>

        {/* Overall progress bar */}
        <div className="mt-6">
          <div className="flex items-center justify-between text-sm mb-2">
            <span className="text-text-secondary">Overall Progress</span>
            <span className="text-text font-medium">{overallProgress}%</span>
          </div>
          <div className="h-3 bg-surface rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-primary via-secondary to-success transition-all duration-1000 rounded-full"
              style={{ width: `${overallProgress}%` }}
            />
          </div>
        </div>
      </div>

      {/* Stats grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <StatCard
          icon={<BookOpen className="w-6 h-6" />}
          label="Sections"
          value={`${completedSectionCount}/${totalSections}`}
          color="primary"
        />
        <StatCard
          icon={<FileQuestion className="w-6 h-6" />}
          label="Quizzes Passed"
          value={`${passedQuizzes}/${totalQuizzes}`}
          color="secondary"
        />
        <StatCard
          icon={<Clock className="w-6 h-6" />}
          label="Study Time"
          value={formatTime(totalStudyTime)}
          color="accent"
        />
        <StatCard
          icon={<Flame className="w-6 h-6" />}
          label="Day Streak"
          value={streak.toString()}
          color="error"
        />
      </div>

      {/* Gradebook section */}
      <div className="bg-surface rounded-2xl border border-border p-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold text-text flex items-center gap-2">
            <Trophy className="w-6 h-6 text-accent" />
            Gradebook
          </h2>
          {avgQuizScore > 0 && (
            <div className="flex items-center gap-2 px-3 py-1.5 bg-accent/10 rounded-lg">
              <span className="text-sm text-text-secondary">Average Score:</span>
              <span className="text-lg font-bold text-accent">{avgQuizScore}%</span>
            </div>
          )}
        </div>

        <div className="space-y-4">
          {quizzes.map((quiz) => {
            const result = quizResults[quiz.id];
            const chapter = chapters.find(c => c.id === quiz.chapterId);

            return (
              <div
                key={quiz.id}
                className={clsx(
                  'flex items-center gap-4 p-4 rounded-xl border transition-all duration-300',
                  result
                    ? result.passed
                      ? 'bg-success/5 border-success/30'
                      : 'bg-accent/5 border-accent/30'
                    : 'bg-surface-hover/50 border-border hover:border-primary/30'
                )}
              >
                {/* Status icon */}
                <div
                  className={clsx(
                    'w-12 h-12 rounded-xl flex items-center justify-center',
                    result
                      ? result.passed
                        ? 'bg-success/20'
                        : 'bg-accent/20'
                      : 'bg-surface'
                  )}
                >
                  {result ? (
                    result.passed ? (
                      <CheckCircle className="w-6 h-6 text-success" />
                    ) : (
                      <Target className="w-6 h-6 text-accent" />
                    )
                  ) : (
                    <FileQuestion className="w-6 h-6 text-text-muted" />
                  )}
                </div>

                {/* Quiz info */}
                <div className="flex-1">
                  <h3 className="font-medium text-text">{quiz.title}</h3>
                  <p className="text-sm text-text-secondary">
                    Chapter {quiz.chapterId}: {chapter?.title}
                  </p>
                </div>

                {/* Score */}
                <div className="text-right">
                  {result ? (
                    <>
                      <div
                        className={clsx(
                          'text-2xl font-bold',
                          result.passed ? 'text-success' : 'text-accent'
                        )}
                      >
                        {result.score}%
                      </div>
                      <div className="text-xs text-text-muted">
                        {result.passed ? 'Passed' : 'Not Passed'}
                      </div>
                    </>
                  ) : (
                    <Link
                      to={`/quiz/${quiz.id}`}
                      className="btn btn-secondary btn-sm"
                    >
                      Take Quiz
                    </Link>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Chapter progress */}
      <div className="bg-surface rounded-2xl border border-border p-6">
        <h2 className="text-xl font-bold text-text mb-6 flex items-center gap-2">
          <BookOpen className="w-6 h-6 text-primary" />
          Chapter Progress
        </h2>

        <div className="space-y-4">
          {chapters.map((chapter) => {
            const completedCount = chapter.sections.filter(
              s => completedSections[`${chapter.id}-${s.id}`]
            ).length;
            const progress = Math.round((completedCount / chapter.sections.length) * 100);
            const isComplete = progress === 100;

            return (
              <div key={chapter.id} className="group">
                <Link
                  to={`/chapter/${chapter.id}/section/${chapter.sections[0].id}`}
                  className={clsx(
                    'block p-4 rounded-xl border transition-all duration-300',
                    isComplete
                      ? 'bg-success/5 border-success/30'
                      : 'bg-surface-hover/50 border-border hover:border-primary/30'
                  )}
                >
                  <div className="flex items-center gap-4">
                    {/* Chapter number */}
                    <div
                      className={clsx(
                        'w-12 h-12 rounded-xl flex items-center justify-center font-bold text-lg',
                        isComplete
                          ? 'bg-success/20 text-success'
                          : 'bg-primary/20 text-primary'
                      )}
                    >
                      {isComplete ? <CheckCircle className="w-6 h-6" /> : chapter.id}
                    </div>

                    {/* Info */}
                    <div className="flex-1">
                      <h3 className="font-medium text-text group-hover:text-primary transition-colors">
                        {chapter.title}
                      </h3>
                      <p className="text-sm text-text-secondary">
                        {completedCount} of {chapter.sections.length} sections
                      </p>
                    </div>

                    {/* Progress */}
                    <div className="flex items-center gap-3">
                      <div className="w-24 h-2 bg-surface rounded-full overflow-hidden">
                        <div
                          className={clsx(
                            'h-full transition-all duration-500 rounded-full',
                            isComplete ? 'bg-success' : 'bg-primary'
                          )}
                          style={{ width: `${progress}%` }}
                        />
                      </div>
                      <span className="text-sm font-medium text-text w-12 text-right">
                        {progress}%
                      </span>
                      <ChevronRight className="w-5 h-5 text-text-muted group-hover:text-primary transition-colors" />
                    </div>
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
      </div>

      {/* Exercises section */}
      <div className="bg-surface rounded-2xl border border-border p-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold text-text flex items-center gap-2">
            <Code2 className="w-6 h-6 text-secondary" />
            Practice Exercises
          </h2>
          <span className="text-sm text-text-secondary">
            {completedExerciseCount} of {totalExercises} completed
          </span>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {exercises.map((exercise) => {
            const isComplete = completedExercises.includes(exercise.id);
            const chapter = chapters.find(c => c.id === exercise.chapterId);

            const difficultyConfig = {
              easy: { color: 'text-success', bg: 'bg-success/10' },
              medium: { color: 'text-accent', bg: 'bg-accent/10' },
              hard: { color: 'text-error', bg: 'bg-error/10' }
            };

            return (
              <Link
                key={exercise.id}
                to={`/exercise/${exercise.id}`}
                className={clsx(
                  'group flex items-center gap-4 p-4 rounded-xl border transition-all duration-300',
                  isComplete
                    ? 'bg-success/5 border-success/30'
                    : 'bg-surface-hover/50 border-border hover:border-secondary/50'
                )}
              >
                <div
                  className={clsx(
                    'w-10 h-10 rounded-lg flex items-center justify-center',
                    isComplete ? 'bg-success/20' : 'bg-secondary/20'
                  )}
                >
                  {isComplete ? (
                    <CheckCircle className="w-5 h-5 text-success" />
                  ) : (
                    <Code2 className="w-5 h-5 text-secondary" />
                  )}
                </div>

                <div className="flex-1 min-w-0">
                  <h3 className="font-medium text-text truncate group-hover:text-secondary transition-colors">
                    {exercise.title}
                  </h3>
                  <p className="text-xs text-text-muted">
                    Chapter {exercise.chapterId}
                  </p>
                </div>

                <span
                  className={clsx(
                    'px-2 py-1 rounded text-xs font-medium',
                    difficultyConfig[exercise.difficulty].bg,
                    difficultyConfig[exercise.difficulty].color
                  )}
                >
                  {exercise.difficulty}
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}

interface StatCardProps {
  icon: React.ReactNode;
  label: string;
  value: string;
  color: 'primary' | 'secondary' | 'accent' | 'error';
}

function StatCard({ icon, label, value, color }: StatCardProps) {
  const colorClasses = {
    primary: 'bg-primary/10 text-primary',
    secondary: 'bg-secondary/10 text-secondary',
    accent: 'bg-accent/10 text-accent',
    error: 'bg-error/10 text-error'
  };

  return (
    <div className="bg-surface rounded-2xl border border-border p-4 transition-all duration-300 hover:shadow-lg hover:border-primary/30">
      <div className={clsx('w-12 h-12 rounded-xl flex items-center justify-center mb-3', colorClasses[color])}>
        {icon}
      </div>
      <div className="text-2xl font-bold text-text mb-1">{value}</div>
      <div className="text-sm text-text-secondary">{label}</div>
    </div>
  );
}
