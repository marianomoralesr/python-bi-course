import { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from './components/layout';
import { ProgressDashboard } from './components/progress';
import { ChapterView } from './components/course';
import { Quiz } from './components/quiz';
import { Exercise } from './components/practice';
import { AskClaude } from './components/ai';
import { useSettingsStore } from './stores/settingsStore';
import { useProgressStore } from './stores/progressStore';
import { isSupabaseConfigured } from './lib/supabase';
import { BookOpen, Cloud, CloudOff } from 'lucide-react';
import './index.css';

function App() {
  const { loadFromCloud, isSyncing, lastSyncedAt } = useProgressStore();

  // Load progress from cloud on app startup
  useEffect(() => {
    if (isSupabaseConfigured()) {
      loadFromCloud().then((success) => {
        if (success) {
          console.log('Progress loaded from cloud');
        }
      });
    }
  }, [loadFromCloud]);

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

// Settings Page with Reading Mode controls
function SettingsPage() {
  const {
    readingModeEnabled,
    narrationEnabled,
    narrationSpeed,
    narrationVoiceLang,
    updateSettings
  } = useSettingsStore();

  return (
    <div className="max-w-2xl mx-auto animate-fadeIn">
      <h1 className="text-2xl font-bold text-text mb-6">Configuración</h1>

      <div className="bg-surface rounded-2xl border border-border p-6 space-y-6">
        {/* Reading Mode Settings */}
        <div>
          <h2 className="font-semibold text-text mb-4 flex items-center gap-2">
            <BookOpen className="w-5 h-5 text-primary" />
            Modo de Lectura Guiada
          </h2>
          <div className="space-y-3">
            <div className="flex items-center justify-between p-3 bg-surface-hover rounded-lg">
              <div>
                <span className="text-text-secondary">Modo Guiado</span>
                <p className="text-xs text-text-muted mt-0.5">
                  Muestra el contenido paso a paso, menos abrumador
                </p>
              </div>
              <ToggleSwitch
                enabled={readingModeEnabled}
                onChange={(enabled) => updateSettings({ readingModeEnabled: enabled })}
              />
            </div>
            <div className="flex items-center justify-between p-3 bg-surface-hover rounded-lg">
              <div>
                <span className="text-text-secondary">Narración por Voz</span>
                <p className="text-xs text-text-muted mt-0.5">
                  Lee el contenido en voz alta
                </p>
              </div>
              <ToggleSwitch
                enabled={narrationEnabled}
                onChange={(enabled) => updateSettings({ narrationEnabled: enabled })}
              />
            </div>
            <div className="flex items-center justify-between p-3 bg-surface-hover rounded-lg">
              <div>
                <span className="text-text-secondary">Velocidad de Narración</span>
              </div>
              <div className="flex items-center gap-2">
                <input
                  type="range"
                  min="0.5"
                  max="2"
                  step="0.1"
                  value={narrationSpeed}
                  onChange={(e) => updateSettings({ narrationSpeed: parseFloat(e.target.value) })}
                  className="w-24 accent-primary"
                />
                <span className="text-sm text-text w-12 text-right">{narrationSpeed}x</span>
              </div>
            </div>
            <div className="flex items-center justify-between p-3 bg-surface-hover rounded-lg">
              <span className="text-text-secondary">Idioma de Voz</span>
              <select
                value={narrationVoiceLang}
                onChange={(e) => updateSettings({ narrationVoiceLang: e.target.value })}
                className="bg-surface border border-border rounded-lg px-3 py-1.5 text-text text-sm"
              >
                <option value="es-ES">Español (España)</option>
                <option value="es-MX">Español (México)</option>
                <option value="en-US">English (US)</option>
                <option value="en-GB">English (UK)</option>
              </select>
            </div>
          </div>
        </div>

        <div>
          <h2 className="font-semibold text-text mb-4">Apariencia</h2>
          <div className="space-y-3">
            <div className="flex items-center justify-between p-3 bg-surface-hover rounded-lg">
              <span className="text-text-secondary">Tema</span>
              <span className="text-text font-medium">Oscuro (Por defecto)</span>
            </div>
            <div className="flex items-center justify-between p-3 bg-surface-hover rounded-lg">
              <span className="text-text-secondary">Tamaño de Fuente</span>
              <span className="text-text font-medium">Mediano</span>
            </div>
          </div>
        </div>

        <div>
          <h2 className="font-semibold text-text mb-4">Preferencias de Quiz</h2>
          <div className="space-y-3">
            <div className="flex items-center justify-between p-3 bg-surface-hover rounded-lg">
              <span className="text-text-secondary">Mostrar Preguntas</span>
              <span className="text-text font-medium">Una a la vez</span>
            </div>
            <div className="flex items-center justify-between p-3 bg-surface-hover rounded-lg">
              <span className="text-text-secondary">Mostrar Retroalimentación</span>
              <span className="text-text font-medium">Después del quiz</span>
            </div>
          </div>
        </div>

        <div>
          <h2 className="font-semibold text-text mb-4">Acerca de</h2>
          <div className="p-3 bg-surface-hover rounded-lg">
            <p className="text-text-secondary text-sm">
              Python for BI - Plataforma de Aprendizaje Interactivo
            </p>
            <p className="text-text-muted text-xs mt-1">
              Versión 1.0.0 | Hecho con React 19 + Claude AI
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

// Toggle Switch Component
function ToggleSwitch({
  enabled,
  onChange
}: {
  enabled: boolean;
  onChange: (enabled: boolean) => void;
}) {
  return (
    <button
      onClick={() => onChange(!enabled)}
      className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
        enabled ? 'bg-primary' : 'bg-surface-hover border border-border'
      }`}
    >
      <span
        className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
          enabled ? 'translate-x-6' : 'translate-x-1'
        }`}
      />
    </button>
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
