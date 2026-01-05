import type { Exercise } from '../types';

export const exercises: Exercise[] = [
  // Chapter 0 Exercises
  {
    id: 'chapter-0-exercise-1',
    chapterId: 0,
    title: 'Hello Python',
    difficulty: 'easy',
    instructions: 'Practice using print() to display messages.\n\n1. Print your name\n2. Print a welcome message\n3. Print a number\n\nComplete the code below!',
    initialCode: '# Exercise: Hello Python\n# TODO: Print your name\nprint(____)\n\n# TODO: Print a welcome message\nprint(____)\n\n# TODO: Print the number 2024\nprint(____)',
    solution: '# Exercise: Hello Python\n# Print your name\nprint("Your Name")\n\n# Print a welcome message\nprint("Welcome to Python!")\n\n# Print the number 2024\nprint(2024)',
    hints: [
      'Use quotes around text: print("Hello")',
      'Numbers do not need quotes: print(42)',
      'Each print() shows output on a new line'
    ]
  },
  {
    id: 'chapter-0-exercise-2',
    chapterId: 0,
    title: 'Comments and Print Practice',
    difficulty: 'easy',
    instructions: 'Practice writing comments and using print() with different options.\n\n1. Add a comment explaining what the code does\n2. Print three items on the same line using sep\n3. Print two words without a newline between them using end',
    initialCode: '# TODO: Add a comment explaining this program\n\n# TODO: Print "A", "B", "C" separated by dashes\nprint("A", "B", "C", sep=____)\n\n# TODO: Print "Hello" and "World" on the same line\nprint("Hello", end=____)\nprint("World")',
    solution: '# This program demonstrates print options\n\n# Print "A", "B", "C" separated by dashes\nprint("A", "B", "C", sep="-")\n\n# Print "Hello" and "World" on the same line\nprint("Hello", end=" ")\nprint("World")',
    hints: [
      'Comments start with #',
      'sep changes what goes between items: sep="-" gives A-B-C',
      'end changes what goes at the end: end=" " keeps on same line'
    ]
  },
  {
    id: 'chapter-0-exercise-3',
    chapterId: 0,
    title: 'Fix the Syntax Errors',
    difficulty: 'easy',
    instructions: 'This code has several syntax errors. Fix each one!\n\nCommon errors to look for:\n- Case sensitivity (Print vs print)\n- Missing colons after if\n- Mismatched quotes\n- Type conversion issues',
    initialCode: '# Fix the errors in this code!\n\n# Error 1: Case sensitivity\nPrint("Hello World")\n\n# Error 2: Missing colon\nx = 10\nif x > 5\n    print("x is big")\n\n# Error 3: Mismatched quotes\nmessage = "Welcome to Python\'\n\n# Error 4: Cannot concatenate string and int\nage = 25\nprint("I am " + age + " years old")',
    solution: '# Fixed code!\n\n# Error 1: Fixed - print is lowercase\nprint("Hello World")\n\n# Error 2: Fixed - added colon after if\nx = 10\nif x > 5:\n    print("x is big")\n\n# Error 3: Fixed - matching quotes\nmessage = "Welcome to Python"\n\n# Error 4: Fixed - convert int to string\nage = 25\nprint("I am " + str(age) + " years old")',
    hints: [
      'Python built-in functions are lowercase: print(), not Print()',
      'if statements need a colon at the end: if condition:',
      'Quotes must match: "text" or \'text\', not "text\'',
      'Use str() to convert numbers to strings for concatenation'
    ]
  },

  // Chapter 1 Exercises
  {
    id: 'chapter-1-variables-exercise',
    chapterId: 1,
    title: 'Business Variables',
    difficulty: 'easy',
    instructions: 'Create variables to store business data:\n\n1. Create a variable for a product name (string)\n2. Create a variable for product price (float)\n3. Create a variable for quantity in stock (integer)\n4. Create a variable to track if the product is on sale (boolean)\n5. Print all variables',
    initialCode: '# Business Variables Exercise\n\n# TODO: Create a product name variable\nproduct_name = ____\n\n# TODO: Create a price variable (use a decimal number)\nprice = ____\n\n# TODO: Create a quantity variable (whole number)\nquantity = ____\n\n# TODO: Create an on_sale variable (True or False)\non_sale = ____\n\n# Print the variables\nprint("Product:", product_name)\nprint("Price:", price)\nprint("Quantity:", quantity)\nprint("On Sale:", on_sale)',
    solution: '# Business Variables Exercise\n\n# Create a product name variable\nproduct_name = "Laptop Pro"\n\n# Create a price variable (use a decimal number)\nprice = 999.99\n\n# Create a quantity variable (whole number)\nquantity = 50\n\n# Create an on_sale variable (True or False)\non_sale = True\n\n# Print the variables\nprint("Product:", product_name)\nprint("Price:", price)\nprint("Quantity:", quantity)\nprint("On Sale:", on_sale)',
    hints: [
      'Strings need quotes: "Laptop Pro"',
      'Floats have decimals: 999.99',
      'Integers are whole numbers: 50',
      'Booleans are True or False (capitalized)'
    ]
  },
  {
    id: 'chapter-1-datatypes-exercise',
    chapterId: 1,
    title: 'Type Conversion',
    difficulty: 'easy',
    instructions: 'Practice converting between data types:\n\n1. Convert a string number to an integer\n2. Convert an integer to a float\n3. Convert a number to a string\n4. Calculate the total using the converted values',
    initialCode: '# Type Conversion Exercise\n\n# Given values (these are strings from user input)\nprice_str = "49"\nquantity_str = "3"\n\n# TODO: Convert price_str to integer\nprice = ____(price_str)\n\n# TODO: Convert quantity_str to integer\nquantity = ____(quantity_str)\n\n# TODO: Calculate total\ntotal = price * quantity\n\n# TODO: Convert total to string for display\ntotal_str = ____(total)\n\nprint("Price:", price, "Type:", type(price))\nprint("Quantity:", quantity, "Type:", type(quantity))\nprint("Total:", total_str)',
    solution: '# Type Conversion Exercise\n\n# Given values (these are strings from user input)\nprice_str = "49"\nquantity_str = "3"\n\n# Convert price_str to integer\nprice = int(price_str)\n\n# Convert quantity_str to integer\nquantity = int(quantity_str)\n\n# Calculate total\ntotal = price * quantity\n\n# Convert total to string for display\ntotal_str = str(total)\n\nprint("Price:", price, "Type:", type(price))\nprint("Quantity:", quantity, "Type:", type(quantity))\nprint("Total:", total_str)',
    hints: [
      'Use int() to convert to integer',
      'Use float() to convert to decimal',
      'Use str() to convert to string',
      'type() shows the data type'
    ]
  },
  {
    id: 'chapter-1-strings-exercise',
    chapterId: 1,
    title: 'String Manipulation',
    difficulty: 'medium',
    instructions: 'Practice string operations used in data cleaning:\n\n1. Clean up a messy name (strip whitespace, title case)\n2. Extract the domain from an email address\n3. Format a phone number\n4. Create a customer ID from name parts',
    initialCode: '# String Manipulation Exercise\n\n# 1. Clean up messy name\nmessy_name = "   john DOE   "\n# TODO: Strip whitespace and convert to title case\nclean_name = messy_name.____().____\nprint("Clean name:", clean_name)\n\n# 2. Extract domain from email\nemail = "user@company.com"\n# TODO: Find the @ and slice to get domain\nat_position = email.____("@")\ndomain = email[____:]  # Slice from @ to end\nprint("Domain:", domain)\n\n# 3. Format phone number from digits\ndigits = "5551234567"\n# TODO: Format as (555) 123-4567 using slicing\nformatted_phone = f"({digits[____]}) {digits[____]}-{digits[____]}"\nprint("Phone:", formatted_phone)\n\n# 4. Create customer ID\nfirst = "Alice"\nlast = "Smith"\nyear = 2024\n# TODO: Create ID like "SMI-ALI-2024" (first 3 of each, uppercase)\ncustomer_id = f"{last[:____].____()}-{first[:____].____()}-{year}"\nprint("Customer ID:", customer_id)',
    solution: '# String Manipulation Exercise\n\n# 1. Clean up messy name\nmessy_name = "   john DOE   "\n# Strip whitespace and convert to title case\nclean_name = messy_name.strip().title()\nprint("Clean name:", clean_name)\n\n# 2. Extract domain from email\nemail = "user@company.com"\n# Find the @ and slice to get domain\nat_position = email.find("@")\ndomain = email[at_position + 1:]  # Slice from after @ to end\nprint("Domain:", domain)\n\n# 3. Format phone number from digits\ndigits = "5551234567"\n# Format as (555) 123-4567 using slicing\nformatted_phone = f"({digits[0:3]}) {digits[3:6]}-{digits[6:10]}"\nprint("Phone:", formatted_phone)\n\n# 4. Create customer ID\nfirst = "Alice"\nlast = "Smith"\nyear = 2024\n# Create ID like "SMI-ALI-2024" (first 3 of each, uppercase)\ncustomer_id = f"{last[:3].upper()}-{first[:3].upper()}-{year}"\nprint("Customer ID:", customer_id)',
    hints: [
      'strip() removes whitespace, title() capitalizes first letters',
      'find() returns the index where a substring is found',
      'Slicing: string[start:end] extracts characters',
      'upper() converts to uppercase'
    ]
  },
  {
    id: 'chapter-1-operators-exercise',
    chapterId: 1,
    title: 'Financial Calculator',
    difficulty: 'medium',
    instructions: 'Build a simple financial calculator:\n\n1. Calculate gross profit (revenue - cost)\n2. Calculate profit margin (profit / revenue * 100)\n3. Calculate tax amount (profit * tax_rate)\n4. Calculate net profit (profit - tax)',
    initialCode: '# Financial Calculator\nrevenue = 100000\ncost = 65000\ntax_rate = 0.25  # 25%\n\n# TODO: Calculate gross profit\ngross_profit = ____\n\n# TODO: Calculate profit margin (as percentage)\nprofit_margin = (____) * 100\n\n# TODO: Calculate tax amount\ntax_amount = ____\n\n# TODO: Calculate net profit\nnet_profit = ____\n\nprint("Revenue:", revenue)\nprint("Cost:", cost)\nprint("Gross Profit:", gross_profit)\nprint("Profit Margin:", profit_margin, "%")\nprint("Tax:", tax_amount)\nprint("Net Profit:", net_profit)',
    solution: '# Financial Calculator\nrevenue = 100000\ncost = 65000\ntax_rate = 0.25  # 25%\n\n# Calculate gross profit\ngross_profit = revenue - cost\n\n# Calculate profit margin (as percentage)\nprofit_margin = (gross_profit / revenue) * 100\n\n# Calculate tax amount\ntax_amount = gross_profit * tax_rate\n\n# Calculate net profit\nnet_profit = gross_profit - tax_amount\n\nprint("Revenue:", revenue)\nprint("Cost:", cost)\nprint("Gross Profit:", gross_profit)\nprint("Profit Margin:", profit_margin, "%")\nprint("Tax:", tax_amount)\nprint("Net Profit:", net_profit)',
    hints: [
      'Gross profit = revenue - cost',
      'Profit margin = (profit / revenue) * 100',
      'Tax = profit * tax_rate',
      'Net profit = gross profit - tax'
    ]
  },
  {
    id: 'chapter-1-conditionals-exercise',
    chapterId: 1,
    title: 'Sales Performance Evaluator',
    difficulty: 'medium',
    instructions: 'Create a sales performance evaluator that:\n1. Takes sales amount and target as inputs\n2. Calculates the percentage of target achieved\n3. Determines the performance tier (Exceptional, Excellent, Good, Needs Improvement)\n4. Calculates the bonus based on the tier\n\nComplete the code below!',
    initialCode: '# Sales Performance Evaluator\n\n# TODO: Set the sales and target values\nsales = ____  # Try 85000\ntarget = ____  # Try 70000\n\n# TODO: Calculate percentage achieved\npercentage = (____) * 100\n\n# TODO: Determine performance tier and bonus rate\n# Exceptional: >= 120% -> 15% bonus\n# Excellent: >= 100% -> 10% bonus\n# Good: >= 80% -> 5% bonus\n# Needs Improvement: < 80% -> 0% bonus\n\nif percentage >= ____:\n    tier = "Exceptional"\n    bonus_rate = ____\nelif percentage >= ____:\n    tier = "Excellent"\n    bonus_rate = ____\nelif percentage >= ____:\n    tier = "Good"\n    bonus_rate = ____\nelse:\n    tier = "Needs Improvement"\n    bonus_rate = ____\n\n# Calculate bonus amount\nbonus = sales * bonus_rate\n\n# Print results\nprint("Sales:", sales)\nprint("Target:", target)\nprint("Achievement:", percentage, "%")\nprint("Performance Tier:", tier)\nprint("Bonus:", bonus)',
    solution: '# Sales Performance Evaluator\n\n# Set the sales and target values\nsales = 85000\ntarget = 70000\n\n# Calculate percentage achieved\npercentage = (sales / target) * 100\n\n# Determine performance tier and bonus rate\nif percentage >= 120:\n    tier = "Exceptional"\n    bonus_rate = 0.15\nelif percentage >= 100:\n    tier = "Excellent"\n    bonus_rate = 0.10\nelif percentage >= 80:\n    tier = "Good"\n    bonus_rate = 0.05\nelse:\n    tier = "Needs Improvement"\n    bonus_rate = 0\n\n# Calculate bonus amount\nbonus = sales * bonus_rate\n\n# Print results\nprint("Sales:", sales)\nprint("Target:", target)\nprint("Achievement:", percentage, "%")\nprint("Performance Tier:", tier)\nprint("Bonus:", bonus)',
    hints: [
      'For the percentage calculation, divide sales by target and multiply by 100',
      'Use 120, 100, and 80 as the percentage thresholds',
      'Bonus rates should be decimal values: 0.15 for 15%, 0.10 for 10%, etc.',
      'Remember to check conditions from highest to lowest in elif chains'
    ]
  },

  // Chapter 2 Exercises
  {
    id: 'chapter-2-lists-exercise',
    chapterId: 2,
    title: 'Sales List Operations',
    difficulty: 'easy',
    instructions: 'Practice working with lists:\n\n1. Create a list of monthly sales\n2. Add a new month using append()\n3. Find the total, average, max, and min\n4. Create a list of only high-performing months (above average)',
    initialCode: '# Sales List Operations\n\n# TODO: Create a list of 6 monthly sales values\nmonthly_sales = [____]\n\n# TODO: Add a 7th month with value 72000\nmonthly_sales.____(72000)\n\n# TODO: Calculate statistics\ntotal = ____(monthly_sales)\naverage = total / ____(monthly_sales)\nmaximum = ____(monthly_sales)\nminimum = ____(monthly_sales)\n\nprint("Monthly Sales:", monthly_sales)\nprint("Total:", total)\nprint("Average:", average)\nprint("Best Month:", maximum)\nprint("Worst Month:", minimum)\n\n# TODO: Create list of months above average (list comprehension)\nhigh_months = [s for s in monthly_sales if s > ____]\nprint("High Performing Months:", high_months)',
    solution: '# Sales List Operations\n\n# Create a list of 6 monthly sales values\nmonthly_sales = [45000, 52000, 48000, 61000, 55000, 58000]\n\n# Add a 7th month with value 72000\nmonthly_sales.append(72000)\n\n# Calculate statistics\ntotal = sum(monthly_sales)\naverage = total / len(monthly_sales)\nmaximum = max(monthly_sales)\nminimum = min(monthly_sales)\n\nprint("Monthly Sales:", monthly_sales)\nprint("Total:", total)\nprint("Average:", average)\nprint("Best Month:", maximum)\nprint("Worst Month:", minimum)\n\n# Create list of months above average (list comprehension)\nhigh_months = [s for s in monthly_sales if s > average]\nprint("High Performing Months:", high_months)',
    hints: [
      'Use sum() for total, len() for count',
      'Use max() for highest, min() for lowest',
      'append() adds to the end of a list',
      'List comprehension: [item for item in list if condition]'
    ]
  },
  {
    id: 'chapter-2-tuples-sets-exercise',
    chapterId: 2,
    title: 'Tuples and Sets Practice',
    difficulty: 'medium',
    instructions: 'Practice with tuples and sets:\n\n1. Create a tuple for product data (can\'t be changed)\n2. Unpack tuple values into variables\n3. Use sets to find unique customers\n4. Find customers who bought in both periods',
    initialCode: '# Tuples and Sets Practice\n\n# 1. Create a product tuple: (name, price, category)\nproduct = (____)\nprint("Product tuple:", product)\n\n# 2. Unpack the tuple into variables\nname, price, category = ____\nprint(f"Name: {name}, Price: ${price}, Category: {category}")\n\n# 3. Remove duplicates from customer list using set\nall_purchases = ["Alice", "Bob", "Alice", "Carol", "Bob", "Alice"]\nunique_customers = ____(all_purchases)\nprint("Unique customers:", unique_customers)\nprint("Total unique:", len(unique_customers))\n\n# 4. Find common customers (intersection)\nq1_customers = {"Alice", "Bob", "Carol"}\nq2_customers = {"Bob", "Carol", "David", "Eve"}\n\n# TODO: Find customers in both quarters\nreturning_customers = q1_customers ____ q2_customers\nprint("Returning customers:", returning_customers)\n\n# TODO: Find new customers in Q2\nnew_customers = q2_customers ____ q1_customers\nprint("New in Q2:", new_customers)',
    solution: '# Tuples and Sets Practice\n\n# 1. Create a product tuple: (name, price, category)\nproduct = ("Widget Pro", 49.99, "Electronics")\nprint("Product tuple:", product)\n\n# 2. Unpack the tuple into variables\nname, price, category = product\nprint(f"Name: {name}, Price: ${price}, Category: {category}")\n\n# 3. Remove duplicates from customer list using set\nall_purchases = ["Alice", "Bob", "Alice", "Carol", "Bob", "Alice"]\nunique_customers = set(all_purchases)\nprint("Unique customers:", unique_customers)\nprint("Total unique:", len(unique_customers))\n\n# 4. Find common customers (intersection)\nq1_customers = {"Alice", "Bob", "Carol"}\nq2_customers = {"Bob", "Carol", "David", "Eve"}\n\n# Find customers in both quarters\nreturning_customers = q1_customers & q2_customers\nprint("Returning customers:", returning_customers)\n\n# Find new customers in Q2\nnew_customers = q2_customers - q1_customers\nprint("New in Q2:", new_customers)',
    hints: [
      'Tuples use parentheses: (item1, item2, item3)',
      'Unpack by assigning: a, b, c = tuple',
      'set() converts a list to a set (removes duplicates)',
      '& is intersection (in both), - is difference (in first but not second)'
    ]
  },
  {
    id: 'chapter-2-dict-exercise',
    chapterId: 2,
    title: 'Product Catalog',
    difficulty: 'medium',
    instructions: 'Create a product catalog using dictionaries:\n\n1. Create a product dictionary with name, price, category, stock\n2. Update the stock quantity\n3. Add a discount field\n4. Calculate the discounted price',
    initialCode: '# Product Catalog Exercise\n\n# TODO: Create a product dictionary\nproduct = {\n    "name": ____,\n    "price": ____,\n    "category": ____,\n    "stock": ____\n}\n\n# TODO: Update stock to 75\nproduct[____] = 75\n\n# TODO: Add a discount field (20% = 0.20)\nproduct[____] = 0.20\n\n# TODO: Calculate discounted price\ndiscounted_price = product["price"] * (1 - product[____])\n\n# Print product details\nprint("Product:", product["name"])\nprint("Original Price:", product["price"])\nprint("Discount:", product["discount"])\nprint("Sale Price:", discounted_price)\nprint("In Stock:", product["stock"])',
    solution: '# Product Catalog Exercise\n\n# Create a product dictionary\nproduct = {\n    "name": "Widget Pro",\n    "price": 99.99,\n    "category": "Electronics",\n    "stock": 50\n}\n\n# Update stock to 75\nproduct["stock"] = 75\n\n# Add a discount field (20% = 0.20)\nproduct["discount"] = 0.20\n\n# Calculate discounted price\ndiscounted_price = product["price"] * (1 - product["discount"])\n\n# Print product details\nprint("Product:", product["name"])\nprint("Original Price:", product["price"])\nprint("Discount:", product["discount"])\nprint("Sale Price:", discounted_price)\nprint("In Stock:", product["stock"])',
    hints: [
      'Dictionary keys are strings in quotes: "name"',
      'Access values with product["key"]',
      'Add new keys the same way: product["new_key"] = value',
      'Discounted price = original * (1 - discount_rate)'
    ]
  },
  {
    id: 'chapter-2-loops-exercise',
    chapterId: 2,
    title: 'Sales Report Generator',
    difficulty: 'medium',
    instructions: 'Create a sales report using loops:\n\n1. Loop through regional sales data\n2. Calculate performance status for each region\n3. Track total sales and count of regions\n4. Generate a formatted report',
    initialCode: '# Sales Report Generator\n\nregional_sales = {\n    "North": 125000,\n    "South": 98000,\n    "East": 142000,\n    "West": 156000\n}\ntarget = 120000\n\nprint("=" * 40)\nprint("REGIONAL SALES REPORT")\nprint("=" * 40)\n\ntotal_sales = 0\nregions_met_target = 0\n\n# TODO: Loop through the dictionary\nfor region, sales in regional_sales.____():\n    # TODO: Add to total\n    total_sales = total_sales + ____\n    \n    # TODO: Check if target met\n    if sales >= ____:\n        status = "Target Met"\n        regions_met_target = ____ + 1\n    else:\n        status = "Below Target"\n    \n    print(region, ":", sales, "-", status)\n\nprint("=" * 40)\nprint("Total Sales:", total_sales)\nprint("Regions Meeting Target:", regions_met_target, "of", len(regional_sales))',
    solution: '# Sales Report Generator\n\nregional_sales = {\n    "North": 125000,\n    "South": 98000,\n    "East": 142000,\n    "West": 156000\n}\ntarget = 120000\n\nprint("=" * 40)\nprint("REGIONAL SALES REPORT")\nprint("=" * 40)\n\ntotal_sales = 0\nregions_met_target = 0\n\n# Loop through the dictionary\nfor region, sales in regional_sales.items():\n    # Add to total\n    total_sales = total_sales + sales\n    \n    # Check if target met\n    if sales >= target:\n        status = "Target Met"\n        regions_met_target = regions_met_target + 1\n    else:\n        status = "Below Target"\n    \n    print(region, ":", sales, "-", status)\n\nprint("=" * 40)\nprint("Total Sales:", total_sales)\nprint("Regions Meeting Target:", regions_met_target, "of", len(regional_sales))',
    hints: [
      'Use .items() to get both key and value from dictionary',
      'Add sales to total: total_sales = total_sales + sales',
      'Compare sales to target variable',
      'Increment counter: count = count + 1'
    ]
  },
  {
    id: 'chapter-2-comprehensions-exercise',
    chapterId: 2,
    title: 'Data Transformation with Comprehensions',
    difficulty: 'medium',
    instructions: 'Use list and dictionary comprehensions to transform data:\n\n1. Convert sales to thousands\n2. Filter for high performers only\n3. Create a dictionary of status by region\n4. Calculate bonuses with conditional comprehension',
    initialCode: '# Data Transformation with Comprehensions\n\nsales_data = [45000, 52000, 38000, 61000, 55000]\nregions = ["North", "South", "East", "West", "Central"]\ntarget = 50000\n\n# 1. Convert all sales to thousands (divide by 1000)\n# Example: 45000 -> 45.0\nsales_in_k = [____ for s in sales_data]\nprint("Sales in thousands:", sales_in_k)\n\n# 2. Filter only sales >= target\nhigh_sales = [s for s in sales_data if ____]\nprint("High performers:", high_sales)\n\n# 3. Create dict {region: sales}\nregion_sales = {____: ____ for r, s in zip(regions, sales_data)}\nprint("Region dict:", region_sales)\n\n# 4. Categorize: "High" if >= target, else "Low"\ncategories = [____ if s >= target ____ for s in sales_data]\nprint("Categories:", categories)\n\n# 5. Bonus dict: 10% if >= target, 5% otherwise  \nbonuses = {r: ____ if s >= target else ____ \n           for r, s in zip(regions, sales_data)}\nprint("Bonuses:", bonuses)',
    solution: '# Data Transformation with Comprehensions\n\nsales_data = [45000, 52000, 38000, 61000, 55000]\nregions = ["North", "South", "East", "West", "Central"]\ntarget = 50000\n\n# 1. Convert all sales to thousands (divide by 1000)\nsales_in_k = [s / 1000 for s in sales_data]\nprint("Sales in thousands:", sales_in_k)\n\n# 2. Filter only sales >= target\nhigh_sales = [s for s in sales_data if s >= target]\nprint("High performers:", high_sales)\n\n# 3. Create dict {region: sales}\nregion_sales = {r: s for r, s in zip(regions, sales_data)}\nprint("Region dict:", region_sales)\n\n# 4. Categorize: "High" if >= target, else "Low"\ncategories = ["High" if s >= target else "Low" for s in sales_data]\nprint("Categories:", categories)\n\n# 5. Bonus dict: 10% if >= target, 5% otherwise  \nbonuses = {r: s * 0.10 if s >= target else s * 0.05 \n           for r, s in zip(regions, sales_data)}\nprint("Bonuses:", bonuses)',
    hints: [
      'Basic: [expression for item in list]',
      'Filter: [item for item in list if condition]',
      'if-else: [A if condition else B for item in list]',
      'Dict: {key: value for k, v in items}'
    ]
  },
  {
    id: 'chapter-2-functions-exercise',
    chapterId: 2,
    title: 'Build Sales Analytics Functions',
    difficulty: 'medium',
    instructions: 'Build a set of reusable analytics functions:\n\n1. calculate_statistics(): returns total, avg, max, min\n2. get_top_performers(): returns top N items\n3. calculate_growth(): percentage change between two values\n4. Test all functions with sample data',
    initialCode: '# Sales Analytics Functions\n\n# Sample data\nmonthly_sales = [45000, 52000, 48000, 61000, 55000, 58000]\n\n# 1. Calculate statistics function\ndef calculate_statistics(data):\n    """Return total, average, max, min as a tuple."""\n    total = ____(data)\n    average = total / ____(data)\n    maximum = ____(data)\n    minimum = ____(data)\n    return ____, ____, ____, ____\n\n# 2. Get top N performers\ndef get_top_performers(data, n=3):\n    """Return top n values from the data."""\n    sorted_data = sorted(data, reverse=____)\n    return sorted_data[:____]\n\n# 3. Calculate growth rate\ndef calculate_growth(current, previous):\n    """Calculate percentage growth."""\n    if previous == 0:\n        return 0\n    return ((current - ____) / ____) * 100\n\n# Test the functions\nprint("=== Statistics ===\")\ntotal, avg, high, low = calculate_statistics(monthly_sales)\nprint(f"Total: ${total:,}")\nprint(f"Average: ${avg:,.2f}")\nprint(f"High: ${high:,}, Low: ${low:,}")\n\nprint("\\n=== Top 3 Months ===\")\ntop_3 = get_top_performers(monthly_sales, 3)\nprint("Top performers:", top_3)\n\nprint("\\n=== Growth Rate ===\")\ngrowth = calculate_growth(58000, 45000)\nprint(f"Growth from first to last: {growth:.1f}%")',
    solution: '# Sales Analytics Functions\n\n# Sample data\nmonthly_sales = [45000, 52000, 48000, 61000, 55000, 58000]\n\n# 1. Calculate statistics function\ndef calculate_statistics(data):\n    """Return total, average, max, min as a tuple."""\n    total = sum(data)\n    average = total / len(data)\n    maximum = max(data)\n    minimum = min(data)\n    return total, average, maximum, minimum\n\n# 2. Get top N performers\ndef get_top_performers(data, n=3):\n    """Return top n values from the data."""\n    sorted_data = sorted(data, reverse=True)\n    return sorted_data[:n]\n\n# 3. Calculate growth rate\ndef calculate_growth(current, previous):\n    """Calculate percentage growth."""\n    if previous == 0:\n        return 0\n    return ((current - previous) / previous) * 100\n\n# Test the functions\nprint("=== Statistics ===\")\ntotal, avg, high, low = calculate_statistics(monthly_sales)\nprint(f"Total: ${total:,}")\nprint(f"Average: ${avg:,.2f}")\nprint(f"High: ${high:,}, Low: ${low:,}")\n\nprint("\\n=== Top 3 Months ===\")\ntop_3 = get_top_performers(monthly_sales, 3)\nprint("Top performers:", top_3)\n\nprint("\\n=== Growth Rate ===\")\ngrowth = calculate_growth(58000, 45000)\nprint(f"Growth from first to last: {growth:.1f}%")',
    hints: [
      'sum(), len(), max(), min() are built-in functions',
      'sorted(list, reverse=True) sorts descending',
      'Use slicing [:n] to get first n items',
      'Growth = (current - previous) / previous * 100'
    ]
  },
  {
    id: 'chapter-2-exercise-1',
    chapterId: 2,
    title: 'Sales Analytics Module (Advanced)',
    difficulty: 'hard',
    instructions: 'Build a comprehensive sales analytics module with functions that:\n1. Calculate monthly statistics (total, average, max, min)\n2. Identify top performing months\n3. Calculate month-over-month growth rates\n4. Generate a summary report\n\nComplete the functions below!',
    initialCode: '# Sales Analytics Module\n\nmonthly_sales = [45000, 52000, 48000, 61000, 55000, 58000,\n                 62000, 59000, 65000, 71000, 68000, 75000]\n\nmonths = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",\n          "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]\n\ndef calculate_statistics(sales):\n    """Calculate basic statistics for sales data."""\n    total = ____(sales)\n    average = total / ____(sales)\n    maximum = ____(sales)\n    minimum = ____(sales)\n    return total, average, maximum, minimum\n\ndef get_top_months(sales, months, n=3):\n    """Return the top n performing months."""\n    paired = list(zip(months, ____))\n    sorted_pairs = sorted(paired, key=lambda x: x[1], reverse=____)\n    return sorted_pairs[:____]\n\ndef calculate_growth_rates(sales):\n    """Calculate month-over-month growth rates."""\n    rates = []\n    for i in range(1, len(sales)):\n        rate = ((sales[i] - sales[____]) / sales[____]) * 100\n        rates.append(round(rate, 1))\n    return rates\n\n# Test the functions\ntotal, avg, high, low = calculate_statistics(monthly_sales)\nprint("Total:", total)\nprint("Average:", round(avg, 2))\nprint("Highest:", high)\nprint("Lowest:", low)\n\nprint("\\nTop 3 Months:")\nfor month, sales in get_top_months(monthly_sales, months, 3):\n    print(" ", month, ":", sales)',
    solution: '# Sales Analytics Module\n\nmonthly_sales = [45000, 52000, 48000, 61000, 55000, 58000,\n                 62000, 59000, 65000, 71000, 68000, 75000]\n\nmonths = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",\n          "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]\n\ndef calculate_statistics(sales):\n    """Calculate basic statistics for sales data."""\n    total = sum(sales)\n    average = total / len(sales)\n    maximum = max(sales)\n    minimum = min(sales)\n    return total, average, maximum, minimum\n\ndef get_top_months(sales, months, n=3):\n    """Return the top n performing months."""\n    paired = list(zip(months, sales))\n    sorted_pairs = sorted(paired, key=lambda x: x[1], reverse=True)\n    return sorted_pairs[:n]\n\ndef calculate_growth_rates(sales):\n    """Calculate month-over-month growth rates."""\n    rates = []\n    for i in range(1, len(sales)):\n        rate = ((sales[i] - sales[i-1]) / sales[i-1]) * 100\n        rates.append(round(rate, 1))\n    return rates\n\n# Test the functions\ntotal, avg, high, low = calculate_statistics(monthly_sales)\nprint("Total:", total)\nprint("Average:", round(avg, 2))\nprint("Highest:", high)\nprint("Lowest:", low)\n\nprint("\\nTop 3 Months:")\nfor month, sales in get_top_months(monthly_sales, months, 3):\n    print(" ", month, ":", sales)',
    hints: [
      'For calculate_statistics: use sum(), len(), max(), and min() functions',
      'For get_top_months: zip(months, sales) pairs them together',
      'For growth rates: access current month with sales[i] and previous with sales[i-1]',
      'The lambda function key=lambda x: x[1] sorts by the second element'
    ]
  },

  // Chapter 3 Exercises
  {
    id: 'chapter-3-error-handling-exercise',
    chapterId: 3,
    title: 'Robust Data Validator',
    difficulty: 'medium',
    instructions: 'Build a robust data validator that:\n1. Validates different field types\n2. Handles multiple error types gracefully\n3. Returns validation results with error messages\n4. Processes a batch of records\n\nComplete the validation function!',
    initialCode: '# Robust Data Validator\n\ndef validate_record(record):\n    """Validate a data record and return errors."""\n    errors = []\n    \n    # TODO: Validate name (must be a non-empty string)\n    try:\n        name = record["name"]\n        if not name or not isinstance(name, str):\n            errors.append("Invalid name")\n    except ____:\n        errors.append("Missing name field")\n    \n    # TODO: Validate price (must be positive number)\n    try:\n        price = float(record["price"])\n        if price < 0:\n            errors.append("Price cannot be negative")\n    except KeyError:\n        errors.append("Missing price field")\n    except ____:\n        errors.append("Invalid price format")\n    \n    # TODO: Validate quantity (must be positive integer)\n    try:\n        qty = int(record["quantity"])\n        if qty < 0:\n            errors.append("Quantity cannot be negative")\n    except ____:\n        errors.append("Missing quantity field")\n    except ValueError:\n        errors.append("Invalid quantity format")\n    \n    return {"valid": len(errors) == 0, "errors": errors}\n\n# Test with various records\ntest_records = [\n    {"name": "Widget", "price": "29.99", "quantity": "10"},\n    {"name": "", "price": "invalid", "quantity": "5"},\n    {"price": "19.99", "quantity": "-3"},\n    {"name": "Gadget", "price": "49.99", "quantity": "abc"}\n]\n\nfor i, record in enumerate(test_records):\n    result = validate_record(record)\n    status = "Valid" if result["valid"] else "Invalid"\n    print(f"Record {i+1}: {status}")\n    for error in result["errors"]:\n        print(f"  - {error}")',
    solution: '# Robust Data Validator\n\ndef validate_record(record):\n    """Validate a data record and return errors."""\n    errors = []\n    \n    # Validate name (must be a non-empty string)\n    try:\n        name = record["name"]\n        if not name or not isinstance(name, str):\n            errors.append("Invalid name")\n    except KeyError:\n        errors.append("Missing name field")\n    \n    # Validate price (must be positive number)\n    try:\n        price = float(record["price"])\n        if price < 0:\n            errors.append("Price cannot be negative")\n    except KeyError:\n        errors.append("Missing price field")\n    except ValueError:\n        errors.append("Invalid price format")\n    \n    # Validate quantity (must be positive integer)\n    try:\n        qty = int(record["quantity"])\n        if qty < 0:\n            errors.append("Quantity cannot be negative")\n    except KeyError:\n        errors.append("Missing quantity field")\n    except ValueError:\n        errors.append("Invalid quantity format")\n    \n    return {"valid": len(errors) == 0, "errors": errors}\n\n# Test with various records\ntest_records = [\n    {"name": "Widget", "price": "29.99", "quantity": "10"},\n    {"name": "", "price": "invalid", "quantity": "5"},\n    {"price": "19.99", "quantity": "-3"},\n    {"name": "Gadget", "price": "49.99", "quantity": "abc"}\n]\n\nfor i, record in enumerate(test_records):\n    result = validate_record(record)\n    status = "Valid" if result["valid"] else "Invalid"\n    print(f"Record {i+1}: {status}")\n    for error in result["errors"]:\n        print(f"  - {error}")',
    hints: [
      'KeyError is raised when a dictionary key is missing',
      'ValueError is raised when type conversion fails',
      'Use isinstance(value, str) to check if value is a string',
      'Return a dictionary with "valid" boolean and "errors" list'
    ]
  },
  {
    id: 'chapter-3-file-writing-exercise',
    chapterId: 3,
    title: 'Report File Generator',
    difficulty: 'medium',
    instructions: 'Create a function that generates formatted reports:\n1. Accept a list of sales records\n2. Calculate totals and averages\n3. Generate a formatted text report\n4. Handle potential errors gracefully',
    initialCode: '# Report File Generator\n\ndef generate_report(records):\n    """Generate a formatted sales report."""\n    lines = []\n    \n    # TODO: Add header\n    lines.append("=" * 40)\n    lines.append("SALES REPORT".center(40))\n    lines.append("=" * ____)\n    lines.append("")\n    \n    # TODO: Calculate totals\n    total_revenue = 0\n    for record in records:\n        revenue = record["price"] * record["quantity"]\n        total_revenue ____ revenue\n        lines.append(f"{record[\'product\']}: ${revenue:,.2f}")\n    \n    # TODO: Add footer\n    lines.append("-" * 40)\n    lines.append(f"Total Revenue: ${____:,.2f}")\n    lines.append(f"Number of Products: {____(records)}")\n    lines.append("=" * 40)\n    \n    return "\\n".join(lines)\n\n# Test data\nsales_data = [\n    {"product": "Widget A", "price": 29.99, "quantity": 100},\n    {"product": "Widget B", "price": 49.99, "quantity": 50},\n    {"product": "Widget C", "price": 19.99, "quantity": 200},\n]\n\nreport = generate_report(sales_data)\nprint(report)',
    solution: '# Report File Generator\n\ndef generate_report(records):\n    """Generate a formatted sales report."""\n    lines = []\n    \n    # Add header\n    lines.append("=" * 40)\n    lines.append("SALES REPORT".center(40))\n    lines.append("=" * 40)\n    lines.append("")\n    \n    # Calculate totals\n    total_revenue = 0\n    for record in records:\n        revenue = record["price"] * record["quantity"]\n        total_revenue += revenue\n        lines.append(f"{record[\'product\']}: ${revenue:,.2f}")\n    \n    # Add footer\n    lines.append("-" * 40)\n    lines.append(f"Total Revenue: ${total_revenue:,.2f}")\n    lines.append(f"Number of Products: {len(records)}")\n    lines.append("=" * 40)\n    \n    return "\\n".join(lines)\n\n# Test data\nsales_data = [\n    {"product": "Widget A", "price": 29.99, "quantity": 100},\n    {"product": "Widget B", "price": 49.99, "quantity": 50},\n    {"product": "Widget C", "price": 19.99, "quantity": 200},\n]\n\nreport = generate_report(sales_data)\nprint(report)',
    hints: [
      'Use += to add to total: total += value',
      'len(records) gives the number of items',
      '"\\n".join(lines) combines lines with newlines',
      '.center(40) centers text in 40 characters'
    ]
  },
  {
    id: 'chapter-3-csv-exercise',
    chapterId: 3,
    title: 'Sales Data Analyzer',
    difficulty: 'medium',
    instructions: 'Build a CSV data analyzer that:\n1. Parses CSV data into records\n2. Calculates sales metrics\n3. Groups data by category\n4. Identifies top performers',
    initialCode: '# Sales Data Analyzer\n\ndef parse_csv_data(csv_text):\n    """Parse CSV text into list of dictionaries."""\n    lines = csv_text.strip().splitlines()\n    headers = lines[0].split(",")\n    \n    records = []\n    for line in lines[____:]:\n        values = line.split(",")\n        record = {}\n        for i, header in enumerate(headers):\n            record[header] = values[____]\n        records.append(record)\n    \n    return records\n\ndef analyze_sales(records):\n    """Analyze sales records and return metrics."""\n    total_revenue = 0\n    category_totals = {}\n    \n    for record in records:\n        # Convert and calculate\n        price = float(record["price"])\n        qty = int(record["quantity"])\n        revenue = price * qty\n        category = record["category"]\n        \n        total_revenue ____ revenue\n        \n        if category not in category_totals:\n            category_totals[category] = 0\n        category_totals[category] ____ revenue\n    \n    return {\n        "total_revenue": total_revenue,\n        "by_category": category_totals,\n        "record_count": ____(records)\n    }\n\n# Test data\ncsv_data = \"\"\"product,category,price,quantity\nLaptop,Electronics,999.99,10\nMouse,Electronics,29.99,50\nDesk,Furniture,299.99,5\nChair,Furniture,199.99,8\"\"\"\n\nrecords = parse_csv_data(csv_data)\nmetrics = analyze_sales(records)\n\nprint(f"Total Revenue: ${metrics[\'total_revenue\']:,.2f}")\nprint(f"Records: {metrics[\'record_count\']}")\nprint("\\nBy Category:")\nfor cat, total in metrics["by_category"].items():\n    print(f"  {cat}: ${total:,.2f}")',
    solution: '# Sales Data Analyzer\n\ndef parse_csv_data(csv_text):\n    """Parse CSV text into list of dictionaries."""\n    lines = csv_text.strip().splitlines()\n    headers = lines[0].split(",")\n    \n    records = []\n    for line in lines[1:]:\n        values = line.split(",")\n        record = {}\n        for i, header in enumerate(headers):\n            record[header] = values[i]\n        records.append(record)\n    \n    return records\n\ndef analyze_sales(records):\n    """Analyze sales records and return metrics."""\n    total_revenue = 0\n    category_totals = {}\n    \n    for record in records:\n        # Convert and calculate\n        price = float(record["price"])\n        qty = int(record["quantity"])\n        revenue = price * qty\n        category = record["category"]\n        \n        total_revenue += revenue\n        \n        if category not in category_totals:\n            category_totals[category] = 0\n        category_totals[category] += revenue\n    \n    return {\n        "total_revenue": total_revenue,\n        "by_category": category_totals,\n        "record_count": len(records)\n    }\n\n# Test data\ncsv_data = \"\"\"product,category,price,quantity\nLaptop,Electronics,999.99,10\nMouse,Electronics,29.99,50\nDesk,Furniture,299.99,5\nChair,Furniture,199.99,8\"\"\"\n\nrecords = parse_csv_data(csv_data)\nmetrics = analyze_sales(records)\n\nprint(f"Total Revenue: ${metrics[\'total_revenue\']:,.2f}")\nprint(f"Records: {metrics[\'record_count\']}")\nprint("\\nBy Category:")\nfor cat, total in metrics["by_category"].items():\n    print(f"  {cat}: ${total:,.2f}")',
    hints: [
      'lines[1:] skips the header row',
      'values[i] gets the value at index i',
      'Use += to add to totals',
      'len(records) gives the count'
    ]
  },
  {
    id: 'chapter-3-pipeline-exercise',
    chapterId: 3,
    title: 'Complete Data Pipeline',
    difficulty: 'hard',
    instructions: 'Build a complete data processing pipeline:\n1. Read and parse input data\n2. Clean and validate records\n3. Transform and aggregate\n4. Generate formatted output',
    initialCode: '# Complete Data Pipeline\n\ndef clean_record(record):\n    """Clean and validate a single record."""\n    try:\n        return {\n            "product": record.get("product", "Unknown").strip(),\n            "price": float(record.get("price", 0)),\n            "quantity": int(record.get("quantity", 0)),\n            "valid": True\n        }\n    except (ValueError, TypeError):\n        return {"product": "Invalid", "price": 0, "quantity": 0, "valid": ____}\n\ndef process_pipeline(raw_data):\n    """Process data through the complete pipeline."""\n    \n    # Step 1: Parse\n    lines = raw_data.strip().splitlines()\n    headers = lines[0].split(",")\n    \n    records = []\n    for line in lines[1:]:\n        values = line.split(",")\n        record = dict(zip(____, ____))\n        records.append(record)\n    \n    # Step 2: Clean\n    cleaned = [clean_record(r) for r in ____]\n    valid_records = [r for r in cleaned if r["____"]]\n    \n    # Step 3: Transform & Aggregate\n    total = 0\n    for r in valid_records:\n        r["revenue"] = r["price"] * r["quantity"]\n        total ____ r["revenue"]\n    \n    # Step 4: Output\n    return {\n        "records": valid_records,\n        "total_revenue": total,\n        "valid_count": len(____),\n        "invalid_count": len(records) - len(valid_records)\n    }\n\n# Test the pipeline\ntest_data = \"\"\"product,price,quantity\nWidget A,29.99,10\nWidget B,invalid,5\nWidget C,19.99,20\nWidget D,49.99,abc\"\"\"\n\nresult = process_pipeline(test_data)\nprint(f"Valid Records: {result[\'valid_count\']}")\nprint(f"Invalid Records: {result[\'invalid_count\']}")\nprint(f"Total Revenue: ${result[\'total_revenue\']:,.2f}")\nprint("\\nProcessed Records:")\nfor r in result["records"]:\n    print(f"  {r[\'product\']}: ${r[\'revenue\']:,.2f}")',
    solution: '# Complete Data Pipeline\n\ndef clean_record(record):\n    """Clean and validate a single record."""\n    try:\n        return {\n            "product": record.get("product", "Unknown").strip(),\n            "price": float(record.get("price", 0)),\n            "quantity": int(record.get("quantity", 0)),\n            "valid": True\n        }\n    except (ValueError, TypeError):\n        return {"product": "Invalid", "price": 0, "quantity": 0, "valid": False}\n\ndef process_pipeline(raw_data):\n    """Process data through the complete pipeline."""\n    \n    # Step 1: Parse\n    lines = raw_data.strip().splitlines()\n    headers = lines[0].split(",")\n    \n    records = []\n    for line in lines[1:]:\n        values = line.split(",")\n        record = dict(zip(headers, values))\n        records.append(record)\n    \n    # Step 2: Clean\n    cleaned = [clean_record(r) for r in records]\n    valid_records = [r for r in cleaned if r["valid"]]\n    \n    # Step 3: Transform & Aggregate\n    total = 0\n    for r in valid_records:\n        r["revenue"] = r["price"] * r["quantity"]\n        total += r["revenue"]\n    \n    # Step 4: Output\n    return {\n        "records": valid_records,\n        "total_revenue": total,\n        "valid_count": len(valid_records),\n        "invalid_count": len(records) - len(valid_records)\n    }\n\n# Test the pipeline\ntest_data = \"\"\"product,price,quantity\nWidget A,29.99,10\nWidget B,invalid,5\nWidget C,19.99,20\nWidget D,49.99,abc\"\"\"\n\nresult = process_pipeline(test_data)\nprint(f"Valid Records: {result[\'valid_count\']}")\nprint(f"Invalid Records: {result[\'invalid_count\']}")\nprint(f"Total Revenue: ${result[\'total_revenue\']:,.2f}")\nprint("\\nProcessed Records:")\nfor r in result["records"]:\n    print(f"  {r[\'product\']}: ${r[\'revenue\']:,.2f}")',
    hints: [
      'zip(headers, values) pairs up column names with values',
      'List comprehension with condition: [x for x in list if x["valid"]]',
      'Use += to accumulate totals',
      'len() gives the count of items in a list'
    ]
  },
  {
    id: 'chapter-1-exercise-1',
    chapterId: 1,
    title: 'Sales Performance Calculator',
    difficulty: 'medium',
    instructions: 'Build a sales performance calculator that evaluates employee performance based on their sales figures.\n\n1. Calculate percentage of target achieved\n2. Determine performance tier\n3. Calculate bonus based on tier',
    initialCode: '# Sales Performance Calculator\n\nsales = 85000\ntarget = 70000\n\n# TODO: Calculate percentage achieved\npercentage = (____) * 100\n\n# TODO: Determine tier and bonus rate\nif percentage >= 120:\n    tier = "Exceptional"\n    bonus_rate = 0.15\nelif percentage >= ____:\n    tier = "Excellent"\n    bonus_rate = ____\nelif percentage >= ____:\n    tier = "Good"\n    bonus_rate = ____\nelse:\n    tier = "Needs Improvement"\n    bonus_rate = 0\n\n# Calculate bonus\nbonus = sales * bonus_rate\n\nprint(f"Sales: ${sales:,}")\nprint(f"Target: ${target:,}")\nprint(f"Achievement: {percentage:.1f}%")\nprint(f"Tier: {tier}")\nprint(f"Bonus: ${bonus:,.2f}")',
    solution: '# Sales Performance Calculator\n\nsales = 85000\ntarget = 70000\n\n# Calculate percentage achieved\npercentage = (sales / target) * 100\n\n# Determine tier and bonus rate\nif percentage >= 120:\n    tier = "Exceptional"\n    bonus_rate = 0.15\nelif percentage >= 100:\n    tier = "Excellent"\n    bonus_rate = 0.10\nelif percentage >= 80:\n    tier = "Good"\n    bonus_rate = 0.05\nelse:\n    tier = "Needs Improvement"\n    bonus_rate = 0\n\n# Calculate bonus\nbonus = sales * bonus_rate\n\nprint(f"Sales: ${sales:,}")\nprint(f"Target: ${target:,}")\nprint(f"Achievement: {percentage:.1f}%")\nprint(f"Tier: {tier}")\nprint(f"Bonus: ${bonus:,.2f}")',
    hints: [
      'Percentage = (sales / target) * 100',
      'Use 100 and 80 as thresholds',
      'Bonus rates: 0.10 for 10%, 0.05 for 5%'
    ]
  }
];

export const getExerciseById = (exerciseId: string) => {
  return exercises.find(e => e.id === exerciseId);
};

export const getExercisesByChapter = (chapterId: number) => {
  return exercises.filter(e => e.chapterId === chapterId);
};
