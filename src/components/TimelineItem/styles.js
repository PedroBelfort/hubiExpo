import styled from 'styled-components/native';

export const Container = styled.View`
flex-direction: row;
`;



export const ContainerOpacity = styled.TouchableOpacity`
  height: 107px;
  width: 268.38px;
  flex-direction: row;
  align-items: center;
  padding: 14px;
  background-color: rgba(240, 240, 240, 0.3);
  border-radius: 3px;
  

`;

export const Labels = styled.View`
 width:60%;
 height: auto;
 align-items: flex-start;
 justify-content: space-between;
`;

export const VerticalSpace = styled.View`
height: 100%;
width: 14px;

`;

export const Label = styled.Text`
font-size: 14px;
font-weight: 500;
line-height: 20px;
color: #FFF;
`;


export const HorizontalSpace = styled.View`
height: 10px;
background-color: red;
`;