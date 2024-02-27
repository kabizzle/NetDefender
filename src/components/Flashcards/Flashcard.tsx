import { Box, Button, Card, CardBody, CardHeader, Center, Heading, IconButton, Text, useToast } from '@chakra-ui/react';
import { ArrowBackIcon, InfoOutlineIcon } from '@chakra-ui/icons';
import { useState } from 'react';
import * as FlashcardData from './FlashcardData';
import userDataService from '../../services/userDataService';
import { useNavigate } from 'react-router-dom';

// FlashcardContent is the format for each flashcard.
// Each flashcard should have a title and the content of the flashcard, along with an id to identify it.
interface FlashcardContent {
  id: number;
  title: string;
  content: string;
}

const Flashcard = () => {
  const [count, setCount] = useState(1);
  const flashcards: FlashcardContent[] = FlashcardData.testFlashcards;
  const [flashcard, setFlashcard] = useState(flashcards[0]);

  const navigate = useNavigate();
  const toast = useToast();

  // function that sets level as completed and adds points to user's score
  const handleLevelComplete = async () => {
    const userAuthDataJSON = window.localStorage.getItem('userAuthDataJSON');

    if (userAuthDataJSON) {
      const user = JSON.parse(userAuthDataJSON);
      const userAuthData = user;
      const userData = await userDataService.getUserData({
        userId: userAuthData.user_id,
        userToken: userAuthData.token
      });

      const updatedUserData = userData;

      // if (!userData.levels[0][0].completed) {
      //   updatedUserData.levels[0][0].completed = true;
      // }

      updatedUserData.points = userData.points + 5;

      await userDataService.updateUserData({
        userId: userAuthData.user_id,
        userToken: userAuthData.token,
        userData: updatedUserData
      });

      toast({
        title: 'Good job!',
        status: 'success',
        duration: 1500
      });

      setTimeout(() => {
        navigate('/');
      }, 1500);
    }
  };

  return (
    <>
      <Center h="100vh" w="100vw">
        <Box display="flex" flexDir="column" justifyContent="space-evenly" gap="4em" marginX="2em">
          <IconButton
            onClick={handleLevelComplete}
            icon={<ArrowBackIcon />}
            boxSize={10}
            border="1px"
            aria-label={''}
          />
          <Card
            alignSelf="center"
            justifySelf="center"
            w={['xs', 'md', 'lg']}
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
            <Button
              w={['6em', '8em']}
              onClick={() => {
                setCount(count - 1);

                if (count <= 0) {
                  setCount(flashcards.length - 1);
                }

                setFlashcard(flashcards[count]);
              }}
            >
              Previous
            </Button>
            <Button
              w={['6em', '8em']}
              onClick={() => {
                setCount(count + 1);

                if (count >= flashcards.length - 1) {
                  setCount(0);
                }

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
