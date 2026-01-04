import { CheckCircle2, XCircle, Circle } from 'lucide-react';
import type { QuizQuestion as QuizQuestionType } from '../../types';
import { CodeBlock } from '../course/CodeBlock';
import clsx from 'clsx';

interface QuizQuestionProps {
  question: QuizQuestionType;
  selectedAnswer?: string;
  onAnswer: (answer: string) => void;
  showResult?: boolean;
}

export function QuizQuestion({
  question,
  selectedAnswer,
  onAnswer,
  showResult = false
}: QuizQuestionProps) {
  const isCorrect = selectedAnswer === question.correctAnswer;
  const difficultyColors = {
    easy: 'bg-success/20 text-success',
    medium: 'bg-accent/20 text-accent',
    hard: 'bg-error/20 text-error'
  };

  return (
    <div className="space-y-6 animate-fadeIn">
      {/* Question header */}
      <div className="flex items-start justify-between gap-4">
        <h2 className="text-lg md:text-xl font-semibold text-text leading-relaxed">
          {question.question}
        </h2>
        <span
          className={clsx(
            'px-2 py-1 rounded-lg text-xs font-medium uppercase tracking-wider flex-shrink-0',
            difficultyColors[question.difficulty]
          )}
        >
          {question.difficulty}
        </span>
      </div>

      {/* Code snippet if present */}
      {question.code && (
        <div className="rounded-xl overflow-hidden">
          <CodeBlock code={question.code} language="python" />
        </div>
      )}

      {/* Options */}
      <div className="space-y-3">
        {question.options?.map((option, index) => {
          const isSelected = selectedAnswer === option;
          const isCorrectOption = option === question.correctAnswer;

          let optionState: 'default' | 'selected' | 'correct' | 'incorrect' = 'default';

          if (showResult) {
            if (isCorrectOption) {
              optionState = 'correct';
            } else if (isSelected && !isCorrectOption) {
              optionState = 'incorrect';
            }
          } else if (isSelected) {
            optionState = 'selected';
          }

          const stateStyles = {
            default: 'border-border hover:border-primary/50 hover:bg-surface-hover',
            selected: 'border-primary bg-primary/10',
            correct: 'border-success bg-success/10',
            incorrect: 'border-error bg-error/10'
          };

          return (
            <button
              key={option}
              onClick={() => !showResult && onAnswer(option)}
              disabled={showResult}
              className={clsx(
                'w-full flex items-center gap-4 p-4 rounded-xl border-2 transition-all duration-300',
                'text-left group',
                stateStyles[optionState],
                !showResult && 'cursor-pointer'
              )}
            >
              {/* Option indicator */}
              <div
                className={clsx(
                  'w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-300',
                  optionState === 'default' && 'bg-surface border-2 border-border group-hover:border-primary',
                  optionState === 'selected' && 'bg-primary text-white',
                  optionState === 'correct' && 'bg-success text-white',
                  optionState === 'incorrect' && 'bg-error text-white'
                )}
              >
                {optionState === 'correct' ? (
                  <CheckCircle2 className="w-5 h-5" />
                ) : optionState === 'incorrect' ? (
                  <XCircle className="w-5 h-5" />
                ) : optionState === 'selected' ? (
                  <Circle className="w-4 h-4 fill-current" />
                ) : (
                  <span className="text-sm font-medium text-text-secondary">
                    {String.fromCharCode(65 + index)}
                  </span>
                )}
              </div>

              {/* Option text */}
              <span
                className={clsx(
                  'flex-1 transition-colors duration-300',
                  optionState === 'default' && 'text-text-secondary group-hover:text-text',
                  optionState === 'selected' && 'text-primary font-medium',
                  optionState === 'correct' && 'text-success font-medium',
                  optionState === 'incorrect' && 'text-error font-medium'
                )}
              >
                {option.includes('`') ? (
                  <span className="font-mono text-sm">{option.replace(/`/g, '')}</span>
                ) : (
                  option
                )}
              </span>

              {/* Result indicator */}
              {showResult && isCorrectOption && !isSelected && (
                <span className="text-xs font-medium text-success uppercase tracking-wider">
                  Correct Answer
                </span>
              )}
            </button>
          );
        })}
      </div>

      {/* Explanation (shown after answering in review mode) */}
      {showResult && selectedAnswer && (
        <div
          className={clsx(
            'p-4 rounded-xl border',
            isCorrect
              ? 'bg-success/10 border-success/30'
              : 'bg-error/10 border-error/30'
          )}
        >
          <div className="flex items-start gap-3">
            {isCorrect ? (
              <CheckCircle2 className="w-5 h-5 text-success flex-shrink-0 mt-0.5" />
            ) : (
              <XCircle className="w-5 h-5 text-error flex-shrink-0 mt-0.5" />
            )}
            <div>
              <p
                className={clsx(
                  'font-medium mb-1',
                  isCorrect ? 'text-success' : 'text-error'
                )}
              >
                {isCorrect ? 'Correct!' : 'Incorrect'}
              </p>
              <p className="text-sm text-text-secondary leading-relaxed">
                {question.explanation}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
