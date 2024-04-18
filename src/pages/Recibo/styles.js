import styled from 'styled-components/native';

export const Container = styled.View`
flex: 1;
background-color: #FFFFFF;
`;

export const DivContainer = styled.View`
height: 42px;
background-color: #FFFFFF;
padding: 10px 15px 10px 15px;
flex-direction: row;
justify-content: space-between;
`;


export const Header = styled.View`
height: 70px;
flex-direction: row;
align-items: center;
padding-left: 14px;
border-bottom-width: 1px;
border-bottom-color: #E0E0E0;
`;

export const TitleLabel = styled.Text`
font-weight: 700;
font-size: 18px;
color: #2A2A2A;
`;

export const BoldLabel = styled.Text`
font-weight: 500;
font-size: 16px;
color: #333333;
`;

export const SmallLabel = styled.Text`
font-weight: 400;
font-size: 17px;
color: #333333;
`;

export const ButtonContainer = styled.View`
height: 97px;
width: 100%;
background-color: #FFFFFF;
padding: 14px 14px 14px 14px;
flex-direction: row;
justify-content: space-between;
`;

export const HorizontalSpace = styled.View`
height: 7px;
width: 100%;
`;

export const AlertContainer = styled.View`
  height: auto;
  width: auto;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  padding: 14px;
  border-radius: 10px;
  background-color: rgba(240, 240, 240, 0.0);
  border-bottom-width: 1px;
  border-bottom-color: #E0E0E0;
  background-color: #E6E9F7;
  margin: 10px;
`;

export const AlertText = styled.Text`
color: #283A99;
font-size: 16px;
font-weight: 500;
padding: 2px;
margin-left: auto;
width: 90%;
`;


