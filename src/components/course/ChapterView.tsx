import { useEffect, useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import {
  ChevronLeft,
  ChevronRight,
  CheckCircle,
  Clock,
  BookOpen,
  ArrowLeft
} from 'lucide-react';
import { chapters, findSection, getNextSection, getPreviousSection } from '../../content/chapters';
import { useProgressStore } from '../../stores/progressStore';
import { SectionContent } from './SectionContent';
import clsx from 'clsx';

export function ChapterView() {
  const { chapterId, sectionId } = useParams();
  const navigate = useNavigate();
  const {
    completedSections,
    markSectionComplete,
    setCurrentLocation,
    addStudyTime
  } = useProgressStore();

  const [startTime] = useState(Date.now());

  const chapter = chapters.find(c => c.id === Number(chapterId));
  const section = findSection(Number(chapterId), sectionId || '');

  const nextSection = getNextSection(Number(chapterId), sectionId || '');
  const prevSection = getPreviousSection(Number(chapterId), sectionId || '');

  const sectionKey = `${chapterId}-${sectionId}`;
  const isCompleted = completedSections[sectionKey];

  // Update current location
  useEffect(() => {
    if (chapter && section) {
      const sectionIndex = chapter.sections.findIndex(s => s.id === section.id);
      setCurrentLocation(chapter.id, sectionIndex);
    }
  }, [chapter, section, setCurrentLocation]);

  // Track study time when leaving
  useEffect(() => {
    return () => {
      const timeSpent = Math.round((Date.now() - startTime) / 60000);
      if (timeSpent > 0) {
        addStudyTime(timeSpent);
      }
    };
  }, [startTime, addStudyTime]);

  if (!chapter || !section) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] text-center">
        <BookOpen className="w-16 h-16 text-text-muted mb-4" />
        <h2 className="text-2xl font-bold text-text mb-2">Section Not Found</h2>
        <p className="text-text-secondary mb-6">
          The section you're looking for doesn't exist.
        </p>
        <Link
          to="/"
          className="btn btn-primary"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Dashboard
        </Link>
      </div>
    );
  }

  const handleMarkComplete = () => {
    if (!isCompleted) {
      markSectionComplete(Number(chapterId), sectionId || '');
    }
  };

  const handleNext = () => {
    if (nextSection) {
      navigate(`/chapter/${nextSection.chapterId}/section/${nextSection.section.id}`);
    }
  };

  const handlePrev = () => {
    if (prevSection) {
      navigate(`/chapter/${prevSection.chapterId}/section/${prevSection.section.id}`);
    }
  };

  // Calculate section progress within chapter
  const currentSectionIndex = chapter.sections.findIndex(s => s.id === section.id);
  const sectionProgress = ((currentSectionIndex + 1) / chapter.sections.length) * 100;

  return (
    <div className="animate-fadeIn">
      {/* Chapter header */}
      <div className="mb-8">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-text-secondary mb-4">
          <Link to="/" className="hover:text-primary transition-colors">
            Dashboard
          </Link>
          <ChevronRight className="w-4 h-4" />
          <Link
            to={`/chapter/${chapter.id}/section/${chapter.sections[0].id}`}
            className="hover:text-primary transition-colors"
          >
            Chapter {chapter.id}
          </Link>
          <ChevronRight className="w-4 h-4" />
          <span className="text-text">{section.title}</span>
        </div>

        {/* Chapter info */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
          <div>
            <div className="flex items-center gap-2 text-primary text-sm font-medium mb-1">
              <BookOpen className="w-4 h-4" />
              Chapter {chapter.id}: {chapter.title}
            </div>
            <h1 className="text-2xl md:text-3xl font-bold text-text">
              {section.title}
            </h1>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 text-text-secondary text-sm">
              <Clock className="w-4 h-4" />
              {section.estimatedTime} min read
            </div>

            {isCompleted ? (
              <span className="flex items-center gap-2 px-4 py-2 bg-success/20 text-success rounded-lg text-sm font-medium">
                <CheckCircle className="w-4 h-4" />
                Completed
              </span>
            ) : (
              <button
                onClick={handleMarkComplete}
                className="btn btn-primary"
              >
                <CheckCircle className="w-4 h-4 mr-2" />
                Mark Complete
              </button>
            )}
          </div>
        </div>

        {/* Section progress bar */}
        <div className="flex items-center gap-3">
          <div className="flex-1 h-2 bg-surface rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-primary to-secondary transition-all duration-500"
              style={{ width: `${sectionProgress}%` }}
            />
          </div>
          <span className="text-sm text-text-secondary">
            Section {currentSectionIndex + 1} of {chapter.sections.length}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="bg-surface rounded-2xl border border-border p-6 md:p-8 shadow-lg mb-8">
        <SectionContent section={section} chapterId={chapter.id} />
      </div>

      {/* Navigation */}
      <div className="flex items-center justify-between py-6 border-t border-border">
        <div>
          {prevSection ? (
            <button
              onClick={handlePrev}
              className="group flex items-center gap-3 px-4 py-3 rounded-xl bg-surface hover:bg-surface-hover border border-border transition-all duration-300"
            >
              <ChevronLeft className="w-5 h-5 text-text-secondary group-hover:text-primary transition-colors" />
              <div className="text-left">
                <div className="text-xs text-text-muted">Previous</div>
                <div className="text-sm font-medium text-text group-hover:text-primary transition-colors">
                  {prevSection.section.title}
                </div>
              </div>
            </button>
          ) : (
            <div />
          )}
        </div>

        <div className="flex items-center gap-2">
          {chapter.sections.map((s, i) => (
            <Link
              key={s.id}
              to={`/chapter/${chapter.id}/section/${s.id}`}
              className={clsx(
                'w-3 h-3 rounded-full transition-all duration-300',
                s.id === section.id
                  ? 'bg-primary scale-125'
                  : completedSections[`${chapter.id}-${s.id}`]
                  ? 'bg-success hover:scale-110'
                  : 'bg-surface-hover hover:bg-text-muted hover:scale-110'
              )}
              title={s.title}
            />
          ))}
        </div>

        <div>
          {nextSection ? (
            <button
              onClick={handleNext}
              className="group flex items-center gap-3 px-4 py-3 rounded-xl bg-primary hover:bg-primary-hover text-white transition-all duration-300"
            >
              <div className="text-right">
                <div className="text-xs text-white/70">
                  {nextSection.chapterId !== Number(chapterId) ? 'Next Chapter' : 'Next'}
                </div>
                <div className="text-sm font-medium">
                  {nextSection.section.title}
                </div>
              </div>
              <ChevronRight className="w-5 h-5" />
            </button>
          ) : (
            <Link
              to="/progress"
              className="flex items-center gap-3 px-4 py-3 rounded-xl bg-success hover:bg-success/90 text-white transition-all duration-300"
            >
              <div className="text-right">
                <div className="text-xs text-white/70">Congratulations!</div>
                <div className="text-sm font-medium">View Progress</div>
              </div>
              <CheckCircle className="w-5 h-5" />
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
