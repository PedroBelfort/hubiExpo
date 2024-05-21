import React from 'react';
import { Divider } from 'react-native-paper';
import { Ionicons } from '@expo/vector-icons';
import { Container,
        Header,
        TitleLabel,
        DivContainer, 
        BoldLabel, 
        SmallLabel,
        HorizontalSpace,
        AlertContainer,
        AlertText,
        IconContainer
      } from './styles'
import PrimaryButton from '../../components/PrimaryButton';
import { useNavigation } from "@react-navigation/native";

export default function Recibo({showAlert}) {
  const navigation = useNavigation();
  return (
    <Container>
    <Header>
    <TitleLabel>O seu recibo</TitleLabel>
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
      Taxas de Serviço
        </BoldLabel>
        <BoldLabel>
      
        </BoldLabel>  
      </DivContainer>

      <DivContainer>
      <SmallLabel>
      De 17 Junho 2024 a 17 de Julho de 2024
       </SmallLabel>
      </DivContainer>
      <HorizontalSpace />
      <Divider />
      <HorizontalSpace />
      <DivContainer>
      <BoldLabel>Subtotal</BoldLabel>
      <BoldLabel>€105,49</BoldLabel>
      </DivContainer>

      <DivContainer>
      <BoldLabel>Taxa de Serviço</BoldLabel>
      <BoldLabel>€105,49</BoldLabel>
      </DivContainer>

      <DivContainer>
      <BoldLabel>IVA</BoldLabel>
      <BoldLabel>23%</BoldLabel>
      </DivContainer>

      <DivContainer>
      <BoldLabel>Total</BoldLabel>
       <BoldLabel>€137,50</BoldLabel>
      </DivContainer>
      <HorizontalSpace />
      <HorizontalSpace />
      <Divider />

      <DivContainer>
      <BoldLabel>Pagamentos</BoldLabel>
      </DivContainer>

        {showAlert ? (
            <AlertContainer>
            <Ionicons name="alert-circle-outline" size={30} color={"#283A99"} ></Ionicons>
            <AlertText>
            Pagamento em falta: Caso o pagamento não seja processado até à data definida o acesso à aplicação será suspenso.
            Prazo de pagamento - 17 de Agosto de 2024.
            </AlertText>
            </AlertContainer>
        ) : null}
        
      <DivContainer>
      <SmallLabel>1 de Agosto de 2024</SmallLabel>
      </DivContainer>

      <DivContainer>
      <BoldLabel>IBAN **** **** **** **** **** **** ****</BoldLabel>
      </DivContainer>

      <DivContainer>
      <PrimaryButton  label="Ver Fatura" hasBackground={false} onPress={() =>  navigation.navigate('Fatura')} />
      </DivContainer>
 
  </Container>
  )
}