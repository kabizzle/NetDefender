import { Box, Grid, GridItem, Button, FormLabel, Textarea, Text } from '@chakra-ui/react';
import React, { useState } from 'react';
import JSEncrypt from 'jsencrypt';
import { ArrowBackIcon } from '@chakra-ui/icons';
import { Link } from 'react-router-dom';

const Sandbox = () => {
    // user's inputted public key or private key will be stored in respective hook
    const [userPubKey, setUserPubKey] = useState('');
    const [userPrivKey, setUserPrivKey] = useState('');

    // user's input - plaintext to encrypt or ciphertext to decrypt
    const [userInput, setUserInput] = useState('');

    // JSEncrypt objects that will encrypt or decrypt messages for the game.
    const game_encrypt_RSA = new JSEncrypt();
    const game_decrypt_RSA = new JSEncrypt();

    // JSEncrypt objects that will encrypt or decrypt messages for the students
    const student_pub_RSA = new JSEncrypt();
    const student_RSA = new JSEncrypt();

    // text that will be shown - encrypted plaintext or decrypted ciphertext
    const [displayText, setDisplayText] = useState(<></>);

    // boolean that tells whether to show displayText or not
    const [showText, setShowText] = useState(false);

    // boolean that tells whether the user has inputted a public or private key for use
    const [givenPubKey, setGivenPubKey] = useState(false);
    const [givenPrivKey, setGivenPrivKey] = useState(false);

    // set Private and Public keys for game from .env file
    game_decrypt_RSA.setPrivateKey(import.meta.env.VITE_GAME_PRIVATE_KEY);

    game_encrypt_RSA.setPublicKey(import.meta.env.VITE_GAME_PUBLIC_KEY);

    // updates userPubKey hook with inputted Public Key
    const handlePubKeyChange: React.ChangeEventHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        event.preventDefault();
        setUserPubKey(event.target.value);
    };

    // updates userPrivKey hook with inputted Private Key
    const handlePrivKeyChange: React.ChangeEventHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        event.preventDefault();
        setUserPrivKey(event.target.value);
    };

    // updates userInput hook with inputted text
    const handleUserInput: React.ChangeEventHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        event.preventDefault();
        setUserInput(event.target.value);
    };

    // changes givenPubKey to true, indicating that user has inputted a public key.
    // This public key should be used for encrypting any text input from the user
    const handlePubKeySubmit: React.FormEventHandler = (event: React.FormEvent<HTMLInputElement>) => {
        event.preventDefault();
        console.log('clicked');
        setGivenPubKey(true);
    };

    // changes givenPrivKey to true, indicating that user has inputted a private key.
    // This private key should be used for decrypting any text input from the user
    const handlePrivKeySubmit: React.FormEventHandler = (event: React.FormEvent<HTMLInputElement>) => {
        event.preventDefault();
        console.log('priv key submit clicked');
        setGivenPrivKey(true);
    };

    // when user clicks encrypt, this function checks if the user has inputted a public key.
    // If so, it encrypted the user input using the public key given by the user
    // else, it encrypted the user input using the public key stored by the game
    const handleEncrypt = () => {
        let toEncrypt: string | false = false;
        setShowText(true);

        if (givenPubKey) {
            // if user has inputted public key, use it to encrypt
            console.log('encrypting using input private key');
            student_pub_RSA.setPublicKey(userPubKey);
            toEncrypt = student_pub_RSA.encrypt(userInput);
        } else {
            // else, use game public key
            console.log('using game public key');
            toEncrypt = game_encrypt_RSA.encrypt(userInput.valueOf());
        }

        if (toEncrypt !== false) {
            console.log(toEncrypt);
            setDisplayText(
                <>
                    <Text>Encrypted text: </Text>
                    <Text>{toEncrypt}</Text>
                </>
            );
        } else {
            console.log('Error: unable to encrypt');
            setDisplayText(<Text>Error: unable to encrypt</Text>);
        }
    };

    // when user clicks decrypt, this function checks if the user has inputted a private key.
    // If so, it encrypted the user input using the private key given by the user
    // else, it encrypted the user input using the private key stored by the game
    const handleDecrypt = () => {
        let toDecrypt: string | false = false;
        setShowText(true);

        if (givenPrivKey) {
            // if user has inputted private key, use it to decrypt
            console.log('Using user submitted private key');
            console.log('attempting to decrypt: \n' + userInput.valueOf());
            student_RSA.setPrivateKey(userPrivKey);
            toDecrypt = student_RSA.decrypt(userInput);
        } else {
            // else, use game private key
            console.log('Using game private key');
            toDecrypt = game_decrypt_RSA.decrypt(userInput.valueOf());
        }

        if (toDecrypt !== false) {
            console.log(toDecrypt);
            setDisplayText(
                <>
                    <Text>Decrypted text: </Text>
                    <Text>{toDecrypt}</Text>
                </>
            );
        } else {
            console.log('Error: unable to decrypt');
            setDisplayText(<Text>Error: unable to decrypt</Text>);
        }
    };

    return (
        <Grid templateColumns="1fr 1fr" templateRows="1fr 1fr 1fr" m="5em 15em 0 15em" p="0 2em 0 0" gap={5}>
            <GridItem rowStart={1} colSpan={1}>
                <Link to="/">
                    <ArrowBackIcon boxSize={10} pos="absolute" left="5em" top="-3em" border="1px" />
                </Link>

                <FormLabel m="0 0 1em 12em">Public Key</FormLabel>
                <Textarea
                    placeholder={
                        '-----BEGIN PUBLIC KEY-----' +
                        'xxxxxxxxxxxxxxxxxxxxxxxxxx\n' +
                        'xxxxxxxxxxxxxxxxxxxxxxxxxx\n' +
                        'xxxxxxxxxxxxxxxxxxxxxxxxxx\n' +
                        '-----END PUBLIC KEY-----'
                    }
                    maxW="30em"
                    h="10em"
                    p="1em"
                    borderColor="game.gray"
                    onChange={handlePubKeyChange}
                />
                <Box m="2em 0 0 13em">
                    <Button onClick={handlePubKeySubmit}>submit</Button>
                </Box>
            </GridItem>

            <GridItem rowStart={1} colSpan={1}>
                <FormLabel m="0 0 1em 12em">Private Key</FormLabel>
                <Textarea
                    placeholder={
                        '-----BEGIN PRIVATE KEY-----' +
                        'xxxxxxxxxxxxxxxxxxxxxxxxxx\n' +
                        'xxxxxxxxxxxxxxxxxxxxxxxxxx\n' +
                        'xxxxxxxxxxxxxxxxxxxxxxxxxx\n' +
                        '-----END PRIVATE KEY-----'
                    }
                    w="30em"
                    h="10em"
                    p="1em"
                    borderColor="game.gray"
                    onChange={handlePrivKeyChange}
                />
                <Box m="2em 0 0 13em">
                    <Button onClick={handlePrivKeySubmit}>submit</Button>
                </Box>
            </GridItem>

            <GridItem rowSpan={1} colSpan={1} m="2em 0 0 0">
                <FormLabel>Message to encrypt</FormLabel>
                <Textarea
                    placeholder="test message"
                    w="30em"
                    h="10em"
                    p="1em"
                    borderColor="game.gray"
                    onChange={handleUserInput}
                />
            </GridItem>

            <GridItem m="3.5em 0 0 0">
                <Box m="2em 0 1em 0">
                    <Button onClick={handleEncrypt}>encrypt</Button>
                </Box>
                <Box m="2em 0 1em 0">
                    <Button onClick={handleDecrypt}>decrypt</Button>
                </Box>
            </GridItem>

            <GridItem rowSpan={1} colSpan={2} m="2em 0 0 0">
                {showText ? (
                    <Box border="1px" minH="5em" p="1em">
                        {displayText}
                    </Box>
                ) : (
                    <></>
                )}
            </GridItem>
        </Grid>
    );
};

export default Sandbox;
