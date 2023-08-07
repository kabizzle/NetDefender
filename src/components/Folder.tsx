import { Image, Box, Text } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { Dispatch, SetStateAction, useEffect, useState } from 'react';

interface IFolderProps {
    showLevel: boolean;
    setShowLevel: Dispatch<SetStateAction<boolean>>;
    setLevelToShow: Dispatch<SetStateAction<number>>;
    folderType: string;
    name: string;
    number: number;
}

const Folder = ( { showLevel, setShowLevel, setLevelToShow, folderType, name, number }: IFolderProps ) => {
    const [folderIcon, setFolderIcon] = useState('/folder_unlocked.png');
    const [folderStatus, setFolderStatus] = useState(folderType);

    useEffect(() => {
        if (folderType === 'locked') {
            setFolderIcon('/folder_locked.svg');
        } else if (showLevel) {
            setFolderIcon('/folder_opened.svg');
        } else if (!showLevel) {
            setLevelToShow(number)
            setFolderIcon('/folder_unlocked.png');
        }
    }, [showLevel]);

    const handleChange = () => {
        if (folderStatus === 'unlocked') {
            setShowLevel(true)
            setFolderStatus('opened');
            setFolderIcon('/folder_opened.svg');
        } else if (folderStatus === 'opened') {
            setShowLevel(false)
            setFolderStatus('unlocked');
            setFolderIcon('/folder_unlocked.svg');
        } else if (!showLevel) {
            setFolderIcon('/folder_unlocked.svg');
        }
    };

    if (folderType === 'locked') {
        return (
            <Box display="flex" flexDir="column" alignItems="center">
                <Image src={folderIcon} w="10em" />
                <Text marginTop="1em" color="game.gray">
                    {name}
                </Text>
            </Box>
        );
    }
    return (
        <Link to='/' >
        <Box display="flex" flexDir="column" alignItems="center" onClick={handleChange} >
            <Image src={folderIcon} w="10em" />
            <Text marginTop="1em">{name}</Text>
        </Box>
        </Link>
    );
};

export default Folder;
