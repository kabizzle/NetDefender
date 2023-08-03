import { Box, Center, Flex, Grid, GridItem, Image, Text } from '@chakra-ui/react';
import { Link, Outlet } from 'react-router-dom';
import UserProgress from '../components/UserProgress';
import Folder from '../components/Folder';
import Notification from '../components/Notification';

const HomePage = ( {name} : {name: string}) => {
    return (
        <>
            <Grid templateRows="1fr 3fr 1fr" templateColumns="25em auto 25em" h="100vh">
                <GridItem colSpan={1}>
                    <Box maxW="25em" p="0 0 2em 0">
                        <UserProgress name={name} completed={0} rating={5} />
                    </Box>
                </GridItem>

                <GridItem colSpan={1} colStart={3}>
                    <Box pos="absolute" top="2em" right="2em" p="0 0 2em 0">
                        <Notification containsMessages={false} nextMessage="" />
                    </Box>
                </GridItem>

                <GridItem colSpan={3} pos="relative">
                    <Center m="5em 0 0 0">
                        <Outlet />
                    </Center>
                    <Link to="/sandbox">
                        <Box pos="absolute" top="0" right="2.5em" minW="105px" minH="105px">
                            <Image src="../sandbox_icon.svg" />
                            <Text>Decryption</Text>
                        </Box>
                    </Link>
                </GridItem>

                <GridItem rowSpan={1} colSpan={3} padding="3em 10em 2em 10em">
                    <Flex align="center" justify="space-between">
                        <Folder forwardSource="/1" backSource="" folderType="unlocked" name="Week 1" />
                        <Folder folderType="locked" name="Week 2" />
                        <Folder folderType="locked" name="Week 3" />
                        <Folder folderType="locked" name="Week 4" />
                        <Folder folderType="locked" name="Week 5" />
                    </Flex>
                </GridItem>
            </Grid>
        </>
    );
};

export default HomePage;
