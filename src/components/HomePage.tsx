import { Box, Button, Center, Flex, Grid, GridItem, HStack, Image, Stack, Text } from '@chakra-ui/react';
import { Link, Outlet } from 'react-router-dom';
import UserProgress from '../components/UserProgress';
import Folder from '../components/Folder';
import Notification from '../components/Notification';
import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { IStudent } from '../interfaces/Student';
import getUserData from '../services/userData';
import { IUserAuthData } from '../services/loginService';

const HomePage = ( {token, user_id, setUserAuthData} : { token: string, user_id: string, setUserAuthData: Dispatch<SetStateAction<IUserAuthData>>} ) => {

    const [userData, setUserData] = useState<IStudent>({
        name: '',
        username: '',
        student_number: '',  // student_number is optional for now, as students may not want to get graded from game. This needs to be discussed further.
        tutorial_completed: false,
        public_key: '',
        levels: [
            { id: 1, completed: false, points: 20 },
            { id: 2, completed: false, points: 20 },
            { id: 3, completed: false, points: 20 },
            { id: 4, completed: false, points: 20 },
            { id: 5, completed: false, points: 20 }
        ],
        rating: 5
    })
    
    const fetchData = async () => { 
        const data = await getUserData({user_id: user_id, userToken: token})
        setUserData(data)
    }

    useEffect(() => {
        fetchData()
    }, [])

    // function that allows user to logout of app
    const handleLogout:React.FormEventHandler = (event: React.FormEvent<HTMLInputElement> ) => {
        event.preventDefault();
        console.log('clicked')
        try {
            console.log('Trying to logout');
            setUserAuthData({ token: '', username: '', name: '', user_id: '' });
            window.localStorage.removeItem('userAuthDataJSON');
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <>
            <Grid templateRows="1fr 3fr 1fr" templateColumns="25em auto 25em" h="100vh">
                <GridItem colSpan={1}>
                    <Box maxW="25em" p="0 0 2em 0">
                        <UserProgress name={userData.name} completed={0} rating={5} />
                        <Button onClick={handleLogout}
                            m="2em 0 0 2em"
                        >Logout </Button>
                    </Box>
                </GridItem>

                <GridItem colSpan={1} colStart={3} pos='relative' p="2em 1em 0 1em">
                    <Flex dir='row' align='center' justify='space-evenly'>
                        <Box minH='100px'>
                            <Notification containsMessages={false} nextMessage="" />
                        </Box>
                        <Link to="/sandbox">
                            <Box minW="105px" minH="130px">
                                <Image src="../sandbox_icon.svg" />
                                <Text>Decryption</Text>
                            </Box>
                        </Link>
                    </Flex>
                </GridItem>

                <GridItem colSpan={3} pos="relative">
                    <Center m="5em 0 0 0">
                        <Outlet />
                    </Center>
                </GridItem>

                <GridItem rowSpan={1} colSpan={3} padding="3em 10em 2em 10em">
                    <Flex align="center" justify="space-between">
                        <Folder forwardSource="/1" backSource="" folderType="unlocked" name="Week 1" />
                        <Folder folderType="locked" name="Week 2" />
                        <Folder folderType="locked" name="Week 3" />
                        <Folder folderType="locked" name="Week 4" />
                        <Folder folderType="locked" name="Week 5" />
                    </Flex>
                </GridItem>
            </Grid>
        </>
    );
};

export default HomePage;
