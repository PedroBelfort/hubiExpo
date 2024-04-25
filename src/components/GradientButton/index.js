import React  from 'react';
import { TouchableOpacity, StyleSheet, Text } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

 const GradientButton = ({onButtonPress, form_title}) => {

  const styles = StyleSheet.create({
    textTitle:{
      fontWeight: 'bold',
      color: 'white',
      fontSize: 20
    },
    gradient:{
        borderRadius: 40,
        justifyContent:'center',
        alignItems: 'center',
        width: '90%',
        height: 60
    },
  })

  const handleIconPress = () => {
    onButtonPress()
  };

    return (
      <LinearGradient colors={['#08CAAF', '#2C4AC7']} start={{ x: 0, y: 0.5 }} end={{ x: 1, y: 0.5 }} style={styles.gradient}>
        <TouchableOpacity
            onPress={()=>handleIconPress()}
            style={{ alignItems: 'center', justifyContent: 'center' }}
        >
            <Text style={styles.textTitle}>
                {form_title}
            </Text>
        </TouchableOpacity>
    </LinearGradient>
    );
};

export default GradientButton; 