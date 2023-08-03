import axios from 'axios';

const baseUrl = 'http://localhost:12345/api/login';

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

const login = async ( credentials: ICredentials ) : Promise<IUserAuthData> => {
    const response = await axios.post<IUserAuthData>(baseUrl, credentials);
    return response.data
}

export default { login };
