// Python execution service using Pyodide (WebAssembly Python)

declare global {
  interface Window {
    loadPyodide: (config?: { indexURL?: string }) => Promise<PyodideInterface>;
    pyodide: PyodideInterface | null;
  }
}

interface PyodideInterface {
  runPython: (code: string) => unknown;
  runPythonAsync: (code: string) => Promise<unknown>;
  loadPackage: (packages: string | string[]) => Promise<void>;
  globals: Map<string, unknown>;
}

let pyodideInstance: PyodideInterface | null = null;
let pyodideLoading: Promise<PyodideInterface> | null = null;

// Load Pyodide script dynamically
const loadPyodideScript = (): Promise<void> => {
  return new Promise((resolve, reject) => {
    if (typeof window.loadPyodide === 'function') {
      resolve();
      return;
    }

    const script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/pyodide/v0.24.1/full/pyodide.js';
    script.async = true;
    script.onload = () => resolve();
    script.onerror = () => reject(new Error('Failed to load Pyodide'));
    document.head.appendChild(script);
  });
};

// Initialize Pyodide
export const initPyodide = async (): Promise<PyodideInterface> => {
  if (pyodideInstance) {
    return pyodideInstance;
  }

  if (pyodideLoading) {
    return pyodideLoading;
  }

  pyodideLoading = (async () => {
    await loadPyodideScript();

    pyodideInstance = await window.loadPyodide({
      indexURL: 'https://cdn.jsdelivr.net/pyodide/v0.24.1/full/',
    });

    // Set up stdout/stderr capture
    await pyodideInstance.runPythonAsync(`
import sys
from io import StringIO

class OutputCapture:
    def __init__(self):
        self.output = StringIO()

    def write(self, text):
        self.output.write(text)

    def flush(self):
        pass

    def getvalue(self):
        return self.output.getvalue()

    def clear(self):
        self.output = StringIO()

_stdout_capture = OutputCapture()
_stderr_capture = OutputCapture()
sys.stdout = _stdout_capture
sys.stderr = _stderr_capture
`);

    window.pyodide = pyodideInstance;
    return pyodideInstance;
  })();

  return pyodideLoading;
};

// Check if Pyodide is loaded
export const isPyodideReady = (): boolean => {
  return pyodideInstance !== null;
};

// Run Python code and capture output
export interface PythonResult {
  output: string;
  error: string | null;
  returnValue: unknown;
  executionTime: number;
}

export const runPython = async (code: string): Promise<PythonResult> => {
  const startTime = performance.now();

  try {
    const pyodide = await initPyodide();

    // Clear previous output
    await pyodide.runPythonAsync(`
_stdout_capture.clear()
_stderr_capture.clear()
`);

    // Run the user code
    let returnValue: unknown = null;
    let error: string | null = null;

    try {
      returnValue = await pyodide.runPythonAsync(code);
    } catch (err) {
      error = err instanceof Error ? err.message : String(err);
    }

    // Get captured output
    const output = await pyodide.runPythonAsync('_stdout_capture.getvalue()') as string;
    const stderr = await pyodide.runPythonAsync('_stderr_capture.getvalue()') as string;

    const executionTime = performance.now() - startTime;

    return {
      output: output || '',
      error: error || (stderr ? stderr : null),
      returnValue,
      executionTime,
    };
  } catch (err) {
    const executionTime = performance.now() - startTime;
    return {
      output: '',
      error: err instanceof Error ? err.message : 'Unknown error occurred',
      returnValue: null,
      executionTime,
    };
  }
};

// Run code with timeout
export const runPythonWithTimeout = async (
  code: string,
  timeoutMs: number = 10000
): Promise<PythonResult> => {
  return Promise.race([
    runPython(code),
    new Promise<PythonResult>((_, reject) =>
      setTimeout(() => reject(new Error('Execution timeout - code took too long to run')), timeoutMs)
    ),
  ]).catch((err) => ({
    output: '',
    error: err instanceof Error ? err.message : 'Execution failed',
    returnValue: null,
    executionTime: timeoutMs,
  }));
};
