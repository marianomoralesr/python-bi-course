import { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import {
  ArrowLeft,
  ChevronLeft,
  ChevronRight,
  Clock,
  Award,
  RotateCcw,
  CheckCircle2,
  XCircle
} from 'lucide-react';
import { getQuizById, calculateQuizScore } from '../../content/quizzes';
import { useProgressStore } from '../../stores/progressStore';
import type { Quiz as QuizType, QuizQuestion as QuizQuestionType } from '../../types';
import { QuizQuestion } from './QuizQuestion';
import { QuizResults } from './QuizResults';
import clsx from 'clsx';

export function Quiz() {
  const { quizId } = useParams();
  const navigate = useNavigate();
  const { saveQuizResult, quizResults } = useProgressStore();

  const quiz = getQuizById(quizId || '');

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [showResults, setShowResults] = useState(false);
  const [startTime] = useState(Date.now());
  const [showReview, setShowReview] = useState(false);

  // Get previous best score
  const previousResult = quizResults[quizId || ''];
  const previousBestScore = previousResult?.score || 0;

  if (!quiz) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] text-center">
        <Award className="w-16 h-16 text-text-muted mb-4" />
        <h2 className="text-2xl font-bold text-text mb-2">Quiz Not Found</h2>
        <p className="text-text-secondary mb-6">
          The quiz you're looking for doesn't exist.
        </p>
        <Link to="/" className="btn btn-primary">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Dashboard
        </Link>
      </div>
    );
  }

  const currentQuestion = quiz.questions[currentQuestionIndex];
  const isLastQuestion = currentQuestionIndex === quiz.questions.length - 1;
  const isFirstQuestion = currentQuestionIndex === 0;
  const answeredCount = Object.keys(answers).length;
  const progress = (answeredCount / quiz.questions.length) * 100;

  const handleAnswer = (questionId: string, answer: string) => {
    setAnswers(prev => ({ ...prev, [questionId]: answer }));
  };

  const handleNext = () => {
    if (!isLastQuestion) {
      setCurrentQuestionIndex(prev => prev + 1);
    }
  };

  const handlePrev = () => {
    if (!isFirstQuestion) {
      setCurrentQuestionIndex(prev => prev - 1);
    }
  };

  const handleSubmit = () => {
    const result = calculateQuizScore(quiz, answers);
    const timeSpent = Math.round((Date.now() - startTime) / 1000);

    const quizResult = {
      score: result.score,
      totalQuestions: result.totalQuestions,
      answers,
      completedAt: new Date(),
      passed: result.passed
    };

    saveQuizResult(quiz.id, quizResult);
    setShowResults(true);
  };

  const handleRetake = () => {
    setAnswers({});
    setCurrentQuestionIndex(0);
    setShowResults(false);
    setShowReview(false);
  };

  const handleReview = () => {
    setShowReview(true);
    setShowResults(false);
    setCurrentQuestionIndex(0);
  };

  if (showResults) {
    const result = calculateQuizScore(quiz, answers);
    const improved = result.score > previousBestScore;

    return (
      <QuizResults
        quiz={quiz}
        result={result}
        answers={answers}
        previousBestScore={previousBestScore}
        improved={improved}
        onRetake={handleRetake}
        onReview={handleReview}
      />
    );
  }

  return (
    <div className="max-w-3xl mx-auto animate-fadeIn">
      {/* Header */}
      <div className="mb-8">
        <Link
          to={`/chapter/${quiz.chapterId}/section/${quiz.chapterId === 0 ? 'python-basics' : 'conditionals'}`}
          className="inline-flex items-center gap-2 text-text-secondary hover:text-primary transition-colors mb-4"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Chapter
        </Link>

        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-text mb-2">
              {quiz.title}
            </h1>
            <p className="text-text-secondary">{quiz.description}</p>
          </div>

          {previousBestScore > 0 && (
            <div className="flex items-center gap-2 px-4 py-2 bg-surface rounded-xl border border-border">
              <Award className="w-5 h-5 text-accent" />
              <div>
                <div className="text-xs text-text-muted">Best Score</div>
                <div className="font-bold text-accent">{previousBestScore}%</div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Progress */}
      <div className="mb-6">
        <div className="flex items-center justify-between text-sm mb-2">
          <span className="text-text-secondary">
            Question {currentQuestionIndex + 1} of {quiz.questions.length}
          </span>
          <span className="text-text-secondary">
            {answeredCount} answered
          </span>
        </div>
        <div className="h-2 bg-surface rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-primary to-secondary transition-all duration-500"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* Question dots */}
        <div className="flex items-center justify-center gap-2 mt-4">
          {quiz.questions.map((q, i) => {
            const isAnswered = answers[q.id] !== undefined;
            const isCurrent = i === currentQuestionIndex;

            let isCorrect = false;
            let isIncorrect = false;

            if (showReview && isAnswered) {
              isCorrect = answers[q.id] === q.correctAnswer;
              isIncorrect = !isCorrect;
            }

            return (
              <button
                key={q.id}
                onClick={() => setCurrentQuestionIndex(i)}
                className={clsx(
                  'w-8 h-8 rounded-full text-xs font-medium transition-all duration-300',
                  'flex items-center justify-center',
                  isCurrent && 'ring-2 ring-primary ring-offset-2 ring-offset-background',
                  isCorrect && 'bg-success text-white',
                  isIncorrect && 'bg-error text-white',
                  !isCorrect && !isIncorrect && isAnswered && 'bg-primary text-white',
                  !isCorrect && !isIncorrect && !isAnswered && 'bg-surface text-text-secondary hover:bg-surface-hover'
                )}
              >
                {showReview && isAnswered ? (
                  isCorrect ? <CheckCircle2 className="w-4 h-4" /> : <XCircle className="w-4 h-4" />
                ) : (
                  i + 1
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* Question Card */}
      <div className="bg-surface rounded-2xl border border-border p-6 md:p-8 shadow-lg mb-6">
        <QuizQuestion
          question={currentQuestion}
          selectedAnswer={answers[currentQuestion.id]}
          onAnswer={(answer) => handleAnswer(currentQuestion.id, answer)}
          showResult={showReview}
        />
      </div>

      {/* Navigation */}
      <div className="flex items-center justify-between">
        <button
          onClick={handlePrev}
          disabled={isFirstQuestion}
          className={clsx(
            'flex items-center gap-2 px-4 py-2 rounded-xl transition-all duration-300',
            isFirstQuestion
              ? 'opacity-50 cursor-not-allowed bg-surface text-text-muted'
              : 'bg-surface hover:bg-surface-hover text-text-secondary hover:text-text'
          )}
        >
          <ChevronLeft className="w-5 h-5" />
          Previous
        </button>

        <div className="flex items-center gap-3">
          {showReview ? (
            <button
              onClick={handleRetake}
              className="btn btn-secondary flex items-center gap-2"
            >
              <RotateCcw className="w-4 h-4" />
              Retake Quiz
            </button>
          ) : answeredCount === quiz.questions.length ? (
            <button
              onClick={handleSubmit}
              className="btn btn-success flex items-center gap-2"
            >
              <CheckCircle2 className="w-4 h-4" />
              Submit Quiz
            </button>
          ) : null}
        </div>

        <button
          onClick={handleNext}
          disabled={isLastQuestion}
          className={clsx(
            'flex items-center gap-2 px-4 py-2 rounded-xl transition-all duration-300',
            isLastQuestion
              ? 'opacity-50 cursor-not-allowed bg-surface text-text-muted'
              : 'bg-primary hover:bg-primary-hover text-white'
          )}
        >
          Next
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}
