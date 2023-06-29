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
  

const Email = () => {

    // All widhts and heights have to be checked when merging with Homescreen!
   /* return (
        <Box w="100vw" h="100vh" display="flex" alignItems="center" justifyContent="center">
        <Box w="800px" h="500px" borderWidth="4px" borderColor="game.white" display="flex" flexDir="row" alignItems="start" >
        <Grid w="800px" h="500px"
            templateAreas={'"header" "text"'}
            templateRows={'25% 1fr'}>
            <GridItem area={'header'} border="2px" borderColor="pink.500" >
            <Box  display="flex" flexDir="row" alignItems="center" justifyContent="end">
                <Heading fontFamily="mono" padding="5px" paddingLeft="10px">Otsikko tärkeää!</Heading>
                <Spacer />
                <Box w="20px" h="20px" bg="game.white" marginRight="15px"></Box>
            </Box>
            <Box borderWidth="2px" borderColor="game.white">
                <Text padding="3px" paddingLeft="10px">Sender: Name Name</Text>
                <Divider/>
                <Text padding="3px" paddingLeft="10px">To: Name Name</Text>
            </Box>
            </GridItem>
            <GridItem area={'text'}  border="2px" borderColor="blue">
                
                <Divider/>
                <Box overflow="auto" h="332px" w="790px" paddingRight="20px" paddingLeft="20px" paddingTop="10px">
                <Box>
                lisää tekstiä
                </Box>
                <Box >
                Long content that will cause a scrollbar to appear when it exceeds the height of the box. dkjefkurahgfjsdhfhbfghkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkftyfytftyddrrrrrnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnntttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa   sssssssssssssssssssssssssssssssss sssssssss ddddddddddddddddddddddddddddddddddddddddddddddddrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr   ytttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttjuygyukftdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
                </Box>
                </Box>
            </GridItem>
        
        </Grid>

        </Box>
        </Box>


    ); */


  return (
    <Box w="100vw" h="100vh" display="flex" alignItems="center" justifyContent="center">
      <Box w="800px" h="500px" borderWidth="4px" borderColor="game.white" display="flex" flexDir="row" alignItems="start">
        <Grid w="100%" h="100%" templateRows="11% 14% 1fr">
          <GridItem border="0px" borderColor="pink.500">
            <Box h="100%" display="flex" flexDir="row" alignItems="center" justifyContent="end">
              <Heading fontFamily="mono" padding="5px" paddingLeft="10px">
                Otsikko tärkeää!
              </Heading>
              <Spacer/>
              <Box w="20px" h="20px" bg="game.white" marginRight="15px"></Box>
            </Box>
          </GridItem> 
          <GridItem border="0px" borderColor="yellow">  
            <Box h="100%" borderWidth="2px" borderColor="game.white">
              <HStack h="50%" padding="3px" paddingLeft="10px" display="flex" flexDir="row" >
                <Text>Sender:</Text>
              <Tooltip label='sender.name@email.com' placement='right' bg="game.black" borderWidth="1px" borderColor="game.white" color="game.white" borderRadius="0px">
                <Text as="u">Name Name</Text>
              </Tooltip>
              </HStack>
              <Divider />
              <HStack h="50%" padding="3px" paddingLeft="10px" display="flex" flexDir="row" >
                <Text>To:</Text>
              <Tooltip label='your.name@email.com' placement='right' bg="game.black" borderWidth="1px" borderColor="game.white" color="game.white" borderRadius="0px">
                <Text as="u">Name Name</Text>
              </Tooltip>
              </HStack>
            </Box>
          </GridItem>
          <GridItem border="0px" borderColor="blue" overflow="hidden">
            <Box overflow="auto" h="100%" >
              <Box whiteSpace="pre-wrap" paddingRight="20px" paddingLeft="20px" paddingTop="10px">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut egestas nisi a risus suscipit luctus. Vivamus accumsan mauris et vulputate auctor. Integer ut blandit lectus. Morbi mollis interdum magna, feugiat scelerisque sem. Phasellus neque est, maximus eget ipsum in, condimentum interdum magna. Integer nec ullamcorper dolor. Mauris ornare ex eget elit pharetra, in porta dui porttitor. Proin eleifend interdum elit id consequat. Maecenas suscipit sed arcu ac lobortis. Ut et congue nisi.{'\n\n'}
              Cras vitae dignissim est, eget iaculis tortor. Nam at tellus ipsum. Donec vulputate non ex quis congue. Maecenas ultricies, neque sit amet gravida aliquet, sem neque aliquet arcu, eu consectetur nunc urna quis sapien. Maecenas ultricies cursus pulvinar. Praesent sagittis tellus eu velit iaculis venenatis. Suspendisse in massa et diam interdum luctus in eget sapien. Vivamus sit amet tortor ullamcorper, accumsan elit id, sollicitudin nisl. Curabitur euismod laoreet consectetur. Cras eget odio sed justo feugiat accumsan. Cras a eros urna. Suspendisse erat urna, iaculis sed ex non, egestas sagittis massa. Donec ut dignissim nulla. Integer lacinia lacus in nisi gravida blandit.{'\n\n'}
              Nam lobortis nisl sit amet leo faucibus dignissim. Vivamus dictum lobortis rutrum. Sed euismod sagittis finibus. Donec a lorem eget eros dapibus bibendum. Praesent ut massa blandit nunc porttitor euismod. Ut augue est, convallis vel pretium id, pellentesque id lorem. In augue dui, pulvinar non gravida sed, imperdiet porta tellus. Vivamus quis molestie dui. Sed at odio nec dui egestas faucibus dignissim et elit. Morbi sit amet purus in urna semper efficitur ut vel arcu. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus aliquam sit amet turpis a mattis. Praesent consequat erat ante, at semper ipsum elementum sed. In lobortis tortor purus, sit amet auctor nulla gravida sed. Sed quis tempor est, eu elementum erat. 
              </Box>
            </Box>
          </GridItem>
        </Grid>
      </Box>
    </Box>
  );
};

export default Email;



