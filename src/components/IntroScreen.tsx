import { Box, Button, Center, Image } from "@chakra-ui/react";
import { CloseIcon } from '@chakra-ui/icons'
import { Link } from "react-router-dom";

interface introProps{
  displayText: string;
  arrowProps: string[];
  handleClick(): void;
}
const IntroScreen = ({ displayText, arrowProps, handleClick }: introProps) => {

  return (
    <>
      <Box pos="absolute" top="0" left="0" m={arrowProps[0]} transform={arrowProps[1]}>
        <Image src="/arrow.svg" w={arrowProps[2]}/>
      </Box>
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
        <Button onClick={handleClick} pos='absolute' m="16em 2.5em 0 13em" bg='game.black' border='2px' borderColor='whiteAlpha.800' color='whiteAlpha.800'> 
          next
        </Button>
      </Box>
    </>
  );
};

export default IntroScreen;
