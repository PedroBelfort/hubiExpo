import { View, Text } from 'react-native';
import React from 'react';
import { Container, TitleContainer, LabelTitle,PhoneContainer,ContainerButtons } from './styles';
import PhoneInput from 'react-native-phone-number-input'; 
import PrimaryButton from '../../components/PrimaryButton';
import { useNavigation } from "@react-navigation/native";

export default function Telemovel() {

  const navigation = useNavigation();

  const resgisterInfo = {
    personal_data: { phone: '966 421 743' },
  };

  return (
    <Container>
      <TitleContainer>
        <LabelTitle>Número de Telemóvel</LabelTitle>
      </TitleContainer>
      <PhoneContainer>
      <PhoneInput
        defaultValue="966 421 743"
        defaultCode="PT"
        layout="first"
        placeholder="Digite o número" 
        containerStyle={{ width: '100%' }}
        onChangeText={(text) => {
          console.log(text);
          resgisterInfo.personal_data.phone = text;
        }}
        onChangeFormattedText={(text) => {
          // setFormattedValue(text);
        }}
        withDarkTheme
        withShadow
        autoFocus
      />
       </PhoneContainer>

       <ContainerButtons>
      <PrimaryButton  label="Atualizar" hasBackground={true} onPress={() => navigation.navigate('CodigoDeConfirmacao')} /> 
      </ContainerButtons>

    </Container>
  );
}
