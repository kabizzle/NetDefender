import { AbsoluteCenter, Box} from "@chakra-ui/react";
import IntroScreen from '../components/IntroScreen';
import { Link, Outlet } from "react-router-dom";

const Home = () => {
  return (
    <>
      <Box>
        <AbsoluteCenter>
          <IntroScreen/>
        </AbsoluteCenter>
      </Box>

      <Outlet />
    </>
  )
}

export default Home;