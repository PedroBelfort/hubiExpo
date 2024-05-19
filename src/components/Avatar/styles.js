import React from 'react';
import styled from 'styled-components/native';

export const AvatarContainer = styled.View`
  width: 100%;
  height: 100%;
  overflow: hidden;
  align-items: center;
  justify-content: center;
`;

export const AvatarImage = styled.Image`
  width: 100%;
  height: 100%;
  border-radius: 100px;
  border-width: 4px;
  border-color: white;
  background-color: #e0e0e0; /* Cor de fundo enquanto a imagem carrega */
`;

