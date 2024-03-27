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
    question: 'There seems to be an unusual amount of calls to the MediCorp server this morning. Do you think we should take a look?',
    options: {'Investigate traffic spike': true, 'Ignore and continue regular monitoring': false},
    correctResponse: 'Good choice, I would do the same.',
    wrongResponse: "Hmm, this seems serious... Maybe we should take a look just in case."
  },
  {
    id: 2,
    question:
      "A lot of traffic is coming from a PC within MediCorp, assigned to Bob Giamatti. Bob's account has clearance level 2, which allows access to confidential patient data. What would you like to do?",
    options: {'Continue regular monitoring': false, 'Take a look at requests made to server.': true},
    correctResponse: "Let's dig deeper into the network requests, maybe Bob's working on a new project.",
    wrongResponse: 'This amount of traffic is suspicious. We should analyze some of the requests.'
  },
  {
    id: 3, 
    question:
      "It seems Bob is mass-requesting patient data from the server. This doesn't look right.",
    options: {'Continue monitoring requests': false, "Disconnect Bob's PC from the network.": true},
    correctResponse: "Good call! Now the PC should be isolated. Let's contact Bob to see what's up with all those requests.",
    wrongResponse: "[requests keep on increasing]... This has to be an attack. Let's disconnect the PC and contact Bob to find out about all these requests."
  },
  {
    id: 4,
    question: "[You receive an auto-reply from Bob's email, saying he's on vacation.]... Bob's account just started making calls to the server from another machine.",
    options: {'Restrict access privileges of all users': false, 'Restrict the access privileges of this one user': true},
    correctResponse: "Good choice, Bob's account is probably been hijacked. This way, it can't make server requests anymore.",
    wrongResponse: "All users will be restricted, which may affect normal work. Unfortunately, we can't restrict MediCorp's data access like that. For now, let's reduce Bob's privileges and see if the requests stop."
  },
  {
    id: 5,
    question: "[no unusual requests made for the rest of the day]... It looks like that attack has been contained for now. How should we follow up on it?",
    options: {"Check for evidence of phishing in email traffic.": true, "Release press statement about data breach": false},
    correctResponse: "Yeah, this may have stemmed from a phishing attack on Bob's email. Let's see if he reported any strange emails.",
    wrongResponse: "I don't think that's our call to make. We have to alert MediCorp first and they can choose how to proceed. In this case, I have a feeling it started with phishing. Let's go through Bob's email traffic to see if he reported any strange emails."
  },
  {
    id: 6, 
    question: "[Bob flagged two emails as suspicious]... This email takes to you a website that looks just like the company's login page. Bob must've logged in and the attackers got his credentials that way. How can we prevent this in the future?",
    options: {"Implement Multi-Factor Authentication on MediCorp's server": true, "Ask MediCorp to lock their servers": false},
    correctResponse: "Yes, MFA will prevent access to the server, even if someone's account credentials gets leaked. Good thinking!",
    wrongResponse: "No, they have important data on there. Maybe we can consider implementing MFA to prevent unwanted access to the server if someone's credentials gets leaked." 
  }
];

export type { LevelQuestion };
export { breachMCQs };
