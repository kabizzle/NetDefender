import { Box, Button } from "@chakra-ui/react";
import { Link, Outlet } from "react-router-dom";

const TestComponent = () => {
    
    return (
        <>
            <Box border="2px" borderColor="game.green">
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
            </Box>

            <Outlet />
        </>
    )
};

export default TestComponent;