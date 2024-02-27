import { Dispatch, SetStateAction, useState } from 'react';
import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Button,
  Heading,
  useToast,
  Text,
  Image
} from '@chakra-ui/react';

import login, { IUserAuthData } from '../services/loginService';

interface ILoginProps {
  setUserAuthData: Dispatch<SetStateAction<IUserAuthData>>;
  setShowLogin: Dispatch<SetStateAction<boolean>>;
}

const Login = ({ setUserAuthData, setShowLogin }: ILoginProps) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const toast = useToast();

  // updates username hook with user input
  const handleUsernameChange: React.ChangeEventHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    setUsername(event.target.value);
  };

  // updates password hook with user input
  const handlePasswordChange: React.ChangeEventHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    setPassword(event.target.value);
  };

  // attempts to authenticate user
  const handleLogin: React.FormEventHandler = async (event: React.FormEvent<HTMLInputElement>) => {
    event.preventDefault();

    try {
      const user: IUserAuthData = await login.login({ username, password });
      setUserAuthData(user);
      window.localStorage.setItem('userAuthDataJSON', JSON.stringify(user));
      setUsername('');
      setPassword('');
      // window.location.reload();

      toast({
        title: 'Successful login!',
        status: 'success',
        duration: 3500,
        isClosable: true
      });
    } catch {
      toast({
        title: 'Wrong Credentials',
        status: 'error',
        duration: 5000,
        isClosable: true
      });
    }
  };

  const handleSignup: React.FormEventHandler = (event: React.FormEvent<HTMLInputElement>) => {
    event.preventDefault();
    setShowLogin(false);
  };

  return (
    <Flex minH={'100vh'} align={'center'} justify={'center'} bg="game.black">
      <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
        <Image mx="7em" boxSize="12em" src="/NetDefender_icon.png" alt="NetDefender icon" />
        <Heading ml="56px" fontFamily="mono" fontSize={'3xl'}>
          Log in to your NetDefender account
        </Heading>
        <Box rounded={'lg'} bg="game.black" boxShadow={'lg'} p={8}>
          <Stack spacing={8}>
            <FormControl id="username">
              <FormLabel>Username</FormLabel>
              <Input type="text" onChange={handleUsernameChange} placeholder={username} />
            </FormControl>
            <FormControl id="password">
              <FormLabel>Password</FormLabel>
              <Input type="password" onChange={handlePasswordChange} placeholder={password} />
            </FormControl>
            <Button
              onClick={handleLogin}
              m="2px 0 0 0"
              bg="game.black"
              color="game.green"
              border="2px"
              borderColor="game.green"
              _hover={{ color: 'game.black', bg: 'game.green' }}
            >
              Log in
            </Button>
            <Stack spacing={4}>
              <Text fontSize="22" marginTop="2em">
                Need to create an account?
              </Text>
              <Button
                onClick={handleSignup}
                bg="game.black"
                border="2px"
                borderColor="game.white"
                color="game.white"
                _hover={{ color: 'game.black', bg: 'game.white' }}
              >
                Sign up
              </Button>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
};

export default Login;
