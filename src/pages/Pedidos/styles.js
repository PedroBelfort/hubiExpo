import styled from 'styled-components/native';
import { Dimensions } from 'react-native';

const windowHeight = Dimensions.get('window').height;
export const Container = styled.View`
flex: 1;
`;

export const Timeline = styled.FlatList`
height: 70px;

`;

export const TimeLineContainer = styled.View`
 height: auto;
`;

export const Title = styled.Text`
 margin-left: 14px;
 margin-bottom: 14px;
 font-size: 20px;
 color: #fff;
 font-weight: 500;
`;

export const ListHeader = styled.View`
height: 70px;
flex-direction: row;
align-items: center;
padding-left: 14px;
border-bottom-width: 1px;
border-bottom-color: #E0E0E0;
`;
export const ListPedidos = styled.FlatList`
height: 87px;
`;


export const ModalContainer = styled.View`
  flex: 1;
  justify-content: flex-end;
  background-color: rgba(0, 0, 0, 0.5);
`;

export const ModalContent = styled.View`
  background-color: #FFF;
  width: 100%;
  max-height: ${windowHeight * 0.6}px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  padding-horizontal: 20px;
  padding-top: 5px;
`;

export const ModalText = styled.Text`
  margin-bottom: 10px;
`;

export const ModalButtonContainer = styled.TouchableOpacity`
  width: 100%;
  height: auto;
  align-items:center;
  vertical-align: auto;
  padding: 2px;
  border-bottom-width: 1px;
  border-bottom-color: #D9D9D9; 
`;

export const ModalOption = styled.TouchableOpacity`
height: 70px;
flex-direction: row;
align-items: center;
padding-left: 14px;
border-bottom-width: 1px;
border-bottom-color: #E0E0E0;
`;

export const OptionCancelar = styled.Text`
 color : #CF5472;
 font-weight: 400;
 padding-left: 14px;
 font-size: 16px;
`;
