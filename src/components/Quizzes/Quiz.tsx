import { useState } from 'react';
import { Box, Button } from '@chakra-ui/react';
import RenderQuiz from './RenderQuiz.tsx'
import { Week1Quiz, Week2Quiz, Week3Quiz } from './QuizContent.tsx';
import { QuizQuestion } from './QuizContent.tsx';

const Quiz = ({ weekNumber, taskID }: { weekNumber: number; taskID: string }) => {
  let questions: QuizQuestion[];
  const [currentScreen, setCurrentScreen] = useState('startScreen');

  const assignQuestions = () => {
    // Set questions based on weekNumber
    if (weekNumber === 1) {questions = Week1Quiz;}
    else if (weekNumber === 2) {questions = Week2Quiz;}
    else if (weekNumber === 3) {questions = Week3Quiz;}
    // else if (weekNumber === 4) {questions = Week4Quiz;}
    // else {questions = Week5Quiz;}
  }

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
        assignQuestions();
        return (
          <Box>
            <RenderQuiz quiz={questions} weekNumber={weekNumber} taskID={taskID} />
          </Box>
        );
    }
  };

  return <div>{renderScreen()}</div>;
};

export default Quiz;
