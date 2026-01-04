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
    title: 'Comments Practice',
    difficulty: 'easy',
    instructions: 'Practice writing comments in Python.\n\n1. Add a single-line comment explaining what the code does\n2. Add an inline comment after a print statement\n3. Create a multi-line comment describing the program',
    initialCode: '# TODO: Add a comment explaining this program\n\nprint("Python is fun!")  # TODO: Add inline comment\n\n# TODO: Create a multi-line comment below\n\nprint("Comments help explain code!")',
    solution: '# This program demonstrates Python comments\n\nprint("Python is fun!")  # This prints a message\n\n"""\nThis is a multi-line comment.\nIt can span multiple lines.\nGreat for longer explanations.\n"""\n\nprint("Comments help explain code!")',
    hints: [
      'Single-line comments start with #',
      'Inline comments go after code on the same line',
      'Multi-line comments use triple quotes: """..."""'
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
    id: 'chapter-1-exercise-1',
    chapterId: 1,
    title: 'Sales Performance Calculator',
    difficulty: 'medium',
    instructions: 'Create a sales performance calculator that:\n1. Takes sales amount and target as inputs\n2. Calculates the percentage of target achieved\n3. Determines the performance tier (Exceptional, Excellent, Good, Needs Improvement)\n4. Calculates the bonus based on the tier\n\nComplete the code below to make it work!',
    initialCode: '# Sales Performance Calculator\n# TODO: Set the sales and target values\nsales = ____  # Try 85000\ntarget = ____  # Try 70000\n\n# TODO: Calculate percentage achieved\npercentage = (____) * 100\n\n# TODO: Determine performance tier and bonus rate\n# Exceptional: >= 120% -> 15% bonus\n# Excellent: >= 100% -> 10% bonus\n# Good: >= 80% -> 5% bonus\n# Needs Improvement: < 80% -> 0% bonus\n\nif percentage >= ____:\n    tier = "Exceptional"\n    bonus_rate = ____\nelif percentage >= ____:\n    tier = "Excellent"\n    bonus_rate = ____\nelif percentage >= ____:\n    tier = "Good"\n    bonus_rate = ____\nelse:\n    tier = "Needs Improvement"\n    bonus_rate = ____\n\n# Calculate bonus amount\nbonus = sales * bonus_rate\n\n# Print results\nprint("Sales:", sales)\nprint("Target:", target)\nprint("Achievement:", percentage, "%")\nprint("Performance Tier:", tier)\nprint("Bonus:", bonus)',
    solution: '# Sales Performance Calculator\n# Set the sales and target values\nsales = 85000\ntarget = 70000\n\n# Calculate percentage achieved\npercentage = (sales / target) * 100\n\n# Determine performance tier and bonus rate\nif percentage >= 120:\n    tier = "Exceptional"\n    bonus_rate = 0.15\nelif percentage >= 100:\n    tier = "Excellent"\n    bonus_rate = 0.10\nelif percentage >= 80:\n    tier = "Good"\n    bonus_rate = 0.05\nelse:\n    tier = "Needs Improvement"\n    bonus_rate = 0\n\n# Calculate bonus amount\nbonus = sales * bonus_rate\n\n# Print results\nprint("Sales:", sales)\nprint("Target:", target)\nprint("Achievement:", percentage, "%")\nprint("Performance Tier:", tier)\nprint("Bonus:", bonus)',
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
    id: 'chapter-2-exercise-1',
    chapterId: 2,
    title: 'Sales Analytics Module',
    difficulty: 'medium',
    instructions: 'Build a sales analytics module with functions that:\n1. Calculate monthly statistics (total, average, max, min)\n2. Identify top performing months\n3. Calculate month-over-month growth rates\n4. Generate a summary report\n\nComplete the functions below!',
    initialCode: '# Sales Analytics Module\n\nmonthly_sales = [45000, 52000, 48000, 61000, 55000, 58000,\n                 62000, 59000, 65000, 71000, 68000, 75000]\n\nmonths = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",\n          "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]\n\ndef calculate_statistics(sales):\n    """Calculate basic statistics for sales data."""\n    total = ____(sales)\n    average = total / ____(sales)\n    maximum = ____(sales)\n    minimum = ____(sales)\n    return total, average, maximum, minimum\n\ndef get_top_months(sales, months, n=3):\n    """Return the top n performing months."""\n    paired = list(zip(months, ____))\n    sorted_pairs = sorted(paired, key=lambda x: x[1], reverse=____)\n    return sorted_pairs[:____]\n\ndef calculate_growth_rates(sales):\n    """Calculate month-over-month growth rates."""\n    rates = []\n    for i in range(1, len(sales)):\n        rate = ((sales[i] - sales[____]) / sales[____]) * 100\n        rates.append(round(rate, 1))\n    return rates\n\n# Test the functions\ntotal, avg, high, low = calculate_statistics(monthly_sales)\nprint("Total:", total)\nprint("Average:", round(avg, 2))\nprint("Highest:", high)\nprint("Lowest:", low)\n\nprint("\\nTop 3 Months:")\nfor month, sales in get_top_months(monthly_sales, months, 3):\n    print(" ", month, ":", sales)',
    solution: '# Sales Analytics Module\n\nmonthly_sales = [45000, 52000, 48000, 61000, 55000, 58000,\n                 62000, 59000, 65000, 71000, 68000, 75000]\n\nmonths = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",\n          "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]\n\ndef calculate_statistics(sales):\n    """Calculate basic statistics for sales data."""\n    total = sum(sales)\n    average = total / len(sales)\n    maximum = max(sales)\n    minimum = min(sales)\n    return total, average, maximum, minimum\n\ndef get_top_months(sales, months, n=3):\n    """Return the top n performing months."""\n    paired = list(zip(months, sales))\n    sorted_pairs = sorted(paired, key=lambda x: x[1], reverse=True)\n    return sorted_pairs[:n]\n\ndef calculate_growth_rates(sales):\n    """Calculate month-over-month growth rates."""\n    rates = []\n    for i in range(1, len(sales)):\n        rate = ((sales[i] - sales[i-1]) / sales[i-1]) * 100\n        rates.append(round(rate, 1))\n    return rates\n\n# Test the functions\ntotal, avg, high, low = calculate_statistics(monthly_sales)\nprint("Total:", total)\nprint("Average:", round(avg, 2))\nprint("Highest:", high)\nprint("Lowest:", low)\n\nprint("\\nTop 3 Months:")\nfor month, sales in get_top_months(monthly_sales, months, 3):\n    print(" ", month, ":", sales)',
    hints: [
      'For calculate_statistics: use sum(), len(), max(), and min() functions',
      'For get_top_months: zip(months, sales) pairs them together',
      'For growth rates: access current month with sales[i] and previous with sales[i-1]',
      'The lambda function key=lambda x: x[1] sorts by the second element'
    ]
  },
  {
    id: 'chapter-2-exercise-2',
    chapterId: 2,
    title: 'Customer Data Processor',
    difficulty: 'medium',
    instructions: 'Create a customer data processor that:\n1. Stores customer information in dictionaries\n2. Segments customers by their purchase history\n3. Calculates customer lifetime value (CLV)\n\nThis exercise combines dictionaries, loops, and functions!',
    initialCode: '# Customer Data Processor\n\ncustomers = [\n    {"id": "C001", "name": "Alice", "purchases": 15000, "months": 24},\n    {"id": "C002", "name": "Bob", "purchases": 8500, "months": 12},\n    {"id": "C003", "name": "Carol", "purchases": 3200, "months": 6},\n]\n\ndef segment_customer(purchases, months):\n    """Determine customer tier based on purchases and tenure."""\n    # Platinum: purchases >= 10000 AND months >= 12 -> 20% discount\n    # Gold: purchases >= 5000 OR months >= 6 -> 10% discount\n    # Standard: all others -> 5% discount\n    \n    if purchases >= ____ and months >= ____:\n        return "Platinum", ____\n    elif purchases >= ____ or months >= ____:\n        return "Gold", ____\n    else:\n        return "Standard", ____\n\n# Test with a customer\ntier, discount = segment_customer(15000, 24)\nprint("Tier:", tier, "Discount:", discount)',
    solution: '# Customer Data Processor\n\ncustomers = [\n    {"id": "C001", "name": "Alice", "purchases": 15000, "months": 24},\n    {"id": "C002", "name": "Bob", "purchases": 8500, "months": 12},\n    {"id": "C003", "name": "Carol", "purchases": 3200, "months": 6},\n]\n\ndef segment_customer(purchases, months):\n    """Determine customer tier based on purchases and tenure."""\n    if purchases >= 10000 and months >= 12:\n        return "Platinum", 0.20\n    elif purchases >= 5000 or months >= 6:\n        return "Gold", 0.10\n    else:\n        return "Standard", 0.05\n\n# Test with a customer\ntier, discount = segment_customer(15000, 24)\nprint("Tier:", tier, "Discount:", discount)',
    hints: [
      'Platinum requires BOTH conditions (and)',
      'Gold requires EITHER condition (or)',
      'Discount rates should be decimals: 0.20 for 20%',
      'Access dictionary values with customer["key_name"]'
    ]
  }
];

export const getExerciseById = (exerciseId: string) => {
  return exercises.find(e => e.id === exerciseId);
};

export const getExercisesByChapter = (chapterId: number) => {
  return exercises.filter(e => e.chapterId === chapterId);
};
