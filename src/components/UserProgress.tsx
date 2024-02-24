import { Box, Progress, Text } from '@chakra-ui/react';
import Rating from '../components/Rating';

interface UserStats {
  name: string;
  points: number;
  rating: number;
}

const UserProgress = ({ name, points, rating }: UserStats) => {
  return (
    <Box>
      <Text m="1.5em 0 0 1.6em" fontSize="xl" maxW="10em">
        {name}
      </Text>
      <Box w="20em" m="1.5em 0 0 2em" marginBottom="0" border="2px">
        <Progress hasStripe value={points} backgroundColor="game.black" />
      </Box>
      <Box m="1.5em 0 0 0">
        <Rating amount={rating} />
      </Box>
    </Box>
  );
};

export default UserProgress;
