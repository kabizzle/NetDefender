import { Box, Center, Flex, Text, Button, FormLabel, Input, Textarea} from "@chakra-ui/react";
import React, { FormEventHandler, useState } from "react";
import JSEncrypt from "jsencrypt";

const LevelRSA = () => {

  // const initialView: React.JSX.Element  =         
  //   <>
  //     <Center w="100vw">
  //       <Flex h="10em" align="start" justify="space-around" direction="column">
  //         <Box>
  //           <Text>Last week, you used the Caesar cipher to exchange encrypted messages.</Text>
  //           <Text>However, as you know, the Caesar cipher can be easily cracked by computers, using brute force.</Text>
  //           <Text>We should establish a more secure form of encryption</Text>
  //         </Box>
  //
  //         <Box border="1px" p="0.5em 5em 0.5em 1em">openssl genrsa -out rsa_1024_priv.pem 1024</Box>
  //       </Flex>
  //     </Center>
  //   </>

  const [count, setCount] = useState(0)
  const [userPubKey, setUserPubKey] = useState("")
  const [message, setMessage] = useState("hello")
  const [userInput, setUserInput] = useState("")
  const [encryptedMsg, setEncryptedMsg] = useState("")
  const game_RSA = new JSEncrypt();
  const student_rsa = new JSEncrypt();
  const [displayText, setDisplayText] = useState("")
  
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
              <Box maxW="38em">
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
        <Box border="1px" p="0.5em 5em 0.5em 1em">openssl genrsa -out rsa_1024_priv.pem 1024</Box>
      )      
    }
    else{

    }
  }
  
  const testForm = () => {
    const handleChange: React.ChangeEventHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
      setUserPubKey(event.target.value)
    }
    
    const handleUserInput: React.ChangeEventHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
      setUserInput(event.target.value)
    }

    const handleSubmit: React.FormEventHandler = (event: React.FormEvent<HTMLInputElement>) => {
      event.preventDefault();
      console.log("clicked")

      student_rsa.setPublicKey(userPubKey)
      // const encrypted = encrypt.encrypt(message)
      // console.log("encrypted: ", encrypted)
      //
      // const decrypted = decrypt.decrypt(encrypted)
      // console.log("decrypted: ", decrypted)
    }

    const handleEncrypt = () => {
      console.log(student_rsa.encrypt(userInput));
      setDisplayText("encryptedMsg");
    }

    const handleDecrypt = () => {
      console.log(game_RSA.decrypt(encryptedMsg));
      setDisplayText("encryptedMsg");
    }
    return (
      <>
        <Flex direction="column" align="center" justify="space-around">
          <Box m="1em"> 
            <form>
              <FormLabel>Public Key</FormLabel>
              <Textarea placeholder={
              '-----BEGIN PUBLIC KEY-----'+
              'xxxxxxxxxxxxxxxxxxxxxxxxxx\n'+
              'xxxxxxxxxxxxxxxxxxxxxxxxxx\n'+
              'xxxxxxxxxxxxxxxxxxxxxxxxxx\n'+
              '-----END PUBLIC KEY-----'} 
              w="20em" h="10em" onChange={handleChange}/>
              <Button onClick={handleSubmit}>submit</Button>
            </form>
          </Box>
    
          <Box m="1em"> 
            <form>
              <FormLabel>Message to encrypt</FormLabel>
              <Input placeholder="test message" 
              w="20em" h="5em" onChange={handleUserInput}/>
              <Button onClick={handleEncrypt}>encrypt</Button>
            </form>
          </Box>
          
          <Box> 
            <Button onClick={handleDecrypt}>decrypt</Button>
          </Box>

          <Box> 
            {displayText}
          </Box>
        </Flex>
      </>
    )
  } 

  return (
    <>
      <Center w="100vw">
        {testForm()}
      </Center>
    </>
  )
}

export default LevelRSA;
