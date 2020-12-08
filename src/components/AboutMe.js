import React from 'react';
import S from "../styled";
import {Box} from "rebass";

function AboutMe(props) {
  return (
    <Box mb={[60, 70]}>
      <S.Typography color={'#0FFBF9'} fontSize={[27, 50, 60]}>Обо мне:</S.Typography>
      <S.Typography fontSize={[16, 24, 24]}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </S.Typography>
    </Box>
  );
}

export default AboutMe;