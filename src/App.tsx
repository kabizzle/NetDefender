import { ChakraProvider, extendTheme, AbsoluteCenter, Box } from "@chakra-ui/react";
import IntroScreen from './components/IntroScreen';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import TestComponent from "./components/testComponent.tsx"

const Root = () => {
  return <>
  </>
}


const theme = extendTheme({
  colors: {
    game: {
      green: "#04A130",
      black: "#0A0A0A",
      white: "#F9F9F9",
      red: "#C0181F"
    }
  },
  styles: {
    global: () => ({
      body: {
        bg: 'game.black',
        color:'game.white'
      }
    })
  }
})

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />} >
        <Route index element={<App />} />
        <Route path="test" element={<TestComponent />} />
      </Route>
    )
  );
  
  return (
    <ChakraProvider theme = {theme}>
      <RouterProvider router={router} />
      <Box pos='relative' w='100vw' minHeight='100vh'>
        <AbsoluteCenter>
          <IntroScreen/>
        </AbsoluteCenter>
      </Box>
    </ChakraProvider>
  )
}

export default App
