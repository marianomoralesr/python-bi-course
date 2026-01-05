import { useState, useRef, useEffect } from 'react';
import Editor, { OnMount } from '@monaco-editor/react';
import {
  Play,
  RotateCcw,
  Eye,
  EyeOff,
  Lightbulb,
  MessageSquare,
  CheckCircle2,
  Terminal,
  Loader2,
  Copy,
  Check,
  AlertCircle
} from 'lucide-react';
import clsx from 'clsx';
import { runPythonWithTimeout, initPyodide, isPyodideReady } from '../../services/pythonRunner';

interface CodePlaygroundProps {
  initialCode: string;
  solution?: string;
  instructions: string;
  hints?: string[];
  onRequestAIReview?: (code: string) => void;
  onComplete?: () => void;
}

export function CodePlayground({
  initialCode,
  solution,
  instructions,
  hints = [],
  onRequestAIReview,
  onComplete
}: CodePlaygroundProps) {
  const [code, setCode] = useState(initialCode);
  const [output, setOutput] = useState<string>('');
  const [error, setError] = useState<string>('');
  const [isRunning, setIsRunning] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [pyodideReady, setPyodideReady] = useState(isPyodideReady());
  const [showSolution, setShowSolution] = useState(false);
  const [showHints, setShowHints] = useState(false);
  const [visibleHints, setVisibleHints] = useState(0);
  const [copied, setCopied] = useState(false);
  const editorRef = useRef<any>(null);

  // Preload Pyodide when component mounts
  useEffect(() => {
    if (!pyodideReady) {
      setIsLoading(true);
      initPyodide()
        .then(() => {
          setPyodideReady(true);
          setIsLoading(false);
        })
        .catch((err) => {
          console.error('Failed to load Pyodide:', err);
          setIsLoading(false);
        });
    }
  }, [pyodideReady]);

  const handleEditorMount: OnMount = (editor) => {
    editorRef.current = editor;
  };

  const handleRun = async () => {
    setIsRunning(true);
    setOutput('');
    setError('');

    try {
      const result = await runPythonWithTimeout(code, 10000);

      if (result.error) {
        setError(result.error);
        setOutput(result.output || '');
      } else {
        setOutput(result.output || '(No output)');
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Execution failed');
    } finally {
      setIsRunning(false);
    }
  };

  const handleReset = () => {
    setCode(initialCode);
    setOutput('');
    setError('');
    setShowSolution(false);
  };

  const handleShowHint = () => {
    if (!showHints) {
      setShowHints(true);
      setVisibleHints(1);
    } else if (visibleHints < hints.length) {
      setVisibleHints(prev => prev + 1);
    }
  };

  const handleCopy = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleToggleSolution = () => {
    setShowSolution(prev => !prev);
    if (!showSolution && solution) {
      setCode(solution);
    } else {
      setCode(initialCode);
    }
  };

  return (
    <div className="rounded-2xl border border-border overflow-hidden bg-surface shadow-xl">
      {/* Instructions */}
      <div className="p-4 border-b border-border bg-gradient-to-r from-primary/10 to-transparent">
        <h3 className="font-semibold text-text mb-2 flex items-center gap-2">
          <Terminal className="w-5 h-5 text-primary" />
          Instructions
        </h3>
        <p className="text-sm text-text-secondary leading-relaxed whitespace-pre-line">
          {instructions}
        </p>
      </div>

      {/* Editor toolbar */}
      <div className="flex items-center justify-between px-4 py-2 bg-code-bg border-b border-border/50">
        <div className="flex items-center gap-2">
          <span className="text-xs font-medium text-text-muted uppercase tracking-wider">
            Python
          </span>
          <span className="w-2 h-2 rounded-full bg-success animate-pulse" />
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={handleCopy}
            className="flex items-center gap-1.5 px-2 py-1 rounded text-xs text-text-secondary hover:text-text hover:bg-surface-hover transition-colors"
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5 text-success" />
                Copied
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5" />
                Copy
              </>
            )}
          </button>
        </div>
      </div>

      {/* Monaco Editor */}
      <div className="h-80 border-b border-border/50">
        <Editor
          height="100%"
          defaultLanguage="python"
          value={code}
          onChange={(value) => setCode(value || '')}
          onMount={handleEditorMount}
          theme="vs-dark"
          options={{
            minimap: { enabled: false },
            fontSize: 14,
            lineNumbers: 'on',
            scrollBeyondLastLine: false,
            automaticLayout: true,
            tabSize: 4,
            wordWrap: 'on',
            padding: { top: 16, bottom: 16 },
            smoothScrolling: true,
            cursorBlinking: 'smooth',
            cursorSmoothCaretAnimation: 'on',
            fontFamily: "'Fira Code', 'Monaco', 'Consolas', monospace",
            fontLigatures: true,
          }}
        />
      </div>

      {/* Action buttons */}
      <div className="flex flex-wrap items-center gap-2 p-4 bg-surface-hover/50 border-b border-border/50">
        <button
          onClick={handleRun}
          disabled={isRunning || isLoading}
          className={clsx(
            'btn flex items-center gap-2',
            isRunning || isLoading ? 'btn-secondary' : 'btn-success'
          )}
        >
          {isLoading ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin" />
              Loading Python...
            </>
          ) : isRunning ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin" />
              Running...
            </>
          ) : (
            <>
              <Play className="w-4 h-4" />
              Run Code
            </>
          )}
        </button>

        <button
          onClick={handleReset}
          className="btn btn-secondary flex items-center gap-2"
        >
          <RotateCcw className="w-4 h-4" />
          Reset
        </button>

        {hints.length > 0 && (
          <button
            onClick={handleShowHint}
            disabled={showHints && visibleHints >= hints.length}
            className="btn btn-secondary flex items-center gap-2"
          >
            <Lightbulb className="w-4 h-4" />
            {showHints
              ? visibleHints < hints.length
                ? `Hint ${visibleHints + 1}`
                : 'All Hints Shown'
              : 'Show Hint'
            }
          </button>
        )}

        {solution && (
          <button
            onClick={handleToggleSolution}
            className="btn btn-secondary flex items-center gap-2"
          >
            {showSolution ? (
              <>
                <EyeOff className="w-4 h-4" />
                Hide Solution
              </>
            ) : (
              <>
                <Eye className="w-4 h-4" />
                Show Solution
              </>
            )}
          </button>
        )}

        {onRequestAIReview && (
          <button
            onClick={() => onRequestAIReview(code)}
            className="btn btn-primary flex items-center gap-2 ml-auto"
          >
            <MessageSquare className="w-4 h-4" />
            AI Code Review
          </button>
        )}
      </div>

      {/* Hints panel */}
      {showHints && hints.length > 0 && (
        <div className="p-4 bg-accent/10 border-b border-accent/20">
          <h4 className="font-medium text-accent mb-3 flex items-center gap-2">
            <Lightbulb className="w-4 h-4" />
            Hints
          </h4>
          <div className="space-y-2">
            {hints.slice(0, visibleHints).map((hint, index) => (
              <div
                key={index}
                className="flex items-start gap-2 text-sm text-text-secondary animate-fadeIn"
              >
                <span className="flex-shrink-0 w-5 h-5 rounded-full bg-accent/20 text-accent text-xs flex items-center justify-center font-medium">
                  {index + 1}
                </span>
                <span>{hint}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Output panel */}
      <div className="bg-black/80">
        <div className="flex items-center justify-between px-4 py-2 border-b border-border/30">
          {error ? (
            <>
              <span className="text-xs font-medium text-error uppercase tracking-wider flex items-center gap-2">
                <AlertCircle className="w-4 h-4" />
                Error
              </span>
            </>
          ) : (
            <>
              <span className="text-xs font-medium text-text-muted uppercase tracking-wider flex items-center gap-2">
                <Terminal className="w-4 h-4" />
                Output
              </span>
              {output && !isRunning && (
                <span className="text-xs text-success flex items-center gap-1">
                  <CheckCircle2 className="w-3 h-3" />
                  Executed
                </span>
              )}
            </>
          )}
        </div>
        <pre
          className={clsx(
            'p-4 text-sm font-mono min-h-[100px] max-h-[200px] overflow-auto whitespace-pre-wrap',
            error ? 'text-error' : output ? 'text-success' : 'text-text-muted'
          )}
        >
          {error || output || '// Output will appear here after running your code'}
        </pre>
      </div>
    </div>
  );
}

// Python execution simulator
function simulatePythonExecution(code: string): string {
  const outputs: string[] = [];
  const lines = code.split('\n');
  const variables: Record<string, any> = {};

  try {
    for (const line of lines) {
      const trimmed = line.trim();

      // Skip comments and empty lines
      if (trimmed.startsWith('#') || !trimmed) continue;

      // Handle simple variable assignments
      const assignMatch = trimmed.match(/^(\w+)\s*=\s*(.+)$/);
      if (assignMatch && !trimmed.includes('def ') && !trimmed.includes('for ') && !trimmed.includes('if ')) {
        const [, varName, valueExpr] = assignMatch;
        try {
          let value: any;
          if (valueExpr.startsWith('"') || valueExpr.startsWith("'")) {
            value = valueExpr.slice(1, -1);
          } else if (valueExpr.startsWith('[')) {
            value = JSON.parse(valueExpr.replace(/'/g, '"'));
          } else if (valueExpr.startsWith('{')) {
            value = JSON.parse(valueExpr.replace(/'/g, '"'));
          } else if (!isNaN(Number(valueExpr))) {
            value = Number(valueExpr);
          } else if (valueExpr === 'True') {
            value = true;
          } else if (valueExpr === 'False') {
            value = false;
          } else if (valueExpr === 'None') {
            value = null;
          } else {
            // Try to evaluate simple expressions
            const numMatch = valueExpr.match(/^(\d+\.?\d*)\s*([+\-*/])\s*(\d+\.?\d*)$/);
            if (numMatch) {
              const [, a, op, b] = numMatch;
              const numA = Number(a);
              const numB = Number(b);
              switch (op) {
                case '+': value = numA + numB; break;
                case '-': value = numA - numB; break;
                case '*': value = numA * numB; break;
                case '/': value = numA / numB; break;
              }
            } else if (variables[valueExpr] !== undefined) {
              value = variables[valueExpr];
            }
          }
          if (value !== undefined) {
            variables[varName] = value;
          }
        } catch {
          // Ignore parsing errors for complex expressions
        }
      }

      // Handle print statements
      const printMatch = trimmed.match(/^print\((.+)\)$/);
      if (printMatch) {
        let content = printMatch[1];
        let result = '';

        // Handle f-strings
        if (content.startsWith('f"') || content.startsWith("f'")) {
          content = content.slice(2, -1);
          result = content.replace(/\{([^}:]+)(?::[^}]*)?\}/g, (_, expr) => {
            const trimExpr = expr.trim();
            if (variables[trimExpr] !== undefined) {
              return String(variables[trimExpr]);
            }
            return `{${trimExpr}}`;
          });
        } else if (content.startsWith('"') || content.startsWith("'")) {
          result = content.slice(1, -1);
        } else if (variables[content] !== undefined) {
          result = String(variables[content]);
        } else if (content.includes('+')) {
          // Handle string concatenation
          const parts = content.split('+').map(p => {
            p = p.trim();
            if (p.startsWith('"') || p.startsWith("'")) {
              return p.slice(1, -1);
            }
            return variables[p] !== undefined ? String(variables[p]) : p;
          });
          result = parts.join('');
        } else {
          result = content;
        }

        outputs.push(result);
      }
    }

    return outputs.length > 0 ? outputs.join('\n') : '(No output)';
  } catch (error) {
    return `Error: ${error instanceof Error ? error.message : 'Unknown error'}`;
  }
}
