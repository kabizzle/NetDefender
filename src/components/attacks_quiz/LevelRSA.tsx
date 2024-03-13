import { Box, Center, Flex, Text, Button, FormLabel, Textarea, useToast, FormControl } from '@chakra-ui/react';
import React, { useState } from 'react';
import JSEncrypt from 'jsencrypt';
import userDataService from '../../services/userDataService';
import { useNavigate } from 'react-router-dom';

const LevelRSA = ({weekNumber, taskID} : {weekNumber: number; taskID: string}) => {
  const [count, setCount] = useState(0);
  const [userPubKey, setUserPubKey] = useState('');
  const [userInput, setUserInput] = useState('');
  const [givenPubKey, setGivenPubKey] = useState(false);
  const [encryptedMsg, setEncryptedMsg] = useState('');
  const [task, setTask] = useState(1);
  const game_RSA = new JSEncrypt();
  const student_rsa = new JSEncrypt();
  // const [displayText, setDisplayText] = useState("")
  const toast = useToast();
  const pubKeyRegex = /^-----BEGIN PUBLIC KEY-----([A-Za-z0-9+/=\s]+)-----END PUBLIC KEY-----\n?$/;
  const userAuthDataJSON = window.localStorage.getItem('userAuthDataJSON');
  const navigate = useNavigate();

  // set game's private key from .env file
  game_RSA.setPrivateKey(import.meta.env.VITE_GAME_PRIVATE_KEY);

  // updates the count so that different content is shown
  const handleClick = () => {
    setCount(count + 1);
  };

  // updates userPubKey hook with inputted Public Key
  const handlePubKeyChange: React.ChangeEventHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    setUserPubKey(event.target.value);
  };

  // updates userPubKey hook with inputted Public Key
  const handleTaskInput: React.ChangeEventHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    setUserInput(event.target.value);
  };

  // changes givenPubKey to true, indicating that user has inputted a public key.
  // This public key should be used for encrypting any text input from the user
  // TODO:
  // - send userPubKey to database when submitted. Implement a POST request for this in API
  const handlePubKeySubmit: React.FormEventHandler = async (event: React.FormEvent<HTMLInputElement>) => {
    event.preventDefault();
    console.log('attempt to submit public key');
    if (pubKeyRegex.test(userPubKey)) {
      // handleClick()
      setGivenPubKey(true);
      setCount(0);

      // update value of user's public key in database
      if (userAuthDataJSON) {
        const userAuthData = JSON.parse(userAuthDataJSON);
        const userData = await userDataService.getUserData({
          userId: userAuthData.user_id,
          userToken: userAuthData.token
        });
        const updatedUserData = userData;
        updatedUserData.public_key = userPubKey;
        await userDataService.updateUserData({
          userId: userAuthData.user_id,
          userToken: userAuthData.token,
          userData: updatedUserData
        });
      }

      toast({
        title: 'Public key added.',
        status: 'success',
        duration: 3500
      });
      student_rsa.setPublicKey(userPubKey);

      const cipherText = student_rsa.encrypt('The encrypted word is: Netdefender');
      if (cipherText !== false) {
        setEncryptedMsg(cipherText);
      }
    } else {
      toast({
        title: 'Error:',
        description: 'Check if public key is inputted correctly.',
        status: 'error',
        duration: 3500,
        isClosable: true
      });
    }
  };

  // changes givenPubKey to true, indicating that user has inputted a public key.
  // This public key should be used for encrypting any text input from the user
  const handleTaskSubmit: React.FormEventHandler = async (
    event: React.FormEvent<HTMLInputElement>
  ): Promise<boolean> => {
    event.preventDefault();
    if (task === 1) {
      console.log('Task 1: user has to decrypt message');
      // if (game_RSA.decrypt(userInput) === "Netdefender") {
      if (userInput === 'Netdefender') {
        toast({
          title: 'Good job!',
          description: 'You solved the first task',
          status: 'success',
          duration: 1500
        });
        setTask(2);
        // setUserInput("")
        return true;
      } else {
        toast({
          title: 'Error:',
          description: 'You did not submit the right answer. Did you get the hint from the encrypted message?',
          status: 'error',
          duration: 3500
        });
        return false;
      }
    } else if (task == 2) {
      console.log('Task 2: user has to encrypt message');

      if (userAuthDataJSON) {
        const userAuthData = JSON.parse(userAuthDataJSON);

        if (game_RSA.decrypt(userInput) === userAuthData.username) {
          const userData = await userDataService.getUserData({
            userId: userAuthData.user_id,
            userToken: userAuthData.token
          });
          const updatedUserData = userData;

          const currentTask = userData.levels[weekNumber - 1].find((obj) => obj.id === taskID);

          if (!currentTask!.completed) {
            updatedUserData.levels[weekNumber - 1].find((obj) => obj.id === taskID)!.completed = true;
            updatedUserData.points = userData.points + currentTask!.points;
            await userDataService.updateUserData({
              userId: userAuthData.user_id,
              userToken: userAuthData.token,
              userData: updatedUserData
            });
          }

          toast({
            title: 'Good job!',
            description: 'You solved this week\'s task',
            status: 'success',
            duration: 1500
          });
          setTimeout(() => {
            navigate('/');
          }, 1500);
          return true;
        } else {
          toast({
            title: 'Error:',
            description: 'You did not submit the right answer. Did you get the hint from the encrypted message?',
            status: 'error',
            duration: 4000
          });
          return false;
        }
      } else {
        return false;
      }
    } else {
      return false;
    }
  };

  const pubKeyTask = () => {
    console.log('count = ' + count);
    if (count == 0) {
      return (
        <>
          <Center w="100vw">
            <Flex h="25em" align="start" justify="space-around" direction="column">
              <Box w="38em">
                <Text m="0.5em 0 0.5em 0">Last week, you used the Caesar cipher to exchange encrypted messages.</Text>
                <Text m="0.5em 0 0.5em 0">
                  However, as you know, the Caesar cipher can be easily cracked by computers, using brute force.
                </Text>
                <Text m="0.5em 0 0.5em 0">We should establish a more secure form of encryption</Text>
              </Box>

              <Button
                onClick={handleClick}
                marginLeft="15em"
                bg="game.black"
                border="2px"
                borderColor="game.white"
                color="game.white"
                _hover={{ color: 'game.black', bg: 'game.white' }}
              >
                next
              </Button>
            </Flex>
          </Center>
        </>
      );
    } else if (count == 1) {
      return (
        <>
          <Center w="100vw">
            <Flex h="25em" align="start" justify="space-around" direction="column">
              <Box w="38em">
                <Text m="0.5em 0 0.5em 0">You should have OpenSSL installed in your terminal.</Text>
                <Text m="0.5em 0 0.5em 0">Let's use it to generate an RSA key pair</Text>
              </Box>

              <Button
                onClick={handleClick}
                marginLeft="15em"
                bg="game.black"
                border="2px"
                borderColor="game.white"
                color="game.white"
                _hover={{ color: 'game.black', bg: 'game.white' }}
              >
                next
              </Button>
            </Flex>
          </Center>
        </>
      );
    } else if (count == 2) {
      return (
        <>
          <Center w="100vw">
            <Flex h="25em" align="start" justify="space-around" direction="column">
              <Box w="38em">
                <Text m="0.5em 0 0.5em 0">Navigate to a directory where you would like to save your RSA key pair.</Text>
                <Box border="2px" p="0.5em 5em 0.5em 1em">
                  cd ~/"your-directory-name"
                </Box>
                <Text m="0.5em 0 0.5em 0">Enter the following command in your terminal:</Text>
                <Box border="2px" p="0.5em 5em 0.5em 1em">
                  openssl genrsa -out rsa_1024_priv.pem 1024
                </Box>
                <Text m="0.5em 0 0.5em 0">
                  This generates a private key, which you can see using the following command:
                </Text>
                <Box border="2px" p="0.5em 5em 0.5em 1em">
                  cat rsa_1024_priv.pem
                </Box>
              </Box>

              <Button
                onClick={handleClick}
                marginLeft="15em"
                bg="game.black"
                border="2px"
                borderColor="game.white"
                color="game.white"
                _hover={{ color: 'game.black', bg: 'game.white' }}
              >
                next
              </Button>
            </Flex>
          </Center>
        </>
      );
    } else if (count == 3) {
      return (
        <>
          <Center w="100vw">
            <Flex h="25em" align="start" justify="space-around" direction="column">
              <Box w="36em">
                <Text m="0.5em 0 0.5em 0">The following command generates your public key:</Text>
                <Box w="40em" border="2px" p="0.5em 0 0.5em 1em">
                  openssl rsa -pubout -in rsa_1024_priv.pem -out rsa_1024_pub.pem
                </Box>
                <Text m="0.5em 0 0.5em 0">
                  You can see your public key in the terminal using the following command:
                </Text>
                <Box border="2px" p="0.5em 5em 0.5em 1em">
                  cat rsa_1024_pub.pem
                </Box>
              </Box>

              <Button
                onClick={handleClick}
                marginLeft="15em"
                bg="game.black"
                border="2px"
                borderColor="game.white"
                color="game.white"
                _hover={{ color: 'game.black', bg: 'game.white' }}
              >
                next
              </Button>
            </Flex>
          </Center>
        </>
      );
    } else if (count == 4) {
      return (
        <>
          <Center w="100vw">
            <Flex h="25em" align="start" justify="space-around" direction="column">
              <Box w="36em">
                <Text m="0.5em 0 0.5em 0">Future messages will be encrypted using your public key.</Text>
                <Box w="40em" border="2px" p="0.5em 0 0.5em 1em">
                  openssl rsa -pubout -in rsa_1024_priv.pem -out rsa_1024_pub.pem
                </Box>
                <Text m="0.5em 0 0.5em 0">Enter your public key below:</Text>
                <FormLabel m="0 0 1em 12em">Public Key</FormLabel>
                <Textarea
                  placeholder={
                    '-----BEGIN PUBLIC KEY-----' +
                    'xxxxxxxxxxxxxxxxxxxxxxxxxx\n' +
                    'xxxxxxxxxxxxxxxxxxxxxxxxxx\n' +
                    'xxxxxxxxxxxxxxxxxxxxxxxxxx\n' +
                    '-----END PUBLIC KEY-----'
                  }
                  maxW="30em"
                  h="10em"
                  p="1em"
                  borderColor="game.gray"
                  onChange={handlePubKeyChange}
                />
                <Box m="2em 0 0 13em">
                  <Button onClick={handlePubKeySubmit}>submit</Button>
                </Box>
              </Box>
            </Flex>
          </Center>
        </>
      );
    } else {
      if (givenPubKey) {
        return <>success</>;
      } else {
        return (
          <Button
            onClick={() => {
              setCount(0);
            }}
            marginLeft="15em"
            bg="game.black"
            border="2px"
            borderColor="game.white"
            color="game.white"
            _hover={{ color: 'game.black', bg: 'game.white' }}
          >
            back
          </Button>
        );
      }
    }
  };

  // TODO:
  // - update task 2 so it checks for student number
  const decryptTask = () => {
    if (task === 1) {
      return (
        <>
          <Center w="100vw">
            <Flex align="start" justify="space-around" direction="column">
              <Box w="36em">
                <Text m="0.5em 0 0.5em 0">
                  Now that you have entered your public key, you can receive your first encrypted message.
                </Text>
                <Box w="40em" border="2px" p="0.5em 0 0.5em 1em">
                  {encryptedMsg}
                </Box>
                {
                  //<Text m="5em 0 1em 0">The public key for the game is:</Text>
                  //<Box border="2px" p="0.5em 5em 0.5em 1em">{game_RSA.getPublicKey()}</Box>
                }
              </Box>
              <Box pos="relative" w="50em">
                <FormControl>
                  <FormLabel m="5em 0 1em 12em">Your answer:</FormLabel>
                  <Textarea maxW="30em" h="10em" p="1em" borderColor="game.gray" onChange={handleTaskInput} />
                  <Button
                    onClick={handleTaskSubmit}
                    pos="absolute"
                    right="5em"
                    bg="game.black"
                    border="2px"
                    borderColor="game.white"
                    color="game.white"
                    _hover={{ color: 'game.black', bg: 'game.white' }}
                  >
                    submit
                  </Button>
                </FormControl>
              </Box>
            </Flex>
          </Center>
        </>
      );
    } else if (task === 2) {
      return (
        <>
          <Center w="100vw">
            <Flex align="start" justify="space-around" direction="column">
              <Box w="36em">
                <Text m="0.5em 0 0.5em 0">
                  Now that you are able to decrypt, you can send your first encrypted message.
                </Text>
                <Text m="0.5em 0 0.5em 0">Encrypt your username, using the game's public key.</Text>
                {
                  // <Box w="40em" border="2px" p="0.5em 0 0.5em 1em">{encryptedMsg}</Box>
                }
                <Text m="5em 0 1em 0">The public key for the game is:</Text>
                <Box border="2px" p="0.5em 5em 0.5em 1em">
                  {game_RSA.getPublicKey()}
                </Box>
              </Box>
              <Box pos="relative" w="50em">
                <FormLabel m="5em 0 1em 12em">Your answer:</FormLabel>
                <Textarea maxW="30em" h="10em" p="1em" borderColor="game.gray" onChange={handleTaskInput} />
                <Button
                  onClick={handleTaskSubmit}
                  pos="absolute"
                  right="5em"
                  bg="game.black"
                  border="2px"
                  borderColor="game.white"
                  color="game.white"
                  _hover={{ color: 'game.black', bg: 'game.white' }}
                >
                  submit
                </Button>
              </Box>
            </Flex>
          </Center>
        </>
      );
    }
  };

  const renderScreen = () => {
    if (!givenPubKey) {
      return pubKeyTask();
    } else {
      student_rsa.setPublicKey(userPubKey);
      return decryptTask();
    }
  };

  return (
    <>
      <Center w="100vw">{renderScreen()}</Center>
    </>
  );
};

export default LevelRSA;
