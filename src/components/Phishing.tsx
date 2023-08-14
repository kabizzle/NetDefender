import { Box } from '@chakra-ui/react';
import Email from './Email';

const Phishing = () => {
    const heading = 'Important message!';
    const sender = { email: 'suspicious.sender@email.com', name: 'Suspicious Sender' };
    const you = { email: 'your.name@email.com', name: 'Player Name' };
    const message1 =
        '\n\nI have new job opportuniti for you. The opportunity is about cubersecurity in our company with a 5000$/month salary and other benefits. Are you interested?\n\nClick the link to find out more!';

    const message = () => {
        return (
            <Box>
                Dear {you.name},{message1}
                *Here would be a link*
            </Box>
        );
    };

    return (
        <Box>
            <Email heading={heading} sender={sender} you={you} message={message()} />
        </Box>
    );
};

export default Phishing;
