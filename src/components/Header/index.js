import React from 'react';
import {Text } from 'react-native-paper';
import { Container, Labels,LabelName,LabelCidade, AvatarContainer } from './styles';
import Avatar from './../Avatar';

const Header = ({ avatarSource, name, city }) => {
  return (
    <Container>
      <AvatarContainer>
        <Avatar source={{ uri: avatarSource }} />
      </AvatarContainer>
      <Labels>
        <LabelName>{name}</LabelName>
        <LabelCidade>{city}</LabelCidade>
      </Labels>
    </Container>
  );
}

export default Header;
