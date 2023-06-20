import { Image, Box } from '@chakra-ui/react'
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

interface Level {
    forwardSource: string;
    backSource: string;
    folderType: string;
}

const Folder = ( {forwardSource, backSource, folderType}: Level) => {
    const [source , setSource] = useState(forwardSource)
    const [folderIcon, setFolderIcon] = useState("/folder_unlocked.png")
    const [folderStatus, setFolderStatus] = useState(folderType)
    const location = useLocation();

    useEffect(() => {
        if (folderType === "locked") {
            setFolderIcon("/folder_locked.svg")
        }
        if (location.pathname == "/" && folderStatus == "unlocked") {
            setSource(forwardSource)
            setFolderStatus("unlocked")
            setFolderIcon("/folder_unlocked.svg")
        }
    },[folderStatus, folderType, forwardSource, location])

    const handleChange = () => {
        console.log(location)
        console.log(folderStatus);
        
        if (folderStatus == "unlocked"){
            setSource(backSource)
            setFolderStatus("opened")
            setFolderIcon("/folder_opened.svg")
        }
        else if (folderStatus == "opened") {
            setSource(forwardSource)
            setFolderStatus("unlocked")
            setFolderIcon("/folder_unlocked.svg")
        }
    }

    return (
        <Box>
            <Link to={source} onClick={handleChange}>
                <Image src={folderIcon} w="10em"/>
            </Link>
        </Box>
    )
};

export default Folder;
