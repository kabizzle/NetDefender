import { Box, Image, Text } from '@chakra-ui/react';
import { WarningIcon } from '@chakra-ui/icons';
import { Link } from 'react-router-dom';

interface Messages {
	containsMessages: boolean;
	nextMessage?: string;
}

const Notification = ({ containsMessages, nextMessage = '/' }: Messages) => {
	return (
		<Box pos="relative">
			<Link to={nextMessage}>
				<Image src="/message_icon.svg" />
				{containsMessages ? (
					<Box pos="absolute" top="0" left="6em">
						<WarningIcon boxSize={6} color="game.red" bg="game.white" borderRadius="2xl" />
					</Box>
				) : null}
				<Text pos="absolute" m="0.5em 1.5em 0 1.5em">
					Messages
				</Text>
			</Link>
		</Box>
	);
};

export default Notification;
