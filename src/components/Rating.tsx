import { StarIcon } from '@chakra-ui/icons';
import { Box } from '@chakra-ui/layout';

interface RatingNumber {
  amount: number;
}

const Rating = ({ amount }: RatingNumber) => {
  const whiteStars = Array(amount).fill(null);
  const grayStars = Array(5 - amount).fill(null);
  return (
    <>
      <Box m="1.5em 0 0 2em" maxW="10em">
        {whiteStars.map((_, index) => (
          <StarIcon key={`white-${index}`} color="game.white" boxSize={6} marginRight="4px" />
        ))}
        {grayStars.map((_, index) => (
          <StarIcon key={`gray-${index}`} color="game.gray" boxSize={6} marginRight="4px" />
        ))}
      </Box>
    </>
  );
};

export default Rating;
