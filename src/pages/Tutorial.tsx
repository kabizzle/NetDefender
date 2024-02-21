import { Box, Flex, Image, Grid, GridItem, Center } from '@chakra-ui/react';
import { Outlet } from 'react-router-dom';
import UserProgress from '../components/UserProgress';
import Notification from '../components/Notification';
import IntroScreen from '../components/IntroScreen';
import { Dispatch, SetStateAction, useState } from 'react';

const Tutorial = ({setShowTutorial}: {setShowTutorial: Dispatch<SetStateAction<boolean>>}) => {
  const [displayText, setDisplayText] = useState('Welcome to NetDefender!');
  const [count, setCount] = useState(0);
  const [arrowProps, setArrowProps] = useState(['', '', '0']);
  const [endTutorial, setEndTutorial] = useState(false);

  const handleClick = () => {
    setCount(count + 1);
    if (count === 0) {
      setDisplayText('This game is designed for the course Basic Principles of Networking at Aalto University.');
    } 
    else if (count === 1) {
      setDisplayText(
        'This is your progress section. Here, you can see points and special badges you have earned.'
      );
      setArrowProps(['10em 0 0 20em', 'rotate(0.6turn)', '7.5em']);
    }
    else if (count === 2) {
      setDisplayText(
        'Each week, new missions will be unlocked.'
      );
      setArrowProps(['', '', '0']);
      // setArrowProps(['12em 0 0 82em', 'rotate(0.875turn)', '7.5em']);
    }
    else if (count === 3) {
      setDisplayText(
        'Missions include flashcards, quizzes and interactive tasks, giving you hands on experience with cybersecurity principles.'
      );
    }
    else if (count === 4) {
      setDisplayText('Each folder contains the missions for one week.');
      setArrowProps(['40em 0 0 80em', 'rotate(0.35turn)', '7.5em']);
    }
    else if (count === 5) {
      setDisplayText('Complete the weekly missions to gain points and compete for a spot in the leaderboard!');
      setArrowProps(['', '', '0']);
    }
    else {
      setDisplayText('Enter the world of NetDefender.');
      setEndTutorial(true);
      setShowTutorial(false);
    }
  };

    return (
        <>
            <Grid templateRows="1fr 3fr 1fr" templateColumns="25em auto 25em" h="100vh">
                <GridItem colSpan={1}>
                    <Box maxW="25em" p="0 0 2em 0">
                        <UserProgress name={'Neo'} points={15} rating={4} />
                    </Box>
                </GridItem>
                <GridItem colSpan={1} colStart={3}>
                    <Box pos="absolute" top="2em" right="2em" p="0 0 2em 0">
                        <Notification containsMessages={true} nextMessage="/tutorial" />
                    </Box>
                </GridItem>
                <GridItem colSpan={3}>
                    <Center m="5em 0 0 0">
                        <IntroScreen
                            displayText={displayText}
                            arrowProps={arrowProps}
                            handleClick={handleClick}
                            endTutorial={endTutorial}
                        />
                    </Center>
                </GridItem>
                <GridItem rowSpan={1} colSpan={3} padding="3em 10em 2em 10em">
                    <Flex align="center" justify="space-between">
                        <Box>
                            <Image src={'/folder_unlocked.svg'} w="10em" />
                        </Box>
                        <Box>
                            <Image src={'/folder_locked.svg'} w="10em" />
                        </Box>
                        <Box>
                            <Image src={'/folder_locked.svg'} w="10em" />
                        </Box>
                        <Box>
                            <Image src={'/folder_locked.svg'} w="10em" />
                        </Box>
                        <Box>
                            <Image src={'/folder_locked.svg'} w="10em" />
                        </Box>
                    </Flex>
                </GridItem>
            </Grid>
            <Outlet />
        </>
    );
};

export default Tutorial;
