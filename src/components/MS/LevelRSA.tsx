import { Box, Center, Flex, Text, Button, FormLabel, Textarea, useToast} from "@chakra-ui/react";
import React, { FormEventHandler, useState } from "react";
import JSEncrypt from "jsencrypt";

const LevelRSA = () => {

  const [count, setCount] = useState(0)
  const [userPubKey, setUserPubKey] = useState("")
  const [message, setMessage] = useState("hello")
  const [givenPubKey, setGivenPubKey] = useState(false)
  const [encryptedMsg, setEncryptedMsg] = useState("")
  const game_RSA = new JSEncrypt();
  const student_rsa = new JSEncrypt();
  const [displayText, setDisplayText] = useState("")
  const toast = useToast()
  let pubKeyRegex = /^-----BEGIN PUBLIC KEY-----([A-Za-z0-9+\/=\s]+)-----END PUBLIC KEY-----\n?$/  
  // TODO:
  // - Turn these keys into environment variables, instead of hardcoding them.
  game_RSA.setPrivateKey("-----BEGIN RSA PRIVATE KEY-----MIICXAIBAAKBgQDB0Uko9wj9ULdwcjS8+89sYqPzIpBziLFJod57vtZBF19BUgR/DVO4MlYGodB3Fn86d7szQzEbyHZOdK23JuVH3EL2U/BVH3XeAIj7ybDmDTe2sb7gcA9/3EBxmt0l0bGxal9buWbCn0zOwOvjzNXJ5tXmtqM0eH0yIBEFdwgtiwIDAQABAoGANAzAWP/+qgjDOq9w+k+lpLXY0bK2mFBdTCjsVs8pOtHMAv7Dtlsd4JmkAKP0GAcyo8EDxQCGb6+mFeu/uy/24p2bgWBMn7kPudZnXsmLYxxNWk9DN5YPbNxlsUkM02H9ZDyXn3SZ5rzKNQrKjibHIrvrzmhEu6rCl7O8EVS2LAECQQDuMOFU5xHw3opXgmM+kCIu42pvxYwjgHtJDTMOrrjkQIoD9QJOBbIRGdyON0lvLe7wo2iJjzNhUMSZ8+yVeuVzAkEA0E8SQ7hF5FvwbeU9iKcY70/HpwN4PKGX876ugfgE6mfBFmrfSuTbKeE7bzht5UI/dJbhfcnwkwKASGLXeS5RiQJADiu0TDPPGnBy9I/aTa+PiRCYlXvAQaB0NT1myznT4CiCzYd3EqM+G8xZFdDuOoIWFBT0tDJj0SdX+vzLF32PRwJAD3qwusOIvg1u8luklPEF01K0XV7OooLHjd9PjGznwJtxJ79NVH1pI9WO2xbwY6bmnD1SCEznSaVX7wkZRfIBMQJBAIQUrR8Bz8b86Vjl3UiLNuf2iQl5MdetMRqIWe0uP3sJVCYRdEnLYXiVK2nh1zzzD4+XZH5/KRc27RSyGsqQuR0=-----END RSA PRIVATE KEY-----")

  // game_RSA.setPublicKey("-----BEGIN PUBLIC KEY-----MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQDB0Uko9wj9ULdwcjS8+89sYqPzIpBziLFJod57vtZBF19BUgR/DVO4MlYGodB3Fn86d7szQzEbyHZOdK23JuVH3EL2U/BVH3XeAIj7ybDmDTe2sb7gcA9/3EBxmt0l0bGxal9buWbCn0zOwOvjzNXJ5tXmtqM0eH0yIBEFdwgtiwIDAQAB-----END PUBLIC KEY-----")
  

  const handleClick = () => {
    setCount(count+1)
  }

  // updates userPubKey hook with inputted Public Key
  const handlePubKeyChange: React.ChangeEventHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    setUserPubKey(event.target.value)
  }

  // changes givenPubKey to true, indicating that user has inputted a public key.
  // This public key should be used for encrypting any text input from the user
  // TODO:
  // - send userPubKey to database when submitted. Implement a POST request for this in API
  const handlePubKeySubmit: React.FormEventHandler = (event: React.FormEvent<HTMLInputElement>) => {
    event.preventDefault();
    console.log("attempt to submit public key")
    if (pubKeyRegex.test(userPubKey)) {
      // handleClick()
      setGivenPubKey(true)
      toast({
        title:"Public key added.",
        status: "success",
        duration: 3500
      })
    } else {
      toast({
        title: "Error:",
        description: 'Check if public key is inputted correctly.',
        status: "error",
          duration: 8000
      })
    }
  }

  const pubKeyTask = () => {
    console.log("count = " + count)
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
    else if (count == 4) {
      return(
        <>
          <Center w="100vw">
            <Flex h="25em" align="start" justify="space-around" direction="column">
              <Box w="36em">
                <Text m="0.5em 0 0.5em 0">Future messages will be encrypted using your public key.</Text>
                <Box w="40em" border="2px" p="0.5em 0 0.5em 1em">openssl rsa -pubout -in rsa_1024_priv.pem -out rsa_1024_pub.pem</Box>
                <Text m="0.5em 0 0.5em 0">Enter your public key below:</Text>
                  <FormLabel m="0 0 1em 12em">Public Key</FormLabel>
                  <Textarea placeholder={
                    '-----BEGIN PUBLIC KEY-----'+
                    'xxxxxxxxxxxxxxxxxxxxxxxxxx\n'+
                    'xxxxxxxxxxxxxxxxxxxxxxxxxx\n'+
                    'xxxxxxxxxxxxxxxxxxxxxxxxxx\n'+
                    '-----END PUBLIC KEY-----'} 
                    maxW="30em" h="10em" p="1em" borderColor="game.gray" onChange={handlePubKeyChange}/>
                  <Box m="2em 0 0 13em">
                  <Button onClick={handlePubKeySubmit}>submit</Button>
                  </Box>
              </Box>
          
          {//   <Button onClick={handleClick} marginLeft="15em"
          //     bg='game.black' border='2px' borderColor="game.white" color="game.white" 
          //     _hover={{color:"game.black", bg:"game.white"}}> 
          //     next
          //   </Button>
          }
            </Flex>
          </Center>
        </>
      )      
    }
    else {
      if (givenPubKey) {
        return (
        <>success</>
        )
      } else {
        return (
          <Button onClick={() => {
            setCount(0)
          }} marginLeft="15em"
            bg='game.black' border='2px' borderColor="game.white" color="game.white" 
            _hover={{color:"game.black", bg:"game.white"}}> 
            back
          </Button>
        )
      }
    }
  }

  const decryptTask = () => {
    student_rsa.setPublicKey(userPubKey)
    let cipherText = student_rsa.encrypt("Use the game's public key to encrypt the word: Netdefender")
    return (
      <>
        <Center w="100vw">
          <Flex h="25em" align="start" justify="space-around" direction="column">
            <Box w="36em">
              <Text m="0.5em 0 0.5em 0">Now that you have entered your public key, you can recieve your first encrypted message.</Text>
              <Box w="40em" border="2px" p="0.5em 0 0.5em 1em">{cipherText}</Box>
              <Text m="0.5em 0 0.5em 0">The public key for the game is:</Text>
              <Box border="2px" p="0.5em 5em 0.5em 1em">{game_RSA.getPublicKey()}</Box>
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

  const renderScreen = () => {
    if (!givenPubKey) {
      return (pubKeyTask())
    } else {
      return(decryptTask())
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
