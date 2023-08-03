import { useEffect, useState } from 'react';
import { IUserAuthData } from '../services/loginService';
import Login from '../components/Login';
import HomePage from '../components/HomePage';

const Home = () => {
    const [userAuthData, setUserAuthData] = useState<IUserAuthData>({ token: '', username: '', name: '', user_id: '' });
   
    useEffect(() => {
        const userAuthDataJSON = window.localStorage.getItem('userAuthDataJSON');
        if (userAuthDataJSON) {
            const user = JSON.parse(userAuthDataJSON);
            setUserAuthData(user)
        }
    }, []);

    return (
    userAuthData.token !== '' 
    ? <HomePage token={userAuthData.token} user_id={userAuthData.user_id}/>
    : <Login setUserAuthData={setUserAuthData} />
    );
};

export default Home;
