interface LevelQuestion {
  id: number;
  question: string;
  options: { [option: string]: boolean };
  correctResponse: string;
  wrongResponse: string;
}

// LevelQuestion is the format for each question in the quiz.
// Each question should have a list of options and a correct answer, along with a response about why the selected answer is correct

// response part needs to be changed
const breachMCQs: LevelQuestion[] = [
  {
    id: 1,
    question: 'You notice a spike in network traffic on two computers. What will you do next?',
    options: {'Investigate traffic spike': true, 'Ignore and continue regular monitoring': false},
    correctResponse: 'Good choice, I would do the same',
    wrongResponse: "I trust you, maybe it's a false flag "
  },
  {
    id: 2,
    question:
      'One of the spikes originated from an account with elevated privileges on the affected computer. Would you like to:',
    options: {'Monitor the computer without disconnecting': false, 'Disconnect the computer with suspicious activity': true},
    correctResponse: "Let's dig deeper into the network requests, maybe they are working on a new project.",
    wrongResponse: 'Best to be safe and isolate the machine while we look into it.'
  },
  {
    id: 3,
    question: 'The same account is being used on another machine to make calls to the server.',
    options: {'Restrict access privileges of all users': false, 'Restrict the access privileges of this one user': false},
    correctResponse: "Good choice, this user account has been acting suspicious and has probably been hijacked. Let's look into it.",
    wrongResponse: 'All users will be restricted, which may affect normal work. However, good decision in case other accounts are affected.'
  }
];

export type { LevelQuestion };
export { breachMCQs };
