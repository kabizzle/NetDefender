/* eslint-disable */
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
    Icon
} from '@chakra-ui/react';

import { Link } from 'react-router-dom';
import userDataService from '../../services/userDataService';

/*interface LevelQuestion {
    id: number; 
    question: string;
    options: string[]; 
    correctAnswer: string; 
    explanation: string;
  }*/

const Questions = (props: any) => {

    const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g'];
    const questions = props.quiz;
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

    function Steps() {
        const { activeStep, setActiveStep } = useSteps({
            index: currentQuestionIndex,
            count: steps.length
        });

        return (
            <Stepper size="md" index={activeStep} gap="0">
                {steps.map(
                    (
                        step,
                        index // eslint-disable-line // eslint-disable-next-line
                    ) => (
                        <Step key={index} gap="0">
                            <StepIndicator>
                                <StepStatus
                                    complete={<CircleIcon boxSize={8} color={stepColors[index].fill} />}
                                    active={<CircleIcon boxSize={8} color={stepColors[index].fill} />}
                                />
                            </StepIndicator>
                            <StepSeparator />
                        </Step>
                    )
                )}
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
                    borderRadius="0px"
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
                width="300px"
                justifyContent="start"
                _hover={{ color: 'game.black', bg: 'game.white' }}
                onClick={() => handleOptionSelect(option, index)}
            >
                {alphabet[index]}. {option}
            </Button>
        );
    };

    const handleLevelComplete = async () => {
        const userAuthDataJSON = window.localStorage.getItem('userAuthDataJSON');
        if (userAuthDataJSON) {
            const user = JSON.parse(userAuthDataJSON);
            let userAuthData = user;
            const userData = await userDataService.getUserData({userId: userAuthData.user_id, userToken: userAuthData.token})
            const updatedUserData = userData;
            updatedUserData.levels[0][0].completed = true;
            await userDataService.updateUserData( { userId: userAuthData.user_id, userToken: userAuthData.token, userData: updatedUserData })
        }
    }

    const chooseView = () => {
        if (screenStage == 'question') {
            return (
                <Grid
                    templateAreas={'"question" "answers" "button" "steps"'}
                    templateRows={'30% 30% 10% 1fr'}
                    templateColumns={'auto'}
                    w="100vw"
                    height="100vh"
                    gap="2"
                >
                    <GridItem
                        area={'question'}
                        justifySelf="center"
                        alignSelf="end"
                        w="50%"
                        border="0px"
                        borderColor="grey"
                    >
                        <Box fontSize="22" textAlign="center">
                            {currentQuestionIndex + 1}. {currentQuestion.question}{' '}
                        </Box>
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
                    <GridItem
                        area={'steps'}
                        alignSelf="end"
                        justifySelf="center"
                        w="600px"
                        marginBottom="20"
                        border="0px"
                        borderColor="grey"
                    >
                        <Steps />
                    </GridItem>
                </Grid>
            );
        }
        if (screenStage == 'information') {
            return (
                <Grid
                    templateAreas={'"question explanation" "question explanation" "button button" "steps steps"'}
                    templateRows={'30% 30% 10% 1fr'}
                    templateColumns={'50% 1fr'}
                    w="100vw"
                    height="100vh"
                    gap="2"
                >
                    <GridItem area={'question'} justifySelf="center" border="0px" borderColor="grey">
                        <Box display="flex" flexDir="column" alignItems="center" paddingTop="20" paddingLeft="15">
                            <Box textAlign="center" fontSize="22">
                                {currentQuestionIndex + 1}. {currentQuestion.question}
                            </Box>
                            <Box
                                border="2px"
                                borderColor="game.green"
                                marginTop="10"
                                paddingLeft="5"
                                paddingTop="2"
                                paddingBottom="2"
                                width="300px"
                                textAlign="start"
                                alignSelf="center"
                            >
                                {alphabet[currentQuestion.options.indexOf(currentQuestion.correctAnswer)]}.{' '}
                                {currentQuestion.correctAnswer}
                            </Box>
                        </Box>
                    </GridItem>
                    <GridItem area={'explanation'} justifySelf="center" border="0px" borderColor="grey">
                        <Box whiteSpace="pre-wrap" paddingTop="20" paddingLeft="10" paddingRight="20">
                            {currentQuestion.explanation}
                        </Box>
                    </GridItem>
                    <GridItem area={'button'} alignSelf="end" justifySelf="center" border="0px" borderColor="grey">
                        <Box>{chooseButton()}</Box>
                    </GridItem>
                    <GridItem
                        area={'steps'}
                        alignSelf="end"
                        justifySelf="center"
                        w="600px"
                        marginBottom="20"
                        border="0px"
                        borderColor="grey"
                    >
                        <Steps />
                    </GridItem>
                </Grid>
            );
        }
        if (screenStage == 'end') {
            return (
                <Box display="flex" flexDir="column" alignItems="center" paddingTop="20">
                    <Box
                        border="4px"
                        borderColor="game.white"
                        width="500px"
                        display="flex"
                        flexDir="column"
                        alignItems="center"
                    >
                        <Box padding="10" fontSize="20">
                            You have finished Level 1
                        </Box>
                        <Box paddingBottom="10">
                            Correct answers: {score}/{questions.length}
                        </Box>
                    </Box>
                    <Link to="/" onClick={handleLevelComplete}>
                        <Button border="2px" m="5em 0 0 0" borderRadius="0px">
                            Main menu
                        </Button>
                    </Link>
                </Box>
            );
        }
    };

    return <Box>{chooseView()}</Box>;
};

export default Questions;

