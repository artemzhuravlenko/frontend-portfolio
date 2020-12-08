import React from 'react';
import S from "../styled";

function ChangeLang(props) {
  return (
    <S.ChangeLang
      fontSize={[30, 64, 64]}
      p={10}
      pb={0}
      mt={[16, 37, 60]}
      mr={[12, 30, 44]}
    >
      Ru
    </S.ChangeLang>
  );
}

export default ChangeLang;