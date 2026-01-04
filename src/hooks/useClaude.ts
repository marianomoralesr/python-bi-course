import { useState, useCallback } from 'react';

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

interface UseClaudeOptions {
  apiKey?: string;
  model?: string;
  maxTokens?: number;
  systemPrompt?: string;
}

interface UseClaudeReturn {
  messages: Message[];
  isLoading: boolean;
  error: string | null;
  sendMessage: (content: string) => Promise<void>;
  clearMessages: () => void;
}

const DEFAULT_SYSTEM_PROMPT = `You are a helpful Python tutor for Business Intelligence students. You help them understand Python concepts, debug their code, and improve their programming skills.

Guidelines:
- Be encouraging and supportive
- Explain concepts clearly with examples
- When reviewing code, provide constructive feedback
- Focus on best practices for data analysis and BI
- Keep responses concise but thorough
- Use Python code examples when helpful
- If asked about non-Python topics, gently redirect to the course content

You have access to the course content:
- Chapter 0: Introduction to Python
- Chapter 1: Variables & Logic (data types, operators, conditionals)
- Chapter 2: Collections, Loops & Functions (lists, dictionaries, loops, functions)`;

export function useClaude(options: UseClaudeOptions = {}): UseClaudeReturn {
  const {
    apiKey = import.meta.env.VITE_ANTHROPIC_API_KEY,
    model = 'claude-sonnet-4-20250514',
    maxTokens = 1024,
    systemPrompt = DEFAULT_SYSTEM_PROMPT
  } = options;

  const [messages, setMessages] = useState<Message[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const sendMessage = useCallback(async (content: string) => {
    if (!content.trim()) return;

    const userMessage: Message = { role: 'user', content };
    setMessages(prev => [...prev, userMessage]);
    setIsLoading(true);
    setError(null);

    try {
      // Check if API key is available
      if (!apiKey) {
        // Simulate response for demo mode
        await new Promise(resolve => setTimeout(resolve, 1000));
        const simulatedResponse = generateSimulatedResponse(content, messages);
        setMessages(prev => [...prev, { role: 'assistant', content: simulatedResponse }]);
        return;
      }

      const response = await fetch('https://api.anthropic.com/v1/messages', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-api-key': apiKey,
          'anthropic-version': '2023-06-01',
          'anthropic-dangerous-direct-browser-access': 'true'
        },
        body: JSON.stringify({
          model,
          max_tokens: maxTokens,
          system: systemPrompt,
          messages: [...messages, userMessage].map(m => ({
            role: m.role,
            content: m.content
          }))
        })
      });

      if (!response.ok) {
        throw new Error(`API error: ${response.status}`);
      }

      const data = await response.json();
      const assistantMessage: Message = {
        role: 'assistant',
        content: data.content[0].text
      };

      setMessages(prev => [...prev, assistantMessage]);
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'An error occurred';
      setError(errorMessage);

      // Provide fallback response
      const fallbackResponse = generateSimulatedResponse(content, messages);
      setMessages(prev => [...prev, { role: 'assistant', content: fallbackResponse }]);
    } finally {
      setIsLoading(false);
    }
  }, [apiKey, model, maxTokens, systemPrompt, messages]);

  const clearMessages = useCallback(() => {
    setMessages([]);
    setError(null);
  }, []);

  return {
    messages,
    isLoading,
    error,
    sendMessage,
    clearMessages
  };
}

// Simulated responses for demo mode
function generateSimulatedResponse(question: string, history: Message[]): string {
  const lowerQuestion = question.toLowerCase();

  // Check for common Python questions
  if (lowerQuestion.includes('variable') || lowerQuestion.includes('what is a')) {
    return `Great question! In Python, a **variable** is a named container that stores a value. You can think of it like a labeled box where you put data.

Here's how you create variables in Python:

\`\`\`python
# String variable
name = "Alex"

# Integer variable
age = 25

# Float variable
price = 19.99

# Boolean variable
is_student = True
\`\`\`

Key points about variables:
- Use meaningful names (e.g., \`total_sales\` instead of \`x\`)
- Python uses snake_case convention
- Variables can be reassigned to new values

Would you like to see more examples or learn about a specific data type?`;
  }

  if (lowerQuestion.includes('list') || lowerQuestion.includes('array')) {
    return `**Lists** in Python are ordered collections that can hold multiple items. They're one of the most versatile data structures!

\`\`\`python
# Creating a list
sales = [100, 250, 175, 320]
products = ["Widget A", "Widget B", "Widget C"]

# Accessing elements (0-indexed)
first_sale = sales[0]  # 100
last_sale = sales[-1]  # 320

# Common operations
sales.append(400)     # Add to end
total = sum(sales)    # Sum all values
count = len(sales)    # Get length
\`\`\`

For BI work, lists are great for storing:
- Time series data
- Product names
- Sales figures by period

Want to learn about list methods or slicing?`;
  }

  if (lowerQuestion.includes('loop') || lowerQuestion.includes('for') || lowerQuestion.includes('while')) {
    return `**Loops** let you repeat code efficiently. Here are the two main types:

**For Loop** - When you know how many iterations:
\`\`\`python
sales = [100, 200, 300]
for sale in sales:
    print("Sale:", sale)

# With range
for month in range(1, 13):
    print(f"Month {month}")
\`\`\`

**While Loop** - When you need a condition:
\`\`\`python
balance = 1000
while balance < 2000:
    balance *= 1.05  # 5% growth
    print(f"Balance: balance")
\`\`\`

Pro tip: Use **list comprehensions** for concise loops:
\`\`\`python
doubled = [x * 2 for x in sales]  # [200, 400, 600]
\`\`\`

Which type of loop would you like to explore more?`;
  }

  if (lowerQuestion.includes('function') || lowerQuestion.includes('def')) {
    return `**Functions** are reusable blocks of code. They're essential for organizing your BI analysis!

\`\`\`python
def calculate_growth(current, previous):
    """Calculate percentage growth between periods."""
    if previous == 0:
        return 0
    return ((current - previous) / previous) * 100

# Using the function
growth = calculate_growth(150000, 125000)
print(f"Growth: {growth:.1f}%")  # Growth: 20.0%
\`\`\`

Key concepts:
- \`def\` keyword defines a function
- Parameters go in parentheses
- \`return\` sends back a value
- Docstrings document what it does

Functions help you:
- Avoid repeating code
- Make analysis reproducible
- Create reusable analytics tools

Would you like examples of BI-specific functions?`;
  }

  if (lowerQuestion.includes('dictionary') || lowerQuestion.includes('dict')) {
    return `**Dictionaries** store data as key-value pairs - perfect for structured data!

\`\`\`python
# Creating a dictionary
product = {
    "name": "Widget Pro",
    "price": 49.99,
    "category": "Electronics",
    "in_stock": True
}

# Accessing values
print(product["name"])  # Widget Pro
print(product.get("rating", "N/A"))  # Safe access

# Modifying
product["price"] = 44.99
product["discount"] = 0.10
\`\`\`

Great for BI because you can represent:
- Customer records
- Product catalogs
- Configuration settings
- API responses

Need help with nested dictionaries or iteration?`;
  }

  if (lowerQuestion.includes('help') || lowerQuestion.includes('stuck') || lowerQuestion.includes('error')) {
    return `I'm here to help! Here are some tips:

**If you're stuck on an exercise:**
1. Read the instructions carefully
2. Look at the hints (if available)
3. Break the problem into smaller steps
4. Check your variable names match

**Common errors:**
- \`IndentationError\`: Check your spacing (use 4 spaces)
- \`NameError\`: Variable not defined - check spelling
- \`TypeError\`: Wrong data type - use int(), str(), etc.
- \`SyntaxError\`: Missing colon, quote, or parenthesis

**Share your code** and describe what you're trying to do, and I'll help you debug it!

What specific issue are you facing?`;
  }

  // Default response
  return `Thanks for your question about "${question.slice(0, 50)}${question.length > 50 ? '...' : ''}"!

I'm your Python tutor for this BI course. I can help with:

📚 **Course Concepts:**
- Variables and data types
- Lists and dictionaries
- Loops and conditionals
- Functions

💡 **Practice Help:**
- Understanding exercises
- Debugging code
- Explaining errors

🎯 **BI Applications:**
- Data analysis patterns
- Best practices

What specific topic would you like to explore? Feel free to share any code you're working on!`;
}
