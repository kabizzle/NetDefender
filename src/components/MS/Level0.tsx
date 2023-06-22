import { useState } from "react";
import { AbsoluteCenter, Box, Button } from "@chakra-ui/react";
import Questions from  "./Questions.tsx";


const Level0 = () => {

  const [currentScreen, setCurrentScreen] = useState("startScreen");

  const renderScreen = () => {
    switch (currentScreen) {
      case "startScreen":
      return (
        <Box display="flex" flexDir="column" alignItems="center" paddingTop="20">
        <Box border="4px" borderColor="game.white" width="500px" display="flex" flexDir="column" alignItems="center" >
          <Box padding="10" fontSize="30">
        Welcome to Level 1
        </Box>
        <Button margin="8" borderRadius="0px" border="2px" borderColor="game.white" bg="game.black" color="game.white" 
        onClick={() => setCurrentScreen("questionScreen")}>
          Start</Button>
        </Box>
        </Box>
      );
    
  case "questionScreen":
    return (
      <Box >
        
        <Questions/>
        
      </Box>
    );


     

}};

return <div>{renderScreen()}</div>;
};

export default Level0;
