import axios from 'axios';
import { IStudent } from '../interfaces/Student';

const baseUrl = 'https://netdefender.aalto.fi/api';

export interface ICredentials {
  username: string;
  password: string;
}

export interface IUserAuthData {
  token: string;
  username: string;
  name: string;
  user_id: string;
}

export interface ISignupInfo {
  name: string;
  username: string;
  student_number?: string;
  password: string;
}

const login = async (credentials: ICredentials): Promise<IUserAuthData> => {
  const response = await axios.post<IUserAuthData>(baseUrl + '/login', credentials);
  return response.data;
};

const signup = async (signupInfo: ISignupInfo): Promise<IStudent> => {
  const signupResponse = await axios.post<IStudent>(baseUrl + '/signup', signupInfo);
  return signupResponse.data;
};

export default { login, signup };
