import React, { useEffect } from 'react';
import { Image, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const SplashScreen = ({ navigation }) => {
  useEffect(() => {
    // Simulate loading tasks (e.g., fetching data, initializing app)
    const timeout = setTimeout(() => {
      // Navigate to the main screen after a delay (e.g., 2000 milliseconds)
      navigation.replace('PreRegSplashScreen');
    }, 2000);

    // Clean up timeout when component unmounts
    return () => clearTimeout(timeout);
  }, []);

  const styles = StyleSheet.create({
    gradient: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    logo: {
      width: 200, // Adjust size according to your preference
      height: 200, // Adjust size according to your preference
    },
  });

  return (
    <LinearGradient colors={['#08CAAF', '#2C4AC7']} style={styles.gradient}>
      <Image
        source={require('../../../assets/logo.png')} // Adjust the path based on your project structure
        style={styles.logo}
        resizeMode="contain"
      />
    </LinearGradient>
  );
};

export default SplashScreen;
