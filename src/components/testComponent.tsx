import { Box, Flex } from '@chakra-ui/react';
import { Outlet } from 'react-router-dom';
import UserProgress from '../components/UserProgress';
import Folder from '../components/Folder';
import Notification from './Notification';

const TestComponent = () => {
	return (
		<>
			<Box pos="relative" w="100vw" h="100vh">
				<Box pos="absolute" right="0" top="0" m="0 2em 0 0">
					<Notification containsMessages={true} nextMessage="test" />
				</Box>
				<UserProgress name={'Student name'} completed={1} rating={4} />
				<Flex align="center" justify="space-between" m="40em 10em 5em 10em">
					<Folder forwardSource="/level/1" backSource="/" folderType="unlocked" />
					<Folder forwardSource="/" backSource="/" folderType="locked" />
					<Folder forwardSource="/" backSource="/" folderType="locked" />
					<Folder forwardSource="/" backSource="/" folderType="locked" />
					<Folder forwardSource="/" backSource="/" folderType="locked" />
				</Flex>
			</Box>
			<Outlet />
		</>
	);
};

export default TestComponent;
