import { useState } from 'react';
import { AbsoluteCenter, Box, Button } from '@chakra-ui/react';
import Questions from './Questions.tsx';
import Quiz, { testQuestions, level1Questions } from './MultipleChoiceQuestion';

const Level0 = () => {
	const questions = level1Questions;
	const [currentScreen, setCurrentScreen] = useState('startScreen');

	const renderScreen = () => {
		switch (currentScreen) {
			case 'startScreen':
				return (
					<Box display="flex" flexDir="column" alignItems="center" justifyContent="center" h="100vh">
						<Box
							border="4px"
							borderColor="game.white"
							width="500px"
							display="flex"
							flexDir="column"
							alignItems="center"
						>
							<Box padding="10" fontSize="30">
								Welcome to Level 1
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

			case 'questionScreen':
				return (
					<Box>
						<Questions quiz={questions} />
					</Box>
				);
		}
	};

	return <div>{renderScreen()}</div>;
};

export default Level0;
