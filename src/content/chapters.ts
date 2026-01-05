import type { Chapter } from '../types';

export const chapters: Chapter[] = [
  {
    id: 0,
    title: 'Introduction to Python',
    description: 'Get started with Python and understand why it\'s essential for Business Intelligence',
    icon: 'book-open',
    estimatedTime: 30,
    sections: [
      {
        id: 'intro',
        title: 'Welcome to Python for BI',
        estimatedTime: 5,
        content: [
          {
            type: 'heading',
            level: 1,
            text: 'Welcome to Python for Business Intelligence',
            id: 'welcome'
          },
          {
            type: 'paragraph',
            text: 'Python has become the go-to programming language for data professionals. In this course, you\'ll learn how to leverage Python for business intelligence tasks, from data manipulation to analysis and visualization.'
          },
          {
            type: 'callout',
            variant: 'info',
            title: 'Why Python for BI?',
            content: 'Python offers powerful libraries like Pandas, NumPy, and Matplotlib that make data analysis intuitive and efficient. Major companies like Netflix, Google, and Spotify use Python for their data operations.'
          },
          {
            type: 'heading',
            level: 2,
            text: 'What You\'ll Learn',
            id: 'what-youll-learn'
          },
          {
            type: 'list',
            ordered: false,
            items: [
              'Python fundamentals: variables, data types, and operators',
              'Control flow: conditionals and loops',
              'Functions and code organization',
              'Working with collections: lists, dictionaries, and sets',
              'Data manipulation with real-world examples'
            ]
          },
          {
            type: 'heading',
            level: 2,
            text: 'Prerequisites',
            id: 'prerequisites'
          },
          {
            type: 'paragraph',
            text: 'No prior programming experience is required! We\'ll start from the basics and build up your skills progressively. You just need curiosity and willingness to learn.'
          }
        ]
      },
      {
        id: 'setup',
        title: 'Setting Up Your Environment',
        estimatedTime: 10,
        content: [
          {
            type: 'heading',
            level: 1,
            text: 'Setting Up Python',
            id: 'setup-python'
          },
          {
            type: 'paragraph',
            text: 'Before we start coding, let\'s set up your development environment. Don\'t worry—this course includes an interactive code playground, but it\'s good to have Python installed locally too.'
          },
          {
            type: 'heading',
            level: 2,
            text: 'Option 1: Use the Course Playground',
            id: 'playground'
          },
          {
            type: 'paragraph',
            text: 'The easiest way to get started is to use our built-in code playground. You can write and run Python code directly in your browser—no installation needed!'
          },
          {
            type: 'callout',
            variant: 'tip',
            title: 'Pro Tip',
            content: 'The code playground is great for learning. You can experiment with code, see instant results, and get AI-powered feedback on your solutions.'
          },
          {
            type: 'heading',
            level: 2,
            text: 'Option 2: Install Python Locally',
            id: 'install-locally'
          },
          {
            type: 'paragraph',
            text: 'For a complete development experience, install Python on your computer:'
          },
          {
            type: 'list',
            ordered: true,
            items: [
              'Visit python.org and download Python 3.11 or later',
              'Run the installer and check "Add Python to PATH"',
              'Open a terminal and type: python --version',
              'If you see the version number, you\'re ready!'
            ]
          },
          {
            type: 'code',
            language: 'bash',
            code: '# Verify your installation\npython --version\n# Expected output: Python 3.11.x or higher'
          },
          {
            type: 'heading',
            level: 2,
            text: 'Your First Python Program',
            id: 'first-program'
          },
          {
            type: 'paragraph',
            text: 'Let\'s write the traditional "Hello, World!" program to make sure everything is working:'
          },
          {
            type: 'code',
            language: 'python',
            code: '# Your first Python program\nprint("Hello, World!")\nprint("Welcome to Python for BI!")',
            executable: true
          },
          {
            type: 'callout',
            variant: 'info',
            title: 'Understanding the Code',
            content: 'The print() function displays text on the screen. Text inside quotes is called a "string". The # symbol starts a comment, which Python ignores.'
          },
          {
            type: 'heading',
            level: 2,
            text: 'Printing Numbers',
            id: 'printing-numbers'
          },
          {
            type: 'paragraph',
            text: 'You can print numbers directly without quotes. Numbers are different from text - they can be used in calculations.'
          },
          {
            type: 'code',
            language: 'python',
            code: '# Printing numbers (no quotes needed)\nprint(2024)\nprint(42)\nprint(3.14)\n\n# Printing text (quotes required)\nprint("Hello")\nprint("My name is Alex")',
            executable: true
          },
          {
            type: 'exercise-link',
            exerciseId: 'chapter-0-exercise-1',
            title: 'Practice: Hello Python'
          }
        ]
      },
      {
        id: 'python-basics',
        title: 'Python Basics Overview',
        estimatedTime: 15,
        content: [
          {
            type: 'heading',
            level: 1,
            text: 'Python Basics Overview',
            id: 'python-basics'
          },
          {
            type: 'paragraph',
            text: 'Before diving deeper, let\'s get familiar with some fundamental Python concepts that you\'ll use throughout this course.'
          },
          {
            type: 'heading',
            level: 2,
            text: 'Comments',
            id: 'comments'
          },
          {
            type: 'paragraph',
            text: 'Comments help document your code. Python ignores them during execution.'
          },
          {
            type: 'code',
            language: 'python',
            code: '# This is a single-line comment\n\n"""\nThis is a multi-line comment\nor docstring. Great for\nlonger explanations.\n"""\n\nprint("Comments make code readable!")  # Inline comment',
            executable: true
          },
          {
            type: 'heading',
            level: 2,
            text: 'Advanced Print Options',
            id: 'print-options'
          },
          {
            type: 'paragraph',
            text: 'The print() function has optional parameters that control how output is displayed:'
          },
          {
            type: 'code',
            language: 'python',
            code: '# The sep parameter changes what goes between items\nprint("A", "B", "C")           # Default: A B C (space)\nprint("A", "B", "C", sep="-")  # Custom: A-B-C (dash)\nprint("A", "B", "C", sep="")   # No separator: ABC\nprint("A", "B", "C", sep=", ") # Comma: A, B, C',
            executable: true
          },
          {
            type: 'code',
            language: 'python',
            code: '# The end parameter changes what goes at the end\nprint("Hello")        # Default: adds newline, next print on new line\nprint("World")\n\nprint("Hello", end=" ")  # Space instead of newline\nprint("World")           # Continues on same line!\n\nprint("Line 1", end="---")\nprint("Line 2")           # Shows: Line 1---Line 2',
            executable: true
          },
          {
            type: 'callout',
            variant: 'tip',
            title: 'When to Use sep and end',
            content: 'Use sep to format output like "A-B-C" or "1, 2, 3". Use end=" " when you want multiple prints on the same line.'
          },
          {
            type: 'heading',
            level: 2,
            text: 'Indentation Matters',
            id: 'indentation'
          },
          {
            type: 'callout',
            variant: 'warning',
            title: 'Important!',
            content: 'Python uses indentation (spaces or tabs) to define code blocks. Unlike other languages that use braces {}, Python relies on consistent indentation. We recommend using 4 spaces.'
          },
          {
            type: 'code',
            language: 'python',
            code: '# Correct indentation\nif True:\n    print("This is indented correctly")\n    print("Same block, same indentation")\n\n# This would cause an error:\n# if True:\n# print("Wrong!")  # IndentationError!',
            executable: true
          },
          {
            type: 'heading',
            level: 2,
            text: 'Key Takeaways',
            id: 'key-takeaways'
          },
          {
            type: 'table',
            headers: ['Concept', 'Description', 'Example'],
            rows: [
              ['print()', 'Displays output', 'print("Hello")'],
              ['Comments', 'Notes in code, ignored by Python', '# This is a comment'],
              ['Indentation', '4 spaces define code blocks', 'if True:\\n    code'],
              ['Strings', 'Text in quotes', '"Hello" or \'Hello\'']
            ]
          },
          {
            type: 'exercise-link',
            exerciseId: 'chapter-0-exercise-2',
            title: 'Practice: Comments'
          },
          {
            type: 'quiz-link',
            quizId: 'chapter-0-quiz',
            title: 'Chapter 0 Quiz'
          },
          {
            type: 'section-nav',
            showComplete: true,
            showNext: false,
            showBack: true,
            prevSection: 'setup'
          }
        ]
      }
    ]
  },
  {
    id: 1,
    title: 'Variables & Logic',
    description: 'Master variables, data types, operators, and conditional logic',
    icon: 'code',
    estimatedTime: 60,
    sections: [
      {
        id: 'variables',
        title: 'Variables and Assignment',
        estimatedTime: 10,
        content: [
          {
            type: 'heading',
            level: 1,
            text: 'Variables and Assignment',
            id: 'variables'
          },
          {
            type: 'paragraph',
            text: 'Variables are containers that store data values. Think of them as labeled boxes where you can put information and retrieve it later.'
          },
          {
            type: 'code',
            language: 'python',
            code: '# Creating variables\ncompany_name = "TechCorp"\nemployee_count = 150\nrevenue = 2500000.50\nis_profitable = True\n\n# Print our variables\nprint("Company:", company_name)\nprint("Employees:", employee_count)\nprint("Revenue:", revenue)\nprint("Profitable:", is_profitable)',
            executable: true
          },
          {
            type: 'heading',
            level: 2,
            text: 'Variable Naming Rules',
            id: 'naming-rules'
          },
          {
            type: 'list',
            ordered: false,
            items: [
              'Must start with a letter or underscore (_)',
              'Can contain letters, numbers, and underscores',
              'Case-sensitive (name and Name are different)',
              'Cannot use Python keywords (if, for, while, etc.)',
              'Use descriptive names: total_sales instead of ts'
            ]
          },
          {
            type: 'callout',
            variant: 'tip',
            title: 'Python Naming Convention',
            content: 'Use snake_case for variables and functions: total_revenue, calculate_tax. This is the Python community standard (PEP 8).'
          },
          {
            type: 'code',
            language: 'python',
            code: '# Good variable names\nmonthly_sales = 50000\ncustomer_count = 230\naverage_order_value = 217.39\n\n# Bad variable names (avoid these)\n# x = 50000  # Too vague\n# ms = 50000  # Unclear abbreviation\n# 2nd_quarter = 50000  # Can\'t start with number',
            executable: true
          },
          {
            type: 'exercise-link',
            exerciseId: 'chapter-1-variables-exercise',
            title: 'Practice: Business Variables'
          },
          {
            type: 'section-nav',
            showComplete: true,
            showNext: true,
            showBack: true,
            nextSection: 'reserved-words'
          }
        ]
      },
      {
        id: 'reserved-words',
        title: 'Reserved Words & Common Pitfalls',
        estimatedTime: 15,
        content: [
          {
            type: 'heading',
            level: 1,
            text: 'Python Reserved Words & Common Pitfalls',
            id: 'reserved-words-intro'
          },
          {
            type: 'paragraph',
            text: 'Python has special words called KEYWORDS or RESERVED WORDS that have specific meanings in the language. You cannot use these as variable names because Python would get confused about what you mean.'
          },
          {
            type: 'heading',
            level: 2,
            text: 'Python Reserved Words (Keywords)',
            id: 'keywords-list'
          },
          {
            type: 'paragraph',
            text: 'Here are all 35 Python keywords. Memorize the most common ones highlighted in bold:'
          },
          {
            type: 'table',
            headers: ['Category', 'Keywords', 'Description'],
            rows: [
              ['Values', 'True, False, None', 'Boolean values and null/empty value'],
              ['Logic', 'and, or, not, is, in', 'Logical and comparison operators'],
              ['Conditionals', 'if, elif, else', 'Decision-making statements'],
              ['Loops', 'for, while, break, continue', 'Repetition and loop control'],
              ['Functions', 'def, return, lambda', 'Function definition'],
              ['Classes', 'class, self', 'Object-oriented programming'],
              ['Exception', 'try, except, finally, raise', 'Error handling'],
              ['Importing', 'import, from, as', 'Module importing'],
              ['Other', 'with, pass, yield, global, nonlocal, assert, del, async, await', 'Advanced features']
            ]
          },
          {
            type: 'callout',
            variant: 'warning',
            title: 'Common Beginner Mistake',
            content: 'Never use True, False, None, if, for, while, def, class, return, or import as variable names. Python will throw a SyntaxError!'
          },
          {
            type: 'code',
            language: 'python',
            code: '# You can check if a word is a keyword\nimport keyword\n\n# Print all Python keywords\nprint("Python keywords:")\nprint(keyword.kwlist)\n\n# Check specific words\nprint("Is if a keyword?", keyword.iskeyword("if"))      # True\nprint("Is total a keyword?", keyword.iskeyword("total"))  # False',
            executable: true
          },
          {
            type: 'heading',
            level: 2,
            text: 'Common Syntax Patterns',
            id: 'syntax-patterns'
          },
          {
            type: 'paragraph',
            text: 'Here are the most common code patterns you will see and write in Python. Study these forms carefully:'
          },
          {
            type: 'heading',
            level: 3,
            text: 'Pattern 1: Variable Assignment',
            id: 'pattern-assignment'
          },
          {
            type: 'code',
            language: 'python',
            code: '# Basic syntax: variable_name = value\n\n# String assignment\nname = "John"\n\n# Number assignment\nage = 25\nprice = 19.99\n\n# Boolean assignment\nis_active = True\n\n# Multiple assignment (same value)\na = b = c = 0\n\n# Multiple assignment (different values)\nx, y, z = 1, 2, 3',
            executable: true
          },
          {
            type: 'heading',
            level: 3,
            text: 'Pattern 2: Conditional Statements',
            id: 'pattern-conditionals'
          },
          {
            type: 'code',
            language: 'python',
            code: '# Basic if statement pattern\nscore = 85\n\nif score >= 90:\n    grade = "A"\nelif score >= 80:\n    grade = "B"\nelif score >= 70:\n    grade = "C"\nelse:\n    grade = "F"\n\nprint(f"Score: {score}, Grade: {grade}")',
            executable: true
          },
          {
            type: 'heading',
            level: 3,
            text: 'Pattern 3: Loops',
            id: 'pattern-loops'
          },
          {
            type: 'code',
            language: 'python',
            code: '# For loop pattern - iterating over items\nfruits = ["apple", "banana", "cherry"]\n\nfor fruit in fruits:\n    print(f"I like {fruit}")\n\n# For loop with range\nfor i in range(5):  # 0, 1, 2, 3, 4\n    print(f"Count: {i}")',
            executable: true
          },
          {
            type: 'heading',
            level: 2,
            text: 'Common Pitfalls to Avoid',
            id: 'common-pitfalls'
          },
          {
            type: 'callout',
            variant: 'error',
            title: 'Pitfall #1: Using Reserved Words as Variables',
            content: 'Never use keywords like if, for, class, True, or False as variable names. This causes a SyntaxError.'
          },
          {
            type: 'code',
            language: 'python',
            code: '# WRONG - these will cause errors:\n# if = 5            # SyntaxError!\n# class = "Math"    # SyntaxError!\n# True = 100        # SyntaxError!\n\n# CORRECT alternatives:\nif_condition = 5\nclass_name = "Math"\nis_true = 100\n\nprint(if_condition, class_name, is_true)',
            executable: true
          },
          {
            type: 'callout',
            variant: 'error',
            title: 'Pitfall #2: Forgetting the Colon (:)',
            content: 'Statements like if, for, while, and def MUST end with a colon. Missing it causes a SyntaxError.'
          },
          {
            type: 'code',
            language: 'python',
            code: '# WRONG - missing colon:\n# if x > 5\n#     print("big")   # SyntaxError!\n\n# CORRECT - with colon:\nx = 10\nif x > 5:           # <- colon required!\n    print("big")\n\n# Same for loops:\nfor i in range(3):  # <- colon required!\n    print(i)',
            executable: true
          },
          {
            type: 'callout',
            variant: 'error',
            title: 'Pitfall #3: Incorrect Indentation',
            content: 'Python uses indentation to define code blocks. Inconsistent or missing indentation causes IndentationError.'
          },
          {
            type: 'code',
            language: 'python',
            code: '# WRONG - inconsistent indentation:\n# if True:\n#     print("first")   # 4 spaces\n#   print("second")     # 2 spaces - IndentationError!\n\n# CORRECT - consistent indentation:\nif True:\n    print("first")    # 4 spaces\n    print("second")   # 4 spaces - same!\n    print("third")    # 4 spaces - consistent',
            executable: true
          },
          {
            type: 'callout',
            variant: 'error',
            title: 'Pitfall #4: Mixing Quotes Incorrectly',
            content: 'String must start and end with the same type of quote. Mixing causes SyntaxError.'
          },
          {
            type: 'code',
            language: 'python',
            code: "# WRONG:\n# message = \"Hello'   # Mixed quotes - SyntaxError!\n# name = 'John\"       # Mixed quotes - SyntaxError!\n\n# CORRECT:\nmessage1 = \"Hello\"    # Double quotes\nmessage2 = 'Hello'    # Single quotes\n\n# When you need quotes inside the string:\nsaying = \"He said 'Hi' to me\"     # Use opposite quote type\nsaying2 = 'She replied \"Hello\"'\n\nprint(saying)\nprint(saying2)",
            executable: true
          },
          {
            type: 'callout',
            variant: 'error',
            title: 'Pitfall #5: Using = Instead of ==',
            content: 'Single = is for assignment. Double == is for comparison. Using the wrong one in conditions causes errors or bugs.'
          },
          {
            type: 'code',
            language: 'python',
            code: "# = is for assignment (storing a value)\nx = 5  # Store 5 in x\n\n# == is for comparison (checking equality)\nif x == 5:      # Check if x equals 5\n    print(\"x is 5!\")\n\n# COMMON MISTAKE:\n# if x = 5:    # SyntaxError! Cannot use = in if statement\n\n# CORRECT:\nif x == 5:      # Use == for comparison\n    print(\"Correct!\")",
            executable: true
          },
          {
            type: 'heading',
            level: 2,
            text: 'Error Prediction Exercises',
            id: 'error-prediction'
          },
          {
            type: 'paragraph',
            text: 'Test your understanding! Look at each code snippet and predict whether it will run successfully or produce an error.'
          },
          {
            type: 'mini-quiz',
            id: 'error-predict-1',
            question: 'Will this code run? for = 10',
            options: ['Yes, it will print 10', 'No, SyntaxError - for is a keyword', 'No, NameError - missing variable', 'No, TypeError - wrong type'],
            correctAnswer: 1,
            explanation: 'The word "for" is a Python reserved keyword used for loops. You cannot use it as a variable name. Python will raise a SyntaxError: invalid syntax.'
          },
          {
            type: 'mini-quiz',
            id: 'error-predict-2',
            question: 'Will this code run? if x > 5 print("big")',
            options: ['Yes, if x is greater than 5', 'No, SyntaxError - missing colon (:)', 'No, NameError - x not defined', 'No, IndentationError'],
            correctAnswer: 1,
            explanation: 'The if statement is missing a colon at the end. Correct syntax: if x > 5: (with colon). Also, the print should be on the next line with indentation.'
          },
          {
            type: 'mini-quiz',
            id: 'error-predict-3',
            question: 'What will this output? print("Hello" + 5)',
            options: ['Hello5', 'Hello 5', 'TypeError - cannot add str and int', '5Hello'],
            correctAnswer: 2,
            explanation: 'You cannot concatenate a string with an integer directly. You need to convert the number to string first: print("Hello" + str(5)) or use f-strings: print(f"Hello{5}").'
          },
          {
            type: 'mini-quiz',
            id: 'error-predict-4',
            question: 'Will this run? class = "Mathematics"',
            options: ['Yes, class is set to Mathematics', 'No, SyntaxError - class is a keyword', 'No, NameError - class not defined', 'Yes, but prints nothing'],
            correctAnswer: 1,
            explanation: 'The word "class" is a Python reserved keyword used for creating classes. You cannot use it as a variable name. Use alternatives like class_name or course_class.'
          },
          {
            type: 'mini-quiz',
            id: 'error-predict-5',
            question: 'What happens with: name = "Alice\\nprint(name)',
            options: ['Prints Alice', 'SyntaxError - unclosed string', 'NameError - name not defined', 'Prints name'],
            correctAnswer: 1,
            explanation: 'The string "Alice starts with double quotes but never closes them (there is no closing "). This causes a SyntaxError: EOL while scanning string literal.'
          },
          {
            type: 'heading',
            level: 2,
            text: 'Quick Reference: Syntax Rules',
            id: 'syntax-reference'
          },
          {
            type: 'table',
            headers: ['Rule', 'Correct', 'Wrong'],
            rows: [
              ['Variable names start with letter/underscore', 'name, _count, total_1', '1st_name, @email'],
              ['Statements end with colon', 'if x > 5:', 'if x > 5'],
              ['Use 4 spaces for indentation', '    print(x)', '  print(x)'],
              ['Comparison uses ==', 'if x == 5:', 'if x = 5:'],
              ['Strings match quotes', '"hello" or \'hello\'', '"hello\''],
              ['No keywords as variables', 'my_class = "Math"', 'class = "Math"']
            ]
          },
          {
            type: 'callout',
            variant: 'tip',
            title: 'Pro Tip: Let Python Help You',
            content: 'When you get an error, read the message carefully! Python tells you the line number and type of error. SyntaxError usually means you made a typo or forgot something like a colon or quote.'
          },
          {
            type: 'section-nav',
            showComplete: true,
            showNext: true,
            showBack: true,
            prevSection: 'variables',
            nextSection: 'data-types'
          }
        ]
      },
      {
        id: 'data-types',
        title: 'Data Types',
        estimatedTime: 30,
        content: [
          {
            type: 'heading',
            level: 1,
            text: 'Python Data Types',
            id: 'data-types'
          },
          {
            type: 'paragraph',
            text: 'Every piece of data in Python has a type. Understanding data types is fundamental to Business Intelligence because you\'ll work with numbers, text, dates, and more. Let\'s explore each type step by step.'
          },
          {
            type: 'callout',
            variant: 'info',
            title: 'Why Data Types Matter',
            content: 'Different operations work on different types. You can add numbers (5 + 3 = 8), but adding text works differently ("Hello" + "World" = "HelloWorld"). Knowing your data type helps you avoid errors.'
          },
          {
            type: 'heading',
            level: 2,
            text: 'Step 1: Integers (int) - Whole Numbers',
            id: 'integers'
          },
          {
            type: 'paragraph',
            text: 'Integers are whole numbers without decimals. In BI, you\'ll use them for counts, IDs, quantities, and years.'
          },
          {
            type: 'code',
            language: 'python',
            code: '# Creating integer variables\nproduct_count = 150      # Number of products\nemployee_id = 10042      # Employee ID\nyear = 2024              # Current year\nquarter = 4              # Q4\nnegative_balance = -500  # Negative numbers work too!\n\n# Display the values\nprint("Products:", product_count)\nprint("Employee ID:", employee_id)\nprint("Year:", year)',
            executable: true
          },
          {
            type: 'paragraph',
            text: 'You can verify the type using the type() function:'
          },
          {
            type: 'code',
            language: 'python',
            code: '# Check the type of a variable\ncount = 42\nprint(type(count))  # <class \'int\'>\n\n# Integer math always gives integers (except division)\nprint(10 + 5)   # 15 (integer)\nprint(10 * 5)   # 50 (integer)\nprint(10 // 3)  # 3 (integer - floor division)',
            executable: true
          },
          {
            type: 'callout',
            variant: 'tip',
            title: 'Quick Practice',
            content: 'Try changing the values in the code above and run it again. What happens when you multiply two integers? What about subtracting?'
          },
          {
            type: 'mini-quiz',
            id: 'quiz-integers-1',
            question: '¿Cuál es el resultado de 10 // 3 en Python?',
            options: ['3.33', '3', '4', '3.0'],
            correctAnswer: 1,
            explanation: 'El operador // realiza división entera (floor division), que devuelve solo la parte entera del resultado. 10 ÷ 3 = 3.33, pero // devuelve 3.'
          },
          {
            type: 'heading',
            level: 3,
            text: 'Interactive Exercise: Create Integer Variables',
            id: 'int-exercise'
          },
          {
            type: 'paragraph',
            text: 'Now it is your turn! Create integer variables and perform a calculation.'
          },
          {
            type: 'callout',
            variant: 'info',
            title: 'Your Task',
            content: '1. Create a variable total_orders with value 250\n2. Create a variable days_in_month with value 30\n3. Calculate orders_per_day using floor division (//)\n4. Print the result using an f-string'
          },
          {
            type: 'code',
            language: 'python',
            code: '# YOUR CODE: Create the variables and calculate\n# Hint: Use // for floor division\n\ntotal_orders = ___       # Number of orders this month\ndays_in_month = ___      # Days in the month\n\n# Calculate orders per day\norders_per_day = ___ // ___\nprint(f"Average orders per day: {orders_per_day}")',
            executable: true
          },
          {
            type: 'callout',
            variant: 'tip',
            title: 'Solution (click to expand)',
            content: 'total_orders = 250\ndays_in_month = 30\norders_per_day = total_orders // days_in_month\nResult: 8 orders per day'
          },
          {
            type: 'heading',
            level: 2,
            text: 'Step 2: Floats (float) - Decimal Numbers',
            id: 'floats'
          },
          {
            type: 'paragraph',
            text: 'Floats are numbers with decimal points. Essential for prices, percentages, rates, and precise calculations.'
          },
          {
            type: 'code',
            language: 'python',
            code: '# Creating float variables\nprice = 29.99            # Product price\ntax_rate = 0.08          # 8% tax rate\ngrowth_rate = 0.15       # 15% growth\npi = 3.14159             # Mathematical constant\ntemperature = -3.5       # Negative float\n\nprint("Price:", price)\nprint("Tax Rate:", tax_rate)\nprint("Growth:", growth_rate)',
            executable: true
          },
          {
            type: 'paragraph',
            text: 'Division always produces a float, even with integers:'
          },
          {
            type: 'code',
            language: 'python',
            code: '# Division always gives a float\nresult = 10 / 4\nprint(result)       # 2.5\nprint(type(result)) # <class \'float\'>\n\n# Even when it divides evenly!\nresult2 = 10 / 2\nprint(result2)      # 2.0 (still a float!)',
            executable: true
          },
          {
            type: 'heading',
            level: 3,
            text: 'Practical Example: Calculating Total Price',
            id: 'float-example'
          },
          {
            type: 'code',
            language: 'python',
            code: '# Real-world BI calculation\nbase_price = 49.99\nquantity = 3\ntax_rate = 0.08  # 8% tax\n\n# Step 1: Calculate subtotal\nsubtotal = base_price * quantity\nprint(f"Subtotal: ${subtotal}")\n\n# Step 2: Calculate tax\ntax_amount = subtotal * tax_rate\nprint(f"Tax (8%): ${tax_amount}")\n\n# Step 3: Calculate total\ntotal = subtotal + tax_amount\nprint(f"Total: ${total}")',
            executable: true
          },
          {
            type: 'heading',
            level: 3,
            text: 'Interactive Exercise: Calculate Discount',
            id: 'float-exercise'
          },
          {
            type: 'paragraph',
            text: 'Practice calculating discounts - a common BI task for retail analytics.'
          },
          {
            type: 'callout',
            variant: 'info',
            title: 'Your Task',
            content: '1. Set original_price to 100.00\n2. Set discount_rate to 0.25 (25%)\n3. Calculate discount_amount (price * rate)\n4. Calculate final_price (original - discount)\n5. Print both results with $ formatting'
          },
          {
            type: 'code',
            language: 'python',
            code: '# YOUR CODE: Calculate the discounted price\noriginal_price = ___      # Original price\ndiscount_rate = ___       # 25% as a decimal\n\n# Calculate the discount amount\ndiscount_amount = ___ * ___\nprint(f"Discount: ${discount_amount}")\n\n# Calculate final price\nfinal_price = ___ - ___\nprint(f"Final price: ${final_price}")',
            executable: true
          },
          {
            type: 'callout',
            variant: 'tip',
            title: 'Solution',
            content: 'original_price = 100.00\ndiscount_rate = 0.25\ndiscount_amount = original_price * discount_rate (= 25.0)\nfinal_price = original_price - discount_amount (= 75.0)'
          },
          {
            type: 'mini-quiz',
            id: 'quiz-floats-1',
            question: '¿Qué tipo de dato devuelve la operación 10 / 2 en Python?',
            options: ['int (5)', 'float (5.0)', 'str ("5")', 'Error'],
            correctAnswer: 1,
            explanation: 'La división con / siempre devuelve un float en Python, incluso cuando el resultado es un número entero. Por eso 10 / 2 = 5.0 (float), no 5 (int).'
          },
          {
            type: 'heading',
            level: 2,
            text: 'Step 3: Strings (str) - Text Data',
            id: 'strings-detail'
          },
          {
            type: 'paragraph',
            text: 'Strings hold text data. They\'re enclosed in quotes (single \' or double "). In BI, strings are used for names, categories, descriptions, and IDs.'
          },
          {
            type: 'code',
            language: 'python',
            code: '# Creating strings - use single or double quotes\ncustomer_name = "John Smith"\nproduct_name = \'Widget Pro\'\ncategory = "Electronics"\nsku = "PROD-12345"\n\n# Empty string\nempty = ""\n\nprint("Customer:", customer_name)\nprint("Product:", product_name)\nprint("SKU:", sku)',
            executable: true
          },
          {
            type: 'heading',
            level: 3,
            text: 'Understanding Indexes - Accessing Individual Characters',
            id: 'indexes-intro'
          },
          {
            type: 'paragraph',
            text: 'Every character in a string has a position called an INDEX. Indexes start at 0, not 1! Think of it like an apartment building where the ground floor is 0.'
          },
          {
            type: 'code',
            language: 'python',
            code: '# Indexes start at 0!\nword = "Python"\n\n# Index:  0  1  2  3  4  5\n# Char:   P  y  t  h  o  n\n\nprint(word[0])  # P - first character (index 0)\nprint(word[1])  # y - second character (index 1)\nprint(word[2])  # t - third character (index 2)\nprint(word[5])  # n - sixth character (index 5)',
            executable: true
          },
          {
            type: 'callout',
            variant: 'warning',
            title: 'Important: Indexes Start at 0!',
            content: 'The first character is at index 0, not 1. This is one of the most common mistakes beginners make. Remember: index = position - 1'
          },
          {
            type: 'code',
            language: 'python',
            code: '# Negative indexes count from the end\nword = "Python"\n\n# Negative index:  -6  -5  -4  -3  -2  -1\n# Positive index:   0   1   2   3   4   5\n# Character:        P   y   t   h   o   n\n\nprint(word[-1])  # n - last character\nprint(word[-2])  # o - second to last\nprint(word[-6])  # P - first character (same as word[0])',
            executable: true
          },
          {
            type: 'heading',
            level: 3,
            text: 'Interactive Exercise: String Indexing',
            id: 'string-index-exercise'
          },
          {
            type: 'paragraph',
            text: 'Practice accessing characters by their index position.'
          },
          {
            type: 'callout',
            variant: 'info',
            title: 'Your Task',
            content: 'Given company = "Microsoft":\n1. Get the first letter (index 0)\n2. Get the last letter (use negative index)\n3. Get the 5th letter (remember: index = position - 1)'
          },
          {
            type: 'code',
            language: 'python',
            code: '# Practice indexing\ncompany = "Microsoft"\n\n# Index:  0  1  2  3  4  5  6  7  8\n# Char:   M  i  c  r  o  s  o  f  t\n\n# YOUR CODE: Get the first letter (should be M)\nfirst = company[___]\nprint(f"First letter: {first}")\n\n# YOUR CODE: Get the last letter using negative index (should be t)\nlast = company[___]\nprint(f"Last letter: {last}")\n\n# YOUR CODE: Get the 5th letter (should be o)\nfifth = company[___]\nprint(f"Fifth letter: {fifth}")',
            executable: true
          },
          {
            type: 'callout',
            variant: 'tip',
            title: 'Solution',
            content: 'first = company[0] -> M\nlast = company[-1] -> t\nfifth = company[4] -> o (5th position = index 4)'
          },
          {
            type: 'mini-quiz',
            id: 'quiz-strings-index',
            question: 'Si palabra = "Python", ¿cuál es el valor de palabra[2]?',
            options: ['P', 'y', 't', 'h'],
            correctAnswer: 2,
            explanation: 'Los índices empiezan en 0: P=0, y=1, t=2, h=3, o=4, n=5. Por lo tanto, palabra[2] devuelve "t".'
          },
          {
            type: 'heading',
            level: 3,
            text: 'String Slicing - Extracting Parts of Strings',
            id: 'slicing-detail'
          },
          {
            type: 'paragraph',
            text: 'Slicing extracts a portion of a string. The syntax is string[start:end] where start is included and end is EXCLUDED.'
          },
          {
            type: 'code',
            language: 'python',
            code: '# Slicing syntax: string[start:end]\n# start = first index to include\n# end = first index to EXCLUDE\n\ntext = "Python"\n\n# Get characters from index 0 to 2 (3 is excluded)\nprint(text[0:3])  # "Pyt" (indexes 0, 1, 2)\n\n# Get characters from index 2 to 5\nprint(text[2:5])  # "tho" (indexes 2, 3, 4)\n\n# Shortcuts\nprint(text[:3])   # "Pyt" - from start to index 3\nprint(text[3:])   # "hon" - from index 3 to end\nprint(text[:])    # "Python" - entire string',
            executable: true
          },
          {
            type: 'code',
            language: 'python',
            code: '# Practical slicing example: Parsing a date\ndate = "2024-01-15"  # YYYY-MM-DD format\n\n# Extract year (first 4 characters)\nyear = date[0:4]\nprint(f"Year: {year}")     # 2024\n\n# Extract month (characters 5-6, skip the dash)\nmonth = date[5:7]\nprint(f"Month: {month}")   # 01\n\n# Extract day (last 2 characters)\nday = date[8:10]\nprint(f"Day: {day}")       # 15\n\n# Or use negative indexing for day\nday_alt = date[-2:]\nprint(f"Day (alt): {day_alt}")  # 15',
            executable: true
          },
          {
            type: 'heading',
            level: 3,
            text: 'Interactive Exercise: Extract SKU Parts',
            id: 'slice-exercise'
          },
          {
            type: 'paragraph',
            text: 'SKU parsing is a real-world BI task. Practice extracting data from a formatted string.'
          },
          {
            type: 'callout',
            variant: 'info',
            title: 'Your Task',
            content: 'Given SKU format: CAT-12345-XL (Category-ID-Size)\n1. Extract category (first 3 chars): use [0:3]\n2. Extract product_id (chars 4-8): use [4:9]\n3. Extract size (last 2 chars): use [-2:]'
          },
          {
            type: 'code',
            language: 'python',
            code: '# Product SKU format: CAT-12345-XL\n# Category (3 chars) - ID (5 digits) - Size (2 chars)\nsku = "ELE-98765-MD"\n\n# YOUR CODE: Extract the category code (first 3 characters)\ncategory = sku[___:___]\nprint(f"Category: {category}")  # Should print: ELE\n\n# YOUR CODE: Extract the product ID (characters at positions 4-8)\nproduct_id = sku[___:___]\nprint(f"Product ID: {product_id}")  # Should print: 98765\n\n# YOUR CODE: Extract the size (last 2 characters)\nsize = sku[___:]\nprint(f"Size: {size}")  # Should print: MD',
            executable: true
          },
          {
            type: 'callout',
            variant: 'tip',
            title: 'Solution',
            content: 'category = sku[0:3] -> ELE\nproduct_id = sku[4:9] -> 98765\nsize = sku[-2:] -> MD'
          },
          {
            type: 'mini-quiz',
            id: 'quiz-strings-slice',
            question: 'Si texto = "Python", ¿qué devuelve texto[1:4]?',
            options: ['Pyt', 'yth', 'ytho', 'hon'],
            correctAnswer: 1,
            explanation: 'El slicing texto[1:4] incluye desde el índice 1 hasta el 3 (el 4 se excluye). P=0, y=1, t=2, h=3. Resultado: "yth".'
          },
          {
            type: 'heading',
            level: 3,
            text: 'String Length and Concatenation',
            id: 'string-ops'
          },
          {
            type: 'code',
            language: 'python',
            code: '# Get the length of a string\nname = "Business Intelligence"\nlength = len(name)\nprint(f"\'{name}\' has {length} characters")  # 21 characters\n\n# Concatenation - joining strings with +\nfirst_name = "John"\nlast_name = "Smith"\nfull_name = first_name + " " + last_name\nprint(f"Full name: {full_name}")  # John Smith\n\n# Repeat strings with *\nline = "-" * 20\nprint(line)  # --------------------',
            executable: true
          },
          {
            type: 'heading',
            level: 2,
            text: 'Step 4: f-strings - Formatting Text with Variables',
            id: 'f-strings-detail'
          },
          {
            type: 'paragraph',
            text: 'f-strings are the modern way to create formatted text in Python. They let you embed variables and expressions directly into strings.'
          },
          {
            type: 'code',
            language: 'python',
            code: '# f-string basics: add f before the quotes\n# Use {variable} to insert values\n\nname = "Alice"\nage = 28\n\n# Without f-string (old way)\nprint("Name: " + name + ", Age: " + str(age))  # Awkward!\n\n# With f-string (modern way)\nprint(f"Name: {name}, Age: {age}")  # Clean and easy!',
            executable: true
          },
          {
            type: 'code',
            language: 'python',
            code: '# f-strings with calculations\nprice = 49.99\nquantity = 3\n\n# You can do math inside the braces!\nprint(f"Subtotal: ${price * quantity}")\n\n# Variables and calculations together\ntax_rate = 0.08\nsubtotal = price * quantity\ntax = subtotal * tax_rate\nprint(f"Items: {quantity}")\nprint(f"Subtotal: ${subtotal}")\nprint(f"Tax ({tax_rate * 100}%): ${tax}")\nprint(f"Total: ${subtotal + tax}")',
            executable: true
          },
          {
            type: 'heading',
            level: 3,
            text: 'f-string Number Formatting',
            id: 'f-string-formatting'
          },
          {
            type: 'paragraph',
            text: 'f-strings can format numbers beautifully using format specifiers after a colon.'
          },
          {
            type: 'code',
            language: 'python',
            code: '# Number formatting in f-strings\nsales = 1234567.891\n\n# Basic - no formatting\nprint(f"Sales: {sales}")  # 1234567.891\n\n# With comma separators for thousands\nprint(f"Sales: {sales:,}")  # 1,234,567.891\n\n# Limit decimal places\nprint(f"Sales: {sales:.2f}")  # 1234567.89 (2 decimals)\n\n# Combine comma and decimals\nprint(f"Sales: ${sales:,.2f}")  # $1,234,567.89\n\n# Percentage formatting\nrate = 0.156\nprint(f"Growth: {rate:.1%}")  # 15.6%',
            executable: true
          },
          {
            type: 'table',
            headers: ['Format', 'Example', 'Result', 'Use Case'],
            rows: [
              [':,', 'f\"{1234567:,}\"', '1,234,567', 'Large numbers'],
              [':.2f', 'f\"{3.14159:.2f}\"', '3.14', '2 decimal places'],
              [':,.2f', 'f\"${1234.5:,.2f}\"', '$1,234.50', 'Currency'],
              [':.1%', 'f\"{0.156:.1%}\"', '15.6%', 'Percentages'],
              [':>10', 'f\"{42:>10}\"', '        42', 'Right align']
            ]
          },
          {
            type: 'mini-quiz',
            id: 'quiz-fstrings-1',
            question: 'Si tasa = 0.25, ¿qué muestra f"{tasa:.0%}"?',
            options: ['0.25', '25%', '25.0%', '0.25%'],
            correctAnswer: 1,
            explanation: 'El formato :.0% convierte un decimal a porcentaje (multiplica por 100) y añade el símbolo %. El .0 indica 0 decimales, así que 0.25 se muestra como "25%".'
          },
          {
            type: 'heading',
            level: 3,
            text: 'Interactive Exercise: Format a Sales Report',
            id: 'f-string-exercise'
          },
          {
            type: 'paragraph',
            text: 'Create a professionally formatted sales report using f-string formatting specifiers.'
          },
          {
            type: 'callout',
            variant: 'info',
            title: 'Your Task',
            content: 'Format the output using these specifiers:\n- :, for thousands separator\n- :.2f for 2 decimal places\n- :,.2f for both (currency format)'
          },
          {
            type: 'code',
            language: 'python',
            code: '# Create a formatted sales report\nproduct = "Widget Pro"\nunits_sold = 1250\nunit_price = 29.99\n\n# Calculate total\ntotal_revenue = units_sold * unit_price\n\n# YOUR CODE: Format the report\nprint("=" * 30)\nprint(f"Product: {product}")\n# Add :, to format with comma separator\nprint(f"Units Sold: {units_sold___}")\n# Add :.2f for 2 decimal places\nprint(f"Unit Price: ${unit_price___}")\n# Add :,.2f for currency format\nprint(f"Total Revenue: ${total_revenue___}")\nprint("=" * 30)',
            executable: true
          },
          {
            type: 'callout',
            variant: 'tip',
            title: 'Solution',
            content: 'Units Sold: {units_sold:,} -> 1,250\nUnit Price: {unit_price:.2f} -> 29.99\nTotal Revenue: {total_revenue:,.2f} -> 37,487.50'
          },
          {
            type: 'heading',
            level: 2,
            text: 'Step 5: String Methods for Data Cleaning',
            id: 'string-methods-detail'
          },
          {
            type: 'paragraph',
            text: 'Real data is often messy. String methods help you clean and standardize text data.'
          },
          {
            type: 'code',
            language: 'python',
            code: '# Case conversion methods\nname = "jOHN sMITH"  # Messy case\n\nprint(name.upper())  # JOHN SMITH - all uppercase\nprint(name.lower())  # john smith - all lowercase  \nprint(name.title())  # John Smith - title case (proper names)\nprint(name.capitalize())  # John smith - only first letter',
            executable: true
          },
          {
            type: 'code',
            language: 'python',
            code: '# Cleaning whitespace - very common in data!\nmessy_data = "   Product Name   "\n\n# strip() removes spaces from both ends\nclean = messy_data.strip()\nprint(f"\'{clean}\'")  # \'Product Name\'\n\n# lstrip() - left strip only\n# rstrip() - right strip only\nprint(f"\'{messy_data.lstrip()}\'")  # \'Product Name   \'\nprint(f"\'{messy_data.rstrip()}\'")  # \'   Product Name\'\n\n# Chain methods together!\nmessy_name = "   ALICE JOHNSON   "\nclean_name = messy_name.strip().title()\nprint(clean_name)  # Alice Johnson',
            executable: true
          },
          {
            type: 'code',
            language: 'python',
            code: '# Replace text\nphone = "555-123-4567"\nclean_phone = phone.replace("-", "")\nprint(clean_phone)  # 5551234567\n\n# Split strings into lists\nnames = "Alice,Bob,Charlie"\nname_list = names.split(",")\nprint(name_list)  # [\'Alice\', \'Bob\', \'Charlie\']\n\n# Join list back into string\nnames_with_space = " | ".join(name_list)\nprint(names_with_space)  # Alice | Bob | Charlie',
            executable: true
          },
          {
            type: 'heading',
            level: 3,
            text: 'Interactive Exercise: Clean Customer Data',
            id: 'clean-data-exercise'
          },
          {
            type: 'paragraph',
            text: 'Data cleaning is one of the most important BI skills. Practice cleaning messy customer data.'
          },
          {
            type: 'callout',
            variant: 'info',
            title: 'Your Task',
            content: 'Clean this messy data using string methods:\n1. Name: strip() to remove spaces, title() for proper case\n2. Email: strip() then lower() for standard format\n3. Phone: replace("-", "") to remove dashes'
          },
          {
            type: 'code',
            language: 'python',
            code: '# Clean this messy customer data\nraw_name = "   JOHN DOE   "\nraw_email = "  John.Doe@EMAIL.COM  "\nraw_phone = "555-999-1234"\n\n# YOUR CODE: Clean the name (remove spaces, proper case)\n# Hint: chain methods with .strip().title()\nclean_name = raw_name.___().___\nprint(f"Name: {clean_name}")  # Should print: John Doe\n\n# YOUR CODE: Clean the email (remove spaces, lowercase)\nclean_email = raw_email.___().___\nprint(f"Email: {clean_email}")  # Should print: john.doe@email.com\n\n# YOUR CODE: Clean the phone (remove dashes)\nclean_phone = raw_phone.___("___", "___")\nprint(f"Phone: {clean_phone}")  # Should print: 5559991234',
            executable: true
          },
          {
            type: 'callout',
            variant: 'tip',
            title: 'Solution',
            content: 'clean_name = raw_name.strip().title()\nclean_email = raw_email.strip().lower()\nclean_phone = raw_phone.replace("-", "")'
          },
          {
            type: 'exercise-link',
            exerciseId: 'chapter-1-strings-exercise',
            title: 'Practice: String Manipulation'
          },
          {
            type: 'heading',
            level: 2,
            text: 'Step 6: Booleans (bool) - True or False',
            id: 'booleans-detail'
          },
          {
            type: 'paragraph',
            text: 'Booleans have only two values: True or False. They\'re essential for making decisions and filtering data.'
          },
          {
            type: 'code',
            language: 'python',
            code: '# Creating booleans directly\nis_active = True\nhas_discount = False\nis_member = True\n\nprint(is_active)  # True\nprint(type(is_active))  # <class \'bool\'>',
            executable: true
          },
          {
            type: 'code',
            language: 'python',
            code: '# Booleans from comparisons\nsales = 85000\ntarget = 70000\n\n# These comparisons produce True or False\nmet_target = sales >= target\nprint(f"Met target: {met_target}")  # True\n\nexceeded_by_50 = sales > (target * 1.5)\nprint(f"Exceeded by 50%: {exceeded_by_50}")  # False\n\nexact_match = sales == 85000\nprint(f"Exact match: {exact_match}")  # True',
            executable: true
          },
          {
            type: 'heading',
            level: 3,
            text: 'Using Booleans for Business Logic',
            id: 'bool-business'
          },
          {
            type: 'code',
            language: 'python',
            code: '# Real-world BI example: Customer segmentation\npurchase_amount = 250\nis_new_customer = False\nhas_loyalty_card = True\n\n# Determine if customer qualifies for promotion\nqualifies = purchase_amount >= 100 and has_loyalty_card\nprint(f"Qualifies for promotion: {qualifies}")  # True\n\n# Check if high-value customer\nis_high_value = purchase_amount >= 500 or (has_loyalty_card and purchase_amount >= 200)\nprint(f"High-value customer: {is_high_value}")  # True',
            executable: true
          },
          {
            type: 'mini-quiz',
            id: 'quiz-booleans-1',
            question: '¿Cuál es el resultado de True and False?',
            options: ['True', 'False', 'Error', 'None'],
            correctAnswer: 1,
            explanation: 'El operador "and" devuelve True solo si AMBAS condiciones son True. Como una de ellas es False, el resultado es False.'
          },
          {
            type: 'heading',
            level: 2,
            text: 'Step 7: Type Conversion',
            id: 'type-conversion-detail'
          },
          {
            type: 'paragraph',
            text: 'Sometimes you need to convert between types. Python provides functions for this.'
          },
          {
            type: 'code',
            language: 'python',
            code: '# Converting between types\n\n# String to Integer\nquantity_text = "150"\nquantity = int(quantity_text)\nprint(f"Quantity: {quantity}, Type: {type(quantity)}")  # 150, int\n\n# String to Float\nprice_text = "29.99"\nprice = float(price_text)\nprint(f"Price: {price}, Type: {type(price)}")  # 29.99, float\n\n# Number to String\ncount = 42\ncount_text = str(count)\nprint(f"Count: {count_text}, Type: {type(count_text)}")  # "42", str',
            executable: true
          },
          {
            type: 'code',
            language: 'python',
            code: '# Why conversion matters - common data processing scenario\n# Data from files often comes as strings!\n\n# Raw data (all strings)\nrow = ["Widget Pro", "29.99", "150", "True"]\n\nproduct = row[0]           # Already a string, keep it\nprice = float(row[1])      # Convert to float for math\nquantity = int(row[2])     # Convert to int for counting\nin_stock = row[3] == "True"  # Compare to get boolean\n\n# Now we can calculate!\ntotal = price * quantity\nprint(f"Product: {product}")\nprint(f"Total: ${total:,.2f}")\nprint(f"In Stock: {in_stock}")',
            executable: true
          },
          {
            type: 'heading',
            level: 3,
            text: 'Interactive Exercise: Process Sales Data',
            id: 'conversion-exercise'
          },
          {
            type: 'paragraph',
            text: 'Data from files often arrives as strings. Practice converting string data to proper types for calculations.'
          },
          {
            type: 'callout',
            variant: 'info',
            title: 'Your Task',
            content: '1. Convert price_str to float using float()\n2. Convert quantity_str to int using int()\n3. Calculate revenue\n4. Print formatted results'
          },
          {
            type: 'code',
            language: 'python',
            code: '# Process this sales data (all values are strings!)\nproduct_name = "Laptop Pro"\nprice_str = "999.99"\nquantity_str = "5"\n\n# YOUR CODE: Convert strings to proper types\nprice = ___(price_str)       # Convert to float\nquantity = ___(quantity_str)  # Convert to int\n\n# YOUR CODE: Calculate revenue\nrevenue = ___ * ___\n\n# Print formatted result\nprint(f"Product: {product_name}")\nprint(f"Units: {quantity:,}")\nprint(f"Unit Price: ${price:,.2f}")\nprint(f"Total Revenue: ${revenue:,.2f}")',
            executable: true
          },
          {
            type: 'callout',
            variant: 'tip',
            title: 'Solution',
            content: 'price = float(price_str) -> 999.99\nquantity = int(quantity_str) -> 5\nrevenue = price * quantity -> 4999.95'
          },
          {
            type: 'heading',
            level: 2,
            text: 'Data Types Summary',
            id: 'types-summary'
          },
          {
            type: 'table',
            headers: ['Type', 'Description', 'Example', 'Create From String'],
            rows: [
              ['int', 'Whole numbers', '42', 'int(\"42\")'],
              ['float', 'Decimal numbers', '3.14', 'float(\"3.14\")'],
              ['str', 'Text', '\"Hello\"', 'Already a string'],
              ['bool', 'True/False', 'True', 'value == \"True\"']
            ]
          },
          {
            type: 'callout',
            variant: 'tip',
            title: 'Practice Makes Perfect!',
            content: 'The best way to learn data types is to experiment. Try creating variables of different types, converting between them, and using f-strings to display results. Make mistakes - that\'s how you learn!'
          },
          {
            type: 'heading',
            level: 2,
            text: 'Practice Challenge: Complete the Code',
            id: 'practice-challenge'
          },
          {
            type: 'paragraph',
            text: 'Now write complete code from scratch! Create a mini-report using everything you learned.'
          },
          {
            type: 'code',
            language: 'python',
            code: '# CHALLENGE: Create a product summary report\n# 1. Create variables for: product name, price, quantity, discount rate\n# 2. Calculate: subtotal, discount amount, final price\n# 3. Print a formatted report using f-strings\n\n# Your variables\nproduct = "Wireless Headphones"\nprice = 79.99\nquantity = 2\ndiscount_rate = 0.15  # 15% discount\n\n# Your calculations\nsubtotal = price * quantity\ndiscount = subtotal * discount_rate\nfinal_price = subtotal - discount\n\n# Your report\nprint("=" * 35)\nprint("PURCHASE SUMMARY".center(35))\nprint("=" * 35)\nprint(f"Product: {product}")\nprint(f"Unit Price: ${price:,.2f}")\nprint(f"Quantity: {quantity}")\nprint(f"Subtotal: ${subtotal:,.2f}")\nprint(f"Discount ({discount_rate:.0%}): -${discount:,.2f}")\nprint("-" * 35)\nprint(f"TOTAL: ${final_price:,.2f}")\nprint("=" * 35)',
            executable: true
          },
          {
            type: 'exercise-link',
            exerciseId: 'chapter-1-datatypes-exercise',
            title: 'Practice: Type Conversion'
          },
          {
            type: 'section-nav',
            showComplete: true,
            showNext: true,
            showBack: true,
            prevSection: 'variables',
            nextSection: 'operators'
          }
        ]
      },
      {
        id: 'operators',
        title: 'Operators',
        estimatedTime: 15,
        content: [
          {
            type: 'heading',
            level: 1,
            text: 'Python Operators',
            id: 'operators'
          },
          {
            type: 'paragraph',
            text: 'Operators are symbols that perform operations on values. They\'re essential for calculations and comparisons in BI analysis.'
          },
          {
            type: 'heading',
            level: 2,
            text: 'Arithmetic Operators',
            id: 'arithmetic'
          },
          {
            type: 'code',
            language: 'python',
            code: '# Basic arithmetic\nrevenue = 100000\ncost = 65000\n\nprofit = revenue - cost              # Subtraction\nprint("Profit:", profit)\n\nprofit_margin = profit / revenue     # Division\nprint("Margin:", profit_margin)      # 0.35 = 35%\n\n# More operators\nprint(10 + 3)   # 13  Addition\nprint(10 - 3)   # 7   Subtraction\nprint(10 * 3)   # 30  Multiplication\nprint(10 / 3)   # 3.333... Division\nprint(10 // 3)  # 3   Floor division (integer)\nprint(10 % 3)   # 1   Modulo (remainder)\nprint(10 ** 3)  # 1000 Exponentiation',
            executable: true
          },
          {
            type: 'heading',
            level: 2,
            text: 'Comparison Operators',
            id: 'comparison'
          },
          {
            type: 'code',
            language: 'python',
            code: '# Comparison operators return True or False\nsales = 75000\ntarget = 70000\nlast_year = 75000\n\nprint(sales > target)    # True  - Greater than\nprint(sales < target)    # False - Less than\nprint(sales >= target)   # True  - Greater than or equal\nprint(sales <= target)   # False - Less than or equal\nprint(sales == last_year) # True  - Equal to\nprint(sales != target)   # True  - Not equal to\n\n# Practical example\nmet_target = sales >= target\nprint("Target met:", met_target)',
            executable: true
          },
          {
            type: 'heading',
            level: 2,
            text: 'Logical Operators',
            id: 'logical'
          },
          {
            type: 'code',
            language: 'python',
            code: '# Logical operators combine conditions\nsales = 80000\ntarget = 70000\nbudget = 50000\n\n# AND - both must be True\nmet_target = sales >= target\nunder_budget = sales <= budget\nboth = met_target and under_budget\nprint("Met target AND under budget:", both)  # False\n\n# OR - at least one must be True\neither = met_target or under_budget\nprint("Met target OR under budget:", either)  # True\n\n# NOT - inverts the value\nnot_profitable = not (sales > target)\nprint("Not profitable:", not_profitable)  # False',
            executable: true
          },
          {
            type: 'table',
            headers: ['Operator', 'Name', 'Example', 'Result'],
            rows: [
              ['+', 'Addition', '10 + 3', '13'],
              ['-', 'Subtraction', '10 - 3', '7'],
              ['*', 'Multiplication', '10 * 3', '30'],
              ['/', 'Division', '10 / 3', '3.33...'],
              ['//', 'Floor Division', '10 // 3', '3'],
              ['%', 'Modulo', '10 % 3', '1'],
              ['**', 'Power', '10 ** 2', '100'],
              ['==', 'Equal', '5 == 5', 'True'],
              ['!=', 'Not Equal', '5 != 3', 'True'],
              ['and', 'Logical AND', 'True and False', 'False'],
              ['or', 'Logical OR', 'True or False', 'True']
            ]
          },
          {
            type: 'heading',
            level: 3,
            text: 'Interactive Exercise: Profit Calculator',
            id: 'profit-calc-exercise'
          },
          {
            type: 'paragraph',
            text: 'Practice using arithmetic operators to calculate business metrics.'
          },
          {
            type: 'callout',
            variant: 'info',
            title: 'Your Task',
            content: 'Calculate profit metrics:\n1. Calculate profit (revenue - cost)\n2. Calculate profit_margin (profit / revenue)\n3. Calculate growth using ** for percentage increase'
          },
          {
            type: 'code',
            language: 'python',
            code: '# Business profit calculator\nrevenue = 150000\ncost = 95000\nlast_year_profit = 40000\n\n# YOUR CODE: Calculate this year profit\nprofit = ___ - ___\nprint(f"Profit: ${profit:,}")\n\n# YOUR CODE: Calculate profit margin (profit divided by revenue)\nprofit_margin = ___ / ___\nprint(f"Profit Margin: {profit_margin:.1%}")\n\n# YOUR CODE: Calculate growth rate\n# (this_year - last_year) / last_year\ngrowth = (___ - ___) / ___\nprint(f"Year-over-Year Growth: {growth:.1%}")',
            executable: true
          },
          {
            type: 'callout',
            variant: 'tip',
            title: 'Solution',
            content: 'profit = revenue - cost -> 55000\nprofit_margin = profit / revenue -> 36.7%\ngrowth = (profit - last_year_profit) / last_year_profit -> 37.5%'
          },
          {
            type: 'heading',
            level: 3,
            text: 'Interactive Exercise: Sales Target Check',
            id: 'target-check-exercise'
          },
          {
            type: 'paragraph',
            text: 'Use comparison and logical operators to check sales performance.'
          },
          {
            type: 'callout',
            variant: 'info',
            title: 'Your Task',
            content: 'Create boolean checks:\n1. Check if sales exceeded target (>)\n2. Check if sales match last year (==)\n3. Check if hit target AND beat last year (use and)'
          },
          {
            type: 'code',
            language: 'python',
            code: '# Sales performance checker\nsales = 85000\ntarget = 80000\nlast_year = 85000\n\n# YOUR CODE: Check if exceeded target\nexceeded_target = sales ___ target\nprint(f"Exceeded target: {exceeded_target}")\n\n# YOUR CODE: Check if matches last year exactly\nmatches_last_year = sales ___ last_year\nprint(f"Matches last year: {matches_last_year}")\n\n# YOUR CODE: Check both conditions (use and)\ngreat_performance = (sales ___ target) ___ (sales ___ last_year)\nprint(f"Great performance: {great_performance}")',
            executable: true
          },
          {
            type: 'callout',
            variant: 'tip',
            title: 'Solution',
            content: 'exceeded_target = sales > target -> True\nmatches_last_year = sales == last_year -> True\ngreat_performance = (sales > target) and (sales >= last_year) -> True'
          },
          {
            type: 'exercise-link',
            exerciseId: 'chapter-1-operators-exercise',
            title: 'Practice: Financial Calculator'
          },
          {
            type: 'mini-quiz',
            id: 'quiz-operators-1',
            question: '¿Cuál es el resultado de 17 % 5?',
            options: ['3', '2', '3.4', '12'],
            correctAnswer: 1,
            explanation: 'El operador % (módulo) devuelve el residuo de la división. 17 ÷ 5 = 3 con residuo 2. Por lo tanto, 17 % 5 = 2.'
          },
          {
            type: 'section-nav',
            showComplete: true,
            showNext: true,
            showBack: true,
            prevSection: 'data-types',
            nextSection: 'conditionals'
          }
        ]
      },
      {
        id: 'conditionals',
        title: 'Conditional Statements',
        estimatedTime: 20,
        content: [
          {
            type: 'heading',
            level: 1,
            text: 'Conditional Statements',
            id: 'conditionals'
          },
          {
            type: 'paragraph',
            text: 'Conditionals let your program make decisions based on conditions. They\'re fundamental for business logic and data processing.'
          },
          {
            type: 'heading',
            level: 2,
            text: 'The if Statement',
            id: 'if-statement'
          },
          {
            type: 'code',
            language: 'python',
            code: '# Basic if statement\nsales = 85000\ntarget = 70000\n\nif sales >= target:\n    print("Congratulations! Target achieved!")\n    bonus = sales * 0.10\n    print("Bonus earned:", bonus)',
            executable: true
          },
          {
            type: 'heading',
            level: 2,
            text: 'if-else Statement',
            id: 'if-else'
          },
          {
            type: 'code',
            language: 'python',
            code: '# if-else for two outcomes\nsales = 65000\ntarget = 70000\n\nif sales >= target:\n    print("Target achieved!")\n    status = "Met"\nelse:\n    print("Keep pushing! Target not yet met.")\n    status = "Not Met"\n    shortfall = target - sales\n    print("Shortfall:", shortfall)\n\nprint("Status:", status)',
            executable: true
          },
          {
            type: 'heading',
            level: 2,
            text: 'if-elif-else Chain',
            id: 'if-elif-else'
          },
          {
            type: 'code',
            language: 'python',
            code: '# Multiple conditions with elif\nsales = 95000\n\nif sales >= 100000:\n    performance = "Exceptional"\n    bonus_rate = 0.15\nelif sales >= 80000:\n    performance = "Excellent"\n    bonus_rate = 0.10\nelif sales >= 70000:\n    performance = "Good"\n    bonus_rate = 0.05\nelse:\n    performance = "Needs Improvement"\n    bonus_rate = 0\n\nbonus = sales * bonus_rate\nprint("Performance:", performance)\nprint("Bonus:", bonus)',
            executable: true
          },
          {
            type: 'heading',
            level: 2,
            text: 'Real BI Example: Customer Segmentation',
            id: 'bi-example'
          },
          {
            type: 'code',
            language: 'python',
            code: '# Customer segmentation based on purchase history\ncustomer_name = "Alice Johnson"\ntotal_purchases = 15000\nmonths_active = 24\navg_monthly = total_purchases / months_active\n\n# Determine customer tier\nif total_purchases >= 10000 and months_active >= 12:\n    tier = "Platinum"\n    discount = 0.20\nelif total_purchases >= 5000 or months_active >= 6:\n    tier = "Gold"\n    discount = 0.10\nelse:\n    tier = "Standard"\n    discount = 0.05\n\nprint("Customer:", customer_name)\nprint("Total Purchases:", total_purchases)\nprint("Months Active:", months_active)\nprint("Tier:", tier)\nprint("Discount Rate:", discount)',
            executable: true
          },
          {
            type: 'callout',
            variant: 'tip',
            title: 'Best Practice',
            content: 'In BI applications, use meaningful condition names and add comments for complex business logic. This makes your code easier to maintain and audit.'
          },
          {
            type: 'heading',
            level: 3,
            text: 'Interactive Exercise: Grade Calculator',
            id: 'grade-exercise'
          },
          {
            type: 'paragraph',
            text: 'Practice writing if-elif-else chains to assign grades based on scores.'
          },
          {
            type: 'callout',
            variant: 'info',
            title: 'Your Task',
            content: 'Complete the grade calculator:\n- A: score >= 90\n- B: score >= 80\n- C: score >= 70\n- F: below 70'
          },
          {
            type: 'code',
            language: 'python',
            code: '# Grade calculator\nscore = 85\n\n# YOUR CODE: Complete the if-elif-else chain\nif score >= ___:\n    grade = "A"\n    message = "Excellent!"\nelif score >= ___:\n    grade = "B"\n    message = "Good job!"\nelif score >= ___:\n    grade = "C"\n    message = "Passing"\nelse:\n    grade = "F"\n    message = "Needs improvement"\n\nprint(f"Score: {score}")\nprint(f"Grade: {grade}")\nprint(f"Feedback: {message}")',
            executable: true
          },
          {
            type: 'callout',
            variant: 'tip',
            title: 'Solution',
            content: 'if score >= 90: (A)\nelif score >= 80: (B)\nelif score >= 70: (C)\nelse: (F)\n\nWith score = 85, the result is Grade B'
          },
          {
            type: 'heading',
            level: 3,
            text: 'Interactive Exercise: Shipping Cost Calculator',
            id: 'shipping-exercise'
          },
          {
            type: 'paragraph',
            text: 'Build a shipping cost calculator using conditionals - a common e-commerce BI task.'
          },
          {
            type: 'callout',
            variant: 'info',
            title: 'Your Task',
            content: 'Calculate shipping based on order total:\n- Free shipping if order >= $100\n- $5.99 if order >= $50\n- $9.99 for orders under $50'
          },
          {
            type: 'code',
            language: 'python',
            code: '# Shipping cost calculator\norder_total = 75.00\n\n# YOUR CODE: Determine shipping cost\nif order_total >= ___:\n    shipping = ___\n    message = "Free Shipping!"\nelif order_total >= ___:\n    shipping = ___\n    message = "Standard Shipping"\nelse:\n    shipping = ___\n    message = "Basic Shipping"\n\nfinal_total = order_total + shipping\n\nprint(f"Order Total: ${order_total:.2f}")\nprint(f"Shipping ({message}): ${shipping:.2f}")\nprint(f"Final Total: ${final_total:.2f}")',
            executable: true
          },
          {
            type: 'callout',
            variant: 'tip',
            title: 'Solution',
            content: 'if order_total >= 100: shipping = 0\nelif order_total >= 50: shipping = 5.99\nelse: shipping = 9.99\n\nWith order_total = 75, shipping = 5.99'
          },
          {
            type: 'heading',
            level: 3,
            text: 'Interactive Exercise: Employee Bonus',
            id: 'bonus-exercise'
          },
          {
            type: 'paragraph',
            text: 'Practice combining multiple conditions with and/or operators.'
          },
          {
            type: 'callout',
            variant: 'info',
            title: 'Your Task',
            content: 'Determine bonus eligibility:\n- 15% bonus: sales >= 100000 AND years >= 5\n- 10% bonus: sales >= 80000 OR years >= 3\n- 5% bonus: all others'
          },
          {
            type: 'code',
            language: 'python',
            code: '# Employee bonus calculator\nemployee_name = "Sarah Chen"\nsales = 95000\nyears_employed = 4\n\n# YOUR CODE: Use and/or to combine conditions\nif sales >= ___ ___ years_employed >= ___:\n    bonus_rate = 0.15\n    tier = "Senior Excellence"\nelif sales >= ___ ___ years_employed >= ___:\n    bonus_rate = 0.10\n    tier = "Achiever"\nelse:\n    bonus_rate = 0.05\n    tier = "Contributor"\n\nbonus = sales * bonus_rate\n\nprint(f"Employee: {employee_name}")\nprint(f"Sales: ${sales:,}")\nprint(f"Years: {years_employed}")\nprint(f"Tier: {tier}")\nprint(f"Bonus Rate: {bonus_rate:.0%}")\nprint(f"Bonus Amount: ${bonus:,.2f}")',
            executable: true
          },
          {
            type: 'callout',
            variant: 'tip',
            title: 'Solution',
            content: 'if sales >= 100000 and years_employed >= 5:\nelif sales >= 80000 or years_employed >= 3:\n\nWith sales=95000, years=4: qualifies for 10% (Achiever) because 95000 >= 80000'
          },
          {
            type: 'exercise-link',
            exerciseId: 'chapter-1-exercise-1',
            title: 'Practice: Sales Performance Calculator'
          },
          {
            type: 'mini-quiz',
            id: 'quiz-conditionals-1',
            question: '¿Qué imprime este código?\n\nx = 5\nif x > 10:\n    print("A")\nelif x > 3:\n    print("B")\nelse:\n    print("C")',
            options: ['A', 'B', 'C', 'Error'],
            correctAnswer: 1,
            explanation: 'x = 5 no es mayor que 10, así que se salta el primer if. Pero x > 3 es True (5 > 3), así que se ejecuta el elif y se imprime "B".'
          },
          {
            type: 'quiz-link',
            quizId: 'chapter-1-quiz',
            title: 'Chapter 1 Quiz'
          },
          {
            type: 'section-nav',
            showComplete: true,
            showNext: false,
            showBack: true,
            prevSection: 'operators'
          }
        ]
      }
    ]
  },
  {
    id: 2,
    title: 'Collections, Loops & Functions',
    description: 'Learn to work with data collections, iterate efficiently, and write reusable functions',
    icon: 'database',
    estimatedTime: 90,
    sections: [
      {
        id: 'lists',
        title: 'Lists',
        estimatedTime: 20,
        content: [
          {
            type: 'heading',
            level: 1,
            text: 'Working with Lists',
            id: 'lists'
          },
          {
            type: 'paragraph',
            text: 'Lists are ordered collections that can hold multiple items. They\'re one of the most commonly used data structures in Python and essential for BI data manipulation.'
          },
          {
            type: 'heading',
            level: 2,
            text: 'Creating Lists',
            id: 'creating-lists'
          },
          {
            type: 'code',
            language: 'python',
            code: '# Creating lists\nproducts = ["Widget A", "Widget B", "Widget C"]\nsales_figures = [15000, 22000, 18500, 31000]\nmixed_data = ["Q1", 25000, True, 0.15]\n\n# Empty list\nmonthly_totals = []\n\nprint("Products:", products)\nprint("Sales:", sales_figures)\nprint("Number of products:", len(products))',
            executable: true
          },
          {
            type: 'heading',
            level: 2,
            text: 'Accessing List Elements',
            id: 'accessing-elements'
          },
          {
            type: 'code',
            language: 'python',
            code: '# Indexing (0-based)\nquarters = ["Q1", "Q2", "Q3", "Q4"]\n\nprint(quarters[0])   # Q1 (first element)\nprint(quarters[2])   # Q3 (third element)\nprint(quarters[-1])  # Q4 (last element)\nprint(quarters[-2])  # Q3 (second to last)\n\n# Slicing\nprint(quarters[1:3])  # [\'Q2\', \'Q3\']\nprint(quarters[:2])   # [\'Q1\', \'Q2\'] (first two)\nprint(quarters[2:])   # [\'Q3\', \'Q4\'] (from index 2)',
            executable: true
          },
          {
            type: 'heading',
            level: 2,
            text: 'Modifying Lists',
            id: 'modifying-lists'
          },
          {
            type: 'code',
            language: 'python',
            code: '# Modifying lists\nsales = [15000, 22000, 18500]\n\n# Change an element\nsales[1] = 25000\nprint("Updated:", sales)\n\n# Add elements\nsales.append(30000)  # Add to end\nprint("After append:", sales)\n\nsales.insert(0, 12000)  # Insert at position 0\nprint("After insert:", sales)\n\n# Remove elements\nremoved = sales.pop()  # Remove and return last\nprint("Removed:", removed, "List:", sales)\n\nsales.remove(25000)  # Remove specific value\nprint("After remove:", sales)',
            executable: true
          },
          {
            type: 'heading',
            level: 2,
            text: 'List Operations for BI',
            id: 'list-operations'
          },
          {
            type: 'code',
            language: 'python',
            code: '# Common BI operations with lists\nmonthly_revenue = [45000, 52000, 48000, 61000, 55000, 58000]\n\n# Basic statistics\ntotal = sum(monthly_revenue)\naverage = sum(monthly_revenue) / len(monthly_revenue)\nmaximum = max(monthly_revenue)\nminimum = min(monthly_revenue)\n\nprint("Total Revenue:", total)\nprint("Average:", average)\nprint("Best Month:", maximum)\nprint("Worst Month:", minimum)\n\n# Sorting\nsorted_revenue = sorted(monthly_revenue)\nprint("Sorted (asc):", sorted_revenue)\n\nsorted_desc = sorted(monthly_revenue, reverse=True)\nprint("Sorted (desc):", sorted_desc)',
            executable: true
          },
          {
            type: 'callout',
            variant: 'info',
            title: 'Lists in BI',
            content: 'Lists are perfect for storing time series data, product names, or any sequential data. For larger datasets, you\'ll eventually use Pandas DataFrames, but lists are the foundation.'
          },
          {
            type: 'heading',
            level: 3,
            text: 'Interactive Exercise: List Operations',
            id: 'list-ops-exercise'
          },
          {
            type: 'paragraph',
            text: 'Practice creating lists and using common list methods.'
          },
          {
            type: 'callout',
            variant: 'info',
            title: 'Your Task',
            content: '1. Create a list of monthly sales values\n2. Calculate the total using sum()\n3. Find the max and min values\n4. Add a new month using append()'
          },
          {
            type: 'code',
            language: 'python',
            code: '# YOUR CODE: Create a list of 6 monthly sales values\nmonthly_sales = [___, ___, ___, ___, ___, ___]\n\n# YOUR CODE: Calculate total sales\ntotal = ___(monthly_sales)\nprint(f"Total Sales: ${total:,}")\n\n# YOUR CODE: Find best and worst months\nbest_month = ___(monthly_sales)\nworst_month = ___(monthly_sales)\nprint(f"Best Month: ${best_month:,}")\nprint(f"Worst Month: ${worst_month:,}")\n\n# YOUR CODE: Add July sales (35000) to the list\nmonthly_sales.___(35000)\nprint(f"Updated list: {monthly_sales}")',
            executable: true
          },
          {
            type: 'callout',
            variant: 'tip',
            title: 'Solution',
            content: 'monthly_sales = [25000, 30000, 28000, 35000, 32000, 29000]\ntotal = sum(monthly_sales)\nbest_month = max(monthly_sales)\nworst_month = min(monthly_sales)\nmonthly_sales.append(35000)'
          },
          {
            type: 'heading',
            level: 3,
            text: 'Interactive Exercise: List Slicing',
            id: 'list-slice-exercise'
          },
          {
            type: 'paragraph',
            text: 'Practice extracting portions of lists using slicing.'
          },
          {
            type: 'callout',
            variant: 'info',
            title: 'Your Task',
            content: 'Given quarterly_data = [Q1, Q2, Q3, Q4, Q1, Q2, Q3, Q4]:\n1. Get first half (first 4 elements)\n2. Get last quarter only\n3. Get Q2 and Q3 of first year'
          },
          {
            type: 'code',
            language: 'python',
            code: '# Quarterly data for 2 years\nquarterly_data = [25000, 30000, 28000, 35000, 27000, 33000, 31000, 38000]\n# Indexes:         0      1      2      3      4      5      6      7\n\n# YOUR CODE: Get first year (first 4 elements)\nfirst_year = quarterly_data[___:___]\nprint(f"First Year: {first_year}")\n\n# YOUR CODE: Get last quarter only (last element)\nlast_quarter = quarterly_data[___]\nprint(f"Last Quarter: {last_quarter}")\n\n# YOUR CODE: Get Q2 and Q3 of first year (indexes 1 and 2)\nmiddle_quarters = quarterly_data[___:___]\nprint(f"Q2-Q3 First Year: {middle_quarters}")',
            executable: true
          },
          {
            type: 'callout',
            variant: 'tip',
            title: 'Solution',
            content: 'first_year = quarterly_data[0:4] or quarterly_data[:4]\nlast_quarter = quarterly_data[-1]\nmiddle_quarters = quarterly_data[1:3]'
          },
          {
            type: 'mini-quiz',
            id: 'quiz-lists-1',
            question: 'Si lista = [10, 20, 30, 40], ¿qué devuelve lista[-2]?',
            options: ['20', '30', '40', 'Error'],
            correctAnswer: 1,
            explanation: 'Los índices negativos cuentan desde el final: -1 es el último (40), -2 es el penúltimo (30).'
          },
          {
            type: 'exercise-link',
            exerciseId: 'chapter-2-lists-exercise',
            title: 'Practice: Sales List Operations'
          },
          {
            type: 'section-nav',
            showComplete: true,
            showNext: true,
            showBack: true,
            nextSection: 'dictionaries'
          }
        ]
      },
      {
        id: 'dictionaries',
        title: 'Dictionaries',
        estimatedTime: 15,
        content: [
          {
            type: 'heading',
            level: 1,
            text: 'Dictionaries',
            id: 'dictionaries'
          },
          {
            type: 'paragraph',
            text: 'Dictionaries store data as key-value pairs. They\'re incredibly useful for representing structured data like records, configurations, or lookup tables.'
          },
          {
            type: 'heading',
            level: 2,
            text: 'Creating Dictionaries',
            id: 'creating-dicts'
          },
          {
            type: 'code',
            language: 'python',
            code: '# Creating a dictionary\nproduct = {\n    "name": "Widget Pro",\n    "price": 49.99,\n    "category": "Electronics",\n    "in_stock": True,\n    "quantity": 150\n}\n\nprint(product)\nprint("Product:", product[\'name\'])\nprint("Price:", product[\'price\'])',
            executable: true
          },
          {
            type: 'heading',
            level: 2,
            text: 'Accessing and Modifying',
            id: 'dict-operations'
          },
          {
            type: 'code',
            language: 'python',
            code: '# Accessing values\nemployee = {\n    "id": "EMP001",\n    "name": "Sarah Johnson",\n    "department": "Sales",\n    "salary": 75000\n}\n\n# Access by key\nprint(employee["name"])  # Sarah Johnson\n\n# Safe access with get() - returns None if key doesn\'t exist\nprint(employee.get("phone"))  # None\nprint(employee.get("phone", "N/A"))  # N/A (default)\n\n# Modify values\nemployee["salary"] = 80000\nprint("New salary:", employee[\'salary\'])\n\n# Add new key-value pair\nemployee["email"] = "sarah.j@company.com"\nprint("Email:", employee[\'email\'])',
            executable: true
          },
          {
            type: 'heading',
            level: 2,
            text: 'Dictionary Methods',
            id: 'dict-methods'
          },
          {
            type: 'code',
            language: 'python',
            code: '# Useful dictionary methods\nquarterly_sales = {\n    "Q1": 125000,\n    "Q2": 142000,\n    "Q3": 138000,\n    "Q4": 165000\n}\n\n# Get all keys, values, items\nprint("Quarters:", list(quarterly_sales.keys()))\nprint("Sales:", list(quarterly_sales.values()))\n\n# Calculate totals\ntotal_sales = sum(quarterly_sales.values())\navg_sales = total_sales / len(quarterly_sales)\n\nprint("Total:", total_sales)\nprint("Average:", avg_sales)\n\n# Check if key exists\nif "Q1" in quarterly_sales:\n    print("Q1 Sales:", quarterly_sales[\'Q1\'])',
            executable: true
          },
          {
            type: 'heading',
            level: 2,
            text: 'Nested Dictionaries',
            id: 'nested-dicts'
          },
          {
            type: 'code',
            language: 'python',
            code: '# Nested dictionary - representing complex data\ncompany_data = {\n    "company": "TechCorp",\n    "departments": {\n        "Sales": {\n            "employees": 25,\n            "budget": 500000\n        },\n        "Engineering": {\n            "employees": 50,\n            "budget": 1200000\n        },\n        "Marketing": {\n            "employees": 15,\n            "budget": 300000\n        }\n    }\n}\n\n# Access nested data\neng_budget = company_data["departments"]["Engineering"]["budget"]\nprint("Engineering Budget:", eng_budget)\n\n# Calculate total employees\ntotal_emp = sum(\n    dept["employees"] \n    for dept in company_data["departments"].values()\n)\nprint("Total Employees:", total_emp)',
            executable: true
          },
          {
            type: 'heading',
            level: 3,
            text: 'Interactive Exercise: Dictionary Access',
            id: 'dict-access-exercise'
          },
          {
            type: 'paragraph',
            text: 'Practice accessing and modifying dictionary values.'
          },
          {
            type: 'callout',
            variant: 'info',
            title: 'Your Task',
            content: '1. Access the product name\n2. Update the price to 59.99\n3. Add a "discount" key with value 0.10\n4. Use get() to safely access "warranty"'
          },
          {
            type: 'code',
            language: 'python',
            code: '# Product dictionary\nproduct = {\n    "name": "Premium Widget",\n    "price": 49.99,\n    "category": "Electronics",\n    "in_stock": True\n}\n\n# YOUR CODE: Access the product name\nname = product[___]\nprint(f"Product: {name}")\n\n# YOUR CODE: Update the price to 59.99\nproduct[___] = ___\nprint(f"New Price: ${product[\'price\']}")\n\n# YOUR CODE: Add a discount key with value 0.10\nproduct[___] = ___\nprint(f"Discount: {product[\'discount\']:.0%}")\n\n# YOUR CODE: Safely get warranty (returns "N/A" if not found)\nwarranty = product.___(_____, _____)\nprint(f"Warranty: {warranty}")',
            executable: true
          },
          {
            type: 'callout',
            variant: 'tip',
            title: 'Solution',
            content: 'name = product["name"]\nproduct["price"] = 59.99\nproduct["discount"] = 0.10\nwarranty = product.get("warranty", "N/A")'
          },
          {
            type: 'heading',
            level: 3,
            text: 'Interactive Exercise: Dictionary Methods',
            id: 'dict-methods-exercise'
          },
          {
            type: 'paragraph',
            text: 'Practice using dictionary methods for data analysis.'
          },
          {
            type: 'callout',
            variant: 'info',
            title: 'Your Task',
            content: '1. Get all quarter names using .keys()\n2. Get all sales values using .values()\n3. Calculate total and average sales'
          },
          {
            type: 'code',
            language: 'python',
            code: '# Quarterly sales data\nquarterly_sales = {\n    "Q1": 125000,\n    "Q2": 142000,\n    "Q3": 138000,\n    "Q4": 165000\n}\n\n# YOUR CODE: Get all quarter names\nquarters = list(quarterly_sales.___())\nprint(f"Quarters: {quarters}")\n\n# YOUR CODE: Get all sales values\nsales = list(quarterly_sales.___())\nprint(f"Sales: {sales}")\n\n# YOUR CODE: Calculate total sales\ntotal = ___(quarterly_sales.___())\nprint(f"Total: ${total:,}")\n\n# YOUR CODE: Calculate average\naverage = total / ___(quarterly_sales)\nprint(f"Average: ${average:,.2f}")',
            executable: true
          },
          {
            type: 'callout',
            variant: 'tip',
            title: 'Solution',
            content: 'quarters = list(quarterly_sales.keys())\nsales = list(quarterly_sales.values())\ntotal = sum(quarterly_sales.values())\naverage = total / len(quarterly_sales)'
          },
          {
            type: 'exercise-link',
            exerciseId: 'chapter-2-dict-exercise',
            title: 'Practice: Product Catalog'
          },
          {
            type: 'mini-quiz',
            id: 'quiz-dicts-1',
            question: '¿Cómo accedes al valor "precio" en este diccionario?\n\nproducto = {"nombre": "Widget", "precio": 29.99}',
            options: ['producto[0]', 'producto["precio"]', 'producto.precio', 'producto[precio]'],
            correctAnswer: 1,
            explanation: 'Los diccionarios usan llaves (keys) para acceder a valores. Se usa la sintaxis diccionario["llave"]. Las comillas son necesarias porque la llave es un string.'
          },
          {
            type: 'section-nav',
            showComplete: true,
            showNext: true,
            showBack: true,
            prevSection: 'lists',
            nextSection: 'tuples-sets'
          }
        ]
      },
      {
        id: 'tuples-sets',
        title: 'Tuples and Sets',
        estimatedTime: 15,
        content: [
          {
            type: 'heading',
            level: 1,
            text: 'Tuples and Sets',
            id: 'tuples-sets'
          },
          {
            type: 'paragraph',
            text: 'Besides lists and dictionaries, Python offers two more collection types: tuples (immutable sequences) and sets (unique values). Each has specific use cases in data analysis.'
          },
          {
            type: 'heading',
            level: 2,
            text: 'Tuples - Immutable Sequences',
            id: 'tuples'
          },
          {
            type: 'paragraph',
            text: 'Tuples are like lists, but they cannot be changed after creation. Use them for data that should stay constant, like coordinates or fixed records.'
          },
          {
            type: 'code',
            language: 'python',
            code: '# Creating tuples - use parentheses\ncoordinates = (10, 20)\nproduct_info = ("Widget Pro", 49.99, "Electronics")\n\nprint("Coordinates:", coordinates)\nprint("Product:", product_info)\n\n# Access by index (same as lists)\nprint("Name:", product_info[0])\nprint("Price:", product_info[1])',
            executable: true
          },
          {
            type: 'code',
            language: 'python',
            code: '# Tuple unpacking - assign to multiple variables at once\nproduct = ("Laptop", 999.99, "Tech")\n\n# Unpack into separate variables\nname, price, category = product\n\nprint(f"Name: {name}")\nprint(f"Price: ${price}")\nprint(f"Category: {category}")\n\n# Useful for functions that return multiple values\ndef get_stats(numbers):\n    return min(numbers), max(numbers), sum(numbers)\n\nlow, high, total = get_stats([10, 20, 30, 40])\nprint(f"Low: {low}, High: {high}, Total: {total}")',
            executable: true
          },
          {
            type: 'heading',
            level: 2,
            text: 'Sets - Unique Values Only',
            id: 'sets'
          },
          {
            type: 'paragraph',
            text: 'Sets automatically remove duplicates and support mathematical set operations like union and intersection.'
          },
          {
            type: 'code',
            language: 'python',
            code: '# Creating sets - use curly braces or set()\nunique_categories = {"Electronics", "Clothing", "Food"}\n\n# Remove duplicates from a list\npurchases = ["Alice", "Bob", "Alice", "Carol", "Bob", "Alice"]\nunique_customers = set(purchases)\n\nprint("Purchases:", purchases)\nprint("Unique customers:", unique_customers)\nprint("Total unique:", len(unique_customers))',
            executable: true
          },
          {
            type: 'code',
            language: 'python',
            code: '# Set operations - great for comparing groups\nq1_customers = {"Alice", "Bob", "Carol"}\nq2_customers = {"Bob", "Carol", "David", "Eve"}\n\n# Intersection: customers in BOTH quarters (returning)\nreturning = q1_customers & q2_customers\nprint("Returning customers:", returning)\n\n# Difference: customers in Q2 but NOT in Q1 (new)\nnew_customers = q2_customers - q1_customers\nprint("New in Q2:", new_customers)\n\n# Union: ALL customers from both quarters\nall_customers = q1_customers | q2_customers\nprint("All customers:", all_customers)',
            executable: true
          },
          {
            type: 'table',
            headers: ['Type', 'Syntax', 'Mutable?', 'Duplicates?', 'Use Case'],
            rows: [
              ['List', '[1, 2, 3]', 'Yes', 'Allowed', 'Ordered collections'],
              ['Tuple', '(1, 2, 3)', 'No', 'Allowed', 'Fixed data, unpacking'],
              ['Set', '{1, 2, 3}', 'Yes', 'Not allowed', 'Unique values, comparisons'],
              ['Dict', '{a: 1}', 'Yes', 'Keys unique', 'Key-value mapping']
            ]
          },
          {
            type: 'exercise-link',
            exerciseId: 'chapter-2-tuples-sets-exercise',
            title: 'Practice: Tuples and Sets'
          }
        ]
      },
      {
        id: 'loops',
        title: 'Loops',
        estimatedTime: 25,
        content: [
          {
            type: 'heading',
            level: 1,
            text: 'Loops',
            id: 'loops'
          },
          {
            type: 'paragraph',
            text: 'Loops allow you to repeat operations efficiently. In BI, you\'ll use loops to process datasets, generate reports, and automate repetitive tasks.'
          },
          {
            type: 'heading',
            level: 2,
            text: 'For Loops',
            id: 'for-loops'
          },
          {
            type: 'code',
            language: 'python',
            code: '# Basic for loop\nproducts = ["Widget A", "Widget B", "Widget C"]\n\nprint("Product Inventory:")\nfor product in products:\n    print("  -", product)\n\n# Loop with index using enumerate\nprint("\\nNumbered List:")\nfor index, product in enumerate(products, start=1):\n    print(" ", index, ".", product)',
            executable: true
          },
          {
            type: 'heading',
            level: 2,
            text: 'Looping with range()',
            id: 'range'
          },
          {
            type: 'code',
            language: 'python',
            code: '# range() generates a sequence of numbers\nprint("Months 1-12:")\nfor month in range(1, 13):\n    print("Month", month)\n\n# Calculate compound growth\ninitial_value = 10000\ngrowth_rate = 0.05  # 5% monthly\n\nprint("\\nGrowth Projection:")\nvalue = initial_value\nfor month in range(1, 7):\n    value = value * (1 + growth_rate)\n    print("Month", month, ":", round(value, 2))',
            executable: true
          },
          {
            type: 'heading',
            level: 2,
            text: 'Looping Through Dictionaries',
            id: 'dict-loops'
          },
          {
            type: 'code',
            language: 'python',
            code: '# Iterating through dictionaries\nregional_sales = {\n    "North": 125000,\n    "South": 98000,\n    "East": 142000,\n    "West": 156000\n}\n\nprint("Regional Sales Report:")\nprint("-" * 25)\n\nfor region, sales in regional_sales.items():\n    # Determine performance\n    if sales >= 150000:\n        status = "Excellent"\n    elif sales >= 100000:\n        status = "Good"\n    else:\n        status = "Needs Focus"\n    \n    print(region, ":", sales, "(", status, ")")\n\nprint("-" * 25)\nprint("Total:", sum(regional_sales.values()))',
            executable: true
          },
          {
            type: 'heading',
            level: 2,
            text: 'While Loops',
            id: 'while-loops'
          },
          {
            type: 'code',
            language: 'python',
            code: '# While loop - continues until condition is False\nbalance = 1000\ntarget = 2000\nmonth = 0\ninterest_rate = 0.05  # 5% monthly\n\nprint("Investment Growth:")\nwhile balance < target:\n    month += 1\n    balance = balance * (1 + interest_rate)\n    print("Month", month, ":", round(balance, 2))\n\nprint("\\nReached", target, "target in", month, "months!")',
            executable: true
          },
          {
            type: 'heading',
            level: 2,
            text: 'List Comprehensions',
            id: 'comprehensions'
          },
          {
            type: 'code',
            language: 'python',
            code: '# List comprehensions - concise loop syntax\nsales = [45000, 52000, 38000, 61000, 55000]\n\n# Traditional loop\nhigh_sales = []\nfor s in sales:\n    if s > 50000:\n        high_sales.append(s)\n\n# Same thing with list comprehension\nhigh_sales = [s for s in sales if s > 50000]\nprint("High sales months:", high_sales)\n\n# Apply transformation\n# Increase all sales by 10%\nadjusted = [s * 1.10 for s in sales]\nprint("After 10% increase:", adjusted)\n\n# Convert to thousands\nsales_in_k = [s / 1000 for s in sales]\nprint("In thousands:", sales_in_k)',
            executable: true
          },
          {
            type: 'code',
            language: 'python',
            code: '# Conditional expressions in list comprehensions\nsales = [45000, 52000, 38000, 61000, 55000]\ntarget = 50000\n\n# if-else in comprehension (ternary expression)\n# Syntax: [value_if_true if condition else value_if_false for item in list]\ncategories = ["High" if s >= target else "Low" for s in sales]\nprint("Categories:", categories)\n\n# Calculate different bonuses based on performance\nbonuses = [s * 0.10 if s >= target else s * 0.05 for s in sales]\nprint("Bonuses:", bonuses)',
            executable: true
          },
          {
            type: 'heading',
            level: 2,
            text: 'The zip() Function',
            id: 'zip'
          },
          {
            type: 'paragraph',
            text: 'zip() combines multiple lists element by element, like a zipper. Very useful when you have related data in separate lists.'
          },
          {
            type: 'code',
            language: 'python',
            code: '# zip() pairs up elements from multiple lists\nregions = ["North", "South", "East", "West"]\nsales = [125000, 98000, 142000, 156000]\n\n# Combine into pairs for iteration\nprint("Regional Performance:")\nfor region, amount in zip(regions, sales):\n    print(f"  {region}: ${amount:,}")\n\n# Create a dictionary from two lists\nregion_sales = dict(zip(regions, sales))\nprint("\\nAs dictionary:", region_sales)',
            executable: true
          },
          {
            type: 'code',
            language: 'python',
            code: '# zip() with comprehensions - very powerful!\nregions = ["North", "South", "East", "West"]\nsales = [125000, 98000, 142000, 156000]\ntarget = 120000\n\n# Create dictionary with comprehension\nregion_dict = {r: s for r, s in zip(regions, sales)}\nprint("Sales dict:", region_dict)\n\n# Calculate bonuses for each region\nbonuses = {r: s * 0.10 if s >= target else s * 0.05 \n           for r, s in zip(regions, sales)}\nprint("Bonuses:", bonuses)',
            executable: true
          },
          {
            type: 'heading',
            level: 2,
            text: 'Dictionary Comprehensions',
            id: 'dict-comprehensions'
          },
          {
            type: 'paragraph',
            text: 'Just like list comprehensions, you can create dictionaries with concise syntax.'
          },
          {
            type: 'code',
            language: 'python',
            code: '# Dictionary comprehension syntax: {key: value for item in iterable}\nsales = [45000, 52000, 38000, 61000]\nmonths = ["Jan", "Feb", "Mar", "Apr"]\n\n# Create month: sales dictionary\nmonthly = {month: sale for month, sale in zip(months, sales)}\nprint("Monthly sales:", monthly)\n\n# Transform values\nmonthly_in_k = {month: sale / 1000 for month, sale in monthly.items()}\nprint("In thousands:", monthly_in_k)\n\n# Filter while creating\ntarget = 45000\nhigh_performers = {m: s for m, s in monthly.items() if s > target}\nprint("Above target:", high_performers)',
            executable: true
          },
          {
            type: 'callout',
            variant: 'tip',
            title: 'Comprehension Power',
            content: 'List and dictionary comprehensions are Pythonic and efficient. They\'re especially useful in data processing pipelines. Master them for cleaner, faster code!'
          },
          {
            type: 'heading',
            level: 2,
            text: 'Formatting Reports',
            id: 'formatting-reports'
          },
          {
            type: 'paragraph',
            text: 'When generating reports, you often need formatting tricks. Here are some useful techniques.'
          },
          {
            type: 'code',
            language: 'python',
            code: '# String multiplication - repeat a character\nprint("=" * 40)  # Print 40 equal signs\nprint("SALES REPORT".center(40))  # Center text in 40 chars\nprint("=" * 40)\n\n# Create formatted headers\nseparator = "-" * 30\nprint(separator)\nprint("Monthly Results")\nprint(separator)\n\n# Use in loops for clean reports\nfor region in ["North", "South", "East"]:\n    print(f"  Region: {region}")\nprint("-" * 30)',
            executable: true
          },
          {
            type: 'heading',
            level: 3,
            text: 'Interactive Exercise: For Loop Practice',
            id: 'for-loop-exercise'
          },
          {
            type: 'paragraph',
            text: 'Practice iterating through lists and calculating totals.'
          },
          {
            type: 'callout',
            variant: 'info',
            title: 'Your Task',
            content: '1. Loop through the products list\n2. Print each product name\n3. Calculate total of all prices\n4. Find the most expensive product'
          },
          {
            type: 'code',
            language: 'python',
            code: '# Product data\nproducts = ["Laptop", "Mouse", "Keyboard", "Monitor"]\nprices = [999, 29, 79, 299]\n\n# YOUR CODE: Loop through products and print each\nprint("Products:")\nfor ___ in ___:\n    print(f"  - {product}")\n\n# YOUR CODE: Calculate total price using a loop\ntotal = 0\nfor ___ in ___:\n    total = total + ___\nprint(f"\\nTotal: ${total}")\n\n# YOUR CODE: Use zip() to pair products with prices\nprint("\\nPrice List:")\nfor product, price in ___(products, prices):\n    print(f"  {product}: ${price}")',
            executable: true
          },
          {
            type: 'callout',
            variant: 'tip',
            title: 'Solution',
            content: 'for product in products:\ntotal = 0; for price in prices: total = total + price\nfor product, price in zip(products, prices):'
          },
          {
            type: 'heading',
            level: 3,
            text: 'Interactive Exercise: List Comprehension',
            id: 'list-comp-exercise'
          },
          {
            type: 'paragraph',
            text: 'Convert traditional loops to elegant list comprehensions.'
          },
          {
            type: 'callout',
            variant: 'info',
            title: 'Your Task',
            content: '1. Create a list of doubled values\n2. Filter values greater than 50000\n3. Create categories based on conditions'
          },
          {
            type: 'code',
            language: 'python',
            code: '# Sales data\nsales = [25000, 35000, 60000, 45000, 80000]\n\n# YOUR CODE: Double all sales using list comprehension\n# Syntax: [expression for item in list]\ndoubled = [___ * 2 for s in ___]\nprint(f"Doubled: {doubled}")\n\n# YOUR CODE: Filter sales > 50000\n# Syntax: [item for item in list if condition]\nhigh_sales = [s for s in ___ if s ___ 50000]\nprint(f"High sales: {high_sales}")\n\n# YOUR CODE: Create "High"/"Low" labels\n# Syntax: [value_if_true if condition else value_if_false for item in list]\nlabels = ["___" if s >= 50000 else "___" for s in sales]\nprint(f"Labels: {labels}")',
            executable: true
          },
          {
            type: 'callout',
            variant: 'tip',
            title: 'Solution',
            content: 'doubled = [s * 2 for s in sales]\nhigh_sales = [s for s in sales if s > 50000]\nlabels = ["High" if s >= 50000 else "Low" for s in sales]'
          },
          {
            type: 'exercise-link',
            exerciseId: 'chapter-2-loops-exercise',
            title: 'Practice: Sales Report Generator'
          },
          {
            type: 'exercise-link',
            exerciseId: 'chapter-2-comprehensions-exercise',
            title: 'Practice: Data Transformation with Comprehensions'
          }
        ]
      },
      {
        id: 'functions',
        title: 'Functions',
        estimatedTime: 30,
        content: [
          {
            type: 'heading',
            level: 1,
            text: 'Functions',
            id: 'functions'
          },
          {
            type: 'paragraph',
            text: 'Functions are reusable blocks of code that perform specific tasks. They help organize your code, avoid repetition, and make your programs modular and maintainable.'
          },
          {
            type: 'heading',
            level: 2,
            text: 'Defining Functions',
            id: 'defining-functions'
          },
          {
            type: 'code',
            language: 'python',
            code: '# Basic function definition\ndef greet(name):\n    """Greet a person by name."""\n    return "Hello, " + name + "!"\n\n# Call the function\nmessage = greet("Alex")\nprint(message)\n\n# Function with multiple parameters\ndef calculate_bonus(sales, rate=0.10):\n    """Calculate bonus based on sales and rate."""\n    return sales * rate\n\nbonus = calculate_bonus(80000)\nprint("Standard bonus:", bonus)\n\nbonus_high = calculate_bonus(80000, rate=0.15)\nprint("High performer bonus:", bonus_high)',
            executable: true
          },
          {
            type: 'heading',
            level: 2,
            text: 'Functions with Multiple Returns',
            id: 'multiple-returns'
          },
          {
            type: 'code',
            language: 'python',
            code: '# Function returning multiple values\ndef analyze_sales(sales_list):\n    """Analyze sales data and return statistics."""\n    total = sum(sales_list)\n    average = total / len(sales_list)\n    maximum = max(sales_list)\n    minimum = min(sales_list)\n    \n    return total, average, maximum, minimum\n\n# Use the function\nmonthly_sales = [45000, 52000, 48000, 61000, 55000, 58000]\n\ntotal, avg, high, low = analyze_sales(monthly_sales)\n\nprint("Total:", total)\nprint("Average:", avg)\nprint("Highest:", high)\nprint("Lowest:", low)',
            executable: true
          },
          {
            type: 'heading',
            level: 2,
            text: 'Real BI Function Examples',
            id: 'bi-functions'
          },
          {
            type: 'code',
            language: 'python',
            code: '# BI-focused functions\n\ndef calculate_growth_rate(current, previous):\n    """Calculate percentage growth between periods."""\n    if previous == 0:\n        return 0\n    return ((current - previous) / previous) * 100\n\ndef segment_customer(total_purchases, months_active):\n    """Segment customer based on purchase history."""\n    if total_purchases >= 10000 and months_active >= 12:\n        return "Platinum", 0.20\n    elif total_purchases >= 5000 or months_active >= 6:\n        return "Gold", 0.10\n    else:\n        return "Standard", 0.05\n\ndef generate_report(data, title):\n    """Generate a formatted report."""\n    print("\\n" + "=" * 40)\n    print(title.center(40))\n    print("=" * 40)\n    \n    total = sum(data.values())\n    for key, value in data.items():\n        percentage = (value / total) * 100\n        print(key, ":", value, "(", round(percentage, 1), "%)")\n    \n    print("=" * 40)\n    print("Total:", total)\n\n# Test the functions\nq1_sales = 125000\nq2_sales = 142000\ngrowth = calculate_growth_rate(q2_sales, q1_sales)\nprint("Q1 to Q2 Growth:", round(growth, 1), "%")\n\ntier, discount = segment_customer(8500, 10)\nprint("Customer Tier:", tier, "Discount:", discount)\n\nregional_data = {"North": 125000, "South": 98000, "East": 142000}\ngenerate_report(regional_data, "Regional Sales")',
            executable: true
          },
          {
            type: 'callout',
            variant: 'info',
            title: 'Docstrings',
            content: 'Always include docstrings (the triple-quoted strings) in your functions. They document what the function does and help others (and future you) understand your code.'
          },
          {
            type: 'heading',
            level: 2,
            text: 'f-string Number Formatting',
            id: 'fstring-formatting'
          },
          {
            type: 'paragraph',
            text: 'When displaying numbers in reports, you often want to format them nicely. f-strings support powerful formatting options.'
          },
          {
            type: 'code',
            language: 'python',
            code: '# f-string number formatting\ntotal = 1234567\naverage = 1234.5678\npercentage = 0.156\n\n# Add thousands separator with comma\nprint(f"Total: {total:,}")           # 1,234,567\nprint(f"Total: ${total:,}")          # $1,234,567\n\n# Control decimal places\nprint(f"Average: {average:.2f}")     # 1234.57 (2 decimals)\nprint(f"Average: {average:.1f}")     # 1234.6 (1 decimal)\n\n# Combine comma and decimals\nprint(f"Average: ${average:,.2f}")   # $1,234.57\n\n# Percentage formatting\nprint(f"Rate: {percentage:.1%}")     # 15.6% (auto multiply by 100)',
            executable: true
          },
          {
            type: 'code',
            language: 'python',
            code: '# Using formatting in reports\ndef print_summary(sales, costs):\n    """Print a formatted financial summary."""\n    profit = sales - costs\n    margin = (profit / sales) * 100\n    \n    print("=" * 35)\n    print("FINANCIAL SUMMARY".center(35))\n    print("=" * 35)\n    print(f"Sales:        ${sales:>12,}")\n    print(f"Costs:        ${costs:>12,}")\n    print(f"Profit:       ${profit:>12,}")\n    print(f"Margin:       {margin:>12.1f}%")\n    print("=" * 35)\n\nprint_summary(150000, 95000)',
            executable: true
          },
          {
            type: 'callout',
            variant: 'tip',
            title: 'Common Format Specifiers',
            content: ':, = thousands separator | :.2f = 2 decimal places | :,.2f = both | :.1% = percentage | :>10 = right-align in 10 spaces'
          },
          {
            type: 'exercise-link',
            exerciseId: 'chapter-2-functions-exercise',
            title: 'Practice: Build Sales Analytics Functions'
          },
          {
            type: 'exercise-link',
            exerciseId: 'chapter-2-exercise-1',
            title: 'Practice: Build a Sales Analytics Module (Advanced)'
          },
          {
            type: 'quiz-link',
            quizId: 'chapter-2-quiz',
            title: 'Chapter 2 Quiz'
          }
        ]
      }
    ]
  },
  {
    id: 3,
    title: 'Working with External Data',
    description: 'Learn to handle errors gracefully, read and write files, and process CSV data for real-world BI applications',
    icon: 'file-text',
    estimatedTime: 120,
    sections: [
      {
        id: 'error-handling-basics',
        title: 'Understanding Errors',
        estimatedTime: 15,
        content: [
          {
            type: 'heading',
            level: 1,
            text: 'Understanding Errors in Python',
            id: 'understanding-errors'
          },
          {
            type: 'paragraph',
            text: 'Errors are a natural part of programming. In Business Intelligence, you\'ll encounter errors when files are missing, data is malformed, or calculations fail. Learning to handle errors gracefully makes your programs robust and professional.'
          },
          {
            type: 'callout',
            variant: 'info',
            title: 'Why Error Handling Matters in BI',
            content: 'When processing thousands of records, one bad value shouldn\'t crash your entire report. Proper error handling lets you log issues, use defaults, and continue processing.'
          },
          {
            type: 'heading',
            level: 2,
            text: 'Common Error Types',
            id: 'error-types'
          },
          {
            type: 'paragraph',
            text: 'Python has different types of errors (called exceptions) for different problems. Understanding them helps you handle them appropriately.'
          },
          {
            type: 'code',
            language: 'python',
            code: '# TypeError - wrong type for an operation\n# This would error: "Hello" + 5\n\n# ValueError - right type, wrong value\n# This would error: int("abc")\n\n# ZeroDivisionError - dividing by zero\n# This would error: 10 / 0\n\n# KeyError - dictionary key doesn\'t exist\ndata = {"name": "Alice"}\n# This would error: data["age"]\n\n# IndexError - list index out of range\nnumbers = [1, 2, 3]\n# This would error: numbers[10]\n\n# FileNotFoundError - file doesn\'t exist\n# This would error: open("missing_file.txt")\n\nprint("Error types demonstrated!")',
            executable: true
          },
          {
            type: 'heading',
            level: 2,
            text: 'The try-except Block',
            id: 'try-except'
          },
          {
            type: 'paragraph',
            text: 'The try-except block lets you attempt risky code and catch errors if they occur, preventing your program from crashing.'
          },
          {
            type: 'code',
            language: 'python',
            code: '# Basic try-except structure\ntry:\n    # Code that might fail\n    result = 10 / 2\n    print(f"Result: {result}")\nexcept:\n    # What to do if it fails\n    print("An error occurred!")\n\nprint("Program continues running!")',
            executable: true
          },
          {
            type: 'code',
            language: 'python',
            code: '# Catching a specific error\ndef safe_divide(a, b):\n    try:\n        result = a / b\n        return result\n    except ZeroDivisionError:\n        print("Error: Cannot divide by zero!")\n        return None\n\n# Test the function\nprint(safe_divide(10, 2))   # Works: 5.0\nprint(safe_divide(10, 0))   # Catches error, returns None\nprint(safe_divide(15, 3))   # Works: 5.0',
            executable: true
          },
          {
            type: 'mini-quiz',
            id: 'quiz-error-basic',
            question: 'What happens when Python encounters an unhandled error?',
            options: ['The program continues with a warning', 'The program crashes and stops', 'Python automatically fixes it', 'The error is ignored'],
            correctAnswer: 1,
            explanation: 'Without error handling, Python stops execution and displays an error traceback. The try-except block prevents this by catching the error.'
          },
          {
            type: 'heading',
            level: 2,
            text: 'Catching Multiple Error Types',
            id: 'multiple-errors'
          },
          {
            type: 'code',
            language: 'python',
            code: '# Handle different errors differently\ndef get_value(data, key):\n    try:\n        value = data[key]\n        return int(value)  # Convert to integer\n    except KeyError:\n        print(f"Error: Key \'{key}\' not found")\n        return 0\n    except ValueError:\n        print(f"Error: Cannot convert \'{data[key]}\' to integer")\n        return 0\n    except TypeError:\n        print("Error: Invalid data type")\n        return 0\n\n# Test with different scenarios\nuser_data = {"age": "25", "score": "abc", "name": "Bob"}\n\nprint("Age:", get_value(user_data, "age"))      # Works: 25\nprint("Score:", get_value(user_data, "score"))  # ValueError\nprint("City:", get_value(user_data, "city"))    # KeyError',
            executable: true
          },
          {
            type: 'callout',
            variant: 'tip',
            title: 'Best Practice',
            content: 'Always catch specific exceptions rather than using a bare except. This makes debugging easier and prevents hiding unexpected errors.'
          },
          {
            type: 'heading',
            level: 3,
            text: 'Interactive Exercise: Basic Error Handling',
            id: 'error-basic-exercise'
          },
          {
            type: 'paragraph',
            text: 'Practice writing try-except blocks to handle common errors.'
          },
          {
            type: 'callout',
            variant: 'info',
            title: 'Your Task',
            content: '1. Complete the try-except block\n2. Handle ZeroDivisionError\n3. Return None when division fails'
          },
          {
            type: 'code',
            language: 'python',
            code: '# Safe division function\ndef safe_divide(a, b):\n    ___:  # Start error handling block\n        result = a / b\n        return result\n    ___ ZeroDivisionError:  # Catch specific error\n        print("Cannot divide by zero!")\n        return ___  # Return None on error\n\n# Test your function\nprint("10 / 2 =", safe_divide(10, 2))   # Should work\nprint("10 / 0 =", safe_divide(10, 0))   # Should catch error\nprint("15 / 3 =", safe_divide(15, 3))   # Should work',
            executable: true
          },
          {
            type: 'callout',
            variant: 'tip',
            title: 'Solution',
            content: 'try:\n    result = a / b\n    return result\nexcept ZeroDivisionError:\n    print("Cannot divide by zero!")\n    return None'
          },
          {
            type: 'mini-quiz',
            id: 'quiz-error-types',
            question: 'Which error type occurs when you try to access a dictionary key that doesn\'t exist?',
            options: ['IndexError', 'ValueError', 'KeyError', 'TypeError'],
            correctAnswer: 2,
            explanation: 'KeyError is raised when trying to access a dictionary key that doesn\'t exist. IndexError is for list indices, ValueError for wrong values, and TypeError for wrong types.'
          },
          {
            type: 'section-nav',
            showComplete: true,
            showNext: true,
            showBack: true,
            nextSection: 'error-handling-advanced'
          }
        ]
      },
      {
        id: 'error-handling-advanced',
        title: 'Advanced Error Handling',
        estimatedTime: 15,
        content: [
          {
            type: 'heading',
            level: 1,
            text: 'Advanced Error Handling Techniques',
            id: 'advanced-error-handling'
          },
          {
            type: 'paragraph',
            text: 'Now that you understand basic error handling, let\'s explore more powerful techniques that are essential for production-quality code.'
          },
          {
            type: 'heading',
            level: 2,
            text: 'The else Clause',
            id: 'else-clause'
          },
          {
            type: 'paragraph',
            text: 'The else clause runs only if no exception occurred. It\'s useful for code that should only execute on success.'
          },
          {
            type: 'code',
            language: 'python',
            code: '# try-except-else pattern\ndef process_number(text):\n    try:\n        number = int(text)\n    except ValueError:\n        print(f"Could not convert \'{text}\' to integer")\n        return None\n    else:\n        # Only runs if no exception occurred\n        print(f"Successfully converted to: {number}")\n        return number * 2\n\n# Test it\nresult1 = process_number("42")     # Success path\nresult2 = process_number("hello")  # Error path\n\nprint(f"Result 1: {result1}")\nprint(f"Result 2: {result2}")',
            executable: true
          },
          {
            type: 'heading',
            level: 2,
            text: 'The finally Clause',
            id: 'finally-clause'
          },
          {
            type: 'paragraph',
            text: 'The finally clause ALWAYS runs, whether an exception occurred or not. It\'s perfect for cleanup tasks like closing files or database connections.'
          },
          {
            type: 'code',
            language: 'python',
            code: '# try-except-finally pattern\ndef risky_operation(value):\n    print("Starting operation...")\n    try:\n        result = 100 / value\n        print(f"Calculation result: {result}")\n    except ZeroDivisionError:\n        print("ERROR: Division by zero!")\n    finally:\n        # This ALWAYS runs\n        print("Cleanup complete.")\n        print("-" * 30)\n\n# Test with both success and failure\nrisky_operation(5)   # Success\nrisky_operation(0)   # Error - but finally still runs!',
            executable: true
          },
          {
            type: 'mini-quiz',
            id: 'quiz-finally',
            question: 'When does the finally block execute?',
            options: ['Only when an error occurs', 'Only when no error occurs', 'Always, regardless of errors', 'Never automatically'],
            correctAnswer: 2,
            explanation: 'The finally block ALWAYS executes, whether an exception occurred or not. This makes it ideal for cleanup operations like closing files.'
          },
          {
            type: 'heading',
            level: 2,
            text: 'Accessing Error Information',
            id: 'error-info'
          },
          {
            type: 'paragraph',
            text: 'You can capture the error object to get more details about what went wrong.'
          },
          {
            type: 'code',
            language: 'python',
            code: '# Capturing error details with "as"\ndef safe_convert(values):\n    results = []\n    errors = []\n    \n    for i, val in enumerate(values):\n        try:\n            results.append(float(val))\n        except ValueError as e:\n            # Capture the error message\n            errors.append(f"Index {i}: {e}")\n            results.append(None)\n    \n    return results, errors\n\n# Process mixed data\ndata = ["10", "20.5", "abc", "30", "xyz", "40.0"]\nnumbers, error_log = safe_convert(data)\n\nprint("Converted values:", numbers)\nprint("\\nErrors encountered:")\nfor error in error_log:\n    print(f"  - {error}")',
            executable: true
          },
          {
            type: 'heading',
            level: 2,
            text: 'Raising Your Own Errors',
            id: 'raising-errors'
          },
          {
            type: 'paragraph',
            text: 'You can raise your own exceptions when input is invalid or conditions aren\'t met.'
          },
          {
            type: 'code',
            language: 'python',
            code: '# Raising exceptions for validation\ndef calculate_discount(price, discount_rate):\n    # Validate inputs\n    if price < 0:\n        raise ValueError("Price cannot be negative")\n    if discount_rate < 0 or discount_rate > 1:\n        raise ValueError("Discount rate must be between 0 and 1")\n    \n    return price * (1 - discount_rate)\n\n# Test with valid input\ntry:\n    result = calculate_discount(100, 0.20)\n    print(f"Discounted price: ${result:.2f}")\nexcept ValueError as e:\n    print(f"Validation error: {e}")\n\n# Test with invalid input\ntry:\n    result = calculate_discount(100, 1.5)  # Invalid rate\n    print(f"Discounted price: ${result:.2f}")\nexcept ValueError as e:\n    print(f"Validation error: {e}")',
            executable: true
          },
          {
            type: 'mini-quiz',
            id: 'quiz-raise',
            question: 'What does the "raise" keyword do in Python?',
            options: ['Increases a number value', 'Creates a new exception and throws it', 'Catches an existing error', 'Ignores an error'],
            correctAnswer: 1,
            explanation: 'The "raise" keyword creates and throws an exception. It\'s used to signal that something went wrong, typically for input validation.'
          },
          {
            type: 'heading',
            level: 2,
            text: 'Practical BI Example',
            id: 'bi-example'
          },
          {
            type: 'code',
            language: 'python',
            code: '# Complete error handling example for BI\ndef process_sales_record(record):\n    """\n    Process a single sales record with full error handling.\n    Returns processed data or None with error message.\n    """\n    errors = []\n    \n    try:\n        # Extract and validate fields\n        product = record.get("product", "Unknown")\n        \n        # Handle price\n        try:\n            price = float(record.get("price", 0))\n            if price < 0:\n                errors.append("Negative price corrected to 0")\n                price = 0\n        except (ValueError, TypeError):\n            errors.append(f"Invalid price: {record.get(\'price\')}")\n            price = 0\n        \n        # Handle quantity\n        try:\n            qty = int(record.get("quantity", 0))\n            if qty < 0:\n                qty = 0\n                errors.append("Negative quantity corrected to 0")\n        except (ValueError, TypeError):\n            errors.append(f"Invalid quantity: {record.get(\'quantity\')}")\n            qty = 0\n        \n        # Calculate total\n        total = price * qty\n        \n        return {\n            "product": product,\n            "price": price,\n            "quantity": qty,\n            "total": total,\n            "errors": errors,\n            "valid": len(errors) == 0\n        }\n        \n    except Exception as e:\n        return {\n            "product": "ERROR",\n            "price": 0,\n            "quantity": 0,\n            "total": 0,\n            "errors": [str(e)],\n            "valid": False\n        }\n\n# Test with various records\nrecords = [\n    {"product": "Widget A", "price": "29.99", "quantity": "5"},\n    {"product": "Widget B", "price": "invalid", "quantity": "3"},\n    {"product": "Widget C", "price": "15.00", "quantity": "-2"},\n    {"product": "Widget D"}, # Missing fields\n]\n\nprint("Processing Sales Records")\nprint("=" * 50)\n\nfor record in records:\n    result = process_sales_record(record)\n    status = "✓" if result["valid"] else "✗"\n    print(f"{status} {result[\'product\']}: ${result[\'total\']:.2f}")\n    for error in result["errors"]:\n        print(f"    Warning: {error}")',
            executable: true
          },
          {
            type: 'heading',
            level: 3,
            text: 'Interactive Exercise: Try-Except-Finally',
            id: 'try-finally-exercise'
          },
          {
            type: 'paragraph',
            text: 'Practice using the complete error handling pattern with finally clause.'
          },
          {
            type: 'callout',
            variant: 'info',
            title: 'Your Task',
            content: '1. Add the try block around risky code\n2. Catch ValueError exception\n3. Add finally block that always prints "Cleanup done"'
          },
          {
            type: 'code',
            language: 'python',
            code: '# Complete error handling exercise\ndef convert_to_number(text):\n    print(f"Converting: {text}")\n    \n    ___:  # Start try block\n        number = int(text)\n        print(f"Success! Got: {number}")\n        return number\n    ___ ValueError:  # Catch the error\n        print(f"Failed! \'{text}\' is not a valid number")\n        return None\n    ___:  # Add finally block\n        print("Cleanup done")\n        print("-" * 20)\n\n# Test the function\nresult1 = convert_to_number("42")\nresult2 = convert_to_number("hello")\nresult3 = convert_to_number("100")\n\nprint(f"Results: {result1}, {result2}, {result3}")',
            executable: true
          },
          {
            type: 'callout',
            variant: 'tip',
            title: 'Solution',
            content: 'try:\n    number = int(text)\nexcept ValueError:\n    print(f"Failed!")\n    return None\nfinally:\n    print("Cleanup done")'
          },
          {
            type: 'heading',
            level: 3,
            text: 'Interactive Exercise: Multiple Exception Types',
            id: 'multi-except-exercise'
          },
          {
            type: 'paragraph',
            text: 'Handle different types of errors with specific messages.'
          },
          {
            type: 'callout',
            variant: 'info',
            title: 'Your Task',
            content: 'Handle three error types:\n1. KeyError - when key not found\n2. ValueError - when conversion fails\n3. TypeError - when wrong type used'
          },
          {
            type: 'code',
            language: 'python',
            code: '# Multi-exception handler\ndef get_price(products, product_name):\n    try:\n        price_str = products[product_name]\n        price = float(price_str)\n        return price\n    except ___:  # Key not in dictionary\n        return f"Product \'{product_name}\' not found"\n    except ___:  # Cannot convert to float\n        return f"Invalid price format"\n    except ___:  # Wrong type passed\n        return f"Invalid data type"\n\n# Test data\nproduct_prices = {\n    "Widget": "29.99",\n    "Gadget": "invalid",\n    "Tool": "15.00"\n}\n\n# Test cases\nprint(get_price(product_prices, "Widget"))   # Should work\nprint(get_price(product_prices, "Unknown"))  # KeyError\nprint(get_price(product_prices, "Gadget"))   # ValueError',
            executable: true
          },
          {
            type: 'callout',
            variant: 'tip',
            title: 'Solution',
            content: 'except KeyError:\n    return "Product not found"\nexcept ValueError:\n    return "Invalid price format"\nexcept TypeError:\n    return "Invalid data type"'
          },
          {
            type: 'exercise-link',
            exerciseId: 'chapter-3-error-handling-exercise',
            title: 'Practice: Robust Data Validator'
          },
          {
            type: 'section-nav',
            showComplete: true,
            showNext: true,
            showBack: true,
            prevSection: 'error-handling-basics',
            nextSection: 'file-reading'
          }
        ]
      },
      {
        id: 'file-reading',
        title: 'Reading Files',
        estimatedTime: 20,
        content: [
          {
            type: 'heading',
            level: 1,
            text: 'Reading Files in Python',
            id: 'reading-files'
          },
          {
            type: 'paragraph',
            text: 'Files are the foundation of data processing. In BI, you\'ll read data from text files, CSVs, logs, and more. Python makes file handling straightforward with built-in functions.'
          },
          {
            type: 'callout',
            variant: 'info',
            title: 'File Paths',
            content: 'File paths can be relative (to your script location) or absolute (full path from root). Use forward slashes (/) in Python, even on Windows, or use raw strings (r"path").'
          },
          {
            type: 'heading',
            level: 2,
            text: 'Opening and Reading Files',
            id: 'open-read'
          },
          {
            type: 'paragraph',
            text: 'The open() function opens a file, and there are several ways to read its contents.'
          },
          {
            type: 'code',
            language: 'python',
            code: '# Basic file reading pattern\n# Note: This is a demonstration - actual file operations\n# require a real file to exist\n\n# Simulating file content for demonstration\nsample_content = """Product,Price,Quantity\nWidget A,29.99,100\nWidget B,49.99,50\nWidget C,19.99,200"""\n\n# In real code, you would use:\n# with open("data.txt", "r") as file:\n#     content = file.read()\n\n# For now, let\'s work with our sample:\nprint("File content:")\nprint(sample_content)\nprint()\nprint("Content type:", type(sample_content))\nprint("Content length:", len(sample_content), "characters")',
            executable: true
          },
          {
            type: 'heading',
            level: 2,
            text: 'The with Statement',
            id: 'with-statement'
          },
          {
            type: 'paragraph',
            text: 'The "with" statement ensures files are properly closed, even if errors occur. Always use it when working with files.'
          },
          {
            type: 'code',
            language: 'python',
            code: '# The with statement pattern\n# with open("filename.txt", "r") as file:\n#     content = file.read()\n# File is automatically closed here!\n\n# Mode options:\n# "r" - Read (default) - file must exist\n# "w" - Write - creates new file or overwrites\n# "a" - Append - adds to end of file\n# "r+" - Read and Write\n\nprint("File open modes:")\nprint("  \'r\' - Read mode (default)")\nprint("  \'w\' - Write mode (overwrites)")\nprint("  \'a\' - Append mode (adds to end)")\nprint("  \'r+\' - Read and write mode")',
            executable: true
          },
          {
            type: 'mini-quiz',
            id: 'quiz-file-open',
            question: 'What does the "with" statement do when opening files?',
            options: ['Opens the file faster', 'Automatically closes the file when done', 'Prevents all errors', 'Encrypts the file content'],
            correctAnswer: 1,
            explanation: 'The "with" statement creates a context manager that automatically closes the file when the block ends, even if an error occurs. This prevents resource leaks.'
          },
          {
            type: 'heading',
            level: 2,
            text: 'Reading Methods',
            id: 'reading-methods'
          },
          {
            type: 'paragraph',
            text: 'Python offers different ways to read file content depending on your needs.'
          },
          {
            type: 'code',
            language: 'python',
            code: '# Different ways to read files\n# Simulating file content\nfile_content = """Line 1: Hello World\nLine 2: Python is great\nLine 3: Data processing\nLine 4: Business Intelligence"""\n\n# Method 1: read() - entire file as one string\nprint("1. read() - entire content:")\nprint(file_content[:50] + "...")\nprint()\n\n# Method 2: readlines() - list of lines\nlines = file_content.split("\\n")  # Simulating readlines()\nprint("2. readlines() - list of lines:")\nprint(lines)\nprint()\n\n# Method 3: readline() - one line at a time\nprint("3. readline() - one at a time:")\nfor line in lines[:2]:\n    print(f"  Got: {line}")',
            executable: true
          },
          {
            type: 'code',
            language: 'python',
            code: '# Processing lines in a file\nlog_data = """2024-01-15 10:30:00 INFO User login: alice\n2024-01-15 10:31:15 ERROR Database connection failed\n2024-01-15 10:31:20 INFO Retry successful\n2024-01-15 10:32:00 WARNING Low memory: 85%\n2024-01-15 10:33:00 INFO User login: bob"""\n\n# Process each line\nlines = log_data.strip().split("\\n")\n\nprint("Log Analysis")\nprint("=" * 40)\n\nerror_count = 0\nwarning_count = 0\ninfo_count = 0\n\nfor line in lines:\n    if "ERROR" in line:\n        error_count += 1\n        print(f"🔴 {line}")\n    elif "WARNING" in line:\n        warning_count += 1\n        print(f"🟡 {line}")\n    else:\n        info_count += 1\n        print(f"🟢 {line}")\n\nprint("=" * 40)\nprint(f"Summary: {info_count} INFO, {warning_count} WARNING, {error_count} ERROR")',
            executable: true
          },
          {
            type: 'heading',
            level: 2,
            text: 'Handling File Errors',
            id: 'file-errors'
          },
          {
            type: 'code',
            language: 'python',
            code: '# Always handle potential file errors\ndef read_file_safely(filename):\n    """\n    Safely read a file with proper error handling.\n    Returns content and success status.\n    """\n    try:\n        # In real code:\n        # with open(filename, "r") as file:\n        #     content = file.read()\n        # return content, True\n        \n        # Simulation for demo:\n        if filename == "exists.txt":\n            return "File content here!", True\n        else:\n            raise FileNotFoundError(f"No such file: {filename}")\n            \n    except FileNotFoundError as e:\n        print(f"Error: File not found - {filename}")\n        return None, False\n    except PermissionError:\n        print(f"Error: No permission to read {filename}")\n        return None, False\n    except Exception as e:\n        print(f"Error reading file: {e}")\n        return None, False\n\n# Test with different files\nfiles = ["exists.txt", "missing.txt", "data.csv"]\n\nfor f in files:\n    content, success = read_file_safely(f)\n    if success:\n        print(f"Successfully read {f}: {content}")\n    print()',
            executable: true
          },
          {
            type: 'mini-quiz',
            id: 'quiz-file-error',
            question: 'Which exception is raised when you try to open a file that doesn\'t exist?',
            options: ['ValueError', 'FileNotFoundError', 'IOError', 'KeyError'],
            correctAnswer: 1,
            explanation: 'FileNotFoundError is raised when trying to open a file that doesn\'t exist. It\'s a common error to handle in file processing code.'
          },
          {
            type: 'heading',
            level: 3,
            text: 'Interactive Exercise: Parse File Lines',
            id: 'parse-lines-exercise'
          },
          {
            type: 'paragraph',
            text: 'Practice splitting file content into lines and processing each one.'
          },
          {
            type: 'callout',
            variant: 'info',
            title: 'Your Task',
            content: '1. Split the content into lines using splitlines()\n2. Loop through each line\n3. Split each line by comma to get fields\n4. Print the product name and price'
          },
          {
            type: 'code',
            language: 'python',
            code: '# Simulated file content (in real code this comes from file.read())\nfile_content = """Product,Price,Stock\nLaptop,999.99,50\nMouse,29.99,200\nKeyboard,79.99,150"""\n\n# YOUR CODE: Split into lines\nlines = file_content.___()\n\n# Skip header and process data\nfor line in lines[1:]:  # Skip first line (header)\n    # YOUR CODE: Split line by comma\n    fields = line.___(\",\")\n    \n    # YOUR CODE: Extract product name (index 0) and price (index 1)\n    product = fields[___]\n    price = fields[___]\n    \n    print(f"Product: {product}, Price: ${price}")',
            executable: true
          },
          {
            type: 'callout',
            variant: 'tip',
            title: 'Solution',
            content: 'lines = file_content.splitlines()\nfields = line.split(",")\nproduct = fields[0]\nprice = fields[1]'
          },
          {
            type: 'heading',
            level: 3,
            text: 'Interactive Exercise: Safe File Reading',
            id: 'safe-file-exercise'
          },
          {
            type: 'paragraph',
            text: 'Combine file reading with error handling.'
          },
          {
            type: 'callout',
            variant: 'info',
            title: 'Your Task',
            content: '1. Use try-except to handle FileNotFoundError\n2. Return empty list if file not found\n3. Split lines and return as list'
          },
          {
            type: 'code',
            language: 'python',
            code: '# Safe file reader function\ndef read_lines_safe(content):\n    """\n    Safely read and return lines from content.\n    Returns empty list on error.\n    """\n    ___:  # Start try block\n        lines = content.splitlines()\n        return lines\n    ___ Exception as e:  # Catch any error\n        print(f"Error reading: {e}")\n        return ___  # Return empty list\n\n# Test with valid content\ndata = "Line 1\\nLine 2\\nLine 3"\nresult = read_lines_safe(data)\nprint(f"Lines found: {len(result)}")\nfor i, line in enumerate(result, 1):\n    print(f"  {i}: {line}")',
            executable: true
          },
          {
            type: 'callout',
            variant: 'tip',
            title: 'Solution',
            content: 'try:\n    lines = content.splitlines()\n    return lines\nexcept Exception as e:\n    print(f"Error: {e}")\n    return []'
          },
          {
            type: 'section-nav',
            showComplete: true,
            showNext: true,
            showBack: true,
            prevSection: 'error-handling-advanced',
            nextSection: 'file-writing'
          }
        ]
      },
      {
        id: 'file-writing',
        title: 'Writing Files',
        estimatedTime: 15,
        content: [
          {
            type: 'heading',
            level: 1,
            text: 'Writing Files in Python',
            id: 'writing-files'
          },
          {
            type: 'paragraph',
            text: 'Writing files is essential for saving processed data, generating reports, and creating output files. Python\'s file writing is just as simple as reading.'
          },
          {
            type: 'heading',
            level: 2,
            text: 'Write Mode vs Append Mode',
            id: 'write-vs-append'
          },
          {
            type: 'code',
            language: 'python',
            code: '# Write mode ("w") - creates new file or OVERWRITES existing\n# with open("output.txt", "w") as file:\n#     file.write("Hello World!")\n\n# Append mode ("a") - adds to end of existing file\n# with open("output.txt", "a") as file:\n#     file.write("More content!")\n\nprint("File Writing Modes:")\nprint()\nprint("WRITE mode (\'w\'):")\nprint("  - Creates new file if doesn\'t exist")\nprint("  - OVERWRITES if file exists!")\nprint("  - Use for creating fresh outputs")\nprint()\nprint("APPEND mode (\'a\'):")\nprint("  - Creates new file if doesn\'t exist")\nprint("  - Adds to END of existing file")\nprint("  - Use for logs, accumulating data")',
            executable: true
          },
          {
            type: 'callout',
            variant: 'warning',
            title: 'Caution with Write Mode',
            content: 'Write mode ("w") will completely overwrite existing files without warning! Always double-check filenames or use append mode when you want to preserve existing content.'
          },
          {
            type: 'heading',
            level: 2,
            text: 'Writing Methods',
            id: 'writing-methods'
          },
          {
            type: 'code',
            language: 'python',
            code: '# Different ways to write content\n\n# Method 1: write() - write a string\n# file.write("Single line\\n")\n\n# Method 2: writelines() - write list of strings\n# file.writelines(["Line 1\\n", "Line 2\\n", "Line 3\\n"])\n\n# Simulating file writing for demonstration\noutput = []\n\n# Writing multiple lines\ndata = [\n    "Product Report",\n    "=" * 30,\n    "Widget A: $29.99",\n    "Widget B: $49.99",\n    "Widget C: $19.99",\n    "=" * 30,\n    "Total: $99.97"\n]\n\nfor line in data:\n    output.append(line)\n    print(f"Writing: {line}")\n\nprint("\\n" + "-" * 40)\nprint("Final file content:")\nprint("\\n".join(output))',
            executable: true
          },
          {
            type: 'mini-quiz',
            id: 'quiz-write-mode',
            question: 'What happens if you open an existing file with mode "w"?',
            options: ['An error is raised', 'Content is added to the end', 'The file content is completely erased', 'Nothing changes'],
            correctAnswer: 2,
            explanation: 'Write mode ("w") completely erases the existing content and starts fresh. If you want to keep existing content and add more, use append mode ("a").'
          },
          {
            type: 'heading',
            level: 2,
            text: 'Generating Reports',
            id: 'generating-reports'
          },
          {
            type: 'code',
            language: 'python',
            code: '# Generate a formatted report\ndef generate_report(data, title):\n    """\n    Generate a formatted text report.\n    Returns the report as a string.\n    """\n    lines = []\n    \n    # Header\n    lines.append("=" * 50)\n    lines.append(title.center(50))\n    lines.append("=" * 50)\n    lines.append("")\n    \n    # Data rows\n    total = 0\n    for item, value in data.items():\n        lines.append(f"{item:<30} ${value:>10,.2f}")\n        total += value\n    \n    # Footer\n    lines.append("-" * 50)\n    lines.append(f"{\'TOTAL\':<30} ${total:>10,.2f}")\n    lines.append("=" * 50)\n    \n    return "\\n".join(lines)\n\n# Generate the report\nsales_data = {\n    "North Region": 125000,\n    "South Region": 98000,\n    "East Region": 142000,\n    "West Region": 156000\n}\n\nreport = generate_report(sales_data, "QUARTERLY SALES REPORT")\nprint(report)\n\n# In real code, you would save it:\n# with open("report.txt", "w") as f:\n#     f.write(report)',
            executable: true
          },
          {
            type: 'heading',
            level: 2,
            text: 'Practical Example: Log Writer',
            id: 'log-writer'
          },
          {
            type: 'code',
            language: 'python',
            code: '# A simple logging function\nfrom datetime import datetime\n\nclass SimpleLogger:\n    def __init__(self):\n        self.logs = []\n    \n    def log(self, level, message):\n        timestamp = datetime.now().strftime("%Y-%m-%d %H:%M:%S")\n        entry = f"{timestamp} [{level}] {message}"\n        self.logs.append(entry)\n        print(entry)  # Also print to console\n    \n    def info(self, message):\n        self.log("INFO", message)\n    \n    def warning(self, message):\n        self.log("WARNING", message)\n    \n    def error(self, message):\n        self.log("ERROR", message)\n    \n    def get_all_logs(self):\n        return "\\n".join(self.logs)\n\n# Use the logger\nlogger = SimpleLogger()\n\nlogger.info("Application started")\nlogger.info("Processing sales data...")\nlogger.warning("Missing values in row 5")\nlogger.info("Processing complete")\nlogger.error("Failed to send email notification")\nlogger.info("Application finished")\n\nprint("\\n" + "=" * 50)\nprint("Complete log file content:")\nprint("=" * 50)\nprint(logger.get_all_logs())',
            executable: true
          },
          {
            type: 'exercise-link',
            exerciseId: 'chapter-3-file-writing-exercise',
            title: 'Practice: Report Generator'
          },
          {
            type: 'section-nav',
            showComplete: true,
            showNext: true,
            showBack: true,
            prevSection: 'file-reading',
            nextSection: 'csv-basics'
          }
        ]
      },
      {
        id: 'csv-basics',
        title: 'CSV Basics',
        estimatedTime: 20,
        content: [
          {
            type: 'heading',
            level: 1,
            text: 'Working with CSV Files',
            id: 'csv-basics'
          },
          {
            type: 'paragraph',
            text: 'CSV (Comma-Separated Values) is the most common format for tabular data exchange. Every BI professional needs to master CSV handling. Python\'s built-in csv module makes this easy.'
          },
          {
            type: 'callout',
            variant: 'info',
            title: 'What is CSV?',
            content: 'CSV files store table data as plain text, with each row on a new line and columns separated by commas. They can be opened in Excel, databases, and any text editor.'
          },
          {
            type: 'heading',
            level: 2,
            text: 'Understanding CSV Structure',
            id: 'csv-structure'
          },
          {
            type: 'code',
            language: 'python',
            code: '# What a CSV file looks like\ncsv_content = """product_id,product_name,price,quantity\n1001,Widget A,29.99,100\n1002,Widget B,49.99,50\n1003,Widget C,19.99,200\n1004,Widget D,39.99,75"""\n\nprint("Raw CSV content:")\nprint(csv_content)\nprint()\nprint("Structure breakdown:")\nprint("- First line: Column headers")\nprint("- Following lines: Data rows")\nprint("- Comma separates each value")',
            executable: true
          },
          {
            type: 'heading',
            level: 2,
            text: 'Reading CSV Files',
            id: 'reading-csv'
          },
          {
            type: 'code',
            language: 'python',
            code: '# Simulating CSV reading (in real code, use csv module)\n\n# Sample CSV data\ncsv_data = \"\"\"name,department,salary\nAlice,Engineering,85000\nBob,Sales,72000\nCarol,Marketing,68000\nDavid,Engineering,92000\nEve,Sales,78000\"\"\"\n\n# Parse CSV manually (to understand the concept)\nlines = csv_data.strip().split("\\n")\nheaders = lines[0].split(",")\nrows = []\n\nfor line in lines[1:]:\n    values = line.split(",")\n    row = dict(zip(headers, values))\n    rows.append(row)\n\n# Display parsed data\nprint("Headers:", headers)\nprint()\nprint("Parsed rows:")\nfor row in rows:\n    print(f"  {row[\'name\']} - {row[\'department\']} - ${row[\'salary\']}")\n\nprint(f"\\nTotal records: {len(rows)}")',
            executable: true
          },
          {
            type: 'mini-quiz',
            id: 'quiz-csv-structure',
            question: 'In a standard CSV file, what separates the values in each row?',
            options: ['Tabs', 'Commas', 'Semicolons', 'Spaces'],
            correctAnswer: 1,
            explanation: 'CSV stands for Comma-Separated Values. While other delimiters can be used (like semicolons in some locales), commas are the standard separator.'
          },
          {
            type: 'heading',
            level: 2,
            text: 'Using the csv Module',
            id: 'csv-module'
          },
          {
            type: 'code',
            language: 'python',
            code: '# Python\'s csv module provides robust CSV handling\nimport csv\nfrom io import StringIO  # For demo purposes\n\n# Sample CSV data\ncsv_text = \"\"\"product,price,quantity\nLaptop,999.99,25\nMouse,29.99,150\nKeyboard,79.99,80\nMonitor,299.99,40\"\"\"\n\n# Use csv.reader for simple reading\nprint("Using csv.reader:")\nprint("-" * 40)\n\nreader = csv.reader(StringIO(csv_text))\nheader = next(reader)  # Get header row\nprint(f"Headers: {header}")\n\nfor row in reader:\n    product, price, qty = row\n    print(f"  {product}: ${price} x {qty}")',
            executable: true
          },
          {
            type: 'code',
            language: 'python',
            code: '# csv.DictReader - access columns by name (recommended!)\nimport csv\nfrom io import StringIO\n\ncsv_text = \"\"\"product,price,quantity\nLaptop,999.99,25\nMouse,29.99,150\nKeyboard,79.99,80\nMonitor,299.99,40\"\"\"\n\nprint("Using csv.DictReader:")\nprint("-" * 40)\n\nreader = csv.DictReader(StringIO(csv_text))\n\ntotal_value = 0\nfor row in reader:\n    # Access by column name - much clearer!\n    product = row[\'product\']\n    price = float(row[\'price\'])\n    quantity = int(row[\'quantity\'])\n    value = price * quantity\n    total_value += value\n    \n    print(f"{product}: {quantity} units @ ${price:.2f} = ${value:,.2f}")\n\nprint("-" * 40)\nprint(f"Total inventory value: ${total_value:,.2f}")',
            executable: true
          },
          {
            type: 'mini-quiz',
            id: 'quiz-dictreader',
            question: 'What is the advantage of csv.DictReader over csv.reader?',
            options: ['It\'s faster', 'It lets you access columns by name', 'It handles errors automatically', 'It works with larger files'],
            correctAnswer: 1,
            explanation: 'DictReader converts each row into a dictionary, so you can access values by column name (row["price"]) instead of index (row[1]). This makes code more readable and maintainable.'
          },
          {
            type: 'heading',
            level: 2,
            text: 'Handling CSV Edge Cases',
            id: 'csv-edge-cases'
          },
          {
            type: 'code',
            language: 'python',
            code: '# CSV files often have messy data\nimport csv\nfrom io import StringIO\n\n# CSV with quoted fields and commas inside values\ncsv_text = \"\"\"name,description,price\nWidget A,"A great, useful product",29.99\nWidget B,"Contains ""quotes"" inside",49.99\nWidget C,Simple description,19.99\"\"\"\n\nprint("CSV with special characters:")\nprint(csv_text)\nprint()\n\nprint("Properly parsed:")\nprint("-" * 50)\nreader = csv.DictReader(StringIO(csv_text))\nfor row in reader:\n    print(f"Name: {row[\'name\']}")\n    print(f"  Desc: {row[\'description\']}")\n    print(f"  Price: ${row[\'price\']}")\n    print()',
            executable: true
          },
          {
            type: 'callout',
            variant: 'tip',
            title: 'Always Use the csv Module',
            content: 'Never split CSV by comma manually! Real CSV files have quoted fields, escaped characters, and special cases. The csv module handles all of this correctly.'
          },
          {
            type: 'heading',
            level: 3,
            text: 'Interactive Exercise: Parse CSV Data',
            id: 'csv-parse-exercise'
          },
          {
            type: 'paragraph',
            text: 'Practice parsing CSV-formatted data into structured records.'
          },
          {
            type: 'callout',
            variant: 'info',
            title: 'Your Task',
            content: '1. Split the CSV content into lines\n2. Extract headers from first line\n3. Loop through data lines and create dictionaries\n4. Calculate totals'
          },
          {
            type: 'code',
            language: 'python',
            code: '# CSV data as string\ncsv_data = """product,price,quantity\nWidget A,29.99,10\nWidget B,49.99,5\nWidget C,19.99,20"""\n\n# YOUR CODE: Split into lines\nlines = csv_data.___()\n\n# YOUR CODE: Get headers from first line\nheaders = lines[___].split(",")\nprint(f"Headers: {headers}")\n\n# Process data rows\nrecords = []\nfor line in lines[___:]:  # Skip header\n    values = line.split(",")\n    # Create dictionary from headers and values\n    record = {\n        headers[0]: values[0],\n        headers[1]: ___(values[1]),  # Convert to float\n        headers[2]: ___(values[2])   # Convert to int\n    }\n    records.append(record)\n\n# Calculate and display\nfor r in records:\n    total = r["price"] * r["quantity"]\n    print(f"{r[\'product\']}: ${total:.2f}")',
            executable: true
          },
          {
            type: 'callout',
            variant: 'tip',
            title: 'Solution',
            content: 'lines = csv_data.splitlines()\nheaders = lines[0].split(",")\nfor line in lines[1:]:\nfloat(values[1])\nint(values[2])'
          },
          {
            type: 'heading',
            level: 3,
            text: 'Interactive Exercise: CSV to Dictionary',
            id: 'csv-dict-exercise'
          },
          {
            type: 'paragraph',
            text: 'Create a reusable function to parse CSV into a list of dictionaries.'
          },
          {
            type: 'callout',
            variant: 'info',
            title: 'Your Task',
            content: '1. Complete the parse function\n2. Use zip() to pair headers with values\n3. Return list of dictionaries'
          },
          {
            type: 'code',
            language: 'python',
            code: '# CSV parser function\ndef parse_csv(csv_text):\n    """\n    Parse CSV text into a list of dictionaries.\n    First row is treated as headers.\n    """\n    lines = csv_text.splitlines()\n    \n    # YOUR CODE: Get headers\n    headers = lines[___].split(\",\")\n    \n    # YOUR CODE: Create list of record dictionaries\n    records = []\n    for line in lines[1:]:\n        values = line.split(\",\")\n        # Use zip to pair headers with values\n        record = dict(___(headers, values))\n        records.___(record)\n    \n    return records\n\n# Test the function\ndata = """name,department,salary\nAlice,Engineering,85000\nBob,Sales,72000\nCarol,Marketing,68000"""\n\nemployees = parse_csv(data)\n\nfor emp in employees:\n    print(f"{emp[\'name\']} - {emp[\'department\']}: ${emp[\'salary\']}")',
            executable: true
          },
          {
            type: 'callout',
            variant: 'tip',
            title: 'Solution',
            content: 'headers = lines[0].split(",")\nrecord = dict(zip(headers, values))\nrecords.append(record)'
          },
          {
            type: 'section-nav',
            showComplete: true,
            showNext: true,
            showBack: true,
            prevSection: 'file-writing',
            nextSection: 'csv-processing'
          }
        ]
      },
      {
        id: 'csv-processing',
        title: 'Processing CSV Data',
        estimatedTime: 20,
        content: [
          {
            type: 'heading',
            level: 1,
            text: 'Processing CSV Data',
            id: 'processing-csv'
          },
          {
            type: 'paragraph',
            text: 'Now that you understand CSV basics, let\'s build practical data processing pipelines that filter, transform, and analyze CSV data.'
          },
          {
            type: 'heading',
            level: 2,
            text: 'Filtering and Transforming Data',
            id: 'filter-transform'
          },
          {
            type: 'code',
            language: 'python',
            code: '# Complete CSV processing example\nimport csv\nfrom io import StringIO\n\n# Sales data\nsales_csv = """date,product,region,amount,units\n2024-01-15,Laptop,North,2499.99,2\n2024-01-15,Mouse,South,89.97,3\n2024-01-16,Keyboard,North,159.98,2\n2024-01-16,Monitor,East,599.98,2\n2024-01-17,Laptop,West,1249.99,1\n2024-01-17,Mouse,North,59.98,2\n2024-01-18,Keyboard,South,239.97,3"""\n\n# Read and process\nreader = csv.DictReader(StringIO(sales_csv))\nsales = list(reader)\n\nprint(f"Total records: {len(sales)}")\nprint()\n\n# Filter: Only North region\nnorth_sales = [s for s in sales if s[\'region\'] == \'North\']\nprint(f"North region sales: {len(north_sales)} records")\nfor sale in north_sales:\n    print(f"  {sale[\'date\']}: {sale[\'product\']} - ${sale[\'amount\']}")\n\n# Calculate totals by region\nprint("\\nSales by Region:")\nprint("-" * 30)\nregions = {}\nfor sale in sales:\n    region = sale[\'region\']\n    amount = float(sale[\'amount\'])\n    regions[region] = regions.get(region, 0) + amount\n\nfor region, total in sorted(regions.items()):\n    print(f"  {region}: ${total:,.2f}")',
            executable: true
          },
          {
            type: 'heading',
            level: 2,
            text: 'Aggregating Data',
            id: 'aggregating'
          },
          {
            type: 'code',
            language: 'python',
            code: '# Group and aggregate CSV data\nimport csv\nfrom io import StringIO\n\nemployee_csv = """name,department,salary,years\nAlice,Engineering,85000,5\nBob,Sales,72000,3\nCarol,Engineering,92000,7\nDavid,Marketing,68000,2\nEve,Sales,78000,4\nFrank,Engineering,88000,6\nGrace,Marketing,71000,3"""\n\nreader = csv.DictReader(StringIO(employee_csv))\nemployees = list(reader)\n\n# Aggregate by department\ndepartments = {}\n\nfor emp in employees:\n    dept = emp[\'department\']\n    salary = int(emp[\'salary\'])\n    \n    if dept not in departments:\n        departments[dept] = {\n            \'count\': 0,\n            \'total_salary\': 0,\n            \'salaries\': []\n        }\n    \n    departments[dept][\'count\'] += 1\n    departments[dept][\'total_salary\'] += salary\n    departments[dept][\'salaries\'].append(salary)\n\n# Generate summary\nprint("Department Summary")\nprint("=" * 50)\n\nfor dept, data in departments.items():\n    avg_salary = data[\'total_salary\'] / data[\'count\']\n    min_salary = min(data[\'salaries\'])\n    max_salary = max(data[\'salaries\'])\n    \n    print(f"\\n{dept}:")\n    print(f"  Employees: {data[\'count\']}")\n    print(f"  Total Payroll: ${data[\'total_salary\']:,}")\n    print(f"  Average Salary: ${avg_salary:,.0f}")\n    print(f"  Salary Range: ${min_salary:,} - ${max_salary:,}")',
            executable: true
          },
          {
            type: 'mini-quiz',
            id: 'quiz-aggregation',
            question: 'What does aggregation mean in data processing?',
            options: ['Deleting duplicate records', 'Combining multiple values into a summary (sum, average, count)', 'Sorting data alphabetically', 'Converting data types'],
            correctAnswer: 1,
            explanation: 'Aggregation combines multiple values into summary statistics like sum, average, count, min, or max. It\'s essential for reporting and analysis.'
          },
          {
            type: 'heading',
            level: 2,
            text: 'Writing CSV Output',
            id: 'writing-csv'
          },
          {
            type: 'code',
            language: 'python',
            code: '# Writing CSV files\nimport csv\nfrom io import StringIO\n\n# Data to write\nsales_report = [\n    {\'product\': \'Laptop\', \'units\': 45, \'revenue\': 44999.55},\n    {\'product\': \'Mouse\', \'units\': 230, \'revenue\': 6899.70},\n    {\'product\': \'Keyboard\', \'units\': 120, \'revenue\': 9599.80},\n    {\'product\': \'Monitor\', \'units\': 65, \'revenue\': 19499.35}\n]\n\n# Write to a string (in real code, write to file)\noutput = StringIO()\n\n# Use DictWriter for clean output\nfieldnames = [\'product\', \'units\', \'revenue\']\nwriter = csv.DictWriter(output, fieldnames=fieldnames)\n\nwriter.writeheader()  # Write column names\nwriter.writerows(sales_report)  # Write all data rows\n\n# Show the result\nprint(\"Generated CSV file:\")\nprint(\"-\" * 40)\nprint(output.getvalue())\n\n# In real code:\n# with open(\"report.csv\", \"w\", newline=\"\") as f:\n#     writer = csv.DictWriter(f, fieldnames=fieldnames)\n#     writer.writeheader()\n#     writer.writerows(sales_report)',
            executable: true
          },
          {
            type: 'heading',
            level: 2,
            text: 'Complete Processing Pipeline',
            id: 'complete-pipeline'
          },
          {
            type: 'code',
            language: 'python',
            code: '# Complete data processing pipeline\nimport csv\nfrom io import StringIO\n\n# Input data\nraw_csv = \"\"\"order_id,customer,product,quantity,unit_price\n1001,Alice,Widget A,5,29.99\n1002,Bob,Widget B,3,49.99\n1003,Alice,Widget C,10,19.99\n1004,Carol,Widget A,2,29.99\n1005,Bob,Widget A,7,29.99\n1006,Carol,Widget B,1,49.99\n1007,Alice,Widget B,4,49.99\"\"\"\n\ndef process_orders(csv_data):\n    \"\"\"Process orders and return customer summary.\"\"\"\n    reader = csv.DictReader(StringIO(csv_data))\n    \n    customers = {}\n    \n    for order in reader:\n        customer = order[\'customer\']\n        quantity = int(order[\'quantity\'])\n        unit_price = float(order[\'unit_price\'])\n        total = quantity * unit_price\n        \n        if customer not in customers:\n            customers[customer] = {\n                \'orders\': 0,\n                \'items\': 0,\n                \'total_spent\': 0\n            }\n        \n        customers[customer][\'orders\'] += 1\n        customers[customer][\'items\'] += quantity\n        customers[customer][\'total_spent\'] += total\n    \n    return customers\n\ndef generate_customer_report(customers):\n    \"\"\"Generate a formatted customer report.\"\"\"\n    output = []\n    output.append(\"=\" * 55)\n    output.append(\"CUSTOMER ANALYSIS REPORT\".center(55))\n    output.append(\"=\" * 55)\n    output.append(f\"{\'Customer\':<15} {\'Orders\':<10} {\'Items\':<10} {\'Total Spent\':<15}\")\n    output.append(\"-\" * 55)\n    \n    grand_total = 0\n    for customer, data in sorted(customers.items()):\n        output.append(\n            f\"{customer:<15} {data[\'orders\']:<10} {data[\'items\']:<10} ${data[\'total_spent\']:>12,.2f}\"\n        )\n        grand_total += data[\'total_spent\']\n    \n    output.append(\"-\" * 55)\n    output.append(f\"{\'TOTAL\':<35} ${grand_total:>12,.2f}\")\n    output.append(\"=\" * 55)\n    \n    return \"\\n\".join(output)\n\n# Run the pipeline\ncustomer_data = process_orders(raw_csv)\nreport = generate_customer_report(customer_data)\nprint(report)',
            executable: true
          },
          {
            type: 'mini-quiz',
            id: 'quiz-pipeline',
            question: 'What is a data processing pipeline?',
            options: ['A physical tube for data', 'A sequence of steps that transform data from input to output', 'A type of database', 'A Python library'],
            correctAnswer: 1,
            explanation: 'A data pipeline is a series of processing steps (read, clean, transform, aggregate, output) that convert raw data into useful information.'
          },
          {
            type: 'heading',
            level: 3,
            text: 'Interactive Exercise: Aggregate Sales Data',
            id: 'aggregate-exercise'
          },
          {
            type: 'paragraph',
            text: 'Practice calculating totals and averages from sales records.'
          },
          {
            type: 'callout',
            variant: 'info',
            title: 'Your Task',
            content: '1. Loop through records and sum quantities\n2. Calculate total revenue (price * quantity)\n3. Find the average price'
          },
          {
            type: 'code',
            language: 'python',
            code: '# Sales records\nrecords = [\n    {"product": "Widget A", "price": 29.99, "quantity": 100},\n    {"product": "Widget B", "price": 49.99, "quantity": 50},\n    {"product": "Widget C", "price": 19.99, "quantity": 200},\n]\n\n# YOUR CODE: Calculate totals\ntotal_quantity = 0\ntotal_revenue = 0\n\nfor record in records:\n    # Add to total quantity\n    total_quantity += record[___]\n    \n    # Calculate and add revenue (price * quantity)\n    revenue = record[___] * record[___]\n    total_revenue += revenue\n\n# YOUR CODE: Calculate average price\navg_price = sum(r[___] for r in records) / ___(records)\n\nprint(f"Total Units Sold: {total_quantity:,}")\nprint(f"Total Revenue: ${total_revenue:,.2f}")\nprint(f"Average Price: ${avg_price:.2f}")',
            executable: true
          },
          {
            type: 'callout',
            variant: 'tip',
            title: 'Solution',
            content: 'total_quantity += record["quantity"]\nrevenue = record["price"] * record["quantity"]\navg_price = sum(r["price"] for r in records) / len(records)'
          },
          {
            type: 'heading',
            level: 3,
            text: 'Interactive Exercise: Filter and Group Data',
            id: 'filter-group-exercise'
          },
          {
            type: 'paragraph',
            text: 'Practice filtering records and grouping by category.'
          },
          {
            type: 'callout',
            variant: 'info',
            title: 'Your Task',
            content: '1. Filter records with quantity > 50\n2. Group totals by category\n3. Find the top-selling category'
          },
          {
            type: 'code',
            language: 'python',
            code: '# Product records with categories\nproducts = [\n    {"name": "Laptop", "category": "Electronics", "sales": 50000},\n    {"name": "Mouse", "category": "Electronics", "sales": 15000},\n    {"name": "Desk", "category": "Furniture", "sales": 25000},\n    {"name": "Chair", "category": "Furniture", "sales": 30000},\n    {"name": "Notebook", "category": "Supplies", "sales": 5000},\n]\n\n# YOUR CODE: Filter products with sales > 20000\nhigh_sellers = [p for p in products if p[___] > ___]\nprint("High sellers:")\nfor p in high_sellers:\n    print(f"  {p[\'name\']}: ${p[\'sales\']:,}")\n\n# YOUR CODE: Group sales by category\ncategory_totals = {}\nfor p in products:\n    cat = p[___]\n    if cat not in category_totals:\n        category_totals[cat] = 0\n    category_totals[cat] += p[___]\n\nprint("\\nSales by Category:")\nfor cat, total in category_totals.items():\n    print(f"  {cat}: ${total:,}")',
            executable: true
          },
          {
            type: 'callout',
            variant: 'tip',
            title: 'Solution',
            content: 'high_sellers = [p for p in products if p["sales"] > 20000]\ncat = p["category"]\ncategory_totals[cat] += p["sales"]'
          },
          {
            type: 'exercise-link',
            exerciseId: 'chapter-3-csv-exercise',
            title: 'Practice: Sales Data Analyzer'
          },
          {
            type: 'section-nav',
            showComplete: true,
            showNext: true,
            showBack: true,
            prevSection: 'csv-basics',
            nextSection: 'data-pipeline'
          }
        ]
      },
      {
        id: 'data-pipeline',
        title: 'Building a Data Pipeline',
        estimatedTime: 25,
        content: [
          {
            type: 'heading',
            level: 1,
            text: 'Building a Complete Data Pipeline',
            id: 'data-pipeline'
          },
          {
            type: 'paragraph',
            text: 'Let\'s combine everything you\'ve learned into a production-quality data processing pipeline with proper error handling, logging, and reporting.'
          },
          {
            type: 'callout',
            variant: 'info',
            title: 'Pipeline Architecture',
            content: 'A robust pipeline has these stages: 1) Read input data, 2) Validate and clean, 3) Transform and calculate, 4) Aggregate, 5) Generate output.'
          },
          {
            type: 'heading',
            level: 2,
            text: 'The Pipeline Class',
            id: 'pipeline-class'
          },
          {
            type: 'code',
            language: 'python',
            code: '# Building a reusable data pipeline\nfrom datetime import datetime\n\nclass DataPipeline:\n    """A robust data processing pipeline."""\n    \n    def __init__(self, name):\n        self.name = name\n        self.logs = []\n        self.errors = []\n    \n    def log(self, message, level="INFO"):\n        timestamp = datetime.now().strftime("%H:%M:%S")\n        entry = f"[{timestamp}] {level}: {message}"\n        self.logs.append(entry)\n        print(entry)\n    \n    def process(self, data):\n        raise NotImplementedError("Subclasses must implement process()")\n\n# Test the base class\npipeline = DataPipeline("Test Pipeline")\npipeline.log("Pipeline initialized")\npipeline.log("Ready for processing")\nprint(f"\\nPipeline name: {pipeline.name}")\nprint(f"Logs collected: {len(pipeline.logs)}")',
            executable: true
          },
          {
            type: 'heading',
            level: 2,
            text: 'Sales Analytics Pipeline',
            id: 'sales-pipeline'
          },
          {
            type: 'code',
            language: 'python',
            code: '# Sales Analytics Pipeline - Simplified Example\nfrom datetime import datetime\n\nclass SalesPipeline:\n    """Process sales data with logging."""\n    \n    def __init__(self):\n        self.logs = []\n        self.results = {}\n    \n    def log(self, msg):\n        ts = datetime.now().strftime("%H:%M:%S")\n        entry = f"[{ts}] {msg}"\n        self.logs.append(entry)\n        print(entry)\n    \n    def process(self, data):\n        """Process a list of sales records."""\n        self.log("Starting processing...")\n        \n        by_region = {}\n        total = 0\n        \n        for record in data:\n            region = record["region"]\n            amount = record["amount"]\n            \n            if region not in by_region:\n                by_region[region] = 0\n            by_region[region] += amount\n            total += amount\n        \n        self.results = {\n            "by_region": by_region,\n            "total": total,\n            "count": len(data)\n        }\n        self.log("Processing complete!")\n        return self.results\n\n# Test the pipeline\ntest_data = [\n    {"region": "North", "amount": 1000},\n    {"region": "South", "amount": 800},\n    {"region": "North", "amount": 1200}\n]\n\npipeline = SalesPipeline()\nresults = pipeline.process(test_data)\n\nprint("\\nResults:")\nfor region, amount in results["by_region"].items():\n    print(f"  {region}: ${amount:,.2f}")\nprint(f"\\nTotal: ${results[\"total\"]:,.2f}")',
            executable: true
          },
          {
            type: 'heading',
            level: 2,
            text: 'Running the Pipeline',
            id: 'running-pipeline'
          },
          {
            type: 'code',
            language: 'python',
            code: '# Running a Complete Pipeline with Error Handling\nimport csv\nfrom io import StringIO\n\ndef process_csv_pipeline(csv_text):\n    """Complete pipeline: read, validate, aggregate, report."""\n    \n    print("=" * 50)\n    print("PIPELINE STARTED")\n    print("=" * 50)\n    \n    # Stage 1: Read data\n    reader = csv.DictReader(StringIO(csv_text))\n    records = list(reader)\n    print(f"Read {len(records)} records")\n    \n    # Stage 2: Process with error handling\n    by_region = {}\n    processed = 0\n    errors = 0\n    \n    for record in records:\n        try:\n            region = record["region"]\n            amount = float(record["amount"])\n            by_region[region] = by_region.get(region, 0) + amount\n            processed += 1\n        except (ValueError, KeyError) as e:\n            errors += 1\n            print(f"  Warning: Skipped bad record - {e}")\n    \n    # Stage 3: Generate report\n    print("\\n" + "=" * 50)\n    print("RESULTS")\n    print("=" * 50)\n    print(f"\\nProcessed: {processed}, Errors: {errors}")\n    print("\\nSales by Region:")\n    \n    total = 0\n    for region, amount in sorted(by_region.items()):\n        print(f"  {region}: ${amount:,.2f}")\n        total += amount\n    \n    print(f"\\nTotal Revenue: ${total:,.2f}")\n    return by_region\n\n# Test data with one bad record\ntest_csv = """region,product,amount\nNorth,Laptop,2499.99\nSouth,Mouse,89.97\nNorth,Keyboard,159.98\nEast,Monitor,599.98\nWest,Laptop,1249.99\nbad_row,invalid,not_a_number"""\n\nresults = process_csv_pipeline(test_csv)',
            executable: true
          },
          {
            type: 'mini-quiz',
            id: 'quiz-pipeline-stages',
            question: 'What is the typical order of stages in a data pipeline?',
            options: ['Output → Process → Input', 'Process → Validate → Read', 'Read → Validate → Transform → Aggregate → Output', 'Aggregate → Transform → Read'],
            correctAnswer: 2,
            explanation: 'A pipeline flows from input to output: Read (get data) → Validate (check quality) → Transform (clean/calculate) → Aggregate (summarize) → Output (report/save).'
          },
          {
            type: 'heading',
            level: 2,
            text: 'Best Practices Summary',
            id: 'best-practices'
          },
          {
            type: 'list',
            ordered: true,
            items: [
              'Always use try-except for error handling, especially in data processing',
              'Log important events and errors for debugging',
              'Validate data early - catch problems before processing',
              'Use csv.DictReader for readable, maintainable code',
              'Close files properly (use the with statement)',
              'Generate clear reports with formatted output',
              'Build reusable functions and classes',
              'Handle edge cases: missing files, empty data, malformed records'
            ]
          },
          {
            type: 'callout',
            variant: 'tip',
            title: 'Next Steps',
            content: 'Once you\'re comfortable with basic file and CSV handling, explore the pandas library for advanced data analysis. It provides DataFrames that make complex operations simple!'
          },
          {
            type: 'exercise-link',
            exerciseId: 'chapter-3-pipeline-exercise',
            title: 'Practice: Build Your Own Data Pipeline'
          },
          {
            type: 'quiz-link',
            quizId: 'chapter-3-quiz',
            title: 'Chapter 3 Quiz: Working with External Data'
          },
          {
            type: 'section-nav',
            showComplete: true,
            showNext: false,
            showBack: true,
            prevSection: 'csv-processing'
          }
        ]
      }
    ]
  },
  {
    id: 4,
    title: 'Data Analysis with Pandas',
    description: 'Introduction to the pandas library for powerful data manipulation and analysis with DataFrames',
    icon: 'table',
    estimatedTime: 120,
    sections: [
      {
        id: 'pandas-intro',
        title: 'Introduction to Pandas',
        estimatedTime: 20,
        content: [
          {
            type: 'heading',
            level: 1,
            text: 'Coming Soon: Pandas for Data Analysis',
            id: 'pandas-intro'
          },
          {
            type: 'callout',
            variant: 'info',
            title: 'Chapter Under Development',
            content: 'This chapter will cover: Installing pandas, creating DataFrames, loading data from CSV/Excel, basic DataFrame operations, selecting and filtering data, and working with columns and rows.'
          },
          {
            type: 'paragraph',
            text: 'Pandas is the most popular Python library for data analysis. It provides the DataFrame structure that makes working with tabular data intuitive and efficient.'
          },
          {
            type: 'list',
            ordered: false,
            items: [
              'What is Pandas and why it matters for BI',
              'Series and DataFrames explained',
              'Reading data from various sources',
              'Basic data exploration methods',
              'Selecting data with loc and iloc'
            ]
          }
        ]
      }
    ]
  },
  {
    id: 5,
    title: 'Data Cleaning & Transformation',
    description: 'Learn to clean messy data, handle missing values, and transform data for analysis',
    icon: 'filter',
    estimatedTime: 90,
    sections: [
      {
        id: 'data-cleaning-intro',
        title: 'Data Cleaning Fundamentals',
        estimatedTime: 20,
        content: [
          {
            type: 'heading',
            level: 1,
            text: 'Coming Soon: Data Cleaning',
            id: 'data-cleaning-intro'
          },
          {
            type: 'callout',
            variant: 'info',
            title: 'Chapter Under Development',
            content: 'This chapter will cover: Handling missing values (NaN), removing duplicates, data type conversions, string cleaning methods, and data validation techniques.'
          },
          {
            type: 'list',
            ordered: false,
            items: [
              'Identifying and handling missing data',
              'Removing duplicate records',
              'Converting data types',
              'Cleaning string data',
              'Validating data quality'
            ]
          }
        ]
      }
    ]
  },
  {
    id: 6,
    title: 'Data Aggregation & Grouping',
    description: 'Master groupby operations, pivot tables, and aggregation for powerful data summarization',
    icon: 'layers',
    estimatedTime: 90,
    sections: [
      {
        id: 'groupby-intro',
        title: 'GroupBy Operations',
        estimatedTime: 25,
        content: [
          {
            type: 'heading',
            level: 1,
            text: 'Coming Soon: Aggregation & Grouping',
            id: 'groupby-intro'
          },
          {
            type: 'callout',
            variant: 'info',
            title: 'Chapter Under Development',
            content: 'This chapter will cover: GroupBy operations, aggregation functions (sum, mean, count), pivot tables, cross-tabulations, and multi-level grouping.'
          },
          {
            type: 'list',
            ordered: false,
            items: [
              'Understanding groupby mechanics',
              'Aggregation functions',
              'Multiple aggregations with agg()',
              'Pivot tables and reshaping data',
              'Real-world BI aggregation examples'
            ]
          }
        ]
      }
    ]
  },
  {
    id: 7,
    title: 'Data Visualization',
    description: 'Create compelling charts and visualizations using Matplotlib and Seaborn',
    icon: 'bar-chart',
    estimatedTime: 120,
    sections: [
      {
        id: 'visualization-intro',
        title: 'Introduction to Visualization',
        estimatedTime: 20,
        content: [
          {
            type: 'heading',
            level: 1,
            text: 'Coming Soon: Data Visualization',
            id: 'visualization-intro'
          },
          {
            type: 'callout',
            variant: 'info',
            title: 'Chapter Under Development',
            content: 'This chapter will cover: Matplotlib basics, line charts, bar charts, histograms, scatter plots, pie charts, customizing visualizations, and creating dashboards.'
          },
          {
            type: 'list',
            ordered: false,
            items: [
              'Matplotlib fundamentals',
              'Common chart types for BI',
              'Customizing colors, labels, and legends',
              'Creating subplots and figures',
              'Saving and exporting visualizations'
            ]
          }
        ]
      }
    ]
  },
  {
    id: 8,
    title: 'Working with Dates & Time Series',
    description: 'Handle datetime data, time-based analysis, and trend visualization for business insights',
    icon: 'calendar',
    estimatedTime: 90,
    sections: [
      {
        id: 'datetime-intro',
        title: 'DateTime Fundamentals',
        estimatedTime: 20,
        content: [
          {
            type: 'heading',
            level: 1,
            text: 'Coming Soon: Dates & Time Series',
            id: 'datetime-intro'
          },
          {
            type: 'callout',
            variant: 'info',
            title: 'Chapter Under Development',
            content: 'This chapter will cover: Python datetime module, parsing dates, date arithmetic, time zones, resampling time series, moving averages, and trend analysis.'
          },
          {
            type: 'list',
            ordered: false,
            items: [
              'Working with datetime objects',
              'Parsing date strings',
              'Date calculations and timedelta',
              'Time series indexing in pandas',
              'Resampling and rolling windows'
            ]
          }
        ]
      }
    ]
  },
  {
    id: 9,
    title: 'Connecting to Databases',
    description: 'Learn to connect to SQL databases, execute queries, and integrate database data with Python',
    icon: 'database',
    estimatedTime: 90,
    sections: [
      {
        id: 'database-intro',
        title: 'Database Connections',
        estimatedTime: 20,
        content: [
          {
            type: 'heading',
            level: 1,
            text: 'Coming Soon: Database Connections',
            id: 'database-intro'
          },
          {
            type: 'callout',
            variant: 'info',
            title: 'Chapter Under Development',
            content: 'This chapter will cover: SQL basics, connecting to SQLite/PostgreSQL/MySQL, executing queries, reading data into DataFrames, and parameterized queries for security.'
          },
          {
            type: 'list',
            ordered: false,
            items: [
              'Introduction to SQL',
              'Database connection libraries',
              'Executing SELECT queries',
              'Reading SQL results into pandas',
              'Writing data back to databases'
            ]
          }
        ]
      }
    ]
  },
  {
    id: 10,
    title: 'APIs & Web Data',
    description: 'Fetch data from web APIs, parse JSON responses, and integrate external data sources',
    icon: 'globe',
    estimatedTime: 90,
    sections: [
      {
        id: 'api-intro',
        title: 'Working with APIs',
        estimatedTime: 20,
        content: [
          {
            type: 'heading',
            level: 1,
            text: 'Coming Soon: APIs & Web Data',
            id: 'api-intro'
          },
          {
            type: 'callout',
            variant: 'info',
            title: 'Chapter Under Development',
            content: 'This chapter will cover: HTTP basics, the requests library, making GET/POST requests, parsing JSON, API authentication, and handling rate limits.'
          },
          {
            type: 'list',
            ordered: false,
            items: [
              'Understanding REST APIs',
              'Making HTTP requests with requests',
              'Parsing JSON responses',
              'API authentication (API keys, OAuth)',
              'Error handling for web requests'
            ]
          }
        ]
      }
    ]
  },
  {
    id: 11,
    title: 'Automating Reports & Scripts',
    description: 'Create automated reports, schedule scripts, and build reusable data pipelines',
    icon: 'zap',
    estimatedTime: 90,
    sections: [
      {
        id: 'automation-intro',
        title: 'Report Automation',
        estimatedTime: 20,
        content: [
          {
            type: 'heading',
            level: 1,
            text: 'Coming Soon: Automation',
            id: 'automation-intro'
          },
          {
            type: 'callout',
            variant: 'info',
            title: 'Chapter Under Development',
            content: 'This chapter will cover: Creating command-line scripts, scheduling with cron/Task Scheduler, email reports, Excel automation, and building reusable modules.'
          },
          {
            type: 'list',
            ordered: false,
            items: [
              'Command-line scripts with argparse',
              'Scheduling automated tasks',
              'Sending email reports',
              'Generating Excel files with openpyxl',
              'Logging and monitoring scripts'
            ]
          }
        ]
      }
    ]
  },
  {
    id: 12,
    title: 'Capstone Project: BI Dashboard',
    description: 'Build a complete Business Intelligence dashboard combining all skills learned',
    icon: 'award',
    estimatedTime: 180,
    sections: [
      {
        id: 'capstone-intro',
        title: 'Project Overview',
        estimatedTime: 30,
        content: [
          {
            type: 'heading',
            level: 1,
            text: 'Coming Soon: Capstone Project',
            id: 'capstone-intro'
          },
          {
            type: 'callout',
            variant: 'info',
            title: 'Chapter Under Development',
            content: 'The final project will guide you through building a complete BI dashboard that fetches data, cleans it, performs analysis, creates visualizations, and generates automated reports.'
          },
          {
            type: 'list',
            ordered: false,
            items: [
              'Project planning and requirements',
              'Data ingestion pipeline',
              'Data cleaning and transformation',
              'Analysis and aggregations',
              'Interactive visualizations',
              'Automated report generation'
            ]
          }
        ]
      }
    ]
  }
];

// Helper to get total sections count
export const getTotalSections = () => {
  return chapters.reduce((acc, chapter) => acc + chapter.sections.length, 0);
};

// Helper to find a specific section
export const findSection = (chapterId: number, sectionId: string) => {
  const chapter = chapters.find(c => c.id === chapterId);
  if (!chapter) return null;
  return chapter.sections.find(s => s.id === sectionId);
};

// Helper to get next section
export const getNextSection = (chapterId: number, sectionId: string) => {
  const chapter = chapters.find(c => c.id === chapterId);
  if (!chapter) return null;

  const sectionIndex = chapter.sections.findIndex(s => s.id === sectionId);

  // Check if there's a next section in the same chapter
  if (sectionIndex < chapter.sections.length - 1) {
    return {
      chapterId,
      section: chapter.sections[sectionIndex + 1]
    };
  }

  // Check if there's a next chapter
  const nextChapter = chapters.find(c => c.id === chapterId + 1);
  if (nextChapter && nextChapter.sections.length > 0) {
    return {
      chapterId: nextChapter.id,
      section: nextChapter.sections[0]
    };
  }

  return null;
};

// Helper to get previous section
export const getPreviousSection = (chapterId: number, sectionId: string) => {
  const chapter = chapters.find(c => c.id === chapterId);
  if (!chapter) return null;

  const sectionIndex = chapter.sections.findIndex(s => s.id === sectionId);

  // Check if there's a previous section in the same chapter
  if (sectionIndex > 0) {
    return {
      chapterId,
      section: chapter.sections[sectionIndex - 1]
    };
  }

  // Check if there's a previous chapter
  const prevChapter = chapters.find(c => c.id === chapterId - 1);
  if (prevChapter && prevChapter.sections.length > 0) {
    return {
      chapterId: prevChapter.id,
      section: prevChapter.sections[prevChapter.sections.length - 1]
    };
  }

  return null;
};
