import React from 'react';
import { Avatar, Text } from 'react-native-paper';
import { Container, Labels } from './styles'; // Import your styled-components

const Header = () => {
  return (
    <Container>
      <Avatar.Image
        source={{
          uri: "https://images.unsplash.com/photo-1517849845537-4d257902454a?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        }}
        size={57.2}
        style={{ elevation: 10,   borderWidth: 1, borderColor: '#FFF' }} 
      />
      <Labels>
        <Text style={{ fontSize: 20, color: '#fff', fontWeight: '500' }}>André Santos</Text>
        <Text style={{ color: '#fff' }}>Porto</Text>
      </Labels>
    </Container>
  );
}

export default Header;
