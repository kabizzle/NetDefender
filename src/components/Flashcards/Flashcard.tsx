import { Box, Button, Card, CardBody, CardHeader, Center, Heading, Text } from '@chakra-ui/react';
import { InfoOutlineIcon } from '@chakra-ui/icons';
import { useState } from 'react';

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
        <Box display="flex" flexDir="column" justifyContent="space-between" gap="4em">
          <Card
            alignSelf="center"
            justifySelf="center"
            maxW="lg"
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
          <Button onClick={() => {
            setCount(count + 1);
            
            if (count >= flashcards.length - 1) {
              setCount(0) 
            };
            
            setFlashcard(flashcards[count]);
          }}
          >
            Next flashcard
          </Button>
        </Box>
      </Center>
    </>
  );
};

export type { FlashcardContent };
export default Flashcard;
