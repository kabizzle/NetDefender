import { Box, Progress, Text } from '@chakra-ui/react';
import Rating from '../components/Rating';

interface UserStats {
    name: string;
    completed: number;
    rating: number;
}

const UserProgress = ({ name, completed, rating = 3 }: UserStats) => {
    return (
        <Box>
            <Text m="1.5em 0 0 1.6em" fontSize="xl" maxW="10em">
                {name}
            </Text>
            <Box w="20em" m="1.5em 0 0 2em" marginBottom="0" border="2px">
                <Progress hasStripe value={20 * completed} backgroundColor="game.black" />
            </Box>
            <Box m="1.5em 0 0 0">
                <Rating amount={rating} />
            </Box>
        </Box>
    );
};

export default UserProgress;
