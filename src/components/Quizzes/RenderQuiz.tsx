import { useState } from 'react';
import { Box, Button } from '@chakra-ui/react';
import Quiz from './Quiz.tsx'
import { QuizContent } from './QuizContent.tsx';
import { QuizQuestion } from './QuizContent.tsx';

const RenderQuiz = ({ weekNumber, taskID }: { weekNumber: number; taskID: string }) => {
  const questions: QuizQuestion[] = QuizContent;
  const [currentScreen, setCurrentScreen] = useState('startScreen');

  // Function to render the information on the screen.
  const renderScreen = () => {
    switch (currentScreen) {
      // If current screen is the start screen, text and a start button will be shown
      case 'startScreen':
        return (
          <Box display="flex" flexDir="column" alignItems="center" justifyContent="center" h="100vh">
            <Box border="4px" borderColor="game.white" width="60vh" display="flex" flexDir="column" alignItems="center">
              <Box padding="12" fontSize="24">
                Time to test your knowledge on attacks...
              </Box>
              <Button
                margin="8"
                borderRadius="0px"
                border="2px"
                borderColor="game.white"
                bg="game.black"
                color="game.white"
                _hover={{ color: 'game.black', bg: 'game.white' }}
                onClick={() => setCurrentScreen('questionScreen')}
              >
                Start
              </Button>
            </Box>
          </Box>
        );

      // If current screen is the question screen, the questions will be rendered, one at a time
      case 'questionScreen':
        return (
          <Box>
            <Quiz quiz={questions} weekNumber={weekNumber} taskID={taskID} />
          </Box>
        );
    }
  };

  return <div>{renderScreen()}</div>;
};

export default RenderQuiz;
