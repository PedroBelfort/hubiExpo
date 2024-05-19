import styled from 'styled-components/native';


export const Container = styled.View`
flex: 1;
background-color: white;
`;

export const OptionContainer = styled.TouchableOpacity`
height: auto;
flex-direction: row;
align-items: center;
padding-left: 15px;
padding-right: 15px;
background-color: white;
border-bottom: 1px solid #747474;
justify-content: space-between;
padding-top: 1px;
padding-bottom: 10px;
`;




export const LabelTitle = styled.Text`
font-size: 18px;
font-weight: 500;
padding-top: 10px;

`;

export const LabelValue = styled.Text`
font-size: 15px;
font-weight: 120;
padding-top: 10px;
line-height: 10px;

`;

export const Labels = styled.View`
margin-right: auto;
`;
