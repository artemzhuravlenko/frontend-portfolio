import React from 'react';
import S from "../styled";
import {Box} from "rebass";

function FinishedCourses(props) {
  return (
    <Box
      mb={[120, 185]}>
      <S.Typography
        color={'#0FFBF9'}
        fontSize={[27, 50, 60]}
      >
        Пройденные курсы:
      </S.Typography>
      <S.Typography fontSize={[16, 24, 24]}>
        <S.Typography>
          <S.Span color={'#0FFBF9'}>The Web Developer Bootcamp</S.Span> — Дал первый опыт работы с frontend и backend.
        </S.Typography>
        <S.Typography>
          <S.Span color={'#0FFBF9'}>Advanced CSS and Sass</S.Span> — Помог разобраться в новых фишках Sass/CSS и дал понимание правильной структуры проекта.
        </S.Typography>
        <S.Typography>
          <S.Span color={'#0FFBF9'}>JsExcel</S.Span> — Перевернул представление о фронтенд разработеке. Понял, как на самом деле работают JS фреймворки. Создал интерактивную копию Excel реализовав свой фреймворк, Redux и некоторые паттерны проектирования.
        </S.Typography>
      </S.Typography>
    </Box>
  );
}

export default FinishedCourses;