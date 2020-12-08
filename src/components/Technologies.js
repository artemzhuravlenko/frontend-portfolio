import React from 'react';
import S from "../styled";
import react from "./technologies/React.svg";

function Technologies(props) {
  return (
    <>
      <S.Typography
        width={'90%'}
        fontSize={[23, 48]}
        pb={[16, 24]}
      >Технологии, которыми я владею:</S.Typography>
      <S.SkillBoxes
        mb={[37, 111]}
        >
        <S.SkillBox height={[145, 185]}>
          <img src={react} alt=""/>
        </S.SkillBox>
        <S.SkillBox height={[145, 185]}>
          <img src={react} alt=""/>
        </S.SkillBox>
        <S.SkillBox height={[145, 185]}>
          <img src={react} alt=""/>
        </S.SkillBox>
        <S.SkillBox height={[145, 185]}>
          <img src={react} alt=""/>
        </S.SkillBox>
        <S.SkillBox height={[145, 185]}>
          <img src={react} alt=""/>
        </S.SkillBox>
        <S.SkillBox height={[145, 185]}>
          <img src={react} alt=""/>
        </S.SkillBox>
        <S.SkillBox height={[145, 185]}>
          <img src={react} alt=""/>
        </S.SkillBox>
        <S.SkillBox height={[145, 185]}>
          <img src={react} alt=""/>
        </S.SkillBox>
      </S.SkillBoxes>
    </>
  );
}

export default Technologies;