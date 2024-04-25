import React  from 'react';
import { View, Image, StyleSheet, Text } from 'react-native';
import {  useState } from 'react';

 const LoginTop =  (props) => {

  const { message } = props;

  const styles = StyleSheet.create({
    container: {
      justifyContent:'center',
      alignItems: 'center',
      paddingTop: 0,
    },
    logo:{
      width: 250, 
      height: 175
    },
    textTitle:{
      fontWeight: 'bold',
      color: 'black',
      fontSize: 24,
      paddingTop: 30,
    }
  })

  const [register_label, setLabelText] = useState(message); 

    return (
        <View  style={styles.container}>
            <Image source={require('../../../assets/logo_principal.jpg')} style={styles.logo}  resizeMode='contain'/>
            <Text aria-label="Label for Username" nativeID="regiter" style={styles.textTitle} >{register_label}</Text>
        </View>
    );
};

export default LoginTop; 