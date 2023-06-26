import { Box, Flex, Image, Grid, GridItem, Center } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import UserProgress from "../components/UserProgress"
import Notification from "../components/Notification";
import IntroScreen from "../components/IntroScreen";

const Tutorial = () => {
    
    return (
      <>  
        <Grid templateRows="repeat(5, 1fr)" templateColumns="repeat(2, 1 fr)">
          <GridItem rowSpan={1} colSpan={1}>
            <UserProgress name={"Neo"} completed={1} rating={4}/>
          </GridItem>
          <GridItem rowSpan={1} colSpan={1}>
            <Box pos="absolute" top="2em" right="2em">
              <Notification containsMessages={true} nextMessage="/tutorial" />
            </Box>
          </GridItem>
          <GridItem rowSpan={3} colSpan={2}>
            <Center m="6em 0 0 0">
              <IntroScreen />
            </Center>
          </GridItem>
          <GridItem rowSpan={1} colSpan={2}>
            <Flex align="center" justify="space-between" m="5em 10em 0 10em">
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
