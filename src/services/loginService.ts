import axios from 'axios';
import { IStudent } from '../interfaces/Student';

const baseUrl = 'http://localhost:12345/api';

export interface ICredentials {
    username: string,
    password: string
}

export interface IUserAuthData {
    token: string,
    username: string,
    name: string,
    user_id: string
}

export interface ISignupInfo {
    name: string;
    username: string;
    student_number?: string;
    password: string;
}

const login = async ( credentials: ICredentials ) : Promise<IUserAuthData> => {
    const response = await axios.post<IUserAuthData>(baseUrl + '/login', credentials);
    return response.data
}

const signup = async ( signupInfo: ISignupInfo ): Promise<IUserAuthData> => {
    await axios.post<IStudent>(baseUrl + '/signup')

    const loginResponse = await login({ username: signupInfo.username, password: signupInfo.password })
    return loginResponse
}

export default { login, signup };
