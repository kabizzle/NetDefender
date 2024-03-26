import { useState } from 'react';
import { Box, Button } from '@chakra-ui/react';
import QuestionTask from './BreachQuestions.tsx';
import { LevelQuestion, breachMCQs } from './BreachMCQ.tsx';

let index = 0;

const BreachLevel = ({username, weekNumber, taskID}: {username: string, weekNumber: number, taskID: string}) => {
  const questions: LevelQuestion[] = breachMCQs;
  const [currentScreen, setCurrentScreen] = useState('startScreen');
  const [displayText, setDisplayText] = useState(
    `Hello ${username}.\nOur intrusion detection system has detected a potential breach in our network, and your expertise is urgently needed.`
  );
  const levelIntroText: string[] = [
    "Our servers contain sensitive information about our clients, and we've learned that hackers have gained unauthorized access.The breach occurred through a phishing attack on one of our employees.",
    `Remember, the choices you make will influence the course of this mission and future scenarios.\nBest of luck, ${username}.\nOur cybersecurity defenses are in your hands.`
  ];

  const renderScreen = () => {
    switch (currentScreen) {
      case 'startScreen':
        return (
          <Box display="flex" flexDir="column" alignItems="center" justifyContent="center" h="100vh">
            <Box
              border="4px"
              borderColor="game.white"
              width={[300, 450, 650]}
              display="flex"
              flexDir="column"
              alignItems="center"
            >
              <Box padding="10" fontSize="20">
                {displayText}
              </Box>
              <Button
                margin="8"
                borderRadius="0px"
                border="2px"
                borderColor="game.white"
                bg="game.black"
                color="game.white"
                _hover={{ color: 'game.black', bg: 'game.white' }}
                onClick={() => {
                  if (index >= 2) {
                    setCurrentScreen('questionScreen');
                  } else {
                    index++;
                    setDisplayText(levelIntroText[index - 1]);
                    console.log(index);
                  }
                }}
              >
                Start
              </Button>
            </Box>
          </Box>
        );

      case 'questionScreen':
        return (
          <Box>
            <QuestionTask quiz={questions} weekNumber={weekNumber} taskID={taskID}/>
          </Box>
        );
    }
  };

  return <div>{renderScreen()}</div>;
};

export default BreachLevel;
