import styled from 'styled-components/native';
import { View, FlatList, TouchableOpacity, Text } from 'react-native';

export const HorizontalSpace = styled.View`
height: 7px;
width: 100%;
`;

export const Container = styled.View`
flex: 1;
background-color: #fff;
`;

export const PesquisaContainer = styled.View`
padding: 15px;
background-color: red;
height: auto;
width: 100%;
`;


export const AutocompleteContainer = styled.View`
  flex: 1;
  position: absolute;
  left: 10px;
  right: 10px;
  top: 60px;
  z-index: 1;
`;

export const Item = styled.TouchableOpacity`
  padding: 10px;
  border-bottom-width: 1px;
  border-color: #ccc;
  background-color: #FFF;
`;

export const ItemText = styled.Text``;