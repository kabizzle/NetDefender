import { useState } from "react";
import { Box, Button, ButtonGroup,   Step,
    StepDescription,
    StepIndicator,
    StepNumber,
    StepSeparator,
    StepStatus,
    StepTitle,
    Stepper,
    useSteps,Progress, Flex, AbsoluteCenter, Grid, GridItem, Icon, Text, extendTheme, Stack, Avatar, AvatarBadge, AvatarGroup, Divider, Heading, Spacer, Tooltip, HStack } from "@chakra-ui/react";
  

const Email = (props: any) => {

    const heading = props.heading
    const sender = props.sender
    const you = props.you
    const message = props.message

    // All widhts and heights have to be checked when merging with Homescreen!
   
  return (
    <Box w="100vw" h="100vh" display="flex" alignItems="center" justifyContent="center">
      <Box w="800px" h="500px" borderWidth="4px" borderColor="game.white" display="flex" flexDir="row" alignItems="start">
        <Grid w="100%" h="100%" templateRows="11% 14% 1fr">
          <GridItem border="0px" borderColor="pink.500">
            <Box h="100%" display="flex" flexDir="row" alignItems="center" justifyContent="end">
              <Heading fontFamily="mono" padding="5px" paddingLeft="10px">
                {heading}
              </Heading>
              <Spacer/>
              <Box w="20px" h="20px" bg="game.white" marginRight="15px"></Box>
            </Box>
          </GridItem> 
          <GridItem border="0px" borderColor="yellow">  
            <Box h="100%" borderWidth="2px" borderColor="game.white">
              <HStack h="50%" padding="3px" paddingLeft="10px" display="flex" flexDir="row" >
                <Text>Sender:</Text>
              <Tooltip label={sender.email} placement='right' bg="game.black"  color="game.white" borderRadius="0px">
                <Text as="u">{sender.name}</Text>
              </Tooltip>
              </HStack>
              <Divider />
              <HStack h="50%" padding="3px" paddingLeft="10px" display="flex" flexDir="row" >
                <Text>To:</Text>
              <Tooltip label={you.email} placement='right' bg="game.black"  color="game.white" borderRadius="0px">
                <Text as="u">{you.name}</Text>
              </Tooltip>
              </HStack>
            </Box>
          </GridItem>
          <GridItem border="0px" borderColor="blue" overflow="hidden">
            <Box overflow="auto" h="100%"  padding="10px" whiteSpace="pre-wrap">
                {message}
            </Box>
          </GridItem>
        </Grid>
      </Box>
    </Box>
  );
};

export default Email;



