import { Box, Flex } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import UserProgress from "../components/UserProgress"
import Folder from "../components/Folder"

const TestComponent = () => {
    
    return (
        <Box pos='relative' w='100vw' h='100vh'>
            <UserProgress name={"Student name"} completed={1} rating={4}/>
              <Flex align="center" justify="space-between" m="40em 10em 5em 10em">
                <Folder forwardSource="test" backSource="/" folderType="unlocked"/> 
                <Folder forwardSource="/" backSource="/" folderType="locked"/>
                <Folder forwardSource="/" backSource="/" folderType="locked"/> 
                <Folder forwardSource="/" backSource="/" folderType="locked"/> 
                <Folder forwardSource="/" backSource="/" folderType="locked"/> 
              </Flex>
            <Outlet />
        </Box>
    )
};

export default TestComponent;
