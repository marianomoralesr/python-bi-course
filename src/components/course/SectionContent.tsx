import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Info, AlertTriangle, Lightbulb, AlertCircle, FileQuestion, Code2, BookOpen, Layers, CheckCircle, XCircle, ChevronLeft, ChevronRight, Award } from 'lucide-react';
import type { ContentBlock, Section } from '../../types';
import { CodeBlock } from './CodeBlock';
import { StepwiseContent } from './StepwiseContent';
import { useSettingsStore } from '../../stores/settingsStore';
import { useProgressStore } from '../../stores/progressStore';
import clsx from 'clsx';

interface SectionContentProps {
  section: Section;
  chapterId: number;
  onSectionComplete?: () => void;
}

export function SectionContent({ section, chapterId, onSectionComplete }: SectionContentProps) {
  const { readingModeEnabled, updateSettings } = useSettingsStore();

  const toggleReadingMode = () => {
    updateSettings({ readingModeEnabled: !readingModeEnabled });
  };

  // Render function for blocks (used by both modes)
  const renderBlock = (block: ContentBlock, index: number) => (
    <ContentBlockRenderer
      key={index}
      block={block}
      chapterId={chapterId}
      index={index}
    />
  );

  return (
    <div>
      {/* Reading mode toggle */}
      <div className="flex justify-end mb-4">
        <button
          onClick={toggleReadingMode}
          className={clsx(
            'flex items-center gap-2 px-3 py-1.5 rounded-lg text-sm transition-all duration-200',
            readingModeEnabled
              ? 'bg-primary text-white shadow-lg shadow-primary/20'
              : 'bg-surface text-text-secondary hover:text-text hover:bg-surface/80'
          )}
          title={readingModeEnabled ? 'Desactivar modo lectura guiada' : 'Activar modo lectura guiada'}
        >
          {readingModeEnabled ? (
            <>
              <Layers className="w-4 h-4" />
              <span className="hidden sm:inline">Modo Guiado</span>
            </>
          ) : (
            <>
              <BookOpen className="w-4 h-4" />
              <span className="hidden sm:inline">Modo Guiado</span>
            </>
          )}
        </button>
      </div>

      {/* Content display */}
      {readingModeEnabled ? (
        <StepwiseContent
          section={section}
          chapterId={chapterId}
          renderBlock={renderBlock}
          onComplete={onSectionComplete}
        />
      ) : (
        <article className="prose prose-invert max-w-none animate-fadeIn">
          {section.content.map((block, index) => (
            <ContentBlockRenderer
              key={index}
              block={block}
              chapterId={chapterId}
              index={index}
            />
          ))}
        </article>
      )}
    </div>
  );
}

interface ContentBlockRendererProps {
  block: ContentBlock;
  chapterId: number;
  index: number;
}

function ContentBlockRenderer({ block, chapterId, index }: ContentBlockRendererProps) {
  const animationDelay = `${Math.min(index * 50, 300)}ms`;

  switch (block.type) {
    case 'heading':
      return (
        <Heading
          level={block.level}
          text={block.text}
          id={block.id}
          style={{ animationDelay }}
        />
      );

    case 'paragraph':
      return (
        <p
          className="text-text-secondary leading-relaxed mb-4 animate-fadeIn"
          style={{ animationDelay }}
        >
          {block.text}
        </p>
      );

    case 'code':
      return (
        <div className="my-6 animate-fadeIn" style={{ animationDelay }}>
          <CodeBlock
            code={block.code}
            language={block.language}
            filename={block.filename}
            executable={block.executable}
          />
        </div>
      );

    case 'table':
      return (
        <div className="my-6 animate-fadeIn" style={{ animationDelay }}>
          <TableBlock headers={block.headers} rows={block.rows} />
        </div>
      );

    case 'list':
      return (
        <ListBlock
          items={block.items}
          ordered={block.ordered}
          style={{ animationDelay }}
        />
      );

    case 'callout':
      return (
        <div className="my-6 animate-fadeIn" style={{ animationDelay }}>
          <CalloutBlock
            variant={block.variant}
            title={block.title}
            content={block.content}
          />
        </div>
      );

    case 'quiz-link':
      return (
        <div className="my-8 animate-fadeIn" style={{ animationDelay }}>
          <ActionCard
            type="quiz"
            title={block.title}
            description="Test your knowledge with this quiz"
            to={`/quiz/${block.quizId}`}
          />
        </div>
      );

    case 'exercise-link':
      return (
        <div className="my-8 animate-fadeIn" style={{ animationDelay }}>
          <ActionCard
            type="exercise"
            title={block.title}
            description="Practice what you've learned"
            to={`/exercise/${block.exerciseId}`}
          />
        </div>
      );

    case 'mini-quiz':
      return (
        <div className="my-6 animate-fadeIn" style={{ animationDelay }}>
          <MiniQuizBlock
            id={block.id}
            question={block.question}
            options={block.options}
            correctAnswer={block.correctAnswer}
            explanation={block.explanation}
          />
        </div>
      );

    case 'section-nav':
      return (
        <div className="my-8 animate-fadeIn" style={{ animationDelay }}>
          <SectionNavBlock
            chapterId={chapterId}
            showComplete={block.showComplete}
            showNext={block.showNext}
            showBack={block.showBack}
            nextSection={block.nextSection}
            prevSection={block.prevSection}
          />
        </div>
      );

    default:
      return null;
  }
}

// Heading component
interface HeadingProps {
  level: 1 | 2 | 3;
  text: string;
  id?: string;
  style?: React.CSSProperties;
}

function Heading({ level, text, id, style }: HeadingProps) {
  const baseClasses = 'font-bold text-text animate-fadeIn scroll-mt-20';

  const classes = {
    1: `${baseClasses} text-3xl md:text-4xl mb-6 mt-2`,
    2: `${baseClasses} text-2xl md:text-2xl mb-4 mt-8 pb-2 border-b border-border`,
    3: `${baseClasses} text-xl mb-3 mt-6`,
  };

  if (level === 1) {
    return <h1 id={id} className={classes[1]} style={style}>{text}</h1>;
  } else if (level === 2) {
    return <h2 id={id} className={classes[2]} style={style}>{text}</h2>;
  } else {
    return <h3 id={id} className={classes[3]} style={style}>{text}</h3>;
  }
}

// Table component
interface TableBlockProps {
  headers: string[];
  rows: string[][];
}

function TableBlock({ headers, rows }: TableBlockProps) {
  return (
    <div className="overflow-x-auto rounded-xl border border-border">
      <table className="w-full text-sm">
        <thead>
          <tr className="bg-surface">
            {headers.map((header, i) => (
              <th
                key={i}
                className="px-4 py-3 text-left font-semibold text-text border-b border-border"
              >
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, rowIndex) => (
            <tr
              key={rowIndex}
              className={clsx(
                'transition-colors hover:bg-surface/50',
                rowIndex % 2 === 0 ? 'bg-transparent' : 'bg-surface/30'
              )}
            >
              {row.map((cell, cellIndex) => (
                <td
                  key={cellIndex}
                  className="px-4 py-3 text-text-secondary border-b border-border/50"
                >
                  {cell.includes('\\n') ? (
                    <code className="text-accent text-xs bg-surface px-1.5 py-0.5 rounded">
                      {cell.replace('\\n', '\n')}
                    </code>
                  ) : cell.includes('()') || cell.includes('#') ? (
                    <code className="text-accent text-xs bg-surface px-1.5 py-0.5 rounded">
                      {cell}
                    </code>
                  ) : (
                    cell
                  )}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

// List component
interface ListBlockProps {
  items: string[];
  ordered: boolean;
  style?: React.CSSProperties;
}

function ListBlock({ items, ordered, style }: ListBlockProps) {
  const Tag = ordered ? 'ol' : 'ul';

  return (
    <Tag
      className={clsx(
        'my-4 space-y-2 animate-fadeIn',
        ordered ? 'list-decimal' : 'list-disc',
        'ml-6'
      )}
      style={style}
    >
      {items.map((item, i) => (
        <li key={i} className="text-text-secondary leading-relaxed pl-2">
          {item}
        </li>
      ))}
    </Tag>
  );
}

// Callout component
interface CalloutBlockProps {
  variant: 'info' | 'warning' | 'tip' | 'error';
  title?: string;
  content: string;
}

function CalloutBlock({ variant, title, content }: CalloutBlockProps) {
  const variants = {
    info: {
      icon: Info,
      colors: 'bg-primary/10 border-primary/30 text-primary',
      iconColor: 'text-primary',
    },
    warning: {
      icon: AlertTriangle,
      colors: 'bg-accent/10 border-accent/30 text-accent',
      iconColor: 'text-accent',
    },
    tip: {
      icon: Lightbulb,
      colors: 'bg-success/10 border-success/30 text-success',
      iconColor: 'text-success',
    },
    error: {
      icon: AlertCircle,
      colors: 'bg-error/10 border-error/30 text-error',
      iconColor: 'text-error',
    },
  };

  const { icon: Icon, colors, iconColor } = variants[variant];

  return (
    <div className={clsx('rounded-xl border p-4', colors)}>
      <div className="flex gap-3">
        <Icon className={clsx('w-5 h-5 flex-shrink-0 mt-0.5', iconColor)} />
        <div>
          {title && (
            <h4 className="font-semibold mb-1">{title}</h4>
          )}
          <p className="text-sm opacity-90 leading-relaxed whitespace-pre-line">{content}</p>
        </div>
      </div>
    </div>
  );
}

// Action card for quizzes and exercises
interface ActionCardProps {
  type: 'quiz' | 'exercise';
  title: string;
  description: string;
  to: string;
}

function ActionCard({ type, title, description, to }: ActionCardProps) {
  const isQuiz = type === 'quiz';

  return (
    <Link
      to={to}
      className={clsx(
        'block rounded-xl border-2 p-6 transition-all duration-300',
        'hover:scale-[1.02] hover:shadow-xl',
        isQuiz
          ? 'bg-gradient-to-br from-primary/10 to-primary/5 border-primary/30 hover:border-primary'
          : 'bg-gradient-to-br from-success/10 to-success/5 border-success/30 hover:border-success'
      )}
    >
      <div className="flex items-center gap-4">
        <div
          className={clsx(
            'w-12 h-12 rounded-xl flex items-center justify-center',
            isQuiz ? 'bg-primary/20' : 'bg-success/20'
          )}
        >
          {isQuiz ? (
            <FileQuestion className={clsx('w-6 h-6', isQuiz ? 'text-primary' : 'text-success')} />
          ) : (
            <Code2 className={clsx('w-6 h-6', isQuiz ? 'text-primary' : 'text-success')} />
          )}
        </div>
        <div>
          <h3 className="font-semibold text-text mb-1">{title}</h3>
          <p className="text-sm text-text-secondary">{description}</p>
        </div>
        <div className="ml-auto">
          <span
            className={clsx(
              'inline-flex items-center px-3 py-1.5 rounded-lg text-sm font-medium',
              isQuiz
                ? 'bg-primary text-white'
                : 'bg-success text-white'
            )}
          >
            Start {isQuiz ? 'Quiz' : 'Exercise'}
          </span>
        </div>
      </div>
    </Link>
  );
}

// Mini Quiz component for inline knowledge checks
interface MiniQuizBlockProps {
  id: string;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

function MiniQuizBlock({ id: _id, question, options, correctAnswer, explanation }: MiniQuizBlockProps) {
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);

  const handleSelect = (index: number) => {
    if (showResult) return;
    setSelectedAnswer(index);
  };

  const handleCheck = () => {
    if (selectedAnswer === null) return;
    setShowResult(true);
  };

  const handleReset = () => {
    setSelectedAnswer(null);
    setShowResult(false);
  };

  const isCorrect = selectedAnswer === correctAnswer;

  return (
    <div className="bg-surface rounded-2xl border border-border overflow-hidden">
      {/* Header */}
      <div className="px-4 py-3 bg-primary/10 border-b border-border flex items-center gap-2">
        <FileQuestion className="w-5 h-5 text-primary" />
        <span className="font-semibold text-primary text-sm">Verificación Rápida</span>
      </div>

      {/* Question */}
      <div className="p-4">
        <p className="text-text font-medium mb-4">{question}</p>

        {/* Options */}
        <div className="space-y-2 mb-4">
          {options.map((option, index) => (
            <button
              key={index}
              onClick={() => handleSelect(index)}
              disabled={showResult}
              className={clsx(
                'w-full text-left px-4 py-3 rounded-xl border-2 transition-all duration-200',
                !showResult && selectedAnswer === index
                  ? 'border-primary bg-primary/10 text-text'
                  : !showResult && selectedAnswer !== index
                  ? 'border-border hover:border-primary/50 text-text-secondary hover:text-text'
                  : showResult && index === correctAnswer
                  ? 'border-success bg-success/10 text-success'
                  : showResult && selectedAnswer === index && index !== correctAnswer
                  ? 'border-error bg-error/10 text-error'
                  : 'border-border/50 text-text-muted'
              )}
            >
              <div className="flex items-center gap-3">
                <span className={clsx(
                  'w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold',
                  !showResult && selectedAnswer === index
                    ? 'bg-primary text-white'
                    : !showResult
                    ? 'bg-surface text-text-secondary'
                    : showResult && index === correctAnswer
                    ? 'bg-success text-white'
                    : showResult && selectedAnswer === index
                    ? 'bg-error text-white'
                    : 'bg-surface/50 text-text-muted'
                )}>
                  {showResult && index === correctAnswer ? (
                    <CheckCircle className="w-4 h-4" />
                  ) : showResult && selectedAnswer === index && index !== correctAnswer ? (
                    <XCircle className="w-4 h-4" />
                  ) : (
                    String.fromCharCode(65 + index)
                  )}
                </span>
                <span className="flex-1">{option}</span>
              </div>
            </button>
          ))}
        </div>

        {/* Check button or result */}
        {!showResult ? (
          <button
            onClick={handleCheck}
            disabled={selectedAnswer === null}
            className={clsx(
              'w-full py-3 rounded-xl font-medium transition-all duration-200',
              selectedAnswer !== null
                ? 'bg-primary text-white hover:bg-primary/90'
                : 'bg-surface text-text-muted cursor-not-allowed'
            )}
          >
            Verificar Respuesta
          </button>
        ) : (
          <div className="space-y-3">
            {/* Result message */}
            <div className={clsx(
              'flex items-center gap-2 px-4 py-3 rounded-xl',
              isCorrect ? 'bg-success/10 text-success' : 'bg-error/10 text-error'
            )}>
              {isCorrect ? (
                <>
                  <CheckCircle className="w-5 h-5" />
                  <span className="font-medium">¡Correcto!</span>
                </>
              ) : (
                <>
                  <XCircle className="w-5 h-5" />
                  <span className="font-medium">Incorrecto</span>
                </>
              )}
            </div>

            {/* Explanation */}
            <div className="bg-surface/50 rounded-xl p-4 border border-border/50">
              <p className="text-sm text-text-secondary">
                <span className="font-semibold text-text">Explicación:</span> {explanation}
              </p>
            </div>

            {/* Try again button */}
            <button
              onClick={handleReset}
              className="w-full py-2 rounded-xl border border-border text-text-secondary hover:text-text hover:border-primary/50 transition-all duration-200 text-sm"
            >
              Intentar de Nuevo
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

// Section Navigation component
interface SectionNavBlockProps {
  chapterId: number;
  showComplete?: boolean;
  showNext?: boolean;
  showBack?: boolean;
  nextSection?: string;
  prevSection?: string;
}

function SectionNavBlock({ chapterId, showComplete = true, showNext = true, showBack = true, nextSection, prevSection }: SectionNavBlockProps) {
  const navigate = useNavigate();
  const { markSectionComplete } = useProgressStore();
  const [isMarkedComplete, setIsMarkedComplete] = useState(false);

  const handleMarkComplete = () => {
    // Mark current section complete
    setIsMarkedComplete(true);
  };

  const handleNext = () => {
    if (nextSection) {
      navigate(`/chapter/${chapterId}/section/${nextSection}`);
    }
  };

  const handleBack = () => {
    if (prevSection) {
      navigate(`/chapter/${chapterId}/section/${prevSection}`);
    } else {
      navigate(`/chapter/${chapterId}`);
    }
  };

  const handleBackToChapter = () => {
    navigate(`/chapter/${chapterId}`);
  };

  return (
    <div className="border-t border-border pt-8 mt-8">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* Back button */}
        <div className="flex items-center gap-3">
          {showBack && (
            <button
              onClick={handleBack}
              className="flex items-center gap-2 px-4 py-2.5 rounded-xl border border-border text-text-secondary hover:text-text hover:border-primary/50 transition-all duration-200"
            >
              <ChevronLeft className="w-4 h-4" />
              {prevSection ? 'Anterior' : 'Volver al Capítulo'}
            </button>
          )}
        </div>

        {/* Center - Mark Complete */}
        <div className="flex items-center gap-3">
          {showComplete && (
            <button
              onClick={handleMarkComplete}
              disabled={isMarkedComplete}
              className={clsx(
                'flex items-center gap-2 px-5 py-2.5 rounded-xl font-medium transition-all duration-200',
                isMarkedComplete
                  ? 'bg-success/20 text-success cursor-default'
                  : 'bg-success text-white hover:bg-success/90 shadow-lg shadow-success/20'
              )}
            >
              {isMarkedComplete ? (
                <>
                  <CheckCircle className="w-5 h-5" />
                  <span>Completado</span>
                </>
              ) : (
                <>
                  <Award className="w-5 h-5" />
                  <span>Marcar Completo</span>
                </>
              )}
            </button>
          )}
        </div>

        {/* Next button */}
        <div className="flex items-center gap-3">
          {showNext && nextSection && (
            <button
              onClick={handleNext}
              className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-primary text-white hover:bg-primary/90 transition-all duration-200 shadow-lg shadow-primary/20"
            >
              Siguiente
              <ChevronRight className="w-4 h-4" />
            </button>
          )}
          {!nextSection && showNext && (
            <button
              onClick={handleBackToChapter}
              className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-primary text-white hover:bg-primary/90 transition-all duration-200 shadow-lg shadow-primary/20"
            >
              Finalizar Sección
              <ChevronRight className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
