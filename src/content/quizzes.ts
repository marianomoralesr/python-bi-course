import type { Quiz } from '../types';

export const quizzes: Quiz[] = [
  {
    id: 'chapter-0-quiz',
    chapterId: 0,
    title: 'Introduction to Python Quiz',
    description: 'Test your understanding of Python basics and setup',
    passingScore: 70,
    questions: [
      {
        id: 'q0-1',
        type: 'multiple-choice',
        question: 'What function is used to display output in Python?',
        options: ['echo()', 'print()', 'display()', 'show()'],
        correctAnswer: 'print()',
        explanation: 'The print() function is used to output text or values to the console in Python.',
        difficulty: 'easy'
      },
      {
        id: 'q0-2',
        type: 'multiple-choice',
        question: 'How do you create a single-line comment in Python?',
        options: ['// comment', '/* comment */', '# comment', '-- comment'],
        correctAnswer: '# comment',
        explanation: 'In Python, single-line comments start with the # symbol. Everything after # on that line is ignored.',
        difficulty: 'easy'
      },
      {
        id: 'q0-3',
        type: 'true-false',
        question: 'Python uses curly braces {} to define code blocks.',
        options: ['True', 'False'],
        correctAnswer: 'False',
        explanation: 'Python uses indentation (spaces or tabs) to define code blocks, not curly braces. This is one of Python\'s distinctive features.',
        difficulty: 'easy'
      },
      {
        id: 'q0-4',
        type: 'code',
        question: 'What will be the output of this code?',
        code: 'print("Hello" + " " + "World")',
        options: ['Hello World', 'HelloWorld', 'Hello + World', 'Error'],
        correctAnswer: 'Hello World',
        explanation: 'The + operator concatenates strings together. "Hello" + " " + "World" joins the three strings into "Hello World".',
        difficulty: 'easy'
      },
      {
        id: 'q0-5',
        type: 'multiple-choice',
        question: 'What is the recommended number of spaces for indentation in Python?',
        options: ['1 space', '2 spaces', '4 spaces', '8 spaces'],
        correctAnswer: '4 spaces',
        explanation: 'PEP 8 (Python\'s style guide) recommends using 4 spaces per indentation level. This is the community standard.',
        difficulty: 'medium'
      }
    ]
  },
  {
    id: 'chapter-1-quiz',
    chapterId: 1,
    title: 'Variables & Logic Quiz',
    description: 'Test your knowledge of variables, data types, operators, and conditionals',
    passingScore: 70,
    questions: [
      {
        id: 'q1-1',
        type: 'multiple-choice',
        question: 'Which of these is a valid Python variable name?',
        options: ['2nd_quarter', 'second-quarter', 'second_quarter', 'second quarter'],
        correctAnswer: 'second_quarter',
        explanation: 'Variable names must start with a letter or underscore, can\'t contain hyphens or spaces, and can\'t start with numbers. second_quarter follows snake_case convention.',
        difficulty: 'easy'
      },
      {
        id: 'q1-2',
        type: 'code',
        question: 'What is the data type of the variable x?',
        code: 'x = 29.99',
        options: ['int', 'float', 'str', 'decimal'],
        correctAnswer: 'float',
        explanation: 'Numbers with decimal points are float (floating-point) numbers in Python. Integers (int) are whole numbers without decimal points.',
        difficulty: 'easy'
      },
      {
        id: 'q1-3',
        type: 'code',
        question: 'What will this expression evaluate to?',
        code: '10 // 3',
        options: ['3.33', '3', '1', '4'],
        correctAnswer: '3',
        explanation: 'The // operator performs floor division, which divides and rounds down to the nearest integer. 10 divided by 3 is 3.33, which floors to 3.',
        difficulty: 'medium'
      },
      {
        id: 'q1-4',
        type: 'code',
        question: 'What is the result of this expression?',
        code: 'True and False or True',
        options: ['True', 'False', 'Error', 'None'],
        correctAnswer: 'True',
        explanation: 'Operator precedence: "and" is evaluated before "or". True and False = False. Then False or True = True.',
        difficulty: 'medium'
      },
      {
        id: 'q1-5',
        type: 'code',
        question: 'What will be printed?',
        code: 'sales = 75000\ntarget = 70000\nif sales >= target:\n    print("A")\nelse:\n    print("B")',
        options: ['A', 'B', 'AB', 'Error'],
        correctAnswer: 'A',
        explanation: 'Since sales (75000) is greater than or equal to target (70000), the condition is True and "A" is printed.',
        difficulty: 'easy'
      },
      {
        id: 'q1-6',
        type: 'multiple-choice',
        question: 'Which operator checks if two values are NOT equal?',
        options: ['<>', '!=', '=/=', 'not='],
        correctAnswer: '!=',
        explanation: 'In Python, != is the "not equal" comparison operator. It returns True if the values are different.',
        difficulty: 'easy'
      },
      {
        id: 'q1-7',
        type: 'code',
        question: 'What type conversion is happening here?',
        code: 'result = int("42")',
        options: ['String to Integer', 'Integer to String', 'Float to Integer', 'No conversion'],
        correctAnswer: 'String to Integer',
        explanation: 'The int() function converts the string "42" into the integer 42. This is called type casting or type conversion.',
        difficulty: 'easy'
      },
      {
        id: 'q1-8',
        type: 'code',
        question: 'What will x be after this code runs?',
        code: 'x = 50\nif x > 100:\n    tier = "High"\nelif x > 25:\n    tier = "Medium"\nelse:\n    tier = "Low"\nprint(tier)',
        options: ['High', 'Medium', 'Low', 'Error'],
        correctAnswer: 'Medium',
        explanation: 'x is 50. First condition (x > 100) is False. Second condition (x > 25) is True, so tier = "Medium" and we skip the else.',
        difficulty: 'medium'
      },
      {
        id: 'q1-9',
        type: 'code',
        question: 'What is the result?',
        code: 'price = "29.99"\ntax = float(price) * 0.1\nprint(round(tax, 2))',
        options: ['3', '2.999', '3.0', '2.99'],
        correctAnswer: '3.0',
        explanation: 'float("29.99") converts string to 29.99. 29.99 * 0.1 = 2.999, and round(2.999, 2) = 3.0 (rounds to 2 decimal places).',
        difficulty: 'medium'
      },
      {
        id: 'q1-10',
        type: 'code',
        question: 'What value does this f-string produce?',
        code: 'count = 5\nitem = "widget"\nprint(f"{count} {item}s")',
        options: ['5 widgets', '{count} {item}s', '5 items', 'Error'],
        correctAnswer: '5 widgets',
        explanation: 'f-strings (formatted strings) replace expressions in {} with their values. {count} becomes 5 and {item} becomes widget.',
        difficulty: 'easy'
      }
    ]
  },
  {
    id: 'chapter-2-quiz',
    chapterId: 2,
    title: 'Collections, Loops & Functions Quiz',
    description: 'Test your knowledge of lists, dictionaries, loops, and functions',
    passingScore: 70,
    questions: [
      {
        id: 'q2-1',
        type: 'code',
        question: 'What will be printed?',
        code: 'items = ["a", "b", "c", "d"]\nprint(items[2])',
        options: ['a', 'b', 'c', 'd'],
        correctAnswer: 'c',
        explanation: 'List indexing starts at 0. items[0]="a", items[1]="b", items[2]="c". So items[2] returns "c".',
        difficulty: 'easy'
      },
      {
        id: 'q2-2',
        type: 'code',
        question: 'What does items[-1] return?',
        code: 'items = [10, 20, 30, 40, 50]',
        options: ['10', '50', '-1', 'Error'],
        correctAnswer: '50',
        explanation: 'Negative indices count from the end. items[-1] is the last element (50), items[-2] would be 40, etc.',
        difficulty: 'easy'
      },
      {
        id: 'q2-3',
        type: 'code',
        question: 'What will this dictionary operation return?',
        code: 'data = {"name": "Alex", "age": 30}\nprint(data.get("city", "Unknown"))',
        options: ['None', 'Error', 'Unknown', 'city'],
        correctAnswer: 'Unknown',
        explanation: 'The get() method returns the default value ("Unknown") when the key ("city") doesn\'t exist in the dictionary.',
        difficulty: 'medium'
      },
      {
        id: 'q2-4',
        type: 'code',
        question: 'What is the output?',
        code: 'total = 0\nfor i in range(1, 4):\n    total += i\nprint(total)',
        options: ['6', '10', '3', '4'],
        correctAnswer: '6',
        explanation: 'range(1, 4) generates 1, 2, 3. The loop adds: 0+1=1, 1+2=3, 3+3=6. Final total is 6.',
        difficulty: 'easy'
      },
      {
        id: 'q2-5',
        type: 'code',
        question: 'What does this list comprehension produce?',
        code: '[x * 2 for x in [1, 2, 3]]',
        options: ['[1, 2, 3]', '[2, 4, 6]', '[1, 4, 9]', '[3, 6, 9]'],
        correctAnswer: '[2, 4, 6]',
        explanation: 'The list comprehension multiplies each element by 2: 1*2=2, 2*2=4, 3*2=6.',
        difficulty: 'medium'
      },
      {
        id: 'q2-6',
        type: 'code',
        question: 'What is the result?',
        code: 'numbers = [5, 10, 15, 20]\nresult = [n for n in numbers if n > 10]\nprint(result)',
        options: ['[15, 20]', '[10, 15, 20]', '[5, 10]', '[20]'],
        correctAnswer: '[15, 20]',
        explanation: 'The list comprehension filters numbers greater than 10. Only 15 and 20 satisfy the condition.',
        difficulty: 'medium'
      },
      {
        id: 'q2-7',
        type: 'multiple-choice',
        question: 'Which method adds an item to the end of a list?',
        options: ['add()', 'append()', 'insert()', 'push()'],
        correctAnswer: 'append()',
        explanation: 'append() adds an item to the end of a list. insert() adds at a specific position, and add() is for sets, not lists.',
        difficulty: 'easy'
      },
      {
        id: 'q2-8',
        type: 'code',
        question: 'What will this function return?',
        code: 'def multiply(a, b=2):\n    return a * b\n\nprint(multiply(5))',
        options: ['5', '10', 'Error', 'None'],
        correctAnswer: '10',
        explanation: 'The function has a default parameter b=2. When called with only one argument (5), b uses its default value: 5 * 2 = 10.',
        difficulty: 'medium'
      },
      {
        id: 'q2-9',
        type: 'code',
        question: 'How many times will "Hello" be printed?',
        code: 'for i in range(3):\n    print("Hello")',
        options: ['2', '3', '4', '1'],
        correctAnswer: '3',
        explanation: 'range(3) generates 0, 1, 2 (three values). The loop runs 3 times, printing "Hello" each time.',
        difficulty: 'easy'
      },
      {
        id: 'q2-10',
        type: 'code',
        question: 'What is the output?',
        code: 'data = {"a": 1, "b": 2, "c": 3}\nprint(sum(data.values()))',
        options: ['6', 'abc', '123', 'Error'],
        correctAnswer: '6',
        explanation: 'data.values() returns the values (1, 2, 3). sum() adds them: 1+2+3=6.',
        difficulty: 'medium'
      },
      {
        id: 'q2-11',
        type: 'code',
        question: 'What does this code print?',
        code: 'items = [1, 2, 3]\nitems.append(4)\nitems.pop()\nprint(len(items))',
        options: ['2', '3', '4', '5'],
        correctAnswer: '3',
        explanation: 'Start with [1,2,3] (3 items). append(4) makes [1,2,3,4] (4 items). pop() removes last, leaving [1,2,3] (3 items).',
        difficulty: 'medium'
      },
      {
        id: 'q2-12',
        type: 'multiple-choice',
        question: 'What keyword is used to exit a loop early?',
        options: ['exit', 'stop', 'break', 'end'],
        correctAnswer: 'break',
        explanation: 'The break keyword immediately exits the current loop. continue skips to the next iteration instead.',
        difficulty: 'easy'
      }
    ]
  }
];

// Helper functions
export const getQuizById = (quizId: string) => {
  return quizzes.find(q => q.id === quizId);
};

export const getQuizzesByChapter = (chapterId: number) => {
  return quizzes.filter(q => q.chapterId === chapterId);
};

export const calculateQuizScore = (
  quiz: Quiz,
  answers: Record<string, string | string[]>
): { score: number; totalQuestions: number; passed: boolean; incorrectQuestions: string[] } => {
  let correct = 0;
  const incorrectQuestions: string[] = [];

  quiz.questions.forEach(question => {
    const userAnswer = answers[question.id];
    const correctAnswer = question.correctAnswer;

    if (Array.isArray(correctAnswer)) {
      // Multiple correct answers
      if (Array.isArray(userAnswer) &&
          userAnswer.length === correctAnswer.length &&
          userAnswer.every(a => correctAnswer.includes(a))) {
        correct++;
      } else {
        incorrectQuestions.push(question.id);
      }
    } else {
      // Single correct answer
      if (userAnswer === correctAnswer) {
        correct++;
      } else {
        incorrectQuestions.push(question.id);
      }
    }
  });

  const score = Math.round((correct / quiz.questions.length) * 100);
  const passed = score >= quiz.passingScore;

  return { score, totalQuestions: quiz.questions.length, passed, incorrectQuestions };
};
