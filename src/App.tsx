import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import TestComponent from "./components/testComponent.tsx"
import Home from "./pages/Home.tsx";
import Message from "./pages/Message.tsx"
//import MultipleChoiceQuestion from "./components/MultipleChoiceQuestion.tsx";
import Level0 from "./components/MS/Level0.tsx";

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
  }
})

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<TestComponent />} >
      <Route path="test" element={<Home />} />
      <Route path="message" element={<Message />} />
      <Route path="level">
        <Route path="1" element={<Level0 />}/>
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
