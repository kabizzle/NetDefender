import { useState } from "react";
import { Box, Button, ButtonGroup,   Step,
    StepDescription,
    StepIndicator,
    StepNumber,
    StepSeparator,
    StepStatus,
    StepTitle,
    Stepper,
    useSteps,Progress, Flex, AbsoluteCenter, Grid, GridItem, Icon, Text, extendTheme, Stack, Avatar, AvatarBadge, AvatarGroup, Divider, Heading, Spacer, Tooltip, HStack, Popover,
    PopoverTrigger,
    PopoverContent,
    PopoverHeader,
    PopoverBody,
    PopoverFooter,
    PopoverArrow,
    PopoverCloseButton,
    PopoverAnchor, Portal} from "@chakra-ui/react";
import Email from "./Email";
import LevelCC from "./LevelCC";
    
 const Phishing = () => {

    const heading = "Important message!";
    const sender = {email: "mysterious.sender@email.com", name: "Mysterious Sender"};
    const you = {email: "your.name@email.com", name: "Player Name"};
    const message = "SEVEN\n\nIwtgt xh hdbtdct puitg jh. Lt wpkt id bpzt djg rdbbjcxrpixdc hputg. Ugdb cdl dc lt hwdjas jht iwt Rtphpg rxewtg id tcrgnei djg rdbbjcxrpixdc.\n\nNlx gnfuxk yhnk.\n\nX wpkt p rajt lwd bxvwi qt qtwxcs iwxh qji X ctts ndjg wtae. Xu ndj vti iwxh bthhpvt htcs qprz iwt ldgs ZJCXCVPHZPAPHIPYP";
    

    return (
       <Box>
        <Email heading={heading} sender={sender} you={you} message={message} />
       </Box> 
    )

    };

    export default Phishing;