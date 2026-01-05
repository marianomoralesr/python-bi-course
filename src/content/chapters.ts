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
            text: 'Mini-Exercise: Create Integer Variables',
            id: 'int-exercise'
          },
          {
            type: 'paragraph',
            text: 'Complete the code by filling in the blanks with appropriate integer values:'
          },
          {
            type: 'code',
            language: 'python',
            code: '# Fill in the blanks with integer values\ntotal_orders = 250       # Number of orders this month\ndays_in_month = 30       # Days in the month\n\n# Calculate orders per day\norders_per_day = total_orders // days_in_month\nprint(f"Average orders per day: {orders_per_day}")',
            executable: true
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
            text: 'Mini-Exercise: Calculate Discount',
            id: 'float-exercise'
          },
          {
            type: 'code',
            language: 'python',
            code: '# Calculate the discounted price\noriginal_price = 100.00\ndiscount_rate = 0.25  # 25% discount\n\n# Calculate the discount amount\ndiscount_amount = original_price * discount_rate\nprint(f"Discount: ${discount_amount}")\n\n# Calculate final price\nfinal_price = original_price - discount_amount\nprint(f"Final price: ${final_price}")',
            executable: true
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
            text: 'Mini-Exercise: String Indexing',
            id: 'string-index-exercise'
          },
          {
            type: 'code',
            language: 'python',
            code: '# Practice indexing\ncompany = "Microsoft"\n\n# Index:  0  1  2  3  4  5  6  7  8\n# Char:   M  i  c  r  o  s  o  f  t\n\n# Get the first letter\nfirst = company[0]\nprint(f"First letter: {first}")  # M\n\n# Get the last letter\nlast = company[-1]\nprint(f"Last letter: {last}")    # t\n\n# Get the 5th letter (index 4)\nfifth = company[4]\nprint(f"Fifth letter: {fifth}")  # o',
            executable: true
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
            text: 'Mini-Exercise: Extract SKU Parts',
            id: 'slice-exercise'
          },
          {
            type: 'code',
            language: 'python',
            code: '# Product SKU format: CAT-12345-XL\n# Category (3 chars) - ID (5 digits) - Size (2 chars)\nsku = "ELE-98765-MD"\n\n# Extract the category code (first 3 characters)\ncategory = sku[0:3]\nprint(f"Category: {category}")  # ELE\n\n# Extract the product ID (characters 4-8)\nproduct_id = sku[4:9]\nprint(f"Product ID: {product_id}")  # 98765\n\n# Extract the size (last 2 characters)\nsize = sku[-2:]\nprint(f"Size: {size}")  # MD',
            executable: true
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
            text: 'Mini-Exercise: Format a Sales Report',
            id: 'f-string-exercise'
          },
          {
            type: 'code',
            language: 'python',
            code: '# Create a formatted sales report\nproduct = "Widget Pro"\nunits_sold = 1250\nunit_price = 29.99\n\n# Calculate total\ntotal_revenue = units_sold * unit_price\n\n# Print formatted report\nprint("=" * 30)\nprint(f"Product: {product}")\nprint(f"Units Sold: {units_sold:,}")\nprint(f"Unit Price: ${unit_price:.2f}")\nprint(f"Total Revenue: ${total_revenue:,.2f}")\nprint("=" * 30)',
            executable: true
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
            text: 'Mini-Exercise: Clean Customer Data',
            id: 'clean-data-exercise'
          },
          {
            type: 'code',
            language: 'python',
            code: '# Clean this messy customer data\nraw_name = "   JOHN DOE   "\nraw_email = "  John.Doe@EMAIL.COM  "\nraw_phone = "555-999-1234"\n\n# Clean the name: remove spaces, proper case\nclean_name = raw_name.strip().title()\nprint(f"Name: {clean_name}")\n\n# Clean the email: remove spaces, lowercase\nclean_email = raw_email.strip().lower()\nprint(f"Email: {clean_email}")\n\n# Clean the phone: remove dashes\nclean_phone = raw_phone.replace("-", "")\nprint(f"Phone: {clean_phone}")',
            executable: true
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
            text: 'Mini-Exercise: Process Sales Data',
            id: 'conversion-exercise'
          },
          {
            type: 'code',
            language: 'python',
            code: '# Process this sales data (all values are strings!)\nproduct_name = "Laptop Pro"\nprice_str = "999.99"\nquantity_str = "5"\n\n# Convert to proper types\nprice = float(price_str)\nquantity = int(quantity_str)\n\n# Calculate revenue\nrevenue = price * quantity\n\n# Print formatted result\nprint(f"Product: {product_name}")\nprint(f"Units: {quantity:,}")\nprint(f"Unit Price: ${price:,.2f}")\nprint(f"Total Revenue: ${revenue:,.2f}")',
            executable: true
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
