import React from 'react'
import {Container, ImageContainer,UserOption, ContentArea,LabelArea, LargeLabel, SmallLabel,IconContainer} from './styles'
import { Ionicons } from '@expo/vector-icons';
import { useNavigation, useRoute } from "@react-navigation/native"; 
import { LinearGradient } from 'expo-linear-gradient';


export default function PreRegSplashScreen() {

  let resgisterInfo = { "personal_data": {
    type:null,
    first_name: null,
    last_name: null,
    gender: null,
    date_of_birthday: null, 
    address: null,
    zip_code:null, 
    picture: null,
    education: null
  }}

  const navigation = useNavigation();

  function handleIconPress (type){ 
    console.log(type); 
    resgisterInfo["personal_data"].type = type; 
    navigation.navigate('SignUp', {
        resgisterInfo: resgisterInfo,
      }); 
  };

  return (
    <Container>

    <ImageContainer>
      <UserOption source={require('../../../assets/elderly.jpg')} resizeMode='contain' />
      <ContentArea>
       <LabelArea>
          <SmallLabel>Sou</SmallLabel>
          <LargeLabel>Pessoa Cuidada</LargeLabel>
          <SmallLabel>Procuro um Cuidador, Enfermeiro ou Profissional de Limpeza</SmallLabel>
       </LabelArea>
       <IconContainer>
       <Ionicons name="arrow-forward" size={25} color={"#FFF"}  onPress={() => handleIconPress(1)}/>
       </IconContainer>
      </ContentArea>
    </ImageContainer>
    <ImageContainer>
      <UserOption source={require('../../../assets/tutor.jpg')} resizeMode='contain' />
      <ContentArea>
       <LabelArea>
          <SmallLabel>Sou</SmallLabel>
          <LargeLabel>Pessoa Tutor</LargeLabel>
          <SmallLabel>Procuro um Cuidador, Enfermeiro ou Profissional de Limpeza</SmallLabel>
       </LabelArea>
      
       <IconContainer>
       <Ionicons name="arrow-forward" size={25} color={"#FFF"}  onPress={() => handleIconPress(2)}/>
       </IconContainer>

      </ContentArea>
    </ImageContainer>
    <ImageContainer>
      <UserOption source={require('../../../assets/professional.jpg')} resizeMode='contain' />
      <ContentArea>
       <LabelArea>
          <SmallLabel>Sou</SmallLabel>
          <LargeLabel>Pessoa Profissional</LargeLabel>
          <SmallLabel>Procuro trabalho como Cuidador, Enfermeiro ou Profissional de Limpeza</SmallLabel>
       </LabelArea>
       <IconContainer>
       <Ionicons name="arrow-forward" size={25} color={"#FFF"}  onPress={() => handleIconPress(3)}/>
       </IconContainer>
      </ContentArea>
    </ImageContainer>
  </Container>
  )
}