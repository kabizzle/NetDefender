import { Dispatch, SetStateAction, useState } from 'react';
import { Flex, Box, FormControl, FormLabel, Input, Stack, Button, Heading, useToast } from '@chakra-ui/react';

import loginService, { IUserAuthData } from '../services/loginService';
import { IStudent } from '../interfaces/Student';

interface ISignupProps {
    setUserAuthData: Dispatch<SetStateAction<IUserAuthData>>;
    setShowLogin: Dispatch<SetStateAction<boolean>>;
}

const Signup = ({ setUserAuthData, setShowLogin }: ISignupProps) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [studentNumber, setStudentNumber] = useState('');

    const toast = useToast();

    // updates name hook with user input
    const handleNameChange: React.ChangeEventHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        event.preventDefault();
        setName(event.target.value);
    };

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

    // updates student number hook with user input
    const handleStudentNumberChange: React.ChangeEventHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        event.preventDefault();
        setStudentNumber(event.target.value);
    };
    // attempts to sign user up and log them in, consecutively
    const handleSignup: React.FormEventHandler = async (event: React.FormEvent<HTMLInputElement>) => {
        event.preventDefault();
        try {
            if (name === '' || username === '' || password === '') {
                throw new Error('invalidProps');
            }
            const user: IStudent = await loginService.signup({
                name: name,
                username: username,
                student_number: studentNumber,
                password: password
            });
            console.log('user: ', user);

            setUsername('');
            setPassword('');
            setStudentNumber('');
            setName('');
            // window.location.reload();

            toast({
                title: 'Successfully signed up!',
                status: 'success',
                duration: 1500,
                isClosable: true
            });
            setTimeout(() => {
                setShowLogin(true);
            }, 2000);
        } catch (e) {
            if (e instanceof Error) {
                if (e.message === 'invalidProps') {
                    toast({
                        title: 'Invalid name, username or password.',
                        status: 'error',
                        duration: 3500,
                        isClosable: true
                    });
                }
            } else {
                toast({
                    title: 'Something went wrong. Try again.',
                    status: 'error',
                    duration: 3500,
                    isClosable: true
                });
            }
        }
    };

    const handleLogin: React.FormEventHandler = (event: React.FormEvent<HTMLInputElement>) => {
        event.preventDefault();
        setShowLogin(true);
    };

    return (
        <Flex minH={'100vh'} align={'center'} justify={'center'} bg="game.black">
            <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
                <Heading ml="56px" fontFamily="mono" fontSize={'3xl'}>
                    Sign up for a NetDefender account
                </Heading>
                <Box rounded={'lg'} bg="game.black" boxShadow={'lg'} p={8}>
                    <Stack spacing={8}>
                        <FormControl id="name">
                            <FormLabel>Name</FormLabel>
                            <Input type="text" onChange={handleNameChange} placeholder={name} />
                        </FormControl>

                        <FormControl id="studentNumber">
                            <FormLabel>Student number</FormLabel>
                            <Input type="text" onChange={handleStudentNumberChange} placeholder={studentNumber} />
                        </FormControl>

                        <FormControl id="username">
                            <FormLabel>Username</FormLabel>
                            <Input type="text" onChange={handleUsernameChange} placeholder={username} />
                        </FormControl>

                        <FormControl id="password">
                            <FormLabel>Password</FormLabel>
                            <Input type="password" onChange={handlePasswordChange} placeholder={password} />
                        </FormControl>

                        <Stack spacing={10}>
                            <Button
                                onClick={handleSignup}
                                m="2px 0 0 0"
                                bg="game.black"
                                color="game.green"
                                border="2px"
                                borderColor="game.green"
                                _hover={{ color: 'game.black', bg: 'game.green' }}
                            >
                                Sign up
                            </Button>
                            <Button
                                onClick={handleLogin}
                                bg="game.black"
                                border="2px"
                                borderColor="game.white"
                                color="game.white"
                                _hover={{ color: 'game.black', bg: 'game.white' }}
                            >
                                Log in
                            </Button>
                        </Stack>
                    </Stack>
                </Box>
            </Stack>
        </Flex>
    );
};

export default Signup;
