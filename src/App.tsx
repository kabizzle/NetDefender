import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import TestComponent from "./components/testComponent.tsx";
import Home from "./pages/Home.tsx";
import Message from "./pages/Message.tsx"
//import MultipleChoiceQuestion from "./components/MultipleChoiceQuestion.tsx";
import Level0 from "./components/MS/Level0.tsx";
import Tutorial from "./pages/Tutorial.tsx";
import Error from "./pages/Error.tsx";
import LevelView from "./components/LevelView.tsx";

const theme = extendTheme({
  colors: {
    game: {
      green: "#04A130",
      black: "#0A0A0A",
      white: "#F9F9F9",
      red: "#C0181F",
      gray: "#5F5F5F"
    }
  },
  styles: {
    global: () => ({
      body: {
        bg: 'game.black',
        color:'game.white',
        fontFamily:'mono'
      }
    })
  },
  components: {
    Progress: {
      defaultProps:{
        size: "lg",
        colorScheme:"green"
      }
    },
    Text: {
      defaultProps:{
        fontFamily:"mono"
      }
    }
  }
})

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Home />}>
        <Route path="1" element={<LevelView />}/>
      </Route>
      <Route path="level">
        <Route path="1" element={<Level0 />}/>
      </Route>
      <Route path="test" element={<TestComponent />} />
      <Route path="tutorial" element={<Tutorial />} />
      <Route path="*" element={<Error />} /> 
    </>
  )
);

const App = () => {
  
  return (
    <ChakraProvider theme = {theme}>
      <RouterProvider router={router} />
    </ChakraProvider>
  )
}

export default App
