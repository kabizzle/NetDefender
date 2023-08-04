import axios from 'axios';
import { IStudent } from '../interfaces/Student';

const baseUrl = 'http://localhost:12345/api/students';

const getUserData = async ({user_id, userToken}: {user_id: string; userToken: string}): Promise<IStudent> => {
    const token = `Bearer ${userToken}`
    const httpAuth = {
        headers: {Authorization: token}
    }

    const userUrl = baseUrl + '/' + user_id;
    const userData = await axios.get(userUrl, httpAuth);
    return userData.data.student
}

const updateUserData = async ({user_id, userToken}: {user_id: string; userToken: string}): Promise<IStudent> => {
    const token = `Bearer ${userToken}`
    const httpAuth = {
        headers: {Authorization: token}
    }

    const userUrl = baseUrl + '/' + user_id;
    const userData = await axios.put(userUrl, httpAuth);
    return userData.data.student
}
export default {getUserData, updateUserData};
