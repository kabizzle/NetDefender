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
  const encrypt = new JSEncrypt();

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

    const handleSubmit: React.FormEventHandler = (event: React.FormEvent<HTMLInputElement>) => {
      event.preventDefault();
      console.log("clicked")

      encrypt.setPublicKey(userPubKey)
      const encrypted = encrypt.encrypt(message)
      console.log(encrypted)

    }
    return (
      <form>
        <FormLabel>Public Key</FormLabel>
        <Textarea placeholder={
        '-----BEGIN PUBLIC KEY-----'+
        'xxxxxxxxxxxxxxxxxxxxxxxxxx'+
        'xxxxxxxxxxxxxxxxxxxxxxxxxx'+
        'xxxxxxxxxxxxxxxxxxxxxxxxxx'+
        '-----END PUBLIC KEY-----'} 
        w="20em" h="10em" onChange={handleChange}/>
        <Button onClick={handleSubmit}>submit</Button>
      </form>
    )
  } 

  return (
    <>
      <Center w="100vw" pos="relative">
        {testForm()}
      </Center>
    </>
  )
}

export default LevelRSA;
