import { TextInput } from 'react-native';
import React, { useState } from 'react';
import { Container, TitleContainer, LabelTitle, EmailContainer, ContainerButtons } from './styles';
import PrimaryButton from '../../components/PrimaryButton';
import { useNavigation } from "@react-navigation/native";

export default function AtualizacaoDeEmail() {
  const navigation = useNavigation();
  const [email, setEmail] = useState('exemplo@dominio.com');

  const resgisterInfo = {
    personal_data: { email: email },
  };

  return (
    <Container>
      <TitleContainer>
        <LabelTitle>Endereço de Email</LabelTitle>
      </TitleContainer>
      <EmailContainer>
        <TextInput
          value={email}
          placeholder="Digite o novo e-mail"
          style={{ width: '100%', padding: 10, borderWidth: 1, borderColor: '#08CAAF', borderRadius: 5 }}
          keyboardType="email-address"
          onChangeText={(text) => {
            console.log(text);
            setEmail(text);
            resgisterInfo.personal_data.email = text;
          }}
        />
      </EmailContainer>

      <ContainerButtons>
        <PrimaryButton
          label="Atualizar"
          hasBackground={true}
          onPress={() => navigation.navigate('CodigoDeConfirmacao')}
        />
      </ContainerButtons>
    </Container>
  );
}
