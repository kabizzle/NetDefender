import axios from 'axios';
import { IStudent } from '../interfaces/Student';

const baseUrl = 'https://netdefender.org.aalto.fi/api/students/';

interface IGetUserDataProps {
  userId: string;
  userToken: string;
}

interface IUpdateUserDataProps {
  userId: string;
  userToken: string;
  userData: IStudent;
}

interface ILevelCompleteProps {
  weekNumber: number;
  taskID: string;
  amount: number;
}

const getUserData = async ({ userId, userToken }: IGetUserDataProps): Promise<IStudent> => {
  const token = `Bearer ${userToken}`;
  const httpAuth = {
    headers: { Authorization: token }
  };

  const userUrl = baseUrl + userId;
  const userData = await axios.get(userUrl, httpAuth);
  return userData.data.student;
};

const updateUserData = async ({ userId, userToken, userData }: IUpdateUserDataProps): Promise<IStudent> => {
  const token = `Bearer ${userToken}`;
  const httpAuth = {
    headers: { Authorization: token }
  };

  const userUrl = baseUrl + userId;
  const userReturnData = await axios.put(userUrl, userData, httpAuth);
  return userReturnData.data.student;
};

  // sends data about level to api
  // stores user's points from level and updates the level as completed in database
  // function that sets level as completed and adds points to user's score
  // Params: week number, ID of task and percentage of points to be obtained
  const handleLevelComplete = async ({ weekNumber, taskID, amount }: ILevelCompleteProps): Promise<boolean> => {
    const userAuthDataJSON = window.localStorage.getItem('userAuthDataJSON');

    if (userAuthDataJSON) {
      const user = JSON.parse(userAuthDataJSON);
      const userAuthData = user;
      const userData = await getUserData({
        userId: userAuthData.user_id,
        userToken: userAuthData.token
      });

      const updatedUserData = userData;
      const currentTask = userData.levels[weekNumber - 1].find((obj) => obj.id === taskID);

      if (currentTask) {
        if (!currentTask.completed) {
          if (updatedUserData.levels[weekNumber - 1].find((obj) => obj.id === taskID)) {
            updatedUserData.levels[weekNumber - 1].find((obj) => obj.id === taskID)!.completed = true;
          }
        }

        updatedUserData.points = userData.points +  (amount * currentTask.points);

        await updateUserData({
          userId: userAuthData.user_id,
          userToken: userAuthData.token,
          userData: updatedUserData
        });
        return true;
      }
    }
    return false;
  };

export default { getUserData, updateUserData, handleLevelComplete };
