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
          }
        ]
      },
      {
        id: 'data-types',
        title: 'Data Types',
        estimatedTime: 15,
        content: [
          {
            type: 'heading',
            level: 1,
            text: 'Python Data Types',
            id: 'data-types'
          },
          {
            type: 'paragraph',
            text: 'Python has several built-in data types. Understanding them is crucial for Business Intelligence work where you\'ll handle various kinds of data.'
          },
          {
            type: 'heading',
            level: 2,
            text: 'Numeric Types',
            id: 'numeric'
          },
          {
            type: 'code',
            language: 'python',
            code: '# Integers (whole numbers)\nproduct_count = 150\nquarter = 4\n\n# Floats (decimal numbers)\nprice = 29.99\ngrowth_rate = 0.15  # 15%\npi = 3.14159\n\n# Check the type\nprint(type(product_count))  # <class \'int\'>\nprint(type(price))          # <class \'float\'>',
            executable: true
          },
          {
            type: 'heading',
            level: 2,
            text: 'Strings (Text)',
            id: 'strings'
          },
          {
            type: 'code',
            language: 'python',
            code: '# Strings - text data\ncustomer_name = "John Smith"\nproduct = \'Widget Pro\'\n\n# String operations\nfull_name = "John" + " " + "Smith"  # Concatenation\nprint(full_name)\n\n# f-strings (formatted strings) - very useful!\nsales = 50000\nprint("Total sales:", sales)\n\n# String methods\nprint(customer_name.upper())  # JOHN SMITH\nprint(customer_name.lower())  # john smith\nprint(len(customer_name))     # 10 (length)',
            executable: true
          },
          {
            type: 'heading',
            level: 2,
            text: 'Booleans (True/False)',
            id: 'booleans'
          },
          {
            type: 'code',
            language: 'python',
            code: '# Booleans - True or False\nis_active = True\nhas_discount = False\n\n# Comparison results are booleans\nsales = 50000\ntarget = 45000\n\nmet_target = sales >= target\nprint("Met target:", met_target)  # True\n\n# Useful in BI for filtering data\nis_high_value = sales > 100000\nprint("High value:", is_high_value)  # False',
            executable: true
          },
          {
            type: 'heading',
            level: 2,
            text: 'Type Conversion',
            id: 'type-conversion'
          },
          {
            type: 'code',
            language: 'python',
            code: '# Converting between types\nquantity_str = "150"\nquantity_int = int(quantity_str)  # String to integer\n\nprice_str = "29.99"\nprice_float = float(price_str)    # String to float\n\ncount = 42\ncount_str = str(count)            # Integer to string\n\nprint("Quantity:", quantity_int, "Type:", type(quantity_int))\nprint("Price:", price_float, "Type:", type(price_float))',
            executable: true
          },
          {
            type: 'table',
            headers: ['Data Type', 'Description', 'Example', 'BI Use Case'],
            rows: [
              ['int', 'Whole numbers', '150', 'Counts, IDs'],
              ['float', 'Decimal numbers', '29.99', 'Prices, percentages'],
              ['str', 'Text', '"Product A"', 'Names, categories'],
              ['bool', 'True/False', 'True', 'Flags, filters']
            ]
          },
          {
            type: 'exercise-link',
            exerciseId: 'chapter-1-datatypes-exercise',
            title: 'Practice: Type Conversion'
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
            type: 'quiz-link',
            quizId: 'chapter-1-quiz',
            title: 'Chapter 1 Quiz'
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
            type: 'exercise-link',
            exerciseId: 'chapter-2-lists-exercise',
            title: 'Practice: Sales List Operations'
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
            code: '# List comprehensions - concise loop syntax\nsales = [45000, 52000, 38000, 61000, 55000]\n\n# Traditional loop\nhigh_sales = []\nfor s in sales:\n    if s > 50000:\n        high_sales.append(s)\n\n# Same thing with list comprehension\nhigh_sales = [s for s in sales if s > 50000]\nprint("High sales months:", high_sales)\n\n# Apply transformation\n# Increase all sales by 10%\nadjusted = [s * 1.10 for s in sales]\nprint("After 10% increase:", adjusted)\n\n# Create formatted strings\nformatted = [str(s) for s in sales]\nprint("Formatted:", formatted)',
            executable: true
          },
          {
            type: 'callout',
            variant: 'tip',
            title: 'List Comprehension Power',
            content: 'List comprehensions are Pythonic and efficient. They\'re especially useful in data processing pipelines. Master them for cleaner, faster code!'
          },
          {
            type: 'exercise-link',
            exerciseId: 'chapter-2-loops-exercise',
            title: 'Practice: Sales Report Generator'
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
            type: 'exercise-link',
            exerciseId: 'chapter-2-exercise-1',
            title: 'Practice: Build a Sales Analytics Module'
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
