import { ChakraProvider, extendTheme, AbsoluteCenter, Box } from "@chakra-ui/react";
import IntroScreen from './components/IntroScreen';

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

  return (
    <ChakraProvider theme = {theme}>
      <Box pos='relative' w='100vw' minHeight='100vh'>
        <AbsoluteCenter>
          <IntroScreen/>
        </AbsoluteCenter>
      </Box>
    </ChakraProvider>
  )
}

export default App
