import { Box, Flex, Image } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import UserProgress from "../components/UserProgress"
import Notification from "../components/Notification";

const Tutorial = () => {
    
    return (
      <>  
        <Box pos='relative' w='100vw' h='100vh'>
          <Box pos="absolute" right="0" top="0" m="0 2em 0 0">
            <Notification containsMessages={true} nextMessage="/tutorial" />
          </Box>
          <UserProgress name={"Neo"} completed={1} rating={4}/>
          <Flex align="center" justify="space-between" m="40em 10em 5em 10em">
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
        </Box>
        <Outlet />
      </>
    )
};

export default Tutorial;
