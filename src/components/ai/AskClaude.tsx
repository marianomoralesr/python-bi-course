import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  Send,
  Trash2,
  ArrowLeft,
  Bot,
  User,
  Sparkles,
  Code,
  BookOpen,
  Lightbulb,
  Loader2
} from 'lucide-react';
import { useClaude } from '../../hooks/useClaude';
import clsx from 'clsx';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

const SUGGESTED_QUESTIONS = [
  { icon: <Code className="w-4 h-4" />, text: "What are Python variables?" },
  { icon: <BookOpen className="w-4 h-4" />, text: "How do I use a for loop?" },
  { icon: <Lightbulb className="w-4 h-4" />, text: "Explain list comprehensions" },
  { icon: <Sparkles className="w-4 h-4" />, text: "Help me with an exercise" }
];

export function AskClaude() {
  const { messages, isLoading, error, sendMessage, clearMessages } = useClaude();
  const [input, setInput] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);

  // Auto-scroll to bottom
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  // Auto-resize textarea
  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.style.height = 'auto';
      inputRef.current.style.height = `${Math.min(inputRef.current.scrollHeight, 150)}px`;
    }
  }, [input]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const question = input.trim();
    setInput('');
    await sendMessage(question);
  };

  const handleSuggestedQuestion = async (question: string) => {
    if (isLoading) return;
    await sendMessage(question);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSubmit(e);
    }
  };

  return (
    <div className="max-w-3xl mx-auto h-[calc(100vh-12rem)] flex flex-col animate-fadeIn">
      {/* Header */}
      <div className="mb-6">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-text-secondary hover:text-primary transition-colors mb-4"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Dashboard
        </Link>

        <div className="flex items-center gap-4">
          <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
            <Bot className="w-8 h-8 text-white" />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-text">Ask Claude</h1>
            <p className="text-text-secondary">
              Your AI Python tutor - ask anything about the course
            </p>
          </div>
        </div>
      </div>

      {/* Chat container */}
      <div className="flex-1 bg-surface rounded-2xl border border-border overflow-hidden flex flex-col">
        {/* Messages area */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {messages.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center p-6">
              <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                <Sparkles className="w-10 h-10 text-primary" />
              </div>
              <h2 className="text-xl font-semibold text-text mb-2">
                How can I help you today?
              </h2>
              <p className="text-text-secondary mb-8 max-w-md">
                Ask me anything about Python, get help with exercises, or clarify concepts from the course.
              </p>

              {/* Suggested questions */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 w-full max-w-lg">
                {SUGGESTED_QUESTIONS.map((q, i) => (
                  <button
                    key={i}
                    onClick={() => handleSuggestedQuestion(q.text)}
                    className="flex items-center gap-3 p-3 rounded-xl bg-surface-hover hover:bg-primary/10 border border-border hover:border-primary/30 text-left transition-all duration-300 group"
                  >
                    <span className="text-primary group-hover:scale-110 transition-transform">
                      {q.icon}
                    </span>
                    <span className="text-sm text-text-secondary group-hover:text-text transition-colors">
                      {q.text}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          ) : (
            <>
              {messages.map((message, index) => (
                <MessageBubble key={index} message={message} />
              ))}

              {isLoading && (
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <Bot className="w-5 h-5 text-primary" />
                  </div>
                  <div className="bg-surface-hover rounded-2xl rounded-tl-none px-4 py-3">
                    <div className="flex items-center gap-2 text-text-secondary">
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span className="text-sm">Thinking...</span>
                    </div>
                  </div>
                </div>
              )}

              <div ref={messagesEndRef} />
            </>
          )}
        </div>

        {/* Input area */}
        <div className="border-t border-border p-4">
          {error && (
            <div className="mb-3 px-3 py-2 bg-accent/10 border border-accent/30 rounded-lg text-sm text-accent">
              Demo mode active - responses are simulated
            </div>
          )}

          <form onSubmit={handleSubmit} className="flex items-end gap-3">
            <div className="flex-1 relative">
              <textarea
                ref={inputRef}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Type your question here..."
                rows={1}
                className={clsx(
                  'w-full px-4 py-3 pr-12 bg-surface-hover rounded-xl border border-border',
                  'focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20',
                  'text-text placeholder:text-text-muted resize-none',
                  'transition-all duration-200'
                )}
              />
            </div>

            <button
              type="submit"
              disabled={!input.trim() || isLoading}
              className={clsx(
                'p-3 rounded-xl transition-all duration-200',
                input.trim() && !isLoading
                  ? 'bg-primary text-white hover:bg-primary-hover'
                  : 'bg-surface-hover text-text-muted cursor-not-allowed'
              )}
            >
              <Send className="w-5 h-5" />
            </button>

            {messages.length > 0 && (
              <button
                type="button"
                onClick={clearMessages}
                className="p-3 rounded-xl bg-surface-hover text-text-muted hover:text-error hover:bg-error/10 transition-colors"
                title="Clear conversation"
              >
                <Trash2 className="w-5 h-5" />
              </button>
            )}
          </form>

          <p className="text-xs text-text-muted mt-2 text-center">
            Press Enter to send, Shift+Enter for new line
          </p>
        </div>
      </div>
    </div>
  );
}

interface MessageBubbleProps {
  message: {
    role: 'user' | 'assistant';
    content: string;
  };
}

function MessageBubble({ message }: MessageBubbleProps) {
  const isUser = message.role === 'user';

  return (
    <div className={clsx('flex items-start gap-3', isUser && 'flex-row-reverse')}>
      {/* Avatar */}
      <div
        className={clsx(
          'w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0',
          isUser ? 'bg-secondary/20' : 'bg-primary/20'
        )}
      >
        {isUser ? (
          <User className="w-5 h-5 text-secondary" />
        ) : (
          <Bot className="w-5 h-5 text-primary" />
        )}
      </div>

      {/* Message content */}
      <div
        className={clsx(
          'max-w-[80%] rounded-2xl px-4 py-3',
          isUser
            ? 'bg-secondary text-white rounded-tr-none'
            : 'bg-surface-hover text-text rounded-tl-none'
        )}
      >
        {isUser ? (
          <p className="text-sm whitespace-pre-wrap">{message.content}</p>
        ) : (
          <div className="prose prose-invert prose-sm max-w-none">
            <ReactMarkdown
              remarkPlugins={[remarkGfm]}
              components={{
                code({ node, className, children, ...props }) {
                  const match = /language-(\w+)/.exec(className || '');
                  const isInline = !match;

                  if (isInline) {
                    return (
                      <code
                        className="bg-code-bg px-1.5 py-0.5 rounded text-accent text-xs"
                        {...props}
                      >
                        {children}
                      </code>
                    );
                  }

                  return (
                    <pre className="bg-code-bg rounded-lg p-3 overflow-x-auto my-2">
                      <code className="text-xs text-text" {...props}>
                        {children}
                      </code>
                    </pre>
                  );
                },
                p: ({ children }) => (
                  <p className="mb-2 last:mb-0 leading-relaxed">{children}</p>
                ),
                ul: ({ children }) => (
                  <ul className="list-disc ml-4 mb-2 space-y-1">{children}</ul>
                ),
                ol: ({ children }) => (
                  <ol className="list-decimal ml-4 mb-2 space-y-1">{children}</ol>
                ),
                li: ({ children }) => (
                  <li className="text-sm">{children}</li>
                ),
                strong: ({ children }) => (
                  <strong className="font-semibold text-text">{children}</strong>
                ),
                h3: ({ children }) => (
                  <h3 className="font-semibold text-text mt-3 mb-1">{children}</h3>
                ),
              }}
            >
              {message.content}
            </ReactMarkdown>
          </div>
        )}
      </div>
    </div>
  );
}
