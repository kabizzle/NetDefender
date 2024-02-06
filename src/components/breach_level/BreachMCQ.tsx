interface LevelQuestion {
    id: number;
    question: string;
    options: string[];
    correctAnswer: string;
    response: string[];
}

// LevelQuestion is the format for each question in the quiz.
// Each question should have a list of options and a correct answer, along with a response about why the selected answer is correct

const testQuestions = [
    {
        id: 1,
        question: 'Question 1: What is the capital of France?',
        options: ['Paris', 'London', 'Berlin'],
        correctAnswer: 'Paris',
        response: 'Paris is the capital of France.'
    },
    {
        id: 2,
        question: 'Question 2: What is the largest planet in our solar system?',
        options: ['Mars', 'Saturn', 'Jupiter'],
        correctAnswer: 'Jupiter',
        response: 'Jupiter is the largest planet in our solar system.'
    },
    {
        id: 3,
        question: 'Question 3: What is the symbol for the chemical element Iron?',
        options: ['Fe', 'Au', 'Ag'],
        correctAnswer: 'Fe',
        response: 'The symbol for Iron is Fe.'
    }
];

// response part needs to be changed
const breachMCQs: LevelQuestion[] = [
    {
        id: 1,
        question: 'You notice a spike in network traffic on two computers. What will you do next?',
        options: ['Investigate traffic spike', 'Ignore and continue regular monitoring'],
        correctAnswer: 'Investigate traffic spike',
        response: ['Good choice, I would do the same', "I trust you, maybe it's a false flag "]
    },
    {
        id: 2,
        question:
            'One of the spikes originated from an account with elevated privileges on the affected computer. Would you like to:',
        options: ['Monitor the computer without disconnecting', 'Disconnect the computer with suspicious activity'],
        correctAnswer: 'Disconnect the computer with suspicious activity',
        response: [
            "Let's dig deeper into the network requests, maybe they are working on a new project.",
            'Best to be safe and isolate the machine while we look into it.'
        ]
    },
    {
        id: 3,
        question: 'The same account is being used on another machine to make calls to the server.',
        options: ['Restrict access privileges of all users', 'Restrict the access privileges of this one user'],
        correctAnswer: 'Restrict the access privileges of this one user',
        response: [
            'All users will be restricted, which may affect normal work. However, good decision in case other accounts are affected.',
            "Good choice, this user account has been acting suspicious and has probably been hijacked. Let's look into it."
        ]
    }
];

export type { LevelQuestion };
export { testQuestions, breachMCQs };
