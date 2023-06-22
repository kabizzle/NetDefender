import { useState } from "react";
import Quiz, {testQuestions, level1Questions} from "./MultipleChoiceQuestion";
import { Box, Button, ButtonGroup,   Step,
  StepDescription,
  StepIcon,
  StepIndicator,
  StepNumber,
  StepSeparator,
  StepStatus,
  StepTitle,
  Stepper,
  useSteps,Progress, Flex, AbsoluteCenter, Grid, GridItem } from "@chakra-ui/react";


const Questions = () => {
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
  const questions = level1Questions
  const ogButtonColors = Array.from({length: questions.length}, () => ({border: "game.white", fill: "game.black"}));
  const [buttonColors, setButtonColors] = useState(Array.from({length: questions.length}, () => ({border: "game.white", fill: "game.black"})));
  const [selectedOption, setSelectedOption] = useState(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0); // counts correct answers
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const [buttonStage, setButtonStage] = useState("choose"); // choose, next, next2
  const [screenStage, setScreenStage] = useState("question");

  // Player has selected one of the answer options
  const handleOptionSelect = (option: any, index: number) => {
      setSelectedOption(option);
      setSelectedIndex(index);
      setButtonColors(() => {
        const updatedColors = ogButtonColors; //[{border:"game.white", fill: "game.black"}, {border:"game.white", fill: "game.black"}, {border:"game.white", fill: "game.black"}];
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
    } else{
      setButtonColors((prevColors) => {
        const updatedColors = [...prevColors];
        updatedColors[selectedIndex].border = "game.red";
        updatedColors[selectedIndex].fill = "game.black";
        return updatedColors;
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
  const chooseView = () => {
    if (screenStage == "question") {
      return (
        <Grid  templateAreas={'"question" "answers" "button"'}
         w="100%" height="500px" gap="5">
          <GridItem area={'question'} justifySelf="center" alignSelf="end"w="50%">
            <Box  fontSize="22" textAlign="center"> {currentQuestion.question} </Box>
          </GridItem>
          <GridItem area={'answers'} justifySelf="center" alignSelf="center">
          <ButtonGroup flexDir="column" alignItems="end">
            {currentQuestion.options.map((option, index) =>
              answerButton(option, index)
            )}
          </ButtonGroup>
          </GridItem>
          <GridItem area={'button'} alignSelf="end" justifySelf="center" border="6px" borderColor="blue">
            {chooseButton()}
          </GridItem>
        </Grid>
      );
    } if (screenStage == "information") {
      return (
        <Grid templateAreas={'"question explanation" "button button"'}
        w="100%" height="500px" gap="5">
          <GridItem area={'question'} justifySelf="center">
          <Box display="flex" flexDir="column" alignItems="center" padding="10">
            <Box textAlign="center" fontSize="18">
          {currentQuestion.question}
          </Box>
            <Box border="2px" borderColor="game.green" marginTop="10" width="300px" textAlign="center" padding="2" alignSelf="center">
              {currentQuestion.correctAnswer}
            </Box>
            </Box>
            </GridItem>
            <GridItem area={'explanation'}justifySelf="center">
          <Box whiteSpace="pre-wrap" padding="10">
          {currentQuestion.explanation}
          </Box>
          </GridItem>
          <GridItem area={'button'}alignSelf="end" justifySelf="center" border="6px" borderColor="blue">
          <Box >
          {chooseButton()}
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
  };

 
  return (
    <Box >
     
      {chooseView()}
      
    </Box>
  );
};

  export default Questions; 

  // choose and next buttons should be in the same place all the time

  