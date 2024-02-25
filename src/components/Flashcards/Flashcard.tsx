import { Box, Button, Card, CardBody, CardHeader, Center, Heading, Text } from '@chakra-ui/react';
import { ArrowBackIcon, InfoOutlineIcon } from '@chakra-ui/icons';
import { useState } from 'react';
import { Link } from 'react-router-dom';

interface FlashcardContent {
  id: number;
  title: string;
  content: string;
}

// FlashcardContent is the format for each flashcard.
// Each flashcard should have a title and the content of the flashcard, along with an id to identify it.

const testFlashcard: FlashcardContent[] = [
  {
    id: 1,
    title: "Packet Sniffing",
    content: "Definition: the practice of gathering, collecting, and logging packets that pass through a computer network.\n \
    Due to security vulnerabilities, the content of packets can be inspected by malicious third-parties.",
  },
  {
    id: 2, 
    title: "Masquerading",
    content: "creating a packet with arbitrary source address, packet content and destination address.\n \
    A receiver might be disguised of the true sender.",
  },
  {
    id: 3, 
    title: "Third for test",
    content: "test third flashcard.",
  },
];

const Flashcard = () => {
  const [count, setCount] = useState(1);
  const flashcards: FlashcardContent[] = testFlashcard;
  const [flashcard, setFlashcard] = useState(flashcards[0]);
  return (
    <>
      <Center h="100vh" w="100vw"> 
        <Box display="flex" flexDir="column" justifyContent="space-evenly" gap="4em" marginX="2em" >
          <Link to="/">
            <ArrowBackIcon boxSize={10} pos="absolute" border="1px" />
          </Link>
          <Card
            alignSelf="center"
            justifySelf="center"
            w={["xs", "md", "lg"]}
            bg="game.black"
            borderColor="game.gray"
            borderWidth="2px"
          >
            <CardHeader>
              <Heading textColor="game.white">{flashcard.title}</Heading>
            </CardHeader>
            <CardBody>
              <Box display="flex" gap="1em" alignItems="start">
                <InfoOutlineIcon color="game.white" />
                <Text color="game.white">{flashcard.content}</Text>
              </Box>
            </CardBody>
          </Card>
          <Box display="flex" justifyContent="space-between">
            <Button w={["6em", "8em"]} onClick={() => {
              setCount(count - 1);
              
              if (count <= 0) {
                setCount(flashcards.length - 1) 
              };
              
              setFlashcard(flashcards[count]);
            }}
            >
              Previous
            </Button>
            <Button w={["6em", "8em"]} onClick={() => {
              setCount(count + 1);
              
              if (count >= flashcards.length - 1) {
                setCount(0) 
              };
              
              setFlashcard(flashcards[count]);
            }}
            >
              Next
            </Button>
          </Box>
        </Box>
      </Center>
    </>
  );
};

export type { FlashcardContent };
export default Flashcard;
