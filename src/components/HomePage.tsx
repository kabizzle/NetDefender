import { Box, Button, Center, Flex, Grid, GridItem, Image, Text } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import UserProgress from '../components/UserProgress';
import Folder from '../components/Folder';
import Notification from '../components/Notification';
import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { IStudent, defaultStudent } from '../interfaces/Student';
import userDataService from '../services/userDataService';
import { IUserAuthData } from '../services/loginService';
import Tutorial from '../pages/Tutorial';
import LevelView from './LevelView';

// This component renders the home page view, when the user is logged in (i.e., the view with folders and their username etc.)
const HomePage = ({
  setUserAuthData,
  userAuthData
}: {
  setUserAuthData: Dispatch<SetStateAction<IUserAuthData>>;
  userAuthData: IUserAuthData;
}) => {
  const [userData, setUserData] = useState<IStudent>(defaultStudent);
  const [userDataFetched, setUserDataFetched] = useState(false);
  const [showTutorial, setShowTutorial] = useState(false);
  const [showLevel, setShowLevel] = useState(false);
  // const [showMessages, setShowMessages] = useState(false);
  const [levelToShow, setLevelToShow] = useState(1);
  // const levelData = userData.levels;

  // get user data from api
  const fetchData = async () => {
    const data = await userDataService.getUserData({ userId: userAuthData.user_id, userToken: userAuthData.token });
    setUserData(data);
    setShowTutorial(!data.tutorial_completed);
    setUserDataFetched(true);
    console.log('user data: ', data);
  };

  const updateTutorial = async () => {
    if (userDataFetched) {
      const updatedUserData = userData;
      updatedUserData.tutorial_completed = true;
      await userDataService.updateUserData({
        userId: userAuthData.user_id,
        userToken: userAuthData.token,
        userData: updatedUserData
      });
    }
  };

  // fetch user data on page load
  useEffect(() => {
    fetchData();
  }, []);

  // update tutorial status in api after tutorial is completed
  useEffect(() => {
    updateTutorial();
  }, [showTutorial]);

  // function that allows user to log out of app
  const handleLogout: React.FormEventHandler = (event: React.FormEvent<HTMLInputElement>) => {
    event.preventDefault();
    console.log('clicked');
    try {
      console.log('Trying to logout');
      setUserAuthData({ token: '', username: '', name: '', user_id: '' });
      window.localStorage.removeItem('userAuthDataJSON');
    } catch (error) {
      console.log(error);
    }
  };

  const renderLevels = () => {
    const levelData = userData.levels[levelToShow - 1];

    return <LevelView levelData={levelData} setShowLevel={setShowLevel} />;
  };

  if (showTutorial) {
    return <Tutorial setShowTutorial={setShowTutorial} />;
  } else {
    return (
      <>
        <Grid templateRows="1fr 3fr 1fr" templateColumns="25em auto 25em" h="100vh">
          <GridItem colSpan={1}>
            <Box maxW="25em" p="0 0 2em 0">
              <UserProgress name={userData.name} points={0} rating={5} />
              <Button onClick={handleLogout} m="2em 0 0 2em">
                Logout{' '}
              </Button>
            </Box>
          </GridItem>

          <GridItem colSpan={1} colStart={3} pos="relative" p="2em 1em 0 1em">
            <Flex dir="row" align="center" justify="space-evenly">
              <Box minH="100px">
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
            <Center m="0 0 0 0">{showLevel && renderLevels()}</Center>
          </GridItem>

          <GridItem rowSpan={1} colSpan={3} padding="3em 10em 2em 10em">
            <Flex align="center" justify="space-between">
              <Folder showLevel={showLevel} levelToShow={levelToShow} folderType="unlocked" name="Week 1" number={1} />
              <Folder showLevel={showLevel} levelToShow={levelToShow} folderType="locked" name="Week 2" number={2} />
              <Folder showLevel={showLevel} levelToShow={levelToShow} folderType="locked" name="Week 3" number={3} />
              <Folder showLevel={showLevel} levelToShow={levelToShow} folderType="locked" name="Week 4" number={4} />
              <Folder showLevel={showLevel} levelToShow={levelToShow} folderType="locked" name="Week 5" number={5} />
            </Flex>
          </GridItem>
        </Grid>
      </>
    );
  }
};

export default HomePage;
