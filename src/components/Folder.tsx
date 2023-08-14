import { Image, Box, Text } from '@chakra-ui/react';
import { useEffect, useState } from 'react';

interface IFolderProps {
    showLevel: boolean;
    levelToShow: number;
    folderType: string;
    name: string;
    number: number;
}

const Folder = ( { showLevel, levelToShow, folderType, name, number }: IFolderProps ) => {
    const [folderIcon, setFolderIcon] = useState('/folder_unlocked.png');

    useEffect(() => {
        if (folderType === 'locked') {
            setFolderIcon('/folder_locked.svg');
        } else if (showLevel && levelToShow === number) {
            setFolderIcon('/folder_opened.svg');
        } else {
            setFolderIcon('/folder_unlocked.png');
        }
    }, [showLevel, levelToShow]);


    return (
        <Box display="flex" flexDir="column" alignItems="center">
            <Image src={folderIcon} w="10em" />
            { folderType === 'locked' 
            ? <Text marginTop="1em" color="game.gray">{name}</Text>
            : <Text marginTop="1em">{name}</Text>
            }
        </Box>
    );
};

export default Folder;
