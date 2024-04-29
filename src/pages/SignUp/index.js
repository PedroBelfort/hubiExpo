import React  from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import PhoneInput from "react-native-phone-number-input";
import SmoothPinCodeInput from 'react-native-smooth-pincode-input';
import {  useState } from 'react';
import GradientButton from '../../components/GradientButton';
import LoginTop from '../../components/LoginTop';
import { useRoute, useNavigation } from '@react-navigation/native';
import httpService from '../../services/HttpService';
import { TextInput } from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage';

 const SignUp = ({navigation }) => {

     navigation = useNavigation();

    const route = useRoute();
    let  resgisterInfo  = route.params["resgisterInfo"];
    const [cookieValue, setCookieValue] = useState(null);
    const [pin, setPin] = useState("");
    const [pinConfirm, setConfirm] = useState("");
    const [code, setCode] = useState("");

  const styles = StyleSheet.create({
    maincontainer:{
      height: '100%',
      width: '100%',
      flex: 1
    },
    container: {
      flex: 1,
      alignItems: 'center',
      paddingTop: 50
    },
    gradient:{
      flex: 1,
      width: '90%',
      alignItems: 'center',
      justifyContent: 'flex-end',
      bottom: '10%'
    },
    gradient_text:{
      color: 'white',
      fontSize: 18
    },
    textTitle:{
      fontWeight: 'bold',
      color: 'black',
      fontSize: 24,
      paddingTop: 30,
    },
    footer:{
      bottom:0
    },
    termsText:{
      fontSize: 20,
      color: 'black',
      alignItems: 'center',
      justifyContent: 'center',
      paddingTop: 25,
      width: '75%'
    },
    buttonEnterAccount:{
      flex: 1,
      width: '90%',
      alignItems: 'center',
      justifyContent: 'flex-end'
    },
    labelEnterAccount:{
      fontSize: 20,
      color: '#009681'
    },
    textInput:{
      width: '80%',
	  marginBottom: '5%'
    }
  })


  const phoneInput =()=>{
    if( view == 1) {
      return (
        <PhoneInput
        //ref={phoneInput}
        //defaultValue={value}
        defaultCode="DM"
        layout="first"
        onChangeText={(text) => {
          console.log(text); 
          resgisterInfo["personal_data"].phone = text; 
        }}
        onChangeFormattedText={(text) => {
          //setFormattedValue(text);
        }}
        withDarkTheme
        withShadow
        autoFocus
      />
      )
    }
  }
  const [userLoggedIn, setUserLoggedIn] = useState(false);
  const [register, setButtonText] = useState('Registar');
  const [view, setMyView] = useState(1);

  const handleLoginLinkPress = () => {
    navigation.navigate('Pedidos');
  };

  const validateCodeView = async () =>{

    navigation.navigate('Login', {
      resgisterInfo: resgisterInfo,
    });   

    /*
    console.log(view);

    if( view== 1 ){
      console.log("sad"+resgisterInfo["personal_data"].phone); 
      const result = await httpService.postRequest("registration/", {"phone":resgisterInfo["personal_data"].phone, "type":resgisterInfo["personal_data"].type } );
      console.log("result"+JSON.stringify(result)); 
      resgisterInfo["personal_data"].id = result[0].id_res; 
      setButtonText('Confirmar');
      setMyView(2); 
    } else if( view== 2){
      setTimeout(async () => {
        //await httpService.postRequest("registration/verify", { "phone": resgisterInfo["personal_data"].phone, "code": 123} );
        // se nao registado na resposta chamar inserir novo pin
          if( 2 == 1 ){
            navigation.navigate('Login', {
              resgisterInfo: resgisterInfo,
            });   
          }
      }, 10);
	  setButtonText('NOVO PIN');
      setMyView(3)
    }else  {	
      console.log("salvando");
        try{
            await httpService.putRequest("registration/", {"phone":resgisterInfo["personal_data"].phone, pin: pin} );
            await AsyncStorage.setItem('phone', resgisterInfo["personal_data"].phone);
            navigation.navigate('RegisterForm', {
                resgisterInfo: resgisterInfo,
            });   
    
        } catch(error){
          console.log(error); 
        }  
    }
    */
  }
    return (
        <View style={styles.maincontainer}>
          <View style={styles.container}>
              <LoginTop  message={register}/>
              {view==1 ?(
              phoneInput()
              ) : view == 2 ? (
              <SmoothPinCodeInput
                cellStyle={{
                  borderBottomWidth: 2,
                  borderColor: 'gray',
                }}
                cellStyleFocused={{
                  borderColor: 'black',
                }}
                codeLength={6}
                value={code}
                onTextChange={code => setCode(code)}
                />
           
              ) : (
                <><TextInput style={styles.textInput}
					label="Pin"
					value={pin}
					onChangeText={text => setPin(text)}
					outlineColor = "#009681"
					activeOutlineColor = "#009681"
					mode="outlined" />

				<TextInput style={styles.textInput}
					label="Pin"
					value={pinConfirm}
					onChangeText={text => setConfirm(text)}
					outlineColor = "#009681"
					activeOutlineColor = "#009681"
					mode="outlined" /></>
              )}
        {view !== 3 && (
          <>
            <Text style={styles.termsText}>Ao registrar-se, você concorda com os Termos e Condições.</Text>
            <TouchableOpacity style={styles.buttonEnterAccount} onPress={handleLoginLinkPress}>
              <Text style={styles.labelEnterAccount}>Já tenho uma conta. Entrar</Text>
            </TouchableOpacity>
          </>
        )}
              <View style={styles.gradient}>
                <GradientButton onButtonPress={validateCodeView} form_title = {register}  />
              </View>
          </View>
        </View>
    );
};

export default SignUp; 
