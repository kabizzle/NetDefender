import { useState } from "react";
//import Quiz, {testQuestions, level1Questions, LevelQuestions} from "./MultipleChoiceQuestion";
import { Box, Button, ButtonGroup,   Step,
  StepDescription,
  StepIndicator,
  StepNumber,
  StepSeparator,
  StepStatus,
  StepTitle,
  Stepper,
  useSteps,Progress, Flex, AbsoluteCenter, Grid, GridItem, Icon, Text, extendTheme, Stack } from "@chakra-ui/react";

interface QuestionProps{

}

const Questions = (props: any) => {
/*const questions = [
    {
      id: 1,
      question: "Question 1: What is the capital of France?",
      options: ["Paris", "London", "Berlin"],
      correctAnswer: "Paris",
      explanation: "Paris is the capital of France.",
    },
    {
      id: 2,
      question: "Question 2: What is the largest planet in our solar system?",
      options: ["Mars", "Saturn", "Jupiter"],
      correctAnswer: "Jupiter",
      explanation: "Jupiter is the largest planet in our solar system.",
    },
    {
      id: 3,
      question: "Question 3: What is the symbol for the chemical element Iron?",
      options: ["Fe", "Au", "Ag"],
      correctAnswer: "Fe",
      explanation: "The symbol for Iron is Fe.",
    },
  ]; */

  const alphabet = ["a", "b", "c", "d", "e", "f", "g"]
  const questions = props.quiz
  const ogButtonColors = Array.from({length: questions.length}, () => ({border: "game.white", fill: "game.black"}));
  const [buttonColors, setButtonColors] = useState(Array.from({length: questions.length}, () => ({border: "game.white", fill: "game.black"})));
  const [selectedOption, setSelectedOption] = useState(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0); // counts correct answers
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const [buttonStage, setButtonStage] = useState("choose"); // choose, next, next2
  const [screenStage, setScreenStage] = useState("question");

  // icon for stepper
  const CircleIcon = (props: any) => (
    <Icon viewBox='0 0 200 200' {...props}>
      <path
        fill='currentColor'
        d='M 100, 100 m -75, 0 a 75,75 0 1,0 150,0 a 75,75 0 1,0 -150,0'
      />
    </Icon>
  );

 

  const steps = Array.from({length: questions.length}, () => ({ title: 'step', description: 'step'}));
  const [stepColors, setStepColors] = useState(Array.from({length: questions.length}, () => ({border: "game.white", fill: "game.black"})));
  

  function Steps() {
    const { activeStep, setActiveStep } = useSteps({
      index: currentQuestionIndex,
      count: steps.length,
    })
  
    const max = questions.length - 1
    const progressPercent = (activeStep / max) * 100
  
    return (
      
        <Stepper  size='md' index={activeStep} gap='0'>
          {steps.map((step, index) => (
            <Step key={index} gap='0'>
              <StepIndicator  >
              <StepStatus
                complete={<CircleIcon boxSize={8} color={stepColors[index].fill} /> }
                active={<CircleIcon boxSize={8} color={stepColors[index].fill} />}
                 />
              </StepIndicator>
              <StepSeparator />
            </Step>
          ))}
        </Stepper>
      
    )
  };
   


  // Player has selected one of the answer options
  const handleOptionSelect = (option: any, index: number) => {
      setSelectedOption(option);
      setSelectedIndex(index);
      setButtonColors(() => {
        const updatedColors = ogButtonColors;
        updatedColors[index].fill = "game.white.30"; 
        return updatedColors;
      });
  };

  const infoScreen = () => {
    setButtonStage("next2");
    setScreenStage("information");
    
  };

// Going to the next question and reseting the chosen answer
  const next = () => {
    if (currentQuestionIndex < (questions.length-1)) {
    setScreenStage("question");
    setCurrentQuestionIndex ((prevIndex) => prevIndex + 1);
    setSelectedIndex(-1);
    setSelectedOption(null);
    setButtonStage("choose");
    setButtonColors(ogButtonColors);
    } else {
      setScreenStage("end");
    }
  };

  // Checking if the answer is correct
  const isCorrect = () => {
    if (selectedOption != null) {
      if (selectedOption == currentQuestion.correctAnswer) {
        setScore(score +1);
        setButtonColors((prevColors) => {
          const updatedColors = [...prevColors];
          updatedColors[selectedIndex].border = "game.green";
          updatedColors[selectedIndex].fill = "game.black";
          return updatedColors;
        });
        setStepColors(() => {
          stepColors[currentQuestionIndex].fill = "game.green";
        return stepColors;
        });
    } else{
      setButtonColors((prevColors) => {
        const updatedColors = [...prevColors];
        updatedColors[selectedIndex].border = "game.red";
        updatedColors[selectedIndex].fill = "game.black";
        return updatedColors;
      });
      setStepColors(() => {
        stepColors[currentQuestionIndex].fill = "game.red";
        return stepColors;
      });
    } 
    setButtonStage("next");
  }
  };

  // Player confirms their answer
  const chooseButton = () => {
    if (buttonStage == "choose") {
    return (
      <Button
        onClick={isCorrect} border="2px" borderColor="game.white" bg="game.black" color="game.white" borderRadius="0px">
        Choose
      </Button>
    )
    }if (buttonStage=="next") {
      return (
        <Button
          onClick={infoScreen} border="2px" borderColor="game.white" bg="game.black" color="game.white" borderRadius="0px">
          Next
        </Button>
      )
    
    } else {
      return (
        <Button
          onClick={next} border="2px" borderColor="game.white" bg="game.black" color="game.white" borderRadius="0px">
          Next
        </Button>
      )
    };
  };

 
    
   

  const currentQuestion = questions[currentQuestionIndex];

  const answerButton = (option: string, index: number) => {
    return (
      <Button key={index}
      bgColor={buttonColors[index].fill}
      border="2px" borderColor={buttonColors[index].border} color="game.white" borderRadius="0px"
      marginTop="10" padding="5" width="300px" justifyContent="start"
            onClick={() => handleOptionSelect(option, index)} >
            {alphabet[index]}. {option}
        </Button>
      
    )
  };


  // showing the correct view
  /*const chooseView = () => {
    if (screenStage == "question") {
      return (
        <Grid 
        templateColumns='repeat(5, 1fr)'
        templateRows='repeat(8, 1fr)'
         w="100vw" height="100vh" gap="5">
          <GridItem colSpan={3} colStart={2} rowSpan={1} rowStart={1} justifySelf="center" alignSelf="end" w="50%" border="2px" borderColor="blue">
            <Box  fontSize="22" textAlign="center"> {currentQuestion.question} </Box>
          </GridItem>
          <GridItem  colSpan={1} colStart={3} rowSpan={2} rowStart={2} alignSelf="start" justifySelf="center" border="2px" borderColor="blue">
          <ButtonGroup flexDir="column" alignItems="end">
            {currentQuestion.options.map((option, index) =>
              answerButton(option, index)
            )}
          </ButtonGroup>
          </GridItem>
          <GridItem colSpan={1} colStart={3} rowSpan={1} rowStart={7} border="2px" borderColor="blue">
            {chooseButton()}
          </GridItem>
          <GridItem  colSpan={3} colStart={2} rowSpan={1} rowStart={8} border="2px" borderColor="blue">
          <Steps/>
          </GridItem>
        </Grid>
      );
    } if (screenStage == "information") {
      return (
        <Grid templateAreas={'"question explanation" "button button" "steps steps"'}
        templateRows={'60% 10% 1fr'}
        templateColumns={'50% 1fr'}
        w="100vw" height="100vh" gap="2"
        alignItems="stretch">
          <GridItem area={'question'} justifySelf="center" border="2px" borderColor="blue">
          <Box display="flex" flexDir="column" alignItems="center" margin="10">
            <Box textAlign="center" fontSize="18">
          {currentQuestion.question}
          </Box>
            <Box border="2px" borderColor="game.green" marginTop="10" width="300px" textAlign="center" padding="2" alignSelf="center">
              {currentQuestion.correctAnswer}
            </Box>
            </Box>
            </GridItem>
            <GridItem area={'explanation'}justifySelf="center" border="2px" borderColor="blue">
          <Box whiteSpace="pre-wrap" margin="10">
          {currentQuestion.explanation}
          </Box>
          </GridItem>
          <GridItem area={'button'}  border="2px" borderColor="blue">
          <Box display="flex" flexDir="column" alignSelf="center" justifySelf="center" >
          {chooseButton()}
          </Box>
          </GridItem>
          <GridItem area={'steps'}  border="2px" borderColor="blue">
            <Box display="flex" flexDir="column" alignSelf="center" justifySelf="center" w="600px" marginBottom="20" border="2px">
          <Steps/>
          </Box>
          </GridItem>
        </Grid>
      );
    } if (screenStage == "end") {
      return (
        <Box display="flex" flexDir="column" alignItems="center" paddingTop="20">
        <Box border="4px" borderColor="game.white" width="500px" display="flex" flexDir="column" alignItems="center" >
          <Box padding="10" fontSize="20">
        You have finished Level 1
        </Box>
        <Box paddingBottom="10">Correct answers: {score}/{questions.length}</Box>
        </Box>
        </Box>
      );
    }
  };*/

  const chooseView = () => {
    if (screenStage == "question") {
      return (
        <Grid  templateAreas={'"question" "answers" "button" "steps"'}
        templateRows={'30% 30% 10% 1fr'}
        templateColumns={'auto'}
        w="100vw" height="100vh" gap="2">
          <GridItem area={'question'} justifySelf="center" alignSelf="end" w="50%" border="0px" borderColor="grey">
            <Box  fontSize="22" textAlign="center"> 
            {currentQuestionIndex + 1}. {currentQuestion.question} </Box>
          </GridItem>
          <GridItem area={'answers'} justifySelf="center" alignSelf="center" border="0px" borderColor="grey">
          <ButtonGroup flexDir="column" alignItems="end">
            {currentQuestion.options.map((option: string, index: number) =>
              answerButton(option, index)
            )}
          </ButtonGroup>
          </GridItem>
          <GridItem area={'button'} alignSelf="end" justifySelf="center" border="0px" borderColor="grey">
            {chooseButton()}
          </GridItem>
          <GridItem area={'steps'} alignSelf="end" justifySelf="center" w="600px" marginBottom="20" border="0px" borderColor="grey">
          <Steps/>
          </GridItem>
        </Grid>
      );
    } if (screenStage == "information") {
      return (
        <Grid templateAreas={'"question explanation" "question explanation" "button button" "steps steps"'}
        templateRows={'30% 30% 10% 1fr'}
        templateColumns={'50% 1fr'}
        w="100vw" height="100vh" gap="2">
          <GridItem area={'question'} justifySelf="center" border="0px" borderColor="grey">
          <Box display="flex" flexDir="column" alignItems="center" paddingTop="20" paddingLeft="15">
            <Box textAlign="center" fontSize="22">
          {currentQuestionIndex + 1}. {currentQuestion.question}
          </Box>
            <Box border="2px" borderColor="game.green" marginTop="10" paddingLeft="5" paddingTop="2" paddingBottom="2" width="300px" textAlign="start" alignSelf="center">
              {alphabet[currentQuestion.options.indexOf(currentQuestion.correctAnswer)]}. {currentQuestion.correctAnswer}
            </Box>
            </Box>
            </GridItem>
            <GridItem area={'explanation'}justifySelf="center"   border="0px" borderColor="grey">
          <Box whiteSpace="pre-wrap" paddingTop="20" paddingLeft="10" paddingRight="20">
          {currentQuestion.explanation}
          </Box>
          </GridItem>
          <GridItem area={'button'}alignSelf="end" justifySelf="center" border="0px" borderColor="grey">
          <Box >
          {chooseButton()}
          </Box>
          </GridItem>
          <GridItem area={'steps'} alignSelf="end" justifySelf="center" w="600px" marginBottom="20"    border="0px" borderColor="grey">
          <Steps/>
          </GridItem>
        </Grid>
      );
    } if (screenStage == "end") {
      return (
        <Box display="flex" flexDir="column" alignItems="center" paddingTop="20">
        <Box border="4px" borderColor="game.white" width="500px" display="flex" flexDir="column" alignItems="center" >
          <Box padding="10" fontSize="20">
        You have finished Level 1
        </Box>
        <Box paddingBottom="10">Correct answers: {score}/{questions.length}</Box>
        </Box>
        </Box>
      );
    }
  }; 

 
  return (
    <Box >
     
      {chooseView()}
      
    </Box>
  );
};

  export default Questions; 

  // choose and next buttons should be in the same place all the time

  

  