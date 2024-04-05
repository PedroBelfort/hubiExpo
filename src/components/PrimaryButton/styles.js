import styled from "styled-components/native";
import { LinearGradient } from 'expo-linear-gradient';

export const Container =styled.TouchableOpacity`

`;

export const GradientButton = styled(LinearGradient).attrs({
  colors: ['#009681', '#2C4AC7'], // Cores do gradiente
  start: { x: 0, y: 0 }, // Posição inicial do gradiente
  end: { x: 1, y: 1 }, // Posição final do gradiente
})`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 65px;
  border: 1px solid rgba(0, 150, 129, 1);
  border-radius: 100px;
  box-sizing: border-box;
`;
  
export const OutlineButton = styled.View`
    color:red;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 65px;
    border: 1px solid rgba(0, 150, 129, 1);
    border-radius: 100px;
    box-sizing: border-box;
  `;
  


export const Text = styled.Text`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  color: rgba(255, 255, 255, 1);
  font-size: 20px;
  line-height: 20px;
  font-family: sans-serif;
  font-weight: 600;
  text-align: right;
  margin: 0;
`;

export const TextOutline = styled.Text`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  color: rgba(0, 150, 129, 1);
  font-size: 20px;
  line-height: 20px;
  font-family: sans-serif;
  font-weight: 600;
  text-align: right;
  margin: 0;
`;
