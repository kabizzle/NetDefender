import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import TestComponent from "./components/testComponent.tsx"
import Home from "./pages/Home.tsx";
import Message from "./pages/Message.tsx"
//import MultipleChoiceQuestion from "./components/MultipleChoiceQuestion.tsx";
import Level0 from "./components/MS/Level0.tsx";
import CC from "./components/CC.tsx";

const baseStyle = {
  indicator: {
    "&[data-status=active]": {
      borderWidth: "2px",
      borderColor: "#F9F9F9",
      bg: "#0A0A0A",
    },
    "&[data-status=complete]": {
      borderWidth: "2px",
      borderColor: "#F9F9F9",
      bg: "#0A0A0A",
    },
    "&[data-status=incomplete]": {
      borderWidth: "2px",
      borderColor: "#F9F9F9",
      bg: "#0A0A0A",
      opacity: "50%",
    },
  },
  separator: {
    bg: "#F9F9F9",
    opacity: "50%",
    "&[data-status=complete]": {
      bg: "#F9F9F9",
      opacity: "100%",
    },
    "&[data-orientation=horizontal]": {
      width: "100%",
      height: "2px",
      marginStart: "0",
    },
  }
}

const stepperTheme = {
  baseStyle,
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
        color:'game.white',
        fontFamily:'mono'
      }
    })
  },
  components: {
    Stepper: stepperTheme,
  },
})

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/"  >
      <Route path="test" element={<Home />} />
      <Route path="message" element={<Message />} />
      <Route path="level">
        <Route path="1" element={<Level0 />}/>
        <Route path="2" element={<CC />}/>
      </Route>
    </Route>
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
