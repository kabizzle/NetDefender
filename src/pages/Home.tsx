import { useState } from 'react';
import { IUserAuthData } from '../services/loginService';
import Login from '../components/Login';
import HomePage from '../components/HomePage';

const Home = () => {
    
    const [userLoggedIn, setUserLoggedIn] = useState(false)
    const [userAuthData, setUserAuthData] = useState<IUserAuthData>({ token: '', username: '', name: '' });
    
    
    return (
    userLoggedIn 
    ? <HomePage name={userAuthData.name as string} />
    : <Login setUserAuthData={setUserAuthData} setUserLoggedIn={setUserLoggedIn} />
    );
};

export default Home;
