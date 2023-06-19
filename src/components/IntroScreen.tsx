import { useState } from "react";
import { Box, Button } from "@chakra-ui/react";

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
    <Box border='2px' borderColor='game.white' boxSize='400px'>
      <Box pos='absolute' top='0' left='0' marginTop='7em' marginLeft='3em' marginRight='3em' fontSize='20px' >
        <p>
          {displayText}
        </p>
      </Box>

      <Button onClick={addText} position='absolute' bottom='0' left='0' marginBottom='3em' marginLeft='10em' bg='game.black' border='2px' borderColor='whiteAlpha.800' color='whiteAlpha.800'> 
        next
      </Button>
    </Box>
  );
};

export default IntroScreen;
