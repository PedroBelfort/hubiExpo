import React from "react";
import { Container,  OutlineButton, Text, GradientButton,TextOutline } from './styles';

export default function PrimaryButton({ label, hasBackground,  onPress }) {
  if(hasBackground){
    return (
        <Container onPress={onPress}>
            <GradientButton>
               <Text>{label}</Text>
            </GradientButton>
        </Container>
      );
  } else {
    return (
        <Container onPress={onPress}>
            <OutlineButton>
               <TextOutline>{label}</TextOutline>
            </OutlineButton>
        </Container>
      );
  }
   
}
