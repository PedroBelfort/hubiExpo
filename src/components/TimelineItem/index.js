import React from 'react';
import { Avatar, IconButton } from 'react-native-paper';
import { Container,ContainerOpacity, Labels,VerticalSpace, Label,HorizontalSpace } from './styles'; // Import your styled-components
import { Ionicons } from '@expo/vector-icons';
import Status from "../Status";

const TimeLineItem = ({openModalAtivo}) => {
  return (
    <Container>
    <ContainerOpacity  onPress={()=> openModalAtivo()}>
      <Avatar.Image
        source={{
          uri: "https://images.unsplash.com/photo-1517849845537-4d257902454a?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        }}
        size={48.5}
        style={{ marginRight: 10, elevation: 5 }}
      />
      <Labels>
        <Label>Eunice Silva</Label>
        <Label>10h00 - 11h00</Label>
        <HorizontalSpace></HorizontalSpace>
        <Status status={"Ativo"}></Status>
      </Labels>
      
      <IconButton
        icon={({ color, size }) => (
          <Ionicons name="ellipsis-vertical" size={28} color={"#FFF"} />
        )}
      />
    </ContainerOpacity>
    <VerticalSpace/>
    </Container>
  );
}

export default TimeLineItem;
