import { Box } from '@chakra-ui/react';
import Email from './Email';

const CCEmail = () => {
    const heading = 'Important message!';
    const sender = { email: 'mysterious.sender@email.com', name: 'Mysterious Sender' };
    const you = { email: 'your.name@email.com', name: 'Player Name' };
    const message1 =
        'SEVEN\n\nIwtgt xh hdbtdct puitg jh. Lt wpkt id bpzt djg rdbbjcxrpixdc hputg. Ugdb cdl dc lt hwdjas jht iwt Rtphpg rxewtg id tcrgnei djg rdbbjcxrpixdc.\n\nNlx gnfuxk yhnk.\n\nX wpkt p rajt lwd bxvwi qt qtwxcs iwxh qji X ctts ndjg wtae. Xu ndj vti iwxh bthhpvt htcs qprz iwt ldgs ZJCXCVPHZPAPHIPYP';

    const message = () => {
        return <Box>{message1}</Box>;
    };

    return (
        <Box>
            <Email heading={heading} sender={sender} you={you} message={message()} />
        </Box>
    );
};

export default CCEmail;
