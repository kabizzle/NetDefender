import { Box, Button, Center, Flex, Grid, GridItem, Image, Text } from '@chakra-ui/react';
import { Link, Outlet } from 'react-router-dom';
import UserProgress from '../components/UserProgress';
import Folder from '../components/Folder';
import Notification from '../components/Notification';
import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { IStudent, defaultStudent } from '../interfaces/Student';
import userDataService from '../services/userDataService';
import { IUserAuthData } from '../services/loginService';
import Tutorial from '../pages/Tutorial';

const HomePage = ( { setUserAuthData, userAuthData } : { setUserAuthData: Dispatch<SetStateAction<IUserAuthData>>, userAuthData: IUserAuthData }) => {

    const [userData, setUserData] = useState<IStudent>(defaultStudent)
    const [showTutorial, setShowTutorial] = useState(false);
    // const [levelData, setLevelData] = useState(defaultStudent.levels)
    // const levelData = userData.levels;
    
    const fetchData = async () => { 
        const data = await userDataService.getUserData({user_id: userAuthData.user_id, userToken: userAuthData.token})
        setUserData(data)
        setShowTutorial(!data.tutorial_completed)
        console.log('user data: ', data)
    }

    // function that allows user to log out of app
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

    useEffect(() => {
        fetchData()
    }, [])

    
    if (showTutorial) {
        return (
           <Tutorial setShowTutorial={setShowTutorial}/> 
        )
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
