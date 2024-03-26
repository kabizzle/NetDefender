import { useState } from 'react';
import {
  Box,
  Button,
  ButtonGroup,
  Step,
  StepIndicator,
  StepSeparator,
  StepStatus,
  Stepper,
  useSteps,
  Grid,
  GridItem,
  Icon,
  useToast
} from '@chakra-ui/react';

import { useNavigate } from 'react-router-dom';
import userDataService from '../../services/userDataService';
import { QuizQuestion } from './QuizContent';

const RenderQuiz = ({
  quiz,
  weekNumber,
  taskID
}: {
  quiz: QuizQuestion[];
  weekNumber: number;
  taskID: string;
}) => {
  const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g'];
  const questions = quiz;
  const ogButtonColors = Array.from({ length: questions.length }, () => ({
    border: 'game.white',
    fill: 'game.black',
    text_color: 'game.white'
  }));
  const [buttonColors, setButtonColors] = useState(
    Array.from({ length: questions.length }, () => ({
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
  // icon for stepper
  const CircleIcon = (props: any) => (
    <Icon viewBox="0 0 200 200" {...props}>
      <path fill="currentColor" d="M 100, 100 m -75, 0 a 75,75 0 1,0 150,0 a 75,75 0 1,0 -150,0" />
    </Icon>
  );

  const steps = Array.from({ length: questions.length }, () => ({ title: 'step', description: 'step' }));
  const [stepColors, setStepColors] = useState(
    Array.from({ length: questions.length }, () => ({ border: 'game.white', fill: 'game.black' }))
  );

  // Function to show user's progress in quiz
  function Steps() {
    const { activeStep, setActiveStep } = useSteps({
      index: currentQuestionIndex,
      count: steps.length
    });

    return (
      <Stepper size="md" index={activeStep} gap="0">
        {steps.map((step, index) => (
          <Step key={index}>
            <StepIndicator>
              <StepStatus
                complete={<CircleIcon boxSize={8} color={stepColors[index].fill} />}
                active={<CircleIcon boxSize={8} color={stepColors[index].fill} />}
              />
            </StepIndicator>
            <StepSeparator />
          </Step>
        ))}
      </Stepper>
    );
  }

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
    if (currentQuestionIndex < questions.length - 1) {
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
      if (selectedOption == currentQuestion.correctAnswer) {
        setScore(score + 1);
        setButtonColors((prevColors) => {
          const updatedColors = [...prevColors];
          updatedColors[selectedIndex].border = 'game.green';
          updatedColors[selectedIndex].fill = 'game.black';
          updatedColors[selectedIndex].text_color = 'game.white';
          return updatedColors;
        });
        setStepColors(() => {
          stepColors[currentQuestionIndex].fill = 'game.green';
          return stepColors;
        });
      } else {
        setButtonColors((prevColors) => {
          const updatedColors = [...prevColors];
          updatedColors[selectedIndex].border = 'game.red';
          updatedColors[selectedIndex].fill = 'game.black';
          updatedColors[selectedIndex].text_color = 'game.white';
          return updatedColors;
        });
        setStepColors(() => {
          stepColors[currentQuestionIndex].fill = 'game.red';
          return stepColors;
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
          _hover={{ color: 'game.black', bg: 'game.white' }}
        >
          Next
        </Button>
      );
    }
  };

  const currentQuestion = questions[currentQuestionIndex];

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
        minWidth="300px"
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
    const amount = score / questions.length;

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

  // renders the information shown on the screen
  const chooseView = () => {
    // if question is not answered, show the question and options to select
    if (screenStage == 'question') {
      return (
        <Grid
          templateAreas={'"question" "answers" "button" "steps"'}
          templateRows={'20% 50% 15% 15%'}
          templateColumns={'auto'}
          w="100vw"
          height="100vh"
        >
          <GridItem area={'question'} justifySelf="center" alignSelf="center" w="50vw">
            <Box fontSize="22" textAlign="center">
              {currentQuestionIndex + 1}. {currentQuestion.question}{' '}
            </Box>
          </GridItem>
          <GridItem area={'answers'} justifySelf="center" alignSelf="center">
            <ButtonGroup flexDir="column">
              {currentQuestion.options.map((option: string, index: number) => answerButton(option, index))}
            </ButtonGroup>
          </GridItem>
          <GridItem area={'button'} alignSelf="center" justifySelf="center">
            {chooseButton()}
          </GridItem>
          <GridItem area={'steps'} alignSelf="center" justifySelf="center" w="70vw" marginBottom="2vh">
            <Steps />
          </GridItem>
        </Grid>
      );
    }
    // if question is answered, show correct answer and explanation
    if (screenStage == 'information') {
      return (
        <Grid
          templateAreas={'"question" "explanation" "button" "steps"'}
          templateRows={'20% 50% 15% 15%'}
          templateColumns={'auto'}
          w="100vw"
          height="100vh"
        >
          <GridItem area={'question'} justifySelf="center">
            <Box display="flex" flexDir="column" alignItems="center" paddingTop="15vh">
              <Box textAlign="center" fontSize="22" maxWidth="50vw">
                {currentQuestionIndex + 1}. {currentQuestion.question}
              </Box>
            </Box>
          </GridItem>
          <GridItem area={'explanation'} justifySelf="center" w="50vw">
            <Box
              border="2px"
              borderColor="game.green"
              marginTop="10vh"
              px="5"
              py="2"
              textAlign="start"
              alignSelf="center"
            >
              {alphabet[currentQuestion.options.indexOf(currentQuestion.correctAnswer)]}.{' '}
              {currentQuestion.correctAnswer}
            </Box>
            <Box marginTop="5vh" fontSize="18">
              {currentQuestion.explanation}
            </Box>
          </GridItem>
          <GridItem area={'button'} alignSelf="center" justifySelf="center">
            <Box>{chooseButton()}</Box>
          </GridItem>
          <GridItem area={'steps'} alignSelf="center" justifySelf="center" w="70vw" marginBottom="2vh">
            <Steps />
          </GridItem>
        </Grid>
      );
    }
    if (screenStage == 'end') {
      return (
        <Box display="flex" flexDir="column" alignItems="center" paddingTop="20">
          <Box border="4px" borderColor="game.white" width="50vw" display="flex" flexDir="column" alignItems="center">
            <Box padding="10" fontSize="24">
              Good Job!
            </Box>
            <Box paddingBottom="10">
              You answered {score}/{questions.length} correct
            </Box>
          </Box>
          <Button border="2px" m="5em 0 0 0" onClick={handleLevelSubmit}>
            Main menu
          </Button>
        </Box>
      );
    }
  };

  return <Box>{chooseView()}</Box>;
};

export default RenderQuiz;
