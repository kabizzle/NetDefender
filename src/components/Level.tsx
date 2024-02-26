import { Badge, Grid, GridItem, Text } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

interface LevelProps {
  name: string;
  activity: string;
  completed: boolean;
}

const Level = ({ name, activity, completed }: LevelProps) => {
  return (
    <Link to={activity}>
      <Grid
        templateColumns="2.5fr 1fr"
        minW="27em"
        border="2px"
        p="1em 0 1em 2em"
        _hover={{ color: 'game.black', bg: 'game.gray' }}
      >
        <GridItem marginRight="2em">
          <Text>{name}</Text>
        </GridItem>

        <GridItem>
          {completed && (
            <Badge variant="outline" colorScheme="green" right="0">
              Success
            </Badge>
          )}
        </GridItem>
      </Grid>
    </Link>
  );
};

export default Level;
