import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  BookOpen,
  Code,
  Database,
  ChevronDown,
  ChevronRight,
  CheckCircle,
  Circle,
  PlayCircle,
  Home,
  BarChart3,
  X,
  Menu
} from 'lucide-react';
import { useProgressStore } from '../../stores/progressStore';
import { chapters } from '../../content/chapters';
import clsx from 'clsx';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const chapterIcons: Record<number, React.ReactNode> = {
  0: <BookOpen className="w-5 h-5" />,
  1: <Code className="w-5 h-5" />,
  2: <Database className="w-5 h-5" />,
};

export function Sidebar({ isOpen, onClose }: SidebarProps) {
  const location = useLocation();
  const { completedSections, currentChapter } = useProgressStore();
  const [expandedChapters, setExpandedChapters] = useState<number[]>([currentChapter]);

  const toggleChapter = (chapterId: number) => {
    setExpandedChapters((prev) =>
      prev.includes(chapterId)
        ? prev.filter((id) => id !== chapterId)
        : [...prev, chapterId]
    );
  };

  const getSectionStatus = (chapterId: number, sectionId: string) => {
    const key = `${chapterId}-${sectionId}`;
    return completedSections[key] ? 'completed' : 'not-started';
  };

  const getChapterProgress = (chapter: typeof chapters[0]) => {
    const completed = chapter.sections.filter(
      (section) => completedSections[`${chapter.id}-${section.id}`]
    ).length;
    return Math.round((completed / chapter.sections.length) * 100);
  };

  return (
    <>
      {/* Mobile overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <aside
        className={clsx(
          'fixed lg:static inset-y-0 left-0 z-50 w-72 bg-surface border-r border-border',
          'transform transition-transform duration-300 ease-in-out',
          'flex flex-col h-screen',
          isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
        )}
      >
        {/* Logo */}
        <div className="flex items-center justify-between p-4 border-b border-border">
          <Link to="/" className="flex items-center gap-3">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
              <Code className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="font-bold text-text">Python for BI</h1>
              <p className="text-xs text-text-secondary">Interactive Course</p>
            </div>
          </Link>
          <button
            onClick={onClose}
            className="lg:hidden p-2 hover:bg-surface-hover rounded-lg"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Navigation */}
        <nav className="flex-1 overflow-y-auto p-4 space-y-2">
          {/* Dashboard link */}
          <Link
            to="/"
            className={clsx(
              'flex items-center gap-3 px-3 py-2 rounded-lg transition-colors',
              location.pathname === '/'
                ? 'bg-primary/20 text-primary'
                : 'text-text-secondary hover:bg-surface-hover hover:text-text'
            )}
          >
            <Home className="w-5 h-5" />
            <span className="font-medium">Dashboard</span>
          </Link>

          <Link
            to="/progress"
            className={clsx(
              'flex items-center gap-3 px-3 py-2 rounded-lg transition-colors',
              location.pathname === '/progress'
                ? 'bg-primary/20 text-primary'
                : 'text-text-secondary hover:bg-surface-hover hover:text-text'
            )}
          >
            <BarChart3 className="w-5 h-5" />
            <span className="font-medium">Progress</span>
          </Link>

          {/* Chapters */}
          <div className="pt-4">
            <h2 className="px-3 text-xs font-semibold text-text-muted uppercase tracking-wider mb-2">
              Course Content
            </h2>

            {chapters.map((chapter) => {
              const isExpanded = expandedChapters.includes(chapter.id);
              const progress = getChapterProgress(chapter);
              const isActive = location.pathname.startsWith(`/chapter/${chapter.id}`);

              return (
                <div key={chapter.id} className="mb-1">
                  {/* Chapter header */}
                  <button
                    onClick={() => toggleChapter(chapter.id)}
                    className={clsx(
                      'w-full flex items-center gap-3 px-3 py-2 rounded-lg transition-colors',
                      isActive
                        ? 'bg-primary/20 text-primary'
                        : 'text-text-secondary hover:bg-surface-hover hover:text-text'
                    )}
                  >
                    <span className="text-primary">
                      {chapterIcons[chapter.id] || <BookOpen className="w-5 h-5" />}
                    </span>
                    <div className="flex-1 text-left">
                      <div className="font-medium text-sm">Chapter {chapter.id}</div>
                      <div className="text-xs truncate">{chapter.title}</div>
                    </div>
                    <div className="flex items-center gap-2">
                      {progress === 100 && (
                        <CheckCircle className="w-4 h-4 text-success" />
                      )}
                      {isExpanded ? (
                        <ChevronDown className="w-4 h-4" />
                      ) : (
                        <ChevronRight className="w-4 h-4" />
                      )}
                    </div>
                  </button>

                  {/* Progress bar */}
                  {progress > 0 && progress < 100 && (
                    <div className="mx-3 mt-1 mb-2 h-1 bg-surface-hover rounded-full overflow-hidden">
                      <div
                        className="h-full bg-primary transition-all duration-500"
                        style={{ width: `${progress}%` }}
                      />
                    </div>
                  )}

                  {/* Sections */}
                  {isExpanded && (
                    <div className="ml-4 pl-4 border-l border-border space-y-1 mt-1">
                      {chapter.sections.map((section) => {
                        const status = getSectionStatus(chapter.id, section.id);
                        const sectionPath = `/chapter/${chapter.id}/section/${section.id}`;
                        const isSectionActive = location.pathname === sectionPath;

                        return (
                          <Link
                            key={section.id}
                            to={sectionPath}
                            onClick={onClose}
                            className={clsx(
                              'flex items-center gap-2 px-3 py-1.5 rounded-lg text-sm transition-colors',
                              isSectionActive
                                ? 'bg-primary/20 text-primary'
                                : 'text-text-secondary hover:bg-surface-hover hover:text-text'
                            )}
                          >
                            {status === 'completed' ? (
                              <CheckCircle className="w-4 h-4 text-success flex-shrink-0" />
                            ) : isSectionActive ? (
                              <PlayCircle className="w-4 h-4 text-primary flex-shrink-0" />
                            ) : (
                              <Circle className="w-4 h-4 flex-shrink-0" />
                            )}
                            <span className="truncate">{section.title}</span>
                          </Link>
                        );
                      })}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </nav>

        {/* Footer */}
        <div className="p-4 border-t border-border">
          <div className="text-xs text-text-muted text-center">
            Built with React + Claude
          </div>
        </div>
      </aside>
    </>
  );
}

export function SidebarToggle({ onClick }: { onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className="lg:hidden p-2 hover:bg-surface-hover rounded-lg"
    >
      <Menu className="w-6 h-6" />
    </button>
  );
}
