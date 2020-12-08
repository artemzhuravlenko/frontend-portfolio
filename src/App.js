import React from "react";
import S from './styled/index';
import {Box} from 'rebass';
import react from './components/technologies/React.svg';
import Hi from './components/Hi';
import Technologies from "./components/Technologies";
import AboutMe from "./components/AboutMe";
import FinishedCourses from "./components/FinishedCourses";
import ChangeLang from "./components/ChangeLang";
import TimeLine from "./components/Timeline";

function App() {
  return (
    <>
      <ChangeLang/>
      <Box
        mx={[10, 40, 100]}
        mt={[90, 180, '40vh']}
        mb={[40, 100, '40vh']}
        width={[1, 1, 1100]}>
        <Hi/>
        <Technologies/>
        <AboutMe/>
        <FinishedCourses/>
        <TimeLine/>
      </Box>
    </>
  )
}

export default App;
