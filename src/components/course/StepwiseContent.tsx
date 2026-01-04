import { useState, useEffect, useCallback, useMemo } from 'react';
import {
  ChevronLeft,
  ChevronRight,
  Play,
  Pause,
  Square,
  Volume2,
  VolumeX,
  BookOpen,
  Layers
} from 'lucide-react';
import type { ContentBlock, Section } from '../../types';
import { ttsService } from '../../services/ttsService';
import { useSettingsStore } from '../../stores/settingsStore';
import clsx from 'clsx';

interface StepwiseContentProps {
  section: Section;
  chapterId: number;
  renderBlock: (block: ContentBlock, index: number) => React.ReactNode;
  onComplete?: () => void;
}

// Group content blocks into logical "steps"
// A step ends after: heading + content before next heading, or a quiz/exercise link
function groupIntoSteps(blocks: ContentBlock[]): ContentBlock[][] {
  const steps: ContentBlock[][] = [];
  let currentStep: ContentBlock[] = [];

  blocks.forEach((block, index) => {
    // Start new step on h1 or h2 headings (but not the first one)
    if (block.type === 'heading' && (block.level === 1 || block.level === 2)) {
      if (currentStep.length > 0) {
        steps.push(currentStep);
        currentStep = [];
      }
    }

    currentStep.push(block);

    // End step after quiz/exercise links
    if (block.type === 'quiz-link' || block.type === 'exercise-link') {
      steps.push(currentStep);
      currentStep = [];
    }
  });

  // Push remaining blocks
  if (currentStep.length > 0) {
    steps.push(currentStep);
  }

  // If we only have one big step, break it into smaller chunks (max 3-4 blocks per step)
  if (steps.length === 1 && steps[0].length > 4) {
    const singleStep = steps[0];
    const chunkedSteps: ContentBlock[][] = [];
    let chunk: ContentBlock[] = [];

    singleStep.forEach((block) => {
      chunk.push(block);

      // Break after paragraphs, lists, tables, callouts, or code blocks
      // to create natural reading pauses
      if (
        chunk.length >= 2 &&
        ['paragraph', 'list', 'table', 'callout', 'code'].includes(block.type)
      ) {
        chunkedSteps.push(chunk);
        chunk = [];
      }
    });

    if (chunk.length > 0) {
      chunkedSteps.push(chunk);
    }

    return chunkedSteps;
  }

  return steps;
}

// Extract readable text from a content block
function getTextFromBlock(block: ContentBlock): string {
  switch (block.type) {
    case 'heading':
      return block.text;
    case 'paragraph':
      return block.text;
    case 'list':
      return block.items.join('. ');
    case 'callout':
      return `${block.title ? block.title + '. ' : ''}${block.content}`;
    case 'code':
      return 'Aquí hay un ejemplo de código.';
    case 'table':
      return 'Aquí hay una tabla con información.';
    case 'quiz-link':
      return `Quiz disponible: ${block.title}`;
    case 'exercise-link':
      return `Ejercicio disponible: ${block.title}`;
    default:
      return '';
  }
}

export function StepwiseContent({
  section,
  chapterId,
  renderBlock,
  onComplete
}: StepwiseContentProps) {
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [isNarrating, setIsNarrating] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  const {
    narrationEnabled,
    narrationSpeed,
    narrationVoiceLang
  } = useSettingsStore();

  // Group blocks into steps
  const steps = useMemo(() => groupIntoSteps(section.content), [section.content]);

  const currentStep = steps[currentStepIndex];
  const totalSteps = steps.length;
  const isFirstStep = currentStepIndex === 0;
  const isLastStep = currentStepIndex === totalSteps - 1;

  // Configure TTS with current settings
  useEffect(() => {
    ttsService.setOptions({
      rate: narrationSpeed,
      voiceLang: narrationVoiceLang,
    });
  }, [narrationSpeed, narrationVoiceLang]);

  // Stop narration when component unmounts or section changes
  useEffect(() => {
    return () => {
      ttsService.stop();
    };
  }, [section.id]);

  // Get text for current step
  const getCurrentStepText = useCallback(() => {
    return currentStep.map(getTextFromBlock).filter(Boolean).join('. ');
  }, [currentStep]);

  // Handle narration
  const startNarration = useCallback(() => {
    if (!narrationEnabled) return;

    const text = getCurrentStepText();
    if (!text) return;

    setIsNarrating(true);
    setIsPaused(false);

    ttsService.speak(text, () => {
      setIsNarrating(false);
      setIsPaused(false);
    });
  }, [getCurrentStepText, narrationEnabled]);

  const pauseNarration = useCallback(() => {
    ttsService.pause();
    setIsPaused(true);
  }, []);

  const resumeNarration = useCallback(() => {
    ttsService.resume();
    setIsPaused(false);
  }, []);

  const stopNarration = useCallback(() => {
    ttsService.stop();
    setIsNarrating(false);
    setIsPaused(false);
  }, []);

  const toggleNarration = useCallback(() => {
    if (isNarrating) {
      if (isPaused) {
        resumeNarration();
      } else {
        pauseNarration();
      }
    } else {
      startNarration();
    }
  }, [isNarrating, isPaused, pauseNarration, resumeNarration, startNarration]);

  // Navigation handlers
  const goToPreviousStep = useCallback(() => {
    if (!isFirstStep) {
      stopNarration();
      setCurrentStepIndex(prev => prev - 1);
    }
  }, [isFirstStep, stopNarration]);

  const goToNextStep = useCallback(() => {
    if (!isLastStep) {
      stopNarration();
      setCurrentStepIndex(prev => prev + 1);
    } else if (onComplete) {
      stopNarration();
      onComplete();
    }
  }, [isLastStep, onComplete, stopNarration]);

  // Auto-start narration when step changes (optional)
  useEffect(() => {
    if (narrationEnabled && !isNarrating) {
      // Small delay to let animation complete
      const timer = setTimeout(() => {
        // Don't auto-start, let user control
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [currentStepIndex, narrationEnabled, isNarrating]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === ' ') {
        e.preventDefault();
        goToNextStep();
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        goToPreviousStep();
      } else if (e.key === 'p' || e.key === 'P') {
        e.preventDefault();
        toggleNarration();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [goToNextStep, goToPreviousStep, toggleNarration]);

  return (
    <div className="flex flex-col min-h-[60vh]">
      {/* Progress bar */}
      <div className="mb-6">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm text-text-secondary flex items-center gap-2">
            <Layers className="w-4 h-4" />
            Paso {currentStepIndex + 1} de {totalSteps}
          </span>
          <span className="text-sm text-text-secondary">
            {Math.round(((currentStepIndex + 1) / totalSteps) * 100)}% completado
          </span>
        </div>
        <div className="w-full bg-surface rounded-full h-2 overflow-hidden">
          <div
            className="bg-gradient-to-r from-primary to-accent h-full transition-all duration-500 ease-out"
            style={{ width: `${((currentStepIndex + 1) / totalSteps) * 100}%` }}
          />
        </div>
      </div>

      {/* Content area with animation */}
      <article className="prose prose-invert max-w-none flex-1">
        <div
          key={currentStepIndex}
          className="animate-fadeIn"
        >
          {currentStep.map((block, index) => (
            <div key={index} className="animate-slideUp" style={{ animationDelay: `${index * 100}ms` }}>
              {renderBlock(block, index)}
            </div>
          ))}
        </div>
      </article>

      {/* Navigation and controls */}
      <div className="mt-8 pt-6 border-t border-border">
        <div className="flex items-center justify-between">
          {/* Previous button */}
          <button
            onClick={goToPreviousStep}
            disabled={isFirstStep}
            className={clsx(
              'flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-200',
              isFirstStep
                ? 'text-text-secondary/50 cursor-not-allowed'
                : 'text-text-secondary hover:text-text hover:bg-surface'
            )}
          >
            <ChevronLeft className="w-5 h-5" />
            <span className="hidden sm:inline">Anterior</span>
          </button>

          {/* Narration controls */}
          <div className="flex items-center gap-2">
            {narrationEnabled && ttsService.isSupported() && (
              <>
                <button
                  onClick={toggleNarration}
                  className={clsx(
                    'p-3 rounded-full transition-all duration-200',
                    isNarrating
                      ? 'bg-primary text-white shadow-lg shadow-primary/30'
                      : 'bg-surface text-text-secondary hover:text-text hover:bg-surface/80'
                  )}
                  title={isNarrating ? (isPaused ? 'Continuar' : 'Pausar') : 'Reproducir narración'}
                >
                  {isNarrating ? (
                    isPaused ? <Play className="w-5 h-5" /> : <Pause className="w-5 h-5" />
                  ) : (
                    <Volume2 className="w-5 h-5" />
                  )}
                </button>
                {isNarrating && (
                  <button
                    onClick={stopNarration}
                    className="p-2 rounded-full bg-surface text-text-secondary hover:text-error transition-colors"
                    title="Detener narración"
                  >
                    <Square className="w-4 h-4" />
                  </button>
                )}
              </>
            )}
          </div>

          {/* Next/Continue button */}
          <button
            onClick={goToNextStep}
            className={clsx(
              'flex items-center gap-2 px-6 py-2.5 rounded-lg font-medium transition-all duration-200',
              'bg-primary text-white hover:bg-primary-hover',
              'shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30',
              'hover:scale-105'
            )}
          >
            <span>{isLastStep ? 'Completar' : 'Continuar'}</span>
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Keyboard hints */}
        <div className="mt-4 text-center">
          <p className="text-xs text-text-secondary/60">
            Usa <kbd className="px-1.5 py-0.5 rounded bg-surface text-text-secondary text-xs">←</kbd> <kbd className="px-1.5 py-0.5 rounded bg-surface text-text-secondary text-xs">→</kbd> para navegar
            {narrationEnabled && ' • '}
            {narrationEnabled && <><kbd className="px-1.5 py-0.5 rounded bg-surface text-text-secondary text-xs">P</kbd> para reproducir/pausar</>}
          </p>
        </div>
      </div>
    </div>
  );
}
