import {Text } from 'react-native'
import React from 'react'
import { Container, Header,TitleLabel,DivContainer, BoldLabel, SmallLabel,ButtonContainer} from './styles'
import PrimaryButton from '../../components/PrimaryButton'
import { useNavigation, useRoute } from "@react-navigation/native"; 

export default function ServicoRealizado() {

  const navigation = useNavigation();
  const route = useRoute();

  return (
    <Container>
      <Header>
      <TitleLabel>O Serviço</TitleLabel>
      </Header>
      <DivContainer>
      <BoldLabel>
          Total
        </BoldLabel>
        <BoldLabel>
          €50,98
        </BoldLabel>  
      </DivContainer>
      <DivContainer>
        <BoldLabel>
           Servico De Enfermagem
        </BoldLabel>
        </DivContainer>
         
        <DivContainer>
        <SmallLabel>
            17 Junho 2024 pelas 10:00 horas
         </SmallLabel>
        </DivContainer>
        <ButtonContainer>
        <PrimaryButton  label="Ver Fatura Cliente" hasBackground={false} onPress={() => navigation.navigate('Fatura')} />
        </ButtonContainer>
        <ButtonContainer>
        <PrimaryButton  label="Ver Recibo " hasBackground={false} onPress={() => navigation.navigate('Recibo')} />
          </ButtonContainer>
    </Container>
  )
}