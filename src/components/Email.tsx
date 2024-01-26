import { useState } from 'react';
import {
    Box,
    Button,
    Grid,
    GridItem,
    Text,
    Divider,
    Heading,
    Spacer,
    Tooltip,
    HStack,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton
} from '@chakra-ui/react';

const Email = (props: any) => {
    const heading = props.heading;
    const sender = props.sender;
    const you = props.you;
    const message = props.message;

    // Reporting popup
    const [isReportModalOpen, setIsReportModalOpen] = useState(false);
    const handleReportModalOpen = () => {
        setIsReportModalOpen(true);
    };
    const handleReportModalClose = () => {
        setIsReportModalOpen(false);
    };

    return (
        <>
            <Box
                w="800px"
                h="500px"
                borderWidth="4px"
                borderColor="game.white"
                display="flex"
                flexDir="row"
                alignItems="start"
            >
                <Grid w="100%" h="100%" templateRows="11% 14% 1fr 11%">
                    <GridItem border="0px" borderColor="pink.500">
                        {/*
                        <Box h="100%" display="flex" flexDir="row" alignItems="center" justifyContent="end">
                            */}
                        <Box>
                            <Heading fontFamily="mono" padding="5px" paddingLeft="10px">
                                {heading}
                            </Heading>
                            {/*
                            <Spacer />
                            <Box w="20px" h="20px" bg="game.white" marginRight="15px"></Box>
                            */}
                        </Box>
                    </GridItem>
                    <GridItem border="0px" borderColor="yellow">
                        <Box h="100%" borderWidth="2px" borderColor="game.white">
                            <HStack h="50%" padding="3px" paddingLeft="10px" display="flex" flexDir="row">
                                <Text>Sender:</Text>
                                <Tooltip
                                    label={sender.email}
                                    placement="right"
                                    bg="game.black"
                                    color="game.white"
                                    borderRadius="0px"
                                >
                                    <Text as="u">{sender.name}</Text>
                                </Tooltip>
                            </HStack>
                            <Divider />
                            <HStack h="50%" padding="3px" paddingLeft="10px" display="flex" flexDir="row">
                                <Text>To:</Text>
                                <Tooltip
                                    label={you.email}
                                    placement="right"
                                    bg="game.black"
                                    color="game.white"
                                    borderRadius="0px"
                                >
                                    <Text as="u">{you.name}</Text>
                                </Tooltip>
                            </HStack>
                        </Box>
                    </GridItem>
                    <GridItem border="0px" borderColor="blue" overflow="hidden">
                        <Box overflow="auto" h="100%" padding="10px" whiteSpace="pre-wrap">
                            {message}
                        </Box>
                    </GridItem>
                    {/*
                    <GridItem>
                        <Box
                            h="100%"
                            borderWidth="0px"
                            borderColor="game.white"
                            display="flex"
                            alignItems="center"
                            justifyContent="flex-end"
                        >
                            <Button
                                marginRight="15px"
                                marginBottom="15px"
                                borderRadius="0px"
                                border="2px"
                                borderColor="game.white"
                                bg="game.black"
                                color="game.white"
                                _hover={{ color: 'game.black', bg: 'game.white' }}
                                onClick={handleReportModalOpen}
                            >
                                Report
                            </Button>
                        </Box>
                    </GridItem>
                    */}
                </Grid>
            </Box>

            <Modal isOpen={isReportModalOpen} onClose={handleReportModalClose} isCentered>
                <ModalOverlay />
                <ModalContent
                    borderRadius="0px"
                    border="2px"
                    borderColor="game.white"
                    bg="game.black"
                    color="game.white"
                >
                    <ModalHeader bg="game.black">Report Email</ModalHeader>
                    <ModalCloseButton
                        borderWidth="1px"
                        borderRadius="0"
                        borderColor="game.white"
                        _hover={{ color: 'game.black', bg: 'game.white' }}
                    />
                    <ModalBody bg="game.black">
                        <Text>Do you want to report this email as spam?</Text>
                    </ModalBody>

                    <ModalFooter bg="game.black" justifyContent="center">
                        <Button
                            w="60px"
                            borderRadius="0px"
                            border="2px"
                            borderColor="game.white"
                            bg="game.black"
                            color="game.white"
                            _hover={{ color: 'game.black', bg: 'game.white' }}
                            mr={3}
                            onClick={handleReportModalClose}
                        >
                            Yes
                        </Button>
                        <Button
                            w="60px"
                            borderRadius="0px"
                            border="2px"
                            borderColor="game.white"
                            bg="game.black"
                            color="game.white"
                            _hover={{ color: 'game.black', bg: 'game.white' }}
                            onClick={handleReportModalClose}
                        >
                            No
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    );
};

export default Email;
