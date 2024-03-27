import { useState } from 'react';
import {
  Box,
  Button,
  ButtonGroup,
  useToast,
} from '@chakra-ui/react';

import { useNavigate } from 'react-router-dom';
import userDataService from '../../services/userDataService';
import { LevelQuestion } from './BreachMCQ';

const QuestionTask = ({
  quiz,
  weekNumber,
  taskID
}: {
  quiz: LevelQuestion[];
  weekNumber: number;
  taskID: string;
}) => {
  const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g'];
  const breachMCQs: LevelQuestion[] = quiz;
  const ogButtonColors = Array.from({ length: breachMCQs.length }, () => ({
    border: 'game.white',
    fill: 'game.black',
    text_color: 'game.white'
  }));
  const [buttonColors, setButtonColors] = useState(
    Array.from({ length: breachMCQs.length }, () => ({
      border: 'game.white',
      fill: 'game.black',
      text_color: 'game.white'
    }))
  );
  const [selectedOption, setSelectedOption] = useState(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0); // counts correct answers
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const [buttonStage, setButtonStage] = useState('choose'); // choose, next, next2
  const [screenStage, setScreenStage] = useState('question');

  const toast = useToast();
  const navigate = useNavigate();

  // Player has selected one of the answer options
  const handleOptionSelect = (option: any, index: number) => {
    setSelectedOption(option);
    setSelectedIndex(index);
    setButtonColors(() => {
      const updatedColors = ogButtonColors;
      updatedColors[index].fill = 'game.white.30';
      updatedColors[index].text_color = 'game.black';
      return updatedColors;
    });
  };

  const infoScreen = () => {
    setButtonStage('next2');
    setScreenStage('information');
  };

  // Going to the next question and reseting the chosen answer
  const next = () => {
    if (currentQuestionIndex < breachMCQs.length - 1) {
      setScreenStage('question');
      setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
      setSelectedIndex(-1);
      setSelectedOption(null);
      setButtonStage('choose');
      setButtonColors(ogButtonColors);
    } else {
      setScreenStage('end');
    }
  };

  // Checking if the answer is correct
  const isCorrect = () => {
    if (selectedOption != null) {
      if (currentQuestion.options[selectedOption]) {
        setScore(score + 1);
        setButtonColors((prevColors) => {
          const updatedColors = [...prevColors];
          updatedColors[selectedIndex].border = 'game.gray';
          updatedColors[selectedIndex].fill = 'game.black';
          updatedColors[selectedIndex].text_color = 'game.white';
          return updatedColors;
        });
      } else {
        setButtonColors((prevColors) => {
          const updatedColors = [...prevColors];
          updatedColors[selectedIndex].border = 'game.gray';
          updatedColors[selectedIndex].fill = 'game.black';
          updatedColors[selectedIndex].text_color = 'game.white';
          return updatedColors;
        });
      }
      setButtonStage('next');
    }
  };

  // Player confirms their answer
  const chooseButton = () => {
    if (buttonStage == 'choose') {
      return (
        <Button
          onClick={isCorrect}
          border="2px"
          borderColor="game.white"
          bg="game.white"
          color="game.black"
          borderRadius="0px"
          marginTop="10"
          _hover={{ color: 'game.black', bg: 'game.white' }}
        >
          Choose
        </Button>
      );
    }
    if (buttonStage == 'next') {
      return (
        <Button
          onClick={infoScreen}
          border="2px"
          borderColor="game.white"
          bg="game.black"
          color="game.white"
          borderRadius="0px"
          marginTop="10"
          _hover={{ color: 'game.black', bg: 'game.white' }}
        >
          Next
        </Button>
      );
    } else {
      return (
        <Button
          onClick={next}
          border="2px"
          borderColor="game.white"
          bg="game.black"
          color="game.white"
          borderRadius="0px"
          marginTop="10"
          _hover={{ color: 'game.black', bg: 'game.white' }}
        >
          Next
        </Button>
      );
    }
  };

  const currentQuestion = breachMCQs[currentQuestionIndex];

  const answerButton = (option: string, index: number) => {
    return (
      <Button
        key={index}
        bgColor={buttonColors[index].fill}
        border="2px"
        borderColor={buttonColors[index].border}
        color={buttonColors[index].text_color}
        borderRadius="0px"
        marginTop="10"
        padding="5"
        justifyContent="start"
        _hover={{ color: 'game.black', bg: 'game.white' }}
        onClick={() => handleOptionSelect(option, index)}
      >
        {alphabet[index]}. {option}
      </Button>
    );
  };

  // sends data about level to api
  // calls function in userDataService that makes changes to database
  const handleLevelSubmit = async () => {

    // amount refers to the percentage of questions answered correctly
    // this affects the amount of points obtained by the user
    const amount = score / breachMCQs.length;

    const success = await userDataService.handleLevelComplete({weekNumber, taskID, amount});
    
    if (success) {
      toast({
        title: 'Good job!',
        status: 'success',
        duration: 1500
      });
    } else {
      toast({
        title: 'Error adding points.',
        status: 'error',
        duration: 1500
      });
    }

    setTimeout(() => {
      navigate('/');
    }, 1500);
  };

  const response = (): string  => {
    if (selectedOption !== null) {
      if (currentQuestion.options[selectedOption]) {
        return currentQuestion.correctResponse;
      } else {
        return currentQuestion.wrongResponse;
      }
    } else {
      return "Please select a valid option."
    }
  }

  const chooseView = () => {
    if (screenStage == 'question') {
      return (
        <Box display="flex" flexDir="column" alignItems="center" justifyContent="center" h="100vh">
          <Box
            border="4px"
            borderColor="game.white"
            width={['80vw', '80vw', '60vw']}
            display="flex"
            flexDir="column"
            alignItems="center"
          >
            <Box padding="10" fontSize="20">
              {currentQuestion.question}
            </Box>
            <ButtonGroup flexDir="column" alignItems="start" paddingBottom="10">
              {Object.keys(currentQuestion.options).map((option: string, index: number) => answerButton(option, index))}
            </ButtonGroup>
          </Box>
          {chooseButton()}
        </Box>
      )
    }
    if (screenStage == 'information') {
      return (
        <Box display="flex" flexDir="column" alignItems="center" justifyContent="center" h="100vh">
          <Box
            border="4px"
            borderColor="game.white"
            width={['80vw', '80vw', '60vw']}
            display="flex"
            flexDir="column"
            alignItems="center"
            padding="10"
          >
            <Box padding="10" fontSize="20">
              {response()}
            </Box>
            {chooseButton()}
          </Box>
        </Box>
      );
    }
    if (screenStage == 'end') {
      return (
        <Box display="flex" flexDir="column" alignItems="center" paddingTop="20">
          <Box border="4px" borderColor="game.white" width="500px" display="flex" flexDir="column" alignItems="center">
            <Box padding="10" fontSize="20">
              Good job on this mission!
            </Box>
            <Box paddingBottom="10">
              Correct answers: {score}/{breachMCQs.length}
            </Box>
          </Box>
          <Button border="2px" m="5em 0 0 0" borderRadius="0px" onClick={handleLevelSubmit}>
            Main menu
          </Button>
        </Box>
      );
    }
  };

  return <Box>{chooseView()}</Box>;
};

export default QuestionTask;
