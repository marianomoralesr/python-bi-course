import { Link } from 'react-router-dom';
import { Flame, Clock, Settings, MessageCircle, HelpCircle } from 'lucide-react';
import { useProgressStore } from '../../stores/progressStore';
import { chapters } from '../../content/chapters';
import { SidebarToggle } from './Sidebar';

interface HeaderProps {
  onMenuClick: () => void;
}

export function Header({ onMenuClick }: HeaderProps) {
  const { completedSections, streak, totalStudyTime } = useProgressStore();

  // Calculate overall progress
  const totalSections = chapters.reduce(
    (acc, chapter) => acc + chapter.sections.length,
    0
  );
  const completedCount = Object.values(completedSections).filter(Boolean).length;
  const progressPercentage = totalSections > 0
    ? Math.round((completedCount / totalSections) * 100)
    : 0;

  // Format study time
  const formatTime = (minutes: number) => {
    if (minutes < 60) return `${minutes}m`;
    const hours = Math.floor(minutes / 60);
    const mins = minutes % 60;
    return mins > 0 ? `${hours}h ${mins}m` : `${hours}h`;
  };

  return (
    <header className="sticky top-0 z-30 bg-surface/80 backdrop-blur-sm border-b border-border">
      <div className="flex items-center justify-between px-4 py-3">
        {/* Left side - Mobile menu + Progress */}
        <div className="flex items-center gap-4">
          <SidebarToggle onClick={onMenuClick} />

          {/* Progress bar - hidden on mobile */}
          <div className="hidden sm:flex items-center gap-3">
            <div className="flex flex-col">
              <span className="text-xs text-text-secondary">Course Progress</span>
              <div className="flex items-center gap-2">
                <div className="w-32 h-2 bg-surface-hover rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-primary to-secondary transition-all duration-500 progress-bar"
                    style={{ width: `${progressPercentage}%` }}
                  />
                </div>
                <span className="text-sm font-medium text-text">
                  {progressPercentage}%
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Right side - Stats + Actions */}
        <div className="flex items-center gap-2 sm:gap-4">
          {/* Streak */}
          {streak > 0 && (
            <div className="flex items-center gap-1.5 px-2 py-1 bg-accent/10 rounded-lg">
              <Flame className="w-4 h-4 text-accent" />
              <span className="text-sm font-medium text-accent">{streak}</span>
            </div>
          )}

          {/* Study time - hidden on mobile */}
          <div className="hidden sm:flex items-center gap-1.5 text-text-secondary">
            <Clock className="w-4 h-4" />
            <span className="text-sm">{formatTime(totalStudyTime)}</span>
          </div>

          {/* Ask Claude button */}
          <Link
            to="/ask-claude"
            className="flex items-center gap-2 px-3 py-1.5 bg-primary/10 hover:bg-primary/20 text-primary rounded-lg transition-colors"
          >
            <MessageCircle className="w-4 h-4" />
            <span className="hidden sm:inline text-sm font-medium">Ask Claude</span>
          </Link>

          {/* Help */}
          <button className="p-2 text-text-secondary hover:text-text hover:bg-surface-hover rounded-lg transition-colors">
            <HelpCircle className="w-5 h-5" />
          </button>

          {/* Settings */}
          <Link
            to="/settings"
            className="p-2 text-text-secondary hover:text-text hover:bg-surface-hover rounded-lg transition-colors"
          >
            <Settings className="w-5 h-5" />
          </Link>
        </div>
      </div>

      {/* Mobile progress bar */}
      <div className="sm:hidden px-4 pb-3">
        <div className="flex items-center gap-2">
          <div className="flex-1 h-2 bg-surface-hover rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-primary to-secondary transition-all duration-500"
              style={{ width: `${progressPercentage}%` }}
            />
          </div>
          <span className="text-xs font-medium text-text-secondary">
            {progressPercentage}%
          </span>
        </div>
      </div>
    </header>
  );
}
