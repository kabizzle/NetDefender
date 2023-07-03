import { Box, Center, Flex, Button, FormLabel, Input, Textarea, Text} from "@chakra-ui/react";
import React, { useState } from "react";
import JSEncrypt from "jsencrypt";
// import fs from "fs";
// import {public_key} from '../assets/game_rsa_1024_pub.pem';

const Sandbox = () => {

  const [userPubKey, setUserPubKey] = useState("")
  const [message, setMessage] = useState("hello")
  const [userInput, setUserInput] = useState("")
  const [cipherText, setCipherText] = useState("")
  const [encryptedMsg, setEncryptedMsg] = useState("")
  const game_encrypt_RSA = new JSEncrypt();
  const game_decrypt_RSA = new JSEncrypt();
  const student_rsa = new JSEncrypt();
  const [displayText, setDisplayText] = useState(<></>)
  // const game_pub_key = fs.readFileSync('../assets/game_rsa_1024_pub.pem',{encoding: "utf-8"});

  game_decrypt_RSA.setPrivateKey("-----BEGIN RSA PRIVATE KEY-----MIICXAIBAAKBgQDB0Uko9wj9ULdwcjS8+89sYqPzIpBziLFJod57vtZBF19BUgR/DVO4MlYGodB3Fn86d7szQzEbyHZOdK23JuVH3EL2U/BVH3XeAIj7ybDmDTe2sb7gcA9/3EBxmt0l0bGxal9buWbCn0zOwOvjzNXJ5tXmtqM0eH0yIBEFdwgtiwIDAQABAoGANAzAWP/+qgjDOq9w+k+lpLXY0bK2mFBdTCjsVs8pOtHMAv7Dtlsd4JmkAKP0GAcyo8EDxQCGb6+mFeu/uy/24p2bgWBMn7kPudZnXsmLYxxNWk9DN5YPbNxlsUkM02H9ZDyXn3SZ5rzKNQrKjibHIrvrzmhEu6rCl7O8EVS2LAECQQDuMOFU5xHw3opXgmM+kCIu42pvxYwjgHtJDTMOrrjkQIoD9QJOBbIRGdyON0lvLe7wo2iJjzNhUMSZ8+yVeuVzAkEA0E8SQ7hF5FvwbeU9iKcY70/HpwN4PKGX876ugfgE6mfBFmrfSuTbKeE7bzht5UI/dJbhfcnwkwKASGLXeS5RiQJADiu0TDPPGnBy9I/aTa+PiRCYlXvAQaB0NT1myznT4CiCzYd3EqM+G8xZFdDuOoIWFBT0tDJj0SdX+vzLF32PRwJAD3qwusOIvg1u8luklPEF01K0XV7OooLHjd9PjGznwJtxJ79NVH1pI9WO2xbwY6bmnD1SCEznSaVX7wkZRfIBMQJBAIQUrR8Bz8b86Vjl3UiLNuf2iQl5MdetMRqIWe0uP3sJVCYRdEnLYXiVK2nh1zzzD4+XZH5/KRc27RSyGsqQuR0=-----END RSA PRIVATE KEY-----")

  game_encrypt_RSA.setPublicKey("-----BEGIN PUBLIC KEY-----MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQDB0Uko9wj9ULdwcjS8+89sYqPzIpBziLFJod57vtZBF19BUgR/DVO4MlYGodB3Fn86d7szQzEbyHZOdK23JuVH3EL2U/BVH3XeAIj7ybDmDTe2sb7gcA9/3EBxmt0l0bGxal9buWbCn0zOwOvjzNXJ5tXmtqM0eH0yIBEFdwgtiwIDAQAB-----END PUBLIC KEY-----")
  // game_RSA.setPublicKey(game_pub_key);

  const testForm = () => {
    const handleChange: React.ChangeEventHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
      event.preventDefault();
      setUserPubKey(event.target.value)
    }
    
    const handleUserInput: React.ChangeEventHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
      event.preventDefault();
      setUserInput(event.target.value)
    }

    const handleCipherInput: React.ChangeEventHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
      event.preventDefault();
      setCipherText(event.target.value)
    }

    const handleSubmit: React.FormEventHandler = (event: React.FormEvent<HTMLInputElement>) => {
      event.preventDefault();
      console.log("clicked")

      student_rsa.setPublicKey(userPubKey)
    }

    const handleEncrypt = () => {
      let toEncrypt = game_encrypt_RSA.encrypt(userInput);
      if (toEncrypt !== false) {
        console.log(toEncrypt);
        setDisplayText(
          <>
            <Text>Encrypted text: </Text>
            <Text>{toEncrypt}</Text>
          </>
        )

        let decrypted = game_decrypt_RSA.decrypt(toEncrypt);
        console.log(decrypted)
      }
      else {
        console.log("Error: unable to encrypt");
        setDisplayText(<Text>not encrypted</Text>);
      }
    }

    const handleDecrypt = () => {
      let toDecrypt = game_decrypt_RSA.decrypt(cipherText);
      if (toDecrypt !== false) {
        console.log(toDecrypt);
        // setDisplayText('Decrypted text: \n' + toDecrypt);
        setDisplayText(
          <>
            <Text>Decrypted text: </Text>
            <Text>{toDecrypt}</Text>
          </>
        )
      }
      else {
        console.log("Error: unable to decrypt");
        console.log("current: " + game_decrypt_RSA.decrypt(cipherText))
        setDisplayText(<Text>"not decrypted"</Text>);
      }
      // console.log(game_RSA.decrypt(encryptedMsg));
      // setDisplayText("encryptedMsg");
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
          
          <Box m="1em"> 
            <form>
              <FormLabel>Message to decrypt</FormLabel>
              <Textarea placeholder="ciphertext" 
              w="20em" h="5em" onChange={handleCipherInput}/>
              <Button onClick={handleDecrypt}>decrypt</Button>
            </form>
          </Box>
          
          <Box w="30em" m="2em" border="2px" padding="1em 2em 1em 2em"> 
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

export default Sandbox;
