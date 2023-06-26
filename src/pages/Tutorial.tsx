import { Box, Flex, Image, Grid, GridItem, Center } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import UserProgress from "../components/UserProgress"
import Notification from "../components/Notification";
import IntroScreen from "../components/IntroScreen";
import { useState } from "react";

const Tutorial = () => {
    
  const [displayText, setDisplayText] = useState("Welcome to NetDefender.");
  const [count, setCount] = useState(0);
  const [arrowProps, setArrowProps] = useState(["", "", "0"]);
  const [folderBorder, setFolderBorder] = useState("game.red");
  const [progressBorder, setProgressBorder] = useState("game.white");
  const [notificationBorder, setNotificationBorder] = useState("game.white");

  const handleClick = () => {
    setCount(count+1);
    if (count == 1) { 
      setDisplayText("Your company has been hacked.");
      setArrowProps(["10em 0 0 20em", "rotate(0.6turn)", "7.5em"])
    }
    if (count == 2) {
      setDisplayText("IT has detected that the threat originated from your computer.");
      setFolderBorder("game.red")
      setArrowProps(["40em 0 0 80em", "rotate(0.35turn)", "7.5em"])
    }
    if (count == 3) {
      setDisplayText("But you are innocent.");
    }
    if (count == 4) {
      setDisplayText("It is up to you to save the company from the attack and prove your innocence.");
    }
    if (count == 5) {
      setDisplayText("Enter the world of NetDefender.");
    }
  }

    return (
      <>  
        <Grid templateRows="1fr 3 fr 1 fr" templateColumns="repeat(2, 1 fr)" h="100vh">
          <GridItem colSpan={1} border="1px" borderColor="game.red">
            <Box border="1px" borderColor={progressBorder} maxW="25em" p="0 0 2em 0">
              <UserProgress name={"Neo"} completed={1} rating={4}/>
            </Box>
          </GridItem>
          <GridItem colSpan={1} border="1px" borderColor={notificationBorder}>
          <Box pos="absolute" top="2em" right="2em" border="1px" borderColor="game.red" p="0 0 2em 0">
              <Notification containsMessages={true} nextMessage="/tutorial" />
            </Box>
          </GridItem>
          <GridItem colSpan={2} border="1px" borderColor="game.gray">
            <Center m="5em 0 0 0">
              <IntroScreen displayText={displayText} arrowProps={arrowProps} handleClick={handleClick}/>
            </Center>
          </GridItem>
          <GridItem rowSpan={1} colSpan={2}  padding="3em 10em 2em 10em" border="1px" borderColor={folderBorder}>
            <Flex align="center" justify="space-between">
              <Box>
                <Image src={"/folder_unlocked.svg"} w="10em"/>
              </Box>
              <Box>
                <Image src={"/folder_locked.svg"} w="10em"/>
              </Box>
              <Box>
                <Image src={"/folder_locked.svg"} w="10em"/>
              </Box>
              <Box>
                <Image src={"/folder_locked.svg"} w="10em"/>
              </Box>
              <Box>
                <Image src={"/folder_locked.svg"} w="10em"/>
              </Box>
            </Flex>
          </GridItem>
        </Grid>
        <Outlet />
      </>
    )
};

export default Tutorial;
