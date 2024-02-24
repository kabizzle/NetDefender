import { Box, Card, CardBody, CardHeader, Heading, Text } from '@chakra-ui/react';
import { InfoOutlineIcon } from '@chakra-ui/icons';

const Flashcard = () => {
  return (
    <Box display="flex" flexDir="column">
      <Card
        alignSelf="center"
        justifySelf="center"
        maxW="lg"
        bg="game.black"
        borderColor="game.gray"
        borderWidth="2px"
        marginTop="20vh"
      >
        <CardHeader>
          <Heading textColor="game.white">Packet Sniffing</Heading>
        </CardHeader>
        <CardBody>
          <Box display="flex" gap="1em">
            <InfoOutlineIcon color="game.white" />
            <Text color="game.white" maxW="sm">
              Definition: the practice of gathering, collecting, and logging packets that pass through a computer
              network.
            </Text>
          </Box>
        </CardBody>
      </Card>
    </Box>
  );
};

export default Flashcard;
