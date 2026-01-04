import { useState, useEffect } from 'react';
import { Copy, Check, Play, Terminal, Loader2, AlertCircle } from 'lucide-react';
import clsx from 'clsx';
import { runPythonWithTimeout, initPyodide, isPyodideReady } from '../../services/pythonRunner';

interface CodeBlockProps {
  code: string;
  language?: string;
  filename?: string;
  executable?: boolean;
  onRun?: (code: string) => void;
}

export function CodeBlock({
  code,
  language = 'python',
  filename,
  executable = false,
}: CodeBlockProps) {
  const [copied, setCopied] = useState(false);
  const [output, setOutput] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isRunning, setIsRunning] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [pyodideReady, setPyodideReady] = useState(isPyodideReady());

  // Preload Pyodide when component mounts if executable
  useEffect(() => {
    if (executable && !pyodideReady) {
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
  }, [executable, pyodideReady]);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleRun = async () => {
    setIsRunning(true);
    setOutput(null);
    setError(null);

    try {
      const result = await runPythonWithTimeout(code, 10000);

      if (result.error) {
        setError(result.error);
        setOutput(result.output || null);
      } else {
        setOutput(result.output || '(No output)');
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Execution failed');
    } finally {
      setIsRunning(false);
    }
  };

  return (
    <div className="group rounded-xl overflow-hidden border border-border bg-code-bg shadow-lg transition-all duration-300 hover:shadow-xl hover:border-primary/30">
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-2 bg-surface/50 border-b border-border/50">
        <div className="flex items-center gap-2">
          <Terminal className="w-4 h-4 text-primary" />
          <span className="text-sm font-medium text-text-secondary">
            {filename || language}
          </span>
          {isLoading && (
            <span className="text-xs text-accent flex items-center gap-1">
              <Loader2 className="w-3 h-3 animate-spin" />
              Loading Python...
            </span>
          )}
        </div>

        <div className="flex items-center gap-1">
          {executable && (
            <button
              onClick={handleRun}
              disabled={isRunning || isLoading}
              className={clsx(
                'flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all duration-200',
                isRunning || isLoading
                  ? 'bg-accent/20 text-accent cursor-wait'
                  : 'bg-success/20 text-success hover:bg-success/30 hover:scale-105'
              )}
            >
              {isRunning ? (
                <>
                  <Loader2 className="w-3.5 h-3.5 animate-spin" />
                  Running...
                </>
              ) : (
                <>
                  <Play className="w-3.5 h-3.5" />
                  Run
                </>
              )}
            </button>
          )}

          <button
            onClick={handleCopy}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-surface hover:bg-surface-hover text-text-secondary hover:text-text transition-all duration-200"
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5 text-success" />
                Copied!
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

      {/* Code content */}
      <div className="relative">
        <pre className="p-4 overflow-x-auto text-sm leading-relaxed">
          <code className={`language-${language}`}>
            {highlightPython(code)}
          </code>
        </pre>

        {/* Line numbers overlay */}
        <div className="absolute left-0 top-0 p-4 pointer-events-none select-none">
          {code.split('\n').map((_, i) => (
            <div
              key={i}
              className="text-sm leading-relaxed text-text-muted/50 pr-4 text-right"
              style={{ width: '2.5rem' }}
            >
              {i + 1}
            </div>
          ))}
        </div>
      </div>

      {/* Output panel */}
      {(output || error) && (
        <div className="border-t border-border/50 bg-black/50">
          <div className="px-4 py-2 border-b border-border/30 flex items-center gap-2">
            {error ? (
              <>
                <AlertCircle className="w-4 h-4 text-error" />
                <span className="text-xs font-medium text-error uppercase tracking-wider">
                  Error
                </span>
              </>
            ) : (
              <span className="text-xs font-medium text-text-muted uppercase tracking-wider">
                Output
              </span>
            )}
          </div>
          <pre className={clsx(
            'p-4 text-sm font-mono whitespace-pre-wrap',
            error ? 'text-error' : 'text-success'
          )}>
            {error || output}
          </pre>
        </div>
      )}
    </div>
  );
}

// Simple Python syntax highlighting
function highlightPython(code: string): React.ReactNode {
  const lines = code.split('\n');

  return lines.map((line, lineIndex) => {
    const tokens: Array<{ start: number; end: number; type: string; value: string }> = [];

    // Keywords
    const keywords = ['def', 'class', 'if', 'elif', 'else', 'for', 'while', 'in', 'return', 'import', 'from', 'as', 'try', 'except', 'finally', 'with', 'and', 'or', 'not', 'True', 'False', 'None', 'lambda', 'pass', 'break', 'continue', 'raise', 'yield', 'is', 'global', 'nonlocal', 'del', 'assert'];

    // Built-in functions
    const builtins = ['print', 'len', 'range', 'str', 'int', 'float', 'list', 'dict', 'set', 'tuple', 'sum', 'max', 'min', 'abs', 'round', 'sorted', 'enumerate', 'zip', 'type', 'isinstance', 'open', 'input', 'map', 'filter', 'any', 'all', 'bool', 'format', 'reversed', 'slice', 'super', 'property', 'staticmethod', 'classmethod', 'getattr', 'setattr', 'hasattr', 'vars', 'dir', 'id', 'repr', 'hash', 'callable', 'iter', 'next', 'object', 'chr', 'ord', 'hex', 'oct', 'bin', 'pow', 'divmod', 'complex', 'bytes', 'bytearray', 'memoryview', 'frozenset'];

    let match;

    // Find strings (triple quotes first, then single/double)
    const stringRegex = /(f?"""[\s\S]*?"""|f?'''[\s\S]*?'''|f?"[^"\\]*(?:\\.[^"\\]*)*"|f?'[^'\\]*(?:\\.[^'\\]*)*')/g;
    while ((match = stringRegex.exec(line)) !== null) {
      tokens.push({ start: match.index, end: match.index + match[0].length, type: 'string', value: match[0] });
    }

    // Find comments
    const commentIndex = line.indexOf('#');
    if (commentIndex !== -1 && !tokens.some(t => t.start <= commentIndex && t.end > commentIndex)) {
      tokens.push({ start: commentIndex, end: line.length, type: 'comment', value: line.slice(commentIndex) });
    }

    // Find numbers
    const numberRegex = /\b(\d+\.?\d*([eE][+-]?\d+)?)\b/g;
    while ((match = numberRegex.exec(line)) !== null) {
      if (!tokens.some(t => t.start <= match.index && t.end > match.index)) {
        tokens.push({ start: match.index, end: match.index + match[0].length, type: 'number', value: match[0] });
      }
    }

    // Find keywords
    keywords.forEach(keyword => {
      const keywordRegex = new RegExp(`\\b(${keyword})\\b`, 'g');
      while ((match = keywordRegex.exec(line)) !== null) {
        if (!tokens.some(t => t.start <= match.index && t.end > match.index)) {
          tokens.push({ start: match.index, end: match.index + match[0].length, type: 'keyword', value: match[0] });
        }
      }
    });

    // Find built-ins
    builtins.forEach(builtin => {
      const builtinRegex = new RegExp(`\\b(${builtin})\\s*\\(`, 'g');
      while ((match = builtinRegex.exec(line)) !== null) {
        if (!tokens.some(t => t.start <= match.index && t.end > match.index + builtin.length)) {
          tokens.push({ start: match.index, end: match.index + builtin.length, type: 'builtin', value: builtin });
        }
      }
    });

    // Find function definitions
    const funcDefRegex = /def\s+(\w+)/g;
    while ((match = funcDefRegex.exec(line)) !== null) {
      const funcNameStart = match.index + 4;
      const funcNameEnd = funcNameStart + match[1].length;
      if (!tokens.some(t => t.start <= funcNameStart && t.end > funcNameStart)) {
        tokens.push({ start: funcNameStart, end: funcNameEnd, type: 'function', value: match[1] });
      }
    }

    // Sort tokens by position
    tokens.sort((a, b) => a.start - b.start);

    // Build the highlighted line
    const parts: React.ReactNode[] = [];
    let currentPos = 0;

    for (const token of tokens) {
      if (token.start > currentPos) {
        parts.push(<span key={`text-${lineIndex}-${currentPos}`}>{line.slice(currentPos, token.start)}</span>);
      }

      const colorClass = {
        string: 'text-emerald-400',
        comment: 'text-gray-500 italic',
        number: 'text-amber-400',
        keyword: 'text-purple-400',
        builtin: 'text-cyan-400',
        function: 'text-yellow-400'
      }[token.type];

      parts.push(
        <span key={`${token.type}-${lineIndex}-${token.start}`} className={colorClass}>
          {token.value}
        </span>
      );

      currentPos = token.end;
    }

    if (currentPos < line.length) {
      parts.push(<span key={`text-end-${lineIndex}-${currentPos}`}>{line.slice(currentPos)}</span>);
    }

    return (
      <div key={lineIndex} className="pl-10">
        {parts.length > 0 ? parts : line || ' '}
      </div>
    );
  });
}
