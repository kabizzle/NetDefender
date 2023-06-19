import { Box, Button } from "@chakra-ui/react";
import { Link, Outlet } from "react-router-dom";
import UserProgress from "../components/UserProgress"
import Folder from "../components/Folder"

const TestComponent = () => {
    
    return (
        <Box pos='relative' w='100vw' h='100vh'>
            {/* <Box border="2px" borderColor="game.green">
                <h1>Hello world</h1>
                <Button bgColor="game.black" border="2px" m="3em" borderColor="game.red" color="game.white"> 
                    <Link to="/"> Home </Link>
                </Button>
                <Button bgColor="game.black" border="2px" borderColor="game.white" color="game.white"> 
                    <Link to="/test"> Game </Link>
                </Button>
                <Button bgColor="game.black" border="2px" marginLeft="3em" borderColor="game.green" color="game.white"> 
                    <Link to="/message"> Messages </Link>
                </Button>
            </Box> */}
            <UserProgress name={"Student name"} completed={2} rating={3}/>
            <Box m="2em">
                <Folder forwardSource="test" backSource="/" folderType="unlocked"/>
                <Folder forwardSource="test" backSource="/" folderType="locked"/>
            </Box>

            <Outlet />
        </Box>
    )
};

export default TestComponent;