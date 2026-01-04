import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Code2, CheckCircle, Trophy, Star } from 'lucide-react';
import { getExerciseById } from '../../content/exercises';
import { useProgressStore } from '../../stores/progressStore';
import { CodePlayground } from './CodePlayground';
import clsx from 'clsx';

export function Exercise() {
  const { exerciseId } = useParams();
  const { completedExercises, markExerciseComplete } = useProgressStore();
  const [showAIFeedback, setShowAIFeedback] = useState(false);
  const [aiFeedback, setAIFeedback] = useState<string>('');

  const exercise = getExerciseById(exerciseId || '');
  const isCompleted = completedExercises.includes(exerciseId || '');

  if (!exercise) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] text-center">
        <Code2 className="w-16 h-16 text-text-muted mb-4" />
        <h2 className="text-2xl font-bold text-text mb-2">Exercise Not Found</h2>
        <p className="text-text-secondary mb-6">
          The exercise you're looking for doesn't exist.
        </p>
        <Link to="/" className="btn btn-primary">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Dashboard
        </Link>
      </div>
    );
  }

  const handleComplete = () => {
    if (!isCompleted) {
      markExerciseComplete(exercise.id);
    }
  };

  const handleAIReview = async (code: string) => {
    setShowAIFeedback(true);
    setAIFeedback('Analyzing your code...');

    // Simulate AI review (in production, this would call the Claude API)
    setTimeout(() => {
      setAIFeedback(generateSimulatedFeedback(code, exercise.solution));
    }, 1500);
  };

  const difficultyConfig = {
    easy: { color: 'bg-success/20 text-success', label: 'Easy', stars: 1 },
    medium: { color: 'bg-accent/20 text-accent', label: 'Medium', stars: 2 },
    hard: { color: 'bg-error/20 text-error', label: 'Hard', stars: 3 }
  };

  const difficulty = difficultyConfig[exercise.difficulty];

  return (
    <div className="max-w-4xl mx-auto animate-fadeIn">
      {/* Header */}
      <div className="mb-8">
        <Link
          to={`/chapter/${exercise.chapterId}/section/${exercise.chapterId === 1 ? 'conditionals' : 'functions'}`}
          className="inline-flex items-center gap-2 text-text-secondary hover:text-primary transition-colors mb-4"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Chapter
        </Link>

        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <h1 className="text-2xl md:text-3xl font-bold text-text">
                {exercise.title}
              </h1>
              {isCompleted && (
                <span className="flex items-center gap-1 px-2 py-1 bg-success/20 text-success rounded-lg text-xs font-medium">
                  <CheckCircle className="w-3.5 h-3.5" />
                  Completed
                </span>
              )}
            </div>
            <p className="text-text-secondary">
              Practice exercise from Chapter {exercise.chapterId}
            </p>
          </div>

          <div className="flex items-center gap-3">
            {/* Difficulty indicator */}
            <div className={clsx('flex items-center gap-2 px-3 py-2 rounded-xl', difficulty.color)}>
              <span className="text-sm font-medium">{difficulty.label}</span>
              <div className="flex">
                {Array.from({ length: 3 }).map((_, i) => (
                  <Star
                    key={i}
                    className={clsx(
                      'w-3.5 h-3.5',
                      i < difficulty.stars ? 'fill-current' : 'opacity-30'
                    )}
                  />
                ))}
              </div>
            </div>

            {/* Complete button */}
            {!isCompleted && (
              <button
                onClick={handleComplete}
                className="btn btn-success flex items-center gap-2"
              >
                <Trophy className="w-4 h-4" />
                Mark Complete
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Code Playground */}
      <CodePlayground
        initialCode={exercise.initialCode}
        solution={exercise.solution}
        instructions={exercise.instructions}
        hints={exercise.hints}
        onRequestAIReview={handleAIReview}
        onComplete={handleComplete}
      />

      {/* AI Feedback Panel */}
      {showAIFeedback && (
        <div className="mt-6 bg-surface rounded-2xl border border-primary/30 overflow-hidden animate-fadeIn">
          <div className="px-4 py-3 bg-primary/10 border-b border-primary/20">
            <h3 className="font-semibold text-primary flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center text-xs">
                AI
              </span>
              Claude Code Review
            </h3>
          </div>
          <div className="p-4">
            <div className="prose prose-invert prose-sm max-w-none">
              <p className="text-text-secondary whitespace-pre-line leading-relaxed">
                {aiFeedback}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

// Simulated AI feedback generator
function generateSimulatedFeedback(userCode: string, solution: string): string {
  const hasBlankSpaces = userCode.includes('____');
  const codeLength = userCode.split('\n').filter(l => l.trim() && !l.trim().startsWith('#')).length;
  const hasPrintStatements = userCode.includes('print(');
  const hasComments = userCode.includes('#');

  let feedback = '';

  if (hasBlankSpaces) {
    feedback += `**Code Review**\n\n`;
    feedback += `I notice your code still has some blanks to fill in (____). Here are some tips:\n\n`;
    feedback += `1. **Look at the comments** - They provide hints about what values to use\n`;
    feedback += `2. **Check the variable names** - They often suggest what the value should be\n`;
    feedback += `3. **Use the hints** - Click "Show Hint" for guided help\n\n`;
    feedback += `Once you fill in the blanks, run the code to see if it works!`;
  } else {
    feedback += `**Code Review**\n\n`;
    feedback += `Great job working on this exercise! Here's my analysis:\n\n`;

    feedback += `**What's Working Well:**\n`;
    if (hasPrintStatements) {
      feedback += `- Good use of print statements to display output\n`;
    }
    if (hasComments) {
      feedback += `- Nice code documentation with comments\n`;
    }
    if (codeLength > 5) {
      feedback += `- Your code is well-structured and organized\n`;
    }

    feedback += `\n**Suggestions for Improvement:**\n`;
    feedback += `- Consider adding more descriptive variable names\n`;
    feedback += `- You could add error handling for edge cases\n`;
    feedback += `- Try using f-strings for cleaner string formatting\n\n`;

    feedback += `**Rating:** Good Work! Keep practicing to master these concepts.`;
  }

  return feedback;
}
