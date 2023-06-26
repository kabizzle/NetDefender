import { useState } from "react";
import { Box, Button, Center } from "@chakra-ui/react";
import { CloseIcon } from '@chakra-ui/icons'
import { Link } from "react-router-dom";

const IntroScreen = () => {
  const [displayText, setDisplayText] = useState("Welcome to NetDefender.");
  const [count, setCount] = useState(0);

  const addText = () => {
    setCount(count+1);
    if (count == 1) { 
      setDisplayText("Your company has been hacked.");
    }
    if (count == 2) {
      setDisplayText("IT has detected that the threat originated from your computer.");
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
    <Box pos="relative" border='2px' borderColor='game.white' w='500px' h="350px">
      <Center w="36px" h="36px" border="2px" borderColor="game.white" pos="absolute" top="0" right="0" m="1em 1em 0">
        <Link to="/">
          <CloseIcon />
        </Link>
      </Center>
      <Box pos='absolute' m="6em 3em 0 3em" fontSize='20px' >
        <p>
          {displayText}
        </p>
      </Box>

      <Button onClick={addText} pos='absolute' m="16em 2.5em 0 13em" bg='game.black' border='2px' borderColor='whiteAlpha.800' color='whiteAlpha.800'> 
        next
      </Button>
    </Box>
  );
};

export default IntroScreen;
