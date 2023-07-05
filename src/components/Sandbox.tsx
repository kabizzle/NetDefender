import { Box, Center, Grid, GridItem, Button, FormLabel, Input, Textarea, Text} from "@chakra-ui/react";
import React, { useState } from "react";
import JSEncrypt from "jsencrypt";
import { ArrowBackIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";
// import fs from "fs";
// import {public_key} from '../assets/game_rsa_1024_pub.pem';

const Sandbox = () => {

  const [userPubKey, setUserPubKey] = useState("")
  const [userPrivKey, setUserPrivKey] = useState("")
  // const [message, setMessage] = useState("hello")
  const [userInput, setUserInput] = useState("")
  // const [cipherText, setCipherText] = useState("")
  // const [encryptedMsg, setEncryptedMsg] = useState("")
  const game_encrypt_RSA = new JSEncrypt();
  const game_decrypt_RSA = new JSEncrypt();
  // const student_encrypt_RSA = new JSEncrypt();
  const student_pub_RSA = new JSEncrypt();
  const student_RSA = new JSEncrypt();
  const [displayText, setDisplayText] = useState(<></>)
  const [showText, setShowText] = useState(false)
  // const [givenPrivKey, setGivenPrivKey] = useState(false)
  const [givenPubKey, setGivenPubKey] = useState(false)
  const [givenKey, setGivenKey] = useState(false)
  // const game_pub_key = fs.readFileSync('../assets/game_rsa_1024_pub.pem',{encoding: "utf-8"});

  let toEncrypt : string | false = false; 

  game_decrypt_RSA.setPrivateKey("-----BEGIN RSA PRIVATE KEY-----MIICXAIBAAKBgQDB0Uko9wj9ULdwcjS8+89sYqPzIpBziLFJod57vtZBF19BUgR/DVO4MlYGodB3Fn86d7szQzEbyHZOdK23JuVH3EL2U/BVH3XeAIj7ybDmDTe2sb7gcA9/3EBxmt0l0bGxal9buWbCn0zOwOvjzNXJ5tXmtqM0eH0yIBEFdwgtiwIDAQABAoGANAzAWP/+qgjDOq9w+k+lpLXY0bK2mFBdTCjsVs8pOtHMAv7Dtlsd4JmkAKP0GAcyo8EDxQCGb6+mFeu/uy/24p2bgWBMn7kPudZnXsmLYxxNWk9DN5YPbNxlsUkM02H9ZDyXn3SZ5rzKNQrKjibHIrvrzmhEu6rCl7O8EVS2LAECQQDuMOFU5xHw3opXgmM+kCIu42pvxYwjgHtJDTMOrrjkQIoD9QJOBbIRGdyON0lvLe7wo2iJjzNhUMSZ8+yVeuVzAkEA0E8SQ7hF5FvwbeU9iKcY70/HpwN4PKGX876ugfgE6mfBFmrfSuTbKeE7bzht5UI/dJbhfcnwkwKASGLXeS5RiQJADiu0TDPPGnBy9I/aTa+PiRCYlXvAQaB0NT1myznT4CiCzYd3EqM+G8xZFdDuOoIWFBT0tDJj0SdX+vzLF32PRwJAD3qwusOIvg1u8luklPEF01K0XV7OooLHjd9PjGznwJtxJ79NVH1pI9WO2xbwY6bmnD1SCEznSaVX7wkZRfIBMQJBAIQUrR8Bz8b86Vjl3UiLNuf2iQl5MdetMRqIWe0uP3sJVCYRdEnLYXiVK2nh1zzzD4+XZH5/KRc27RSyGsqQuR0=-----END RSA PRIVATE KEY-----")

  game_encrypt_RSA.setPublicKey("-----BEGIN PUBLIC KEY-----MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQDB0Uko9wj9ULdwcjS8+89sYqPzIpBziLFJod57vtZBF19BUgR/DVO4MlYGodB3Fn86d7szQzEbyHZOdK23JuVH3EL2U/BVH3XeAIj7ybDmDTe2sb7gcA9/3EBxmt0l0bGxal9buWbCn0zOwOvjzNXJ5tXmtqM0eH0yIBEFdwgtiwIDAQAB-----END PUBLIC KEY-----")
  // game_RSA.setPublicKey(game_pub_key);

  const testForm = () => {
    const handlePubKeyChange: React.ChangeEventHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
      event.preventDefault();
      setUserPubKey(event.target.value)
    }
    
    const handlePrivKeyChange: React.ChangeEventHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
      event.preventDefault();
      setUserPrivKey(event.target.value)
    }

    const handleUserInput: React.ChangeEventHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
      event.preventDefault();
      setUserInput(event.target.value)
    }

    // const handleCipherInput: React.ChangeEventHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    //   event.preventDefault();
    //   setCipherText(event.target.value)
    // }

    const handlePubKeySubmit: React.FormEventHandler = (event: React.FormEvent<HTMLInputElement>) => {
      event.preventDefault();
      console.log("clicked")
      setGivenPubKey(true)
      // student_encrypt_RSA.setPublicKey(userPubKey.valueOf())
      // student_pub_RSA.setPublicKey(userPubKey)
    }

    const handlePrivKeySubmit: React.FormEventHandler = (event: React.FormEvent<HTMLInputElement>) => {
      event.preventDefault();
      console.log("priv key submit clicked")
      // setGivenPrivKey(true)
      setGivenKey(true)
      // student_decrypt_RSA.setPrivateKey(userPrivKey.valueOf())
      // student_RSA.setPrivateKey(userPrivKey)
      // student_decrypt_RSA.getPublicKey()
      // console.log("student pub key: " + student_decrypt_RSA.getPublicKey())
    }
    
    const handleEncrypt = () => {
      if (givenPubKey){
        console.log("encrypting using input private key")
        // toEncrypt = student_encrypt_RSA.encrypt(userInput);
        student_pub_RSA.setPublicKey(userPubKey)
        toEncrypt = student_pub_RSA.encrypt(userInput);
      } else {
        console.log("using game public key")
        toEncrypt = game_encrypt_RSA.encrypt(userInput.valueOf());
      }
      if (toEncrypt !== false) {
        console.log(toEncrypt);
        setShowText(true);
        setDisplayText(
          <>
            <Text>Encrypted text: </Text>
            <Text>{toEncrypt}</Text>
          </>
        )
        console.log("decrypt attempt (student_decrypt_RSA): " + student_RSA.decrypt(toEncrypt));
        console.log("typeOf(toEncrypt) " + typeof(toEncrypt));
        // console.log("decrypt attempt (student_encrypt_RSA): " + student_encrypt_RSA.decrypt(toEncrypt));
        // let decrypted = game_decrypt_RSA.decrypt(toEncrypt);
        // console.log(decrypted)
      }
      else {
        console.log("Error: unable to encrypt");
        setShowText(true);
        setDisplayText(<Text>not encrypted</Text>);
      }
    }

    const handleDecrypt = () => {
      // let toDecrypt = game_decrypt_RSA.decrypt(userInput);
      let toDecrypt : string | false = false;

      if (givenKey){
        console.log("using input private key")
        console.log("attempting to decrypt: \n" + userInput.valueOf())
        console.log("toEncrypt: " + toEncrypt)
        console.log("toEncrypt === userInput: " + toEncrypt.valueOf() === userInput.valueOf())
        // student_RSA.getPrivateKey()
        student_RSA.setPrivateKey(userPrivKey)
        toDecrypt = student_RSA.decrypt(userInput)
      } else {
        console.log("using game private key")
        toDecrypt = game_decrypt_RSA.decrypt(userInput.valueOf());
      }
      if (toDecrypt !== false) {
        console.log(toDecrypt);
        // setDisplayText('Decrypted text: \n' + toDecrypt);
        setShowText(true);
        setDisplayText(
          <>
            <Text>Decrypted text: </Text>
            <Text>{toDecrypt}</Text>
          </>
        )
      }
      else {
        console.log("Error: unable to decrypt");
        console.log("current: " + game_decrypt_RSA.decrypt(userInput.valueOf()))
        setShowText(true);
        setDisplayText(<Text>"not decrypted"</Text>);
      }
      // console.log(game_RSA.decrypt(encryptedMsg));
      // setDisplayText("encryptedMsg");
    }
    return (
      <>
        <Grid templateColumns="1fr 1fr" templateRows="1fr 1fr 1fr" m="5em 15em 0 15em" p="0 2em 0 0" gap={5}>
          <GridItem rowStart={1} colSpan={1}>
            <Link to="/">
              <ArrowBackIcon boxSize={10} pos="absolute" left="5em" top="-3em" border="1px"/>
            </Link>
          
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
          </GridItem>

          <GridItem rowStart={1} colSpan={1}>
            <FormLabel m="0 0 1em 12em">Private Key</FormLabel>
            <Textarea placeholder={
            '-----BEGIN PRIVATE KEY-----'+
            'xxxxxxxxxxxxxxxxxxxxxxxxxx\n'+
            'xxxxxxxxxxxxxxxxxxxxxxxxxx\n'+
            'xxxxxxxxxxxxxxxxxxxxxxxxxx\n'+
            '-----END PRIVATE KEY-----'} 
            w="30em" h="10em" p="1em" borderColor="game.gray" onChange={handlePrivKeyChange}/>
            <Box m="2em 0 0 13em">
              <Button onClick={handlePrivKeySubmit}>submit</Button>
            </Box>
          </GridItem>
    
          <GridItem rowSpan={1} colSpan={1} m="2em 0 0 0"> 
            <FormLabel>Message to encrypt</FormLabel>
            <Textarea placeholder="test message" w="30em" h="10em" p="1em" borderColor="game.gray" onChange={handleUserInput}/>
          </GridItem>

          <GridItem m="3.5em 0 0 0">
            <Box m="2em 0 1em 0">
              <Button onClick={handleEncrypt}>encrypt</Button>
            </Box>
            <Box m="2em 0 1em 0">
              <Button onClick={handleDecrypt}>decrypt</Button>
            </Box>
          </GridItem>
          {/*<Box m="1em"> 
            <form>
              <FormLabel>Message to decrypt</FormLabel>
              <Textarea placeholder="ciphertext" 
              w="20em" h="5em" onChange={handleCipherInput}/>
              <Button onClick={handleDecrypt}>decrypt</Button>
            </form>
          </Box>*/
          }
          
          <GridItem rowSpan={1} colSpan={2} m="2em 0 0 0">
            {showText ?
              <Box border="1px" minH="5em" p="1em">
                {displayText}
              </Box>
            : <></>
            }
          </GridItem>
        </Grid>
      </>
    )
  } 

  return (
    <>
      {testForm()}
    </>
  )
}

export default Sandbox;
