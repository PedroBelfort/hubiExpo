import React, { useState, useRef } from 'react';
import { TextInput } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import { Container, TitleContainer, LabelTitle,LabelContainer,ContainerButtons,LabelRegular,DigitInput,CodeContainer,LabelVerde  } from './styles';
import PrimaryButton from '../../components/PrimaryButton';

export default function CodigoDeConfirmacao({ length = 6 }) {
  const navigation = useNavigation();
  const [confirmationCode, setConfirmationCode] = useState(new Array(length).fill(''));
  const inputs = useRef([]);

  const handleChangeText = (text, index) => {
    const newCode = [...confirmationCode];
    newCode[index] = text;
    setConfirmationCode(newCode);
    if (text.length === 1 && index < length - 1) {
      inputs.current[index + 1].focus();
    }
  };

  const handleKeyPress = (e, index) => {
    if (e.nativeEvent.key === 'Backspace' && index > 0) {
      inputs.current[index - 1].focus();
    }
  };

  
  return (
    <Container>
    <TitleContainer>
      <LabelTitle>Código de Confirmação</LabelTitle>
    </TitleContainer>
    <LabelContainer>
    <LabelRegular>Introduza o código de 6 dígitos que enviámos para o seu endereço de email.</LabelRegular>
    </LabelContainer>
    <CodeContainer>
    {confirmationCode.map((digit, index) => (
        <DigitInput
          key={index}
          ref={el => (inputs.current[index] = el)}
          value={digit}
          onChangeText={text => handleChangeText(text, index)}
          onKeyPress={e => handleKeyPress(e, index)}
          maxLength={1}
          keyboardType="numeric"
        />
      ))}
    </CodeContainer>

    <LabelContainer>
    <LabelVerde>Não recebi o código. Reenviar.</LabelVerde>
    </LabelContainer>

     <ContainerButtons>
    <PrimaryButton  label="Atualizar" hasBackground={true} onPress={() => navigation.navigate('InformacaoDaConta')} /> 
    </ContainerButtons>

  </Container>
  )
}