import { Box, Center, Flex } from '@chakra-ui/react';
import { CloseIcon } from '@chakra-ui/icons';
import Level from './Level';
import { Link } from 'react-router-dom';
import { ILevel } from '../interfaces/Levels';
import { Dispatch, SetStateAction } from 'react';

interface ILevelViewProps {
    levelData: ILevel[];
    setShowLevel: Dispatch<SetStateAction<boolean>>;
}

const LevelView = ({ levelData, setShowLevel }: ILevelViewProps) => {
    return (
        <>
            <Box border="2px" h="25em" pos="relative">
                <Link to="/">
                    <Center
                        w="36px"
                        h="36px"
                        border="2px"
                        borderColor="game.white"
                        pos="absolute"
                        top="1em"
                        right="1em"
                        _hover={{ color: 'game.black', bg: 'game.white' }}
                    >
                        <CloseIcon onClick={() => setShowLevel(false)} />
                    </Center>
                </Link>
                <Flex direction="column" border="2px" align="center" justify="space-evenly" h="25em">
                    {levelData.map((level: ILevel) => {
                        return (
                            <Center w="50vw" key={level.id}>
                                <Level
                                    key={level.id}
                                    name={level.name}
                                    completed={level.completed}
                                    activity={'/level/' + level.id}
                                />
                            </Center>
                        );
                    })}
                </Flex>
            </Box>
        </>
    );
};

export default LevelView;
