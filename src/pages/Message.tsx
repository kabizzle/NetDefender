import { Box, Button } from '@chakra-ui/react';
import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Message: React.FC = () => {
	return (
		<>
			<div>Messages</div>
			<Box border="2px" borderColor="game.green">
				<h1>Hello world</h1>
				<Button bgColor="game.black" border="2px" borderColor="game.white" color="game.white">
					<Link to="/test"> Messages </Link>
				</Button>
			</Box>

			<Outlet />
		</>
	);
};

export default Message;
