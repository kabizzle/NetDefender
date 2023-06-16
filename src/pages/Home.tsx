import React from 'react'
import { AbsoluteCenter, Box, Button } from "@chakra-ui/react";
import IntroScreen from '../components/IntroScreen';
import { Link, Outlet } from "react-router-dom";

const Home = () => {
  return (
    <>
      <Box pos='relative' w='100vw' minHeight='100vh'>
        <AbsoluteCenter>
          <IntroScreen/>
        </AbsoluteCenter>
      </Box>

      <Outlet />
    </>
  )
}

export default Home;