import { setStatusBarStyle } from 'expo-status-bar';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: white;
`;

export const ImageContainer = styled.View`
  flex-direction: row;
  flex: 1;
  height: 35%;
  width: 100%;
  margin-bottom: 1px;
`;

export const UserOption = styled.Image`
  flex: 1;
  height: undefined;
  width: undefined;
  resize-mode: cover;
`;

export const ContentArea = styled.View`
height: 100px;
width: 100%;
position: absolute;
z-index: 99;
bottom: 0;
justify-content: space-between;
flex-direction: row;
align-items:center;
padding-right: 14px;
;
`;

export const LabelArea = styled.View`
padding-left: 14px;
width: 75%;
`;

export const LargeLabel = styled.Text`
color: #fff;
font-size: 24px;
font-weight: 700;
`;

export const SmallLabel = styled.Text`
color: #fff;
font-size: 12px;
line-height: 16px;
font-weight: 500;
`;

export const IconContainer = styled.View`
width: 42px;
height: 42px;
padding: 5px;
border-radius: 21px;
background-color: #08CAAF;
align-items: center;
justify-content: center;
`;