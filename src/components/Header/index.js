import React from 'react';
import {Text } from 'react-native-paper';
import { Container, Labels,LabelName,LabelCidade, AvatarContainer } from './styles';
import Avatar from './../Avatar';

const Header = () => {
  return (
    <Container>
      <AvatarContainer>
      <Avatar source={{ uri: 'https://images.unsplash.com/photo-1517849845537-4d257902454a?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' }} />
      </AvatarContainer>
      <Labels>
        <LabelName>André Santos</LabelName>
        <LabelCidade>Porto</LabelCidade>
      </Labels>
    </Container>
  );
}

export default Header;
