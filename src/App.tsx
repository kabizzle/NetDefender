import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import TestComponent from './components/testComponent.tsx';
import Home from './pages/Home.tsx';
import Level0 from './components/MS/Level0.tsx';
import CC from './components/CC.tsx';
import LevelCC from './components/LevelCC.tsx';
import CCEmail from './components/CCEmail.tsx';
import Phishing from './components/Phishing.tsx';
import EmailMenu from './components/EmailMenu.tsx';
import Tutorial from './pages/Tutorial.tsx';
import Error from './pages/Error.tsx';
import LevelView from './components/LevelView.tsx';
import LevelRSA from './components/MS/LevelRSA.tsx';
import Sandbox from './components/Sandbox.tsx';

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
		}
	}
});

const router = createBrowserRouter(
	createRoutesFromElements(
		<>
			<Route path="/" element={<Home />}>
				<Route path="1" element={<LevelView />} />
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
			<Route path="test" element={<TestComponent />} />
			<Route path="tutorial" element={<Tutorial />} />
			<Route path="*" element={<Error />} />
		</>
	)
);

const App = () => {
	return (
		<ChakraProvider theme={theme}>
			<RouterProvider router={router} />
		</ChakraProvider>
	);
};

export default App;
