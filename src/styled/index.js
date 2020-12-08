import styled from '@emotion/styled'
import {Box, Button, Text} from 'rebass'


const Container = styled(Box)`
  position: relative;
  //background-color: #f00;
  width: 100%;
  height: 100%;
`

const Typography = styled(Text)`
  color: ${props => props.color || 'white'};
  font-family: 'Roboto';
`

const Span = styled.span`
  color: ${props => props.color || 'white'};
  font-family: 'Roboto';
`


const ChangeLang = styled(Typography)`
  background: #020202;
  line-height: 100%;
  border: 1px solid white;
  color: white;
  position: absolute;
  top: 0;
  right: 0;
`

const SkillBoxes = styled(Box)`
display: grid;
grid-template-columns: 1fr 1fr;
grid-gap: 10px;
`

const SkillBox = styled(Box)`
  border: 3px solid #0FFBF9;
  display: flex;
  justify-content: center;
  align-items: center;
  
  & > * {
    height: 100%;
  }
`



export default {
  Container,
  Typography,
  Span,
  ChangeLang,
  SkillBoxes,
  SkillBox,
}