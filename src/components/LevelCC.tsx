import { useState } from "react";
import { Box, Button, FormControl, FormLabel, Input, VStack,   NumberInput,
    NumberInputField,
    NumberInputStepper,
    NumberIncrementStepper,
    NumberDecrementStepper,
    Textarea, } from "@chakra-ui/react";

const LevelCC = () => {

    const ALPHABET = 'abcdefghijklmnopqrstuvwxyz';
    const UPPER_ALPHABET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    
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
        let alphabet = ALPHABET;
    
        // Determine whether the character is uppercase or lowercase
        if (ALPHABET.includes(char)) {
          alphabet = ALPHABET;
        } else if (UPPER_ALPHABET.includes(char)) {
          alphabet = UPPER_ALPHABET;
        } else {
          result += char; // Non-alphabetic characters remain the same
          continue;
        }
    
        const index = alphabet.indexOf(char);
        let newIndex = (index + shift) % alphabet.length;
    
        // Handle negative shifts
        if (newIndex < 0) {
          newIndex += alphabet.length;
        }
    
        result += alphabet[newIndex];
      }
    
      return result;
    };
  
    return (
      <Box display="flex" justifyContent="center" alignItems="center" height="100%">
        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          w="700px"
          h="400px"
          borderColor="game.white"
          borderWidth="6px"
          bg="game.black"
        >
          <form onSubmit={handleSubmit}>
            <VStack spacing={4} align="flex-start">
              <FormControl id="plaintext">
                <FormLabel>Plaintext</FormLabel>
                <Textarea
                  border="2px"
                  borderColor="game.white"
                  bg="game.black"
                  color="game.white"
                  borderRadius="0px"
                  w="500px"
                  textAlign="start"
                  value={plaintext}
                  onChange={handlePlaintextChange}
                  resize="none"
                />
              </FormControl>
  
              <FormControl id="shift">
                <FormLabel>Shift Value</FormLabel>
                <NumberInput defaultValue={0} w="20" variant="outline" color="game.white" focusBorderColor="whiteAlpha" onChange={handleShiftChange}>
                 <NumberInputField borderRadius="0" />
                 <NumberInputStepper  >
                    <NumberIncrementStepper color="game.white" bg="game.black"/>
                    <NumberDecrementStepper color="game.white" bg="game.black"/>
                 </NumberInputStepper>
                </NumberInput>
              </FormControl>
  
              <Button
                type="submit"
                border="2px"
                borderColor="game.white"
                bg="game.black"
                color="game.white"
                borderRadius="0px"
                _hover={{color:"game.black", bg:"game.white"}}
              >
                Decrypt
              </Button>
  
              <FormControl id="ciphertext">
                <FormLabel>Ciphertext</FormLabel>
                <Input
                  border="2px"
                  borderColor="game.white"
                  bg="game.black"
                  color="game.white"
                  borderRadius="0px"
                  w="500px"
                  textAlign="start"
                  type="text"
                  value={ciphertext}
                  isReadOnly
                />
              </FormControl>
            </VStack>
          </form>
        </Box>
      </Box>
    );
  };
  

export default LevelCC;
