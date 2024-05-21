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
height: auto;
width: 100%;
flex-direction: column;
background-color: #FFFFFF;
padding: 14px;
justify-content: space-around;
`;
export const HorizontalSpace = styled.View`
height: 14px;
`;