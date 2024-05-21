import styled from 'styled-components/native';

export const Container = styled.View`
flex: 1;
background-color: #FFF;
`;

export const TitleContainer = styled.View`
width: 100%;
height: 80px;
text-align: center;
justify-content: center;
padding: 14px;
`;

export const LabelTitle =  styled.Text`
font-size:  18px;
font-weight: 600;
`;

export const LabelRegular =  styled.Text`
font-size:  16px;
font-weight: 500;
`;


export const LabelContainer = styled.View`
padding-left: 14px;
padding-right: 14px;
text-align: center;
justify-content: center;
flex-direction: row;
`;

export const ContainerButtons = styled.View`
  height: auto;
  flex-direction: row;
  justify-content: space-between;
  background-color: transparent;
  padding: 14px;
  position: absolute;
  bottom: 0;
`;

export const DigitInput = styled.TextInput`
  width: 42px;
  height: 65px;
  border: 1px solid #08CAAF;
  border-radius: 5px;
  text-align: center;
  margin-top: 14px;
`;

export const CodeContainer = styled.View`
flex-direction: row;
justify-content: space-between;
padding: 14px;
`;

export const LabelVerde = styled.Text`
font-weight: 600;
color:#009681;
font-size: 18px;
margin-top: 24px;
`;
