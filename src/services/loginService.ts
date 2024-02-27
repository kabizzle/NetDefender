import axios from 'axios';
import { IStudent } from '../interfaces/Student';

// url of server
const baseUrl = 'https://netdefender.org.aalto.fi/api';

// login credentials for user
export interface ICredentials {
  username: string;
  password: string;
}

// data about user that is needed by app
export interface IUserAuthData {
  token: string;
  username: string;
  name: string;
  user_id: string;
}

// form data required for creating new user in backend
export interface ISignupInfo {
  name: string;
  username: string;
  student_number?: string;
  password: string;
}

// function to log users in
const login = async (credentials: ICredentials): Promise<IUserAuthData> => {
  const response = await axios.post<IUserAuthData>(baseUrl + '/login', credentials);
  return response.data;
};

// function to add new users
const signup = async (signupInfo: ISignupInfo): Promise<IStudent> => {
  const signupResponse = await axios.post<IStudent>(baseUrl + '/signup', signupInfo);
  return signupResponse.data;
};

export default { login, signup };
