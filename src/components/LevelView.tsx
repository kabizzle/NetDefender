import { Center, Flex } from '@chakra-ui/react';
import { CloseIcon } from '@chakra-ui/icons';
import Level from './Level';
import { Link } from 'react-router-dom';

const LevelView = () => {
    return (
        <>
            <Flex direction="column" border="2px" align="center" justify="space-evenly" h="25em" pos="relative">
                <Center
                    w="36px"
                    h="36px"
                    border="2px"
                    borderColor="game.white"
                    pos="absolute"
                    top="0"
                    right="0"
                    m="1em 1em 0"
                    _hover={{ color: 'game.black', bg: 'game.white' }}
                >
                    <Link to="/">
                        <CloseIcon />
                    </Link>
                </Center>
                <Center w="50vw">
                    <Level name="Level 1: Identify Attacks" completed={false} activity="/level/1" />
                </Center>
                <Center w="50vw">
                    <Level name="Level 2: Caesar Cipher" completed={false} activity="" />
                </Center>
            </Flex>
        </>
    );
};

export default LevelView;
