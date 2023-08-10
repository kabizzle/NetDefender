import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import Home from './pages/Home.tsx';
import Level0 from './components/MS/Level0.tsx';
import CC from './components/CC.tsx';
import LevelCC from './components/LevelCC.tsx';
import CCEmail from './components/CCEmail.tsx';
import Phishing from './components/Phishing.tsx';
import EmailMenu from './components/EmailMenu.tsx';
import Error from './pages/Error.tsx';
import LevelRSA from './components/MS/LevelRSA.tsx';
import Sandbox from './components/Sandbox.tsx';
import { useEffect, useState } from 'react';
import { IStudent, defaultStudent } from './interfaces/Student.ts';
import { IUserAuthData } from './services/loginService.ts';
import Login from './components/Login.tsx';
import Signup from './components/Signup.tsx';

const baseStyle = {
    indicator: {
        '&[data-status=active]': {
            borderWidth: '2px',
            borderColor: '#F9F9F9',
            bg: '#0A0A0A'
        },
        '&[data-status=complete]': {
            borderWidth: '2px',
            borderColor: '#F9F9F9',
            bg: '#0A0A0A'
        },
        '&[data-status=incomplete]': {
            borderWidth: '2px',
            borderColor: '#F9F9F9',
            bg: '#0A0A0A',
            opacity: '50%'
        }
    },
    separator: {
        bg: '#F9F9F9',
        opacity: '50%',
        '&[data-status=complete]': {
            bg: '#F9F9F9',
            opacity: '100%'
        },
        '&[data-orientation=horizontal]': {
            width: '100%',
            height: '2px',
            marginStart: '0'
        }
    }
};

const stepperTheme = {
    baseStyle
};

const theme = extendTheme({
    colors: {
        game: {
            green: '#04A130',
            black: '#0A0A0A',
            white: '#F9F9F9',
            red: '#C0181F',
            gray: '#5F5F5F'
        }
    },
    styles: {
        global: () => ({
            body: {
                bg: 'game.black',
                color: 'game.white',
                fontFamily: 'mono'
            }
        })
    },
    components: {
        Stepper: stepperTheme,
        Progress: {
            defaultProps: {
                size: 'lg',
                colorScheme: 'green'
            }
        },
        Text: {
            defaultProps: {
                fontFamily: 'mono'
            }
        },
        Header: {
            defaultProps: {
                fontFamily: 'mono'
            }
        }
    }
});

const App = () => {
    // authentication credentials to make calls to api
    const [userAuthData, setUserAuthData] = useState<IUserAuthData>({ token: '', username: '', name: '', user_id: '' });
    const [showLoginPage, setShowLoginPage] = useState(true);
    
    // user data returned from api
    // const [userGameData, setUserGameData] = useState<IStudent>(defaultStudent)

    
    // on page load, check if user auth credentials stored.
    // If so, get user data from api.
    useEffect(() => {
        console.log('useEffect begins')
        const userAuthDataJSON = window.localStorage.getItem('userAuthDataJSON');
        console.log('userJSON: ', userAuthDataJSON)
        if (userAuthDataJSON) {
            const user = JSON.parse(userAuthDataJSON);
            setUserAuthData(user)
        }

    }, [])
   
    const router = createBrowserRouter(
        createRoutesFromElements(
            <>
                <Route path="/" element={<Home setUserAuthData={setUserAuthData} userAuthData={userAuthData}/>}>
                </Route>
                <Route path="level">
                    <Route path="1" element={<Level0 />} />
                    <Route path="rsa" element={<LevelRSA />} />
                    <Route path="c" element={<CC />} />
                    <Route path="2" element={<LevelCC />} />
                    <Route path="e" element={<CCEmail />} />
                    <Route path="p" element={<Phishing />} />
                    <Route path="em" element={<EmailMenu />} />
                </Route>
                <Route path="sandbox" element={<Sandbox />} />
                <Route path="*" element={<Error />} />
            </>
        )
    );
    
    if (userAuthData.token === '') {
        return (
            <ChakraProvider theme={theme}>
                { showLoginPage
                    ? <Login setUserAuthData={setUserAuthData} setShowLogin={setShowLoginPage}/>
                    : <Signup setUserAuthData={setUserAuthData} setShowLogin={setShowLoginPage}/> 
                }
            </ChakraProvider>
        );
    }
    else {
        return (
            <ChakraProvider theme={theme}>
                <RouterProvider router={router} />
            </ChakraProvider>
        )
    }
};

export default App;
