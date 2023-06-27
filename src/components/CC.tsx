import { useState } from "react";
import { AbsoluteCenter, Box, Button, FormControl, FormLabel, Input, VStack } from "@chakra-ui/react";

const CC = () => {

  const ALPHABET = 'abcdefghijklmnopqrstuvwxyz';
  const [plaintext, setPlaintext] = useState('');
  const [shift, setShift] = useState(0);
  const [ciphertext, setCiphertext] = useState('');

  const handlePlaintextChange = (event: any) => {
    setPlaintext(event.target.value);
  };

  const handleShiftChange = (event: any) => {
    setShift(parseInt(event.target.value, 10));
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();
    const result = caesarCipher(plaintext, shift);
    setCiphertext(result);
  };

  function caesarCipher(text: string, shift: number): string {
    let result = '';
  
    for (let i = 0; i < text.length; i++) {
      const char = text[i];
  
      // Check if the character is a letter
      if (ALPHABET.includes(char)) {
        const index = ALPHABET.indexOf(char);
        let newIndex = (index + shift) % ALPHABET.length;
  
        // Handle negative shifts
        if (newIndex < 0) {
          newIndex += ALPHABET.length;
        }
  
        result += ALPHABET[newIndex];
      } else {
        result += char; // Non-alphabetic characters remain the same
      }
    }
  
    return result;
  };

  return (
    <Box display="flex" justifyContent="center" alignItems="center" height="100vh">
    <Box display="flex" alignItems="center" justifyContent="center" w="700px" h="500px" borderColor="game.white" borderWidth="6px" >
      <form onSubmit={handleSubmit}>
        <VStack spacing={4} align="flex-start">
          <FormControl id="plaintext">
            <FormLabel>Plaintext</FormLabel>
            <Input border="2px" borderColor="game.white" bg="game.black" color="game.white" borderRadius="0px" w="500px" textAlign="start" 
            type="text" value={plaintext} onChange={handlePlaintextChange} />
          </FormControl>

          <FormControl id="shift" >
            <FormLabel>Shift Value</FormLabel>
            <Input border="2px" borderColor="game.white" bg="game.black" color="game.white" borderRadius="0px" w="50px" textAlign="center"
            type="number" value={shift} onChange={handleShiftChange} />
          </FormControl>

          <Button type="submit" border="2px" borderColor="game.white" bg="game.black" color="game.white" borderRadius="0px">
            Encrypt
          </Button>

          <FormControl id="ciphertext">
            <FormLabel>Ciphertext</FormLabel>
            <Input border="2px" borderColor="game.white" bg="game.black" color="game.white" borderRadius="0px" w="500px" textAlign="start"
            type="text" value={ciphertext} isReadOnly />
          </FormControl>
        </VStack>
      </form>
    </Box>
    </Box>
  );
  



};

export default CC;
