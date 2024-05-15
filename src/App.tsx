import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import Home from './pages/Home.tsx';
import CC from './components/CaesarCipherDecryptionTool.tsx';
import CCEmail from './components/Tasks/Week1.tsx';
import Error from './pages/Error.tsx';
import Sandbox from './components/Sandbox.tsx';
import { useEffect, useState } from 'react';
import { IUserAuthData } from './services/loginService.ts';
import Login from './components/Login.tsx';
import Signup from './components/Signup.tsx';
import Flashcard from './components/Flashcards/Flashcard.tsx';
import Tutorial from './pages/Tutorial.tsx';
import AttackQuiz from './components/attacks_quiz/AttackQuiz.tsx';
import Quiz from './components/Quizzes/Quiz.tsx';
import * as FlashcardData from './components/Flashcards/FlashcardData';
import LevelRSA from './components/attacks_quiz/LevelRSA.tsx';
import BreachLevel from './components/breach_level/Breach.tsx';

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
  const [showTutorial, setShowTutorial] = useState(false);

  // on page load, check if user auth credentials stored.
  // If so, get user data from api.
  useEffect(() => {
    const userAuthDataJSON = window.localStorage.getItem('userAuthDataJSON');
    if (userAuthDataJSON) {
      const user = JSON.parse(userAuthDataJSON);
      setUserAuthData(user);
    }
  }, []);

  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<Home setUserAuthData={setUserAuthData} userAuthData={userAuthData} />}></Route>
        <Route path="level">
          <Route path="quiz1" element={<AttackQuiz weekNumber={1} taskID={'quiz1'} />} />
          <Route path="task1" element={<CCEmail weekNumber={1} taskID={'task1'} />} />
          <Route
            path="flashcards1-attacks"
            element={<Flashcard content={FlashcardData.week1_attacks} weekNumber={1} taskID={'flashcards1-attacks'} />}
          />
          <Route
            path="flashcards1-crypto"
            element={<Flashcard content={FlashcardData.week1_crypto} weekNumber={1} taskID={'flashcards1-crypto'} />}
          />
          <Route path="cc" element={<CC />} />
          <Route
            path="flashcards2-crypto"
            element={<Flashcard content={FlashcardData.week2_crypto} weekNumber={2} taskID={'flashcards2-crypto'} />}
          />
          <Route
            path="flashcards2-packets"
            element={<Flashcard content={FlashcardData.week2_packets} weekNumber={2} taskID={'flashcards2-packets'} />}
          />
          <Route
            path="flashcards2-integrity"
            element={<Flashcard content={FlashcardData.week2_message_integrity} weekNumber={2} taskID={'flashcards2-integrity'} />}
          />
          <Route path="quiz2" element={<Quiz weekNumber={2} taskID={'quiz2'} />} />
          <Route path="task2" element={<LevelRSA weekNumber={2} taskID={'task2'} />} />
          <Route
            path="flashcards3-digital"
            element={<Flashcard content={FlashcardData.week3_digital_signatures} weekNumber={3} taskID={'flashcards3-digital'} />}
          />
          <Route
            path="flashcards3-auth"
            element={<Flashcard content={FlashcardData.week3_end_point_auth} weekNumber={3} taskID={'flashcards3-auth'} />}
          />
          <Route path="quiz3" element={<Quiz weekNumber={3} taskID={'quiz3'} />} />
          <Route path="task3" element={<BreachLevel username={userAuthData.username} weekNumber={3} taskID={'task3'} />} />
          <Route
            path="flashcards4-email"
            element={<Flashcard content={FlashcardData.week4_email} weekNumber={4} taskID={'flashcards4-email'} />}
          />
          <Route
            path="flashcards4-tcp"
            element={<Flashcard content={FlashcardData.week4_tcp} weekNumber={4} taskID={'flashcards4-tcp'} />}
          />
          <Route path="quiz4" element={<Quiz weekNumber={4} taskID={'quiz4'} />} />
          <Route
            path="flashcards5-ipsec"
            element={<Flashcard content={FlashcardData.week5_ipsec} weekNumber={5} taskID={'flashcards5-ipsec'} />}
          />
          <Route
            path="flashcards5-vpn"
            element={<Flashcard content={FlashcardData.week5_firewalls} weekNumber={5} taskID={'flashcards5-vpn'} />}
          />
          <Route path="quiz5" element={<Quiz weekNumber={5} taskID={'quiz5'} />} />
        </Route>
        <Route path="sandbox" element={<Sandbox />} />
        <Route
          path="flashcard"
          element={<Flashcard content={FlashcardData.week1_attacks} weekNumber={1} taskID={'flashcards1-attacks'} />}
        />
        <Route path="tutorial" element={<Tutorial setShowTutorial={setShowTutorial} />} />
        <Route path="*" element={<Error />} />
      </>
    )
  );

  if (userAuthData.token === '') {
    return (
      <ChakraProvider theme={theme}>
        {showLoginPage ? (
          <Login setUserAuthData={setUserAuthData} setShowLogin={setShowLoginPage} />
        ) : (
          <Signup setUserAuthData={setUserAuthData} setShowLogin={setShowLoginPage} />
        )}
      </ChakraProvider>
    );
  } else {
    return (
      <ChakraProvider theme={theme}>
        <RouterProvider router={router} />
      </ChakraProvider>
    );
  }
};

export default App;
