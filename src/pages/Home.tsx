import { Box, Flex, Grid, GridItem } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import UserProgress from "../components/UserProgress"
import Folder from "../components/Folder"
import Notification from "../components/Notification";

const TestComponent = () => {
    
    return (
      <>  
        
        <Grid templateRows="1fr 3fr 1fr" templateColumns="25em auto 25em" h="100vh">
          <GridItem colSpan={1}>
            <Box maxW="25em" p="0 0 2em 0">
              <UserProgress name={"Student name"} completed={0} rating={5}/>
            </Box>
          </GridItem>
          
          <GridItem colSpan={1} colStart={3}>
            <Box pos="absolute" top="2em" right="2em" p="0 0 2em 0">
              <Notification containsMessages={true} nextMessage="" />
            </Box>
          </GridItem>
          
          <GridItem colSpan={3}>
            <Outlet />
          </GridItem>
        
          <GridItem rowSpan={1} colSpan={3}  padding="3em 10em 2em 10em">
            <Flex align="center" justify="space-between" >
              <Folder forwardSource="/level/2" backSource="/" folderType="unlocked"/> 
              <Folder forwardSource="/" backSource="/" folderType="locked"/>
              <Folder forwardSource="/" backSource="/" folderType="locked"/> 
              <Folder forwardSource="/" backSource="/" folderType="locked"/> 
              <Folder forwardSource="/" backSource="/" folderType="locked"/> 
            </Flex>
          </GridItem>
        </Grid>
        
      </>
    )
};

export default TestComponent;
