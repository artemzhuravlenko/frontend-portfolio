import React from 'react';
import {Box} from "rebass";
import S from "../styled";

function Hi(props) {
  return (
    <Box mb={[30, 50, 200]}>
      <S.Typography fontSize={[30, 72]}>Привет.</S.Typography>
      <S.Typography fontSize={[30, 72]}>Меня зовут Артем.</S.Typography>
      <S.Typography fontSize={[30, 72]} color={'#0FFBF9'}>Я фронтендер</S.Typography>
    </Box>
  );
}

export default Hi;