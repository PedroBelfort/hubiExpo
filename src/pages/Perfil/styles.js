import styled from 'styled-components/native';


export const Container = styled.View`
flex: 1;
background-color: #FFF;
`;


export const Header = styled.TouchableOpacity`
  height: auto;
  flex-direction: row;
  align-items: center;
  padding: 20px 15px 20px 15px;
  background-color: rgba(240, 240, 240, 0.0);
  justify-content: space-between;
  border-bottom-width: 1px;
  border-bottom-color: #E0E0E0;
  background-color: #FFF;
  border-top: 1px solid #747474;
`;

export const Labels = styled.View`
 width:231px;
 align-items: flex-start;
`;

export const LabelName = styled.Text`
font-weight: 400;
font-size: 16px;

`;
export const LabelTelefone = styled.Text`
font-weight: 400;
font-size: 16px;
`;

export const LabelEmail = styled.Text`
font-weight: 500;
font-size: 14px;
`;

export const OptionContainer = styled.TouchableOpacity`
height: 72px;
flex-direction: row;
align-items: center;
padding-left: 15px;
padding-right: 15px;
background-color: white;
border-bottom: 1px solid #747474;
justify-content: space-between;
`;

export const BackgroundContainer = styled.View`
background-color: #009681;
`;





