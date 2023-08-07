import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { IUserAuthData } from '../services/loginService';
import Login from '../components/Login';
import HomePage from '../components/HomePage';

const Home = ({ setUserAuthData, userAuthData }: { setUserAuthData: Dispatch<SetStateAction<IUserAuthData>>, userAuthData: IUserAuthData }) => {
   //  const [userAuthData, setUserAuthData] = useState<IUserAuthData>({ token: '', username: '', name: '', user_id: '' });
   // 
   //  useEffect(() => {
   //      const userAuthDataJSON = window.localStorage.getItem('userAuthDataJSON');
   //      if (userAuthDataJSON) {
   //          const user = JSON.parse(userAuthDataJSON);
   //          setUserAuthData(user)
   //      }
   //  }, []);

    return (
        userAuthData.token !== '' 
        ? <HomePage setUserAuthData={setUserAuthData} userAuthData={userAuthData}/>
        : <Login setUserAuthData={setUserAuthData} />
    );
};

export default Home;
