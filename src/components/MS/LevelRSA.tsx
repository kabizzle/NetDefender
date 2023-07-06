import { Box, Center, Flex, Text, Button, FormLabel, Input, Textarea} from "@chakra-ui/react";
import React, { FormEventHandler, useState } from "react";
import JSEncrypt from "jsencrypt";

const LevelRSA = () => {

  const [count, setCount] = useState(0)
  const [userPubKey, setUserPubKey] = useState("")
  const [message, setMessage] = useState("hello")
  const [userInput, setUserInput] = useState("")
  const [encryptedMsg, setEncryptedMsg] = useState("")
  const game_RSA = new JSEncrypt();
  const student_rsa = new JSEncrypt();
  const [displayText, setDisplayText] = useState("")
 
  // TODO:
  // - Turn these keys into environment variables, instead of hardcoding them.
  game_RSA.setPrivateKey("-----BEGIN RSA PRIVATE KEY-----MIICXAIBAAKBgQDB0Uko9wj9ULdwcjS8+89sYqPzIpBziLFJod57vtZBF19BUgR/DVO4MlYGodB3Fn86d7szQzEbyHZOdK23JuVH3EL2U/BVH3XeAIj7ybDmDTe2sb7gcA9/3EBxmt0l0bGxal9buWbCn0zOwOvjzNXJ5tXmtqM0eH0yIBEFdwgtiwIDAQABAoGANAzAWP/+qgjDOq9w+k+lpLXY0bK2mFBdTCjsVs8pOtHMAv7Dtlsd4JmkAKP0GAcyo8EDxQCGb6+mFeu/uy/24p2bgWBMn7kPudZnXsmLYxxNWk9DN5YPbNxlsUkM02H9ZDyXn3SZ5rzKNQrKjibHIrvrzmhEu6rCl7O8EVS2LAECQQDuMOFU5xHw3opXgmM+kCIu42pvxYwjgHtJDTMOrrjkQIoD9QJOBbIRGdyON0lvLe7wo2iJjzNhUMSZ8+yVeuVzAkEA0E8SQ7hF5FvwbeU9iKcY70/HpwN4PKGX876ugfgE6mfBFmrfSuTbKeE7bzht5UI/dJbhfcnwkwKASGLXeS5RiQJADiu0TDPPGnBy9I/aTa+PiRCYlXvAQaB0NT1myznT4CiCzYd3EqM+G8xZFdDuOoIWFBT0tDJj0SdX+vzLF32PRwJAD3qwusOIvg1u8luklPEF01K0XV7OooLHjd9PjGznwJtxJ79NVH1pI9WO2xbwY6bmnD1SCEznSaVX7wkZRfIBMQJBAIQUrR8Bz8b86Vjl3UiLNuf2iQl5MdetMRqIWe0uP3sJVCYRdEnLYXiVK2nh1zzzD4+XZH5/KRc27RSyGsqQuR0=-----END RSA PRIVATE KEY-----")

  game_RSA.setPublicKey("-----BEGIN PUBLIC KEY-----MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQDB0Uko9wj9ULdwcjS8+89sYqPzIpBziLFJod57vtZBF19BUgR/DVO4MlYGodB3Fn86d7szQzEbyHZOdK23JuVH3EL2U/BVH3XeAIj7ybDmDTe2sb7gcA9/3EBxmt0l0bGxal9buWbCn0zOwOvjzNXJ5tXmtqM0eH0yIBEFdwgtiwIDAQAB-----END PUBLIC KEY-----")
  

  const handleClick = () => {
    setCount(count+1)
  } 

  const renderScreen = () => {
    if (count == 0) {
      return (
        <>
          <Center w="100vw">
            <Flex h="25em" align="start" justify="space-around" direction="column">
              <Box w="38em">
                <Text m="0.5em 0 0.5em 0">Last week, you used the Caesar cipher to exchange encrypted messages.</Text>
                <Text m="0.5em 0 0.5em 0">However, as you know, the Caesar cipher can be easily cracked by computers, using brute force.</Text>
                <Text m="0.5em 0 0.5em 0">We should establish a more secure form of encryption</Text>
              </Box>

            <Button onClick={handleClick} marginLeft="15em"
              bg='game.black' border='2px' borderColor="game.white" color="game.white" 
              _hover={{color:"game.black", bg:"game.white"}}> 
              next
            </Button>
            </Flex>
          </Center>
        </>
      )
    }
    else if (count == 1) {
      return(
        <>
          <Center w="100vw">
            <Flex h="25em" align="start" justify="space-around" direction="column">
              <Box w="38em">
                <Text m="0.5em 0 0.5em 0">You should have OpenSSL installed in your terminal.</Text>
                <Text m="0.5em 0 0.5em 0">Let's use it to generate an RSA key pair</Text>
              </Box>

            <Button onClick={handleClick} marginLeft="15em"
              bg='game.black' border='2px' borderColor="game.white" color="game.white" 
              _hover={{color:"game.black", bg:"game.white"}}> 
              next
            </Button>
            </Flex>
          </Center>
        </>
      )      
    }
    else if (count == 2) {
      return(
        <>
          <Center w="100vw">
            <Flex h="25em" align="start" justify="space-around" direction="column">
              <Box w="38em">
                <Text m="0.5em 0 0.5em 0">Navigate to a directory where you would like to save your RSA key pair.</Text>
                <Box border="2px" p="0.5em 5em 0.5em 1em">cd ~/"your-directory-name"</Box>
                <Text m="0.5em 0 0.5em 0">Enter the following command in your terminal:</Text>
                <Box border="2px" p="0.5em 5em 0.5em 1em">openssl genrsa -out rsa_1024_priv.pem 1024</Box>
                <Text m="0.5em 0 0.5em 0">This generates a private key, which you can see using the following command:</Text>
                <Box border="2px" p="0.5em 5em 0.5em 1em">cat rsa_1024_priv.pem</Box>
              </Box>

          
            <Button onClick={handleClick} marginLeft="15em"
              bg='game.black' border='2px' borderColor="game.white" color="game.white" 
              _hover={{color:"game.black", bg:"game.white"}}> 
              next
            </Button>
            </Flex>
          </Center>
        </>
      )      
    }
    else if (count == 3) {
      return(
        <>
          <Center w="100vw">
            <Flex h="25em" align="start" justify="space-around" direction="column">
              <Box w="36em">
                <Text m="0.5em 0 0.5em 0">The following command generates your public key:</Text>
                <Box w="40em" border="2px" p="0.5em 0 0.5em 1em">openssl rsa -pubout -in rsa_1024_priv.pem -out rsa_1024_pub.pem</Box>
                <Text m="0.5em 0 0.5em 0">You can see your public key in the terminal using the following command:</Text>
                <Box border="2px" p="0.5em 5em 0.5em 1em">cat rsa_1024_pub.pem</Box>
              </Box>
          
            <Button onClick={handleClick} marginLeft="15em"
              bg='game.black' border='2px' borderColor="game.white" color="game.white" 
              _hover={{color:"game.black", bg:"game.white"}}> 
              next
            </Button>
            </Flex>
          </Center>
        </>
      )      
    }
  }

  return (
    <>
      <Center w="100vw">
        {renderScreen()}
      </Center>
    </>
  )
}

export default LevelRSA;
