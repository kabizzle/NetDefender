import { Box, Button, Input, Text, useToast } from '@chakra-ui/react';
import Email from './Email';
import userDataService from '../services/userDataService';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const CCEmail = ({ weekNumber, taskID }: { weekNumber: number; taskID: string }) => {
  const heading = 'Important message!';
  const sender = { email: 'mysterious.sender@email.com', name: 'Mysterious Sender' };
  const you = { email: 'your.name@email.com', name: 'Player Name' };
  const message1 =
    'SEVEN\n\nIwtgt xh hdbtdct puitg jh. Lt wpkt id bpzt djg rdbbjcxrpixdc hputg.' +
    'Ugdb cdl dc lt hwdjas jht iwt Rtphpg rxewtg id tcrgnei djg rdbbjcxrpixdc.\n\nNlx gnfuxk yhnk.' +
    '\n\nX wpkt p rajt lwd bxvwi qt qtwxcs iwxh qji X ctts ndjg wtae. Xu ndj vti iwxh bthhpvt htcs qprz iwt ldgs ZJCXCVPHZPAPHIPYP';

  const toast = useToast();
  const navigate = useNavigate();
  const [userInput, setUserInput] = useState('');

  const message = () => {
    return <Box>{message1}</Box>;
  };

  const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    setUserInput(event.target.value);
  };
  const handleLevelComplete = async () => {
    if (userInput === 'KUNINGASKALASTAJA') {
      const userAuthDataJSON = window.localStorage.getItem('userAuthDataJSON');
      if (userAuthDataJSON) {
        const user = JSON.parse(userAuthDataJSON);
        const userAuthData = user;
        const userData = await userDataService.getUserData({
          userId: userAuthData.user_id,
          userToken: userAuthData.token
        });

        const currentTask = userData.levels[weekNumber-1].find(obj=>obj.id===taskID);

        if (!currentTask!.completed) {
          const updatedUserData = userData;
          updatedUserData.levels[weekNumber - 1].find(obj => obj.id === taskID)!.completed = true;
          updatedUserData.points = userData.points + currentTask!.points;
          await userDataService.updateUserData({
            userId: userAuthData.user_id,
            userToken: userAuthData.token,
            userData: updatedUserData
          });
        }
      }
      toast({
        title: 'Good job!',
        status: 'success',
        duration: 1500
      });
      setTimeout(() => {
        navigate('/');
      }, 1500);
    } else {
      toast({
        title: 'Wrong code word',
        status: 'error',
        duration: 3500
      });
    }
  };

  return (
    <Box
      w="100vw"
      h="100vh"
      display="flex"
      flexDir="column"
      alignItems="center"
      justifyContent="space-evenly"
      p="0em 25em 0em 25em"
    >
      <Email heading={heading} sender={sender} you={you} message={message()} />
      <Box display="flex" flexDir="row" alignItems="start" justifyContent="space-evenly" gap="1em">
        <Text fontSize="20">Code word:</Text>
        <Box display="flex" flexDir="column" alignItems="end" justifyContent="space-between" gap="1em">
          <Input w="20em" onChange={handleInput} />
          <Button onClick={handleLevelComplete}>Submit</Button>
        </Box>
      </Box>
    </Box>
  );
};

export default CCEmail;
