import { useState } from 'react';
import { Box, Grid, GridItem, Heading, Spacer } from '@chakra-ui/react';

// Now working as a layout, needs to be merged with actual emails and have them as links

const EmailMenu = () => {
  {
    /*
    const [emails, setEmails] = useState([
        {
            heading: 'Important!!',
            sender: 'sender@email.com',
            sent: true
        },
        {
            heading: 'More important!!',
            sender: 'sender2@email.com',
            sent: true
        },
        {
            heading: 'Open this email',
            sender: 'sender3@email.com',
            sent: false
        },
        {
            heading: 'Important, open now!!',
            sender: 'sender4@email.com',
            sent: true
        }
    ]);
    */
  }
  const emails = [
    {
      heading: 'Important!!',
      sender: 'sender@email.com',
      sent: true
    },
    {
      heading: 'More important!!',
      sender: 'sender2@email.com',
      sent: true
    },
    {
      heading: 'Open this email',
      sender: 'sender3@email.com',
      sent: false
    },
    {
      heading: 'Important, open now!!',
      sender: 'sender4@email.com',
      sent: true
    }
  ];

  const sentEmails = emails.filter((email) => email.sent);

  return (
    <Box w="100vw" h="100vh" display="flex" alignItems="center" justifyContent="center">
      <Box
        w="800px"
        h="500px"
        borderWidth="4px"
        borderColor="game.white"
        display="flex"
        flexDir="row"
        alignItems="start"
      >
        <Grid w="100%" h="100%" templateRows="11% 1fr">
          <GridItem>
            <Box h="100%" display="flex" flexDir="row" alignItems="center" justifyContent="end" borderBottom="4px">
              <Heading fontFamily="mono" padding="5px" paddingLeft="10px">
                Messages
              </Heading>
              <Spacer />
              <Box w="20px" h="20px" bg="game.white" marginRight="15px"></Box>
            </Box>
          </GridItem>
          <GridItem>
            <Box>
              {sentEmails.map((email, index) => (
                <Box borderBottom="2px" key={index} padding="5px">
                  {email.heading}: {email.sender}
                </Box>
              ))}
            </Box>
          </GridItem>
        </Grid>
      </Box>
    </Box>
  );
};

export default EmailMenu;
