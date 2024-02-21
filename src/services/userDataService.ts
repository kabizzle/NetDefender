import axios from 'axios';
import { IStudent } from '../interfaces/Student';

// const baseUrl = 'http://localhost:12345/api/students';
const baseUrl = 'https://netdefender.aalto.fi/api/students';

interface IGetUserDataProps {
  userId: string;
  userToken: string;
}

interface IUpdateUserDataProps {
  userId: string;
  userToken: string;
  userData: IStudent;
}

const getUserData = async ({ userId, userToken }: IGetUserDataProps): Promise<IStudent> => {
  const token = `Bearer ${userToken}`;
  const httpAuth = {
    headers: { Authorization: token }
  };

  const userUrl = baseUrl + '/' + userId;
  const userData = await axios.get(userUrl, httpAuth);
  return userData.data.student;
};

const updateUserData = async ({ userId, userToken, userData }: IUpdateUserDataProps): Promise<IStudent> => {
  const token = `Bearer ${userToken}`;
  const httpAuth = {
    headers: { Authorization: token }
  };

  const userUrl = baseUrl + '/' + userId;
  const userReturnData = await axios.put(userUrl, userData, httpAuth);
  return userReturnData.data.student;
};
export default { getUserData, updateUserData };
