import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from './components/layout';
import { ProgressDashboard } from './components/progress';
import { ChapterView } from './components/course';
import { Quiz } from './components/quiz';
import { Exercise } from './components/practice';
import { AskClaude } from './components/ai';
import './index.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<ProgressDashboard />} />
          <Route path="progress" element={<ProgressDashboard />} />
          <Route path="chapter/:chapterId/section/:sectionId" element={<ChapterView />} />
          <Route path="quiz/:quizId" element={<Quiz />} />
          <Route path="exercise/:exerciseId" element={<Exercise />} />
          <Route path="ask-claude" element={<AskClaude />} />
          <Route path="settings" element={<SettingsPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

// Simple Settings Page
function SettingsPage() {
  return (
    <div className="max-w-2xl mx-auto animate-fadeIn">
      <h1 className="text-2xl font-bold text-text mb-6">Settings</h1>

      <div className="bg-surface rounded-2xl border border-border p-6 space-y-6">
        <div>
          <h2 className="font-semibold text-text mb-4">Appearance</h2>
          <div className="space-y-3">
            <div className="flex items-center justify-between p-3 bg-surface-hover rounded-lg">
              <span className="text-text-secondary">Theme</span>
              <span className="text-text font-medium">Dark (Default)</span>
            </div>
            <div className="flex items-center justify-between p-3 bg-surface-hover rounded-lg">
              <span className="text-text-secondary">Font Size</span>
              <span className="text-text font-medium">Medium</span>
            </div>
          </div>
        </div>

        <div>
          <h2 className="font-semibold text-text mb-4">Quiz Preferences</h2>
          <div className="space-y-3">
            <div className="flex items-center justify-between p-3 bg-surface-hover rounded-lg">
              <span className="text-text-secondary">Question Display</span>
              <span className="text-text font-medium">One at a time</span>
            </div>
            <div className="flex items-center justify-between p-3 bg-surface-hover rounded-lg">
              <span className="text-text-secondary">Show Feedback</span>
              <span className="text-text font-medium">After quiz</span>
            </div>
          </div>
        </div>

        <div>
          <h2 className="font-semibold text-text mb-4">About</h2>
          <div className="p-3 bg-surface-hover rounded-lg">
            <p className="text-text-secondary text-sm">
              Python for BI - Interactive Learning Platform
            </p>
            <p className="text-text-muted text-xs mt-1">
              Version 1.0.0 | Built with React 19 + Claude AI
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

// 404 Not Found Page
function NotFoundPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center animate-fadeIn">
      <div className="text-8xl font-bold text-text-muted mb-4">404</div>
      <h2 className="text-2xl font-bold text-text mb-2">Page Not Found</h2>
      <p className="text-text-secondary mb-6">
        The page you're looking for doesn't exist.
      </p>
      <a
        href="/"
        className="btn btn-primary"
      >
        Go to Dashboard
      </a>
    </div>
  );
}

export default App;
