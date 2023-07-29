import { Box, Flex, Image, Grid, GridItem, Center } from '@chakra-ui/react';
import { Outlet } from 'react-router-dom';
import UserProgress from '../components/UserProgress';
import Notification from '../components/Notification';
import IntroScreen from '../components/IntroScreen';
import { useState } from 'react';

const Tutorial = () => {
	const [displayText, setDisplayText] = useState('Welcome to NetDefender.');
	const [count, setCount] = useState(0);
	const [arrowProps, setArrowProps] = useState(['', '', '0']);
	const [endTutorial, setEndTutorial] = useState(false);

	const handleClick = () => {
		setCount(count + 1);
		if (count === 0) {
			setDisplayText('Your company is being hacked and IT found that the attack started from your computer.');
		}
		if (count === 1) {
			setDisplayText(
				'This is your progress section. Here, you can see your completion of the game, along with your current rating.'
			);
			setArrowProps(['10em 0 0 20em', 'rotate(0.6turn)', '7.5em']);
		} else if (count === 2) {
			setDisplayText(
				'Here you can find your messages. Be sure to check new messages, as there may be hidden clues :)'
			);
			setArrowProps(['12em 0 0 82em', 'rotate(0.875turn)', '7.5em']);
		} else if (count === 3) {
			setDisplayText('These are the level folders. Each folder contains the activities for one week.');
			setArrowProps(['40em 0 0 80em', 'rotate(0.35turn)', '7.5em']);
		} else if (count === 4) {
			setDisplayText('It is up to you to stop the attack and prove your innocence.');
			setArrowProps(['', '', '0']);
		} else if (count === 5) {
			setDisplayText('Enter the world of NetDefender.');
			setEndTutorial(true);
		}
	};

	return (
		<>
			<Grid templateRows="1fr 3fr 1fr" templateColumns="25em auto 25em" h="100vh">
				<GridItem colSpan={1}>
					<Box maxW="25em" p="0 0 2em 0">
						<UserProgress name={'Neo'} completed={1} rating={4} />
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
