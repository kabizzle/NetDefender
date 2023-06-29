import { Box, Center, Code, Flex, Text, Button} from "@chakra-ui/react"
import { useState } from "react"

const LevelRSA = () => {
  const [currentView, setCurrentView] = useState(<></>)

  const handleClick = () => {
    setCurrentView(
      <>
        <Center w="100vw">
          <Flex h="10em" align="start" justify="space-around" direction="column">
            <Box>
              <Text>Last week, you used the Caesar cipher to exchange encrypted messages.</Text>
              <Text>However, as you know, the Caesar cipher can be easily cracked by computers, using brute force.</Text>
              <Text>We should establish a more secure form of encryption</Text>
            </Box>

            <Code>
             Hello 
            </Code>
          </Flex>
        </Center>
      </>
    )
  } 
  return (
    <>
      <Center w="100vw" pos="relative">
          {currentView}
          <Button onClick={handleClick} pos='absolute' m="16em 2.5em 0 13em" 
            bg='game.black' border='2px' borderColor="game.white" color="game.white" 
            _hover={{color:"game.black", bg:"game.white"}}> 
            next
          </Button>
      </Center>
    </>
  )
}

export default LevelRSA;
