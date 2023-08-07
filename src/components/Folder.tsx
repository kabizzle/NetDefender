import { Image, Box, Text } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

interface Level {
    forwardSource?: string;
    backSource?: string;
    folderType: string;
    name: string;
}

const Folder = ({ forwardSource = '/', backSource = '/', folderType, name }: Level) => {
    const [source, setSource] = useState(forwardSource);
    const [folderIcon, setFolderIcon] = useState('/folder_unlocked.png');
    const [folderStatus, setFolderStatus] = useState(folderType);
    const location = useLocation();

    useEffect(() => {
        if (folderType === 'locked') {
            setFolderIcon('/folder_locked.svg');
        } else if (location.pathname == forwardSource) {
            setFolderIcon('/folder_opened.svg');
        } else {
            setFolderIcon('/folder_unlocked.png');
        }
    }, [folderStatus, folderType, forwardSource, location]);

    const handleChange = () => {
        console.log(location);
        console.log(folderStatus);

        if (folderStatus == 'unlocked') {
            setSource(backSource);
            setFolderStatus('opened');
            setFolderIcon('/folder_opened.svg');
        } else if (folderStatus == 'opened') {
            setSource(forwardSource);
            setFolderStatus('unlocked');
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
        <Link to={source} onClick={handleChange} >
            <Box display="flex" flexDir="column" alignItems="center">
                <Image src={folderIcon} w="10em" />
                <Text marginTop="1em">{name}</Text>
            </Box>
        </Link>
    );
};

export default Folder;
