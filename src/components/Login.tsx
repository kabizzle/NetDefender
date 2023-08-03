import {useState} from 'react';
import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Button,
  Heading,
} from '@chakra-ui/react'

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
  
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

  return (
    <Flex
      minH={'100vh'}
      align={'center'}
      justify={'center'}
      bg="game.black">
      <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
      <Heading ml='56px' fontFamily='mono' fontSize={'3xl'}>Log in to your NetDefender account</Heading>
        <Box
          rounded={'lg'}
          bg="game.black"
          boxShadow={'lg'}
          p={8}>
          <Stack spacing={8}>
            <FormControl id='username'>
              <FormLabel>Username</FormLabel>
              <Input type='text' onChange={handleUsernameChange}/>
            </FormControl>
            <FormControl id='password'>
              <FormLabel>Password</FormLabel>
              <Input type='password' onChange={handlePasswordChange}/>
            </FormControl>
            <Stack spacing={10}>
              <Button
                m="2px 0 0 0"
                bg='game.black'
                color='game.green'
                border='2px'
                borderColor='game.green'
                _hover={{ color: 'game.black', bg: 'game.green'}}
                >
                Log in
              </Button>
                <Button
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
  )
};

export default Login;
