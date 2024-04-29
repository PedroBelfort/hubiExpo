import React, { useEffect }  from 'react';
import { TouchableOpacity, StyleSheet, Dimensions, FlatList, Text } from 'react-native';
import LoginTop from '../../components/LoginTop'
import { View } from 'react-native';
const { width, height } = Dimensions.get("window");
import { Ionicons } from '@expo/vector-icons';
import {  useState } from 'react';
import { useRoute } from '@react-navigation/native';
import httpService from '../../services/HttpService';
import AsyncStorage from '@react-native-async-storage/async-storage';

 const Login = ( {navigation} ) => {
  const route = useRoute();
  // Access passed parameters
  let  resgisterInfo  = route.params["resgisterInfo"];
  const styles = StyleSheet.create({
    maincontainer:{
        height: '100%',
        width: '100%'
      },
    container: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 50
    },
    textTitle:{
      fontWeight: 'bold',
      color: 'black',
      fontSize: 20
    },
    gradient:{
        borderRadius: 40,
        justifyContent:'center',
        alignItems: 'center',
        width: '90%',
        height: 60
    },
    footer:{
      bottom:0
    },
    dialPadContainer: {  
      justifyContent: "center",
      alignItems: "center",
      margin: 10,
      borderRadius: 50,
      borderColor: "transparent",
    },
    buttonRecoverPin:{
      width: '90%',
      alignItems: 'center',
      justifyContent: 'flex-end',
      bottom: '5%'
    },
    labelRecoverPin:{
      fontSize: 20,
      color: '#009681'
    }
  })

  const [code, setCode] = useState([]);
  const [message, setMesssage] = "Introduza o Pin";
  const dialPadContent = [1, 2, 3, 4, 5, 6, 7, 8, 9, "", 0, "X"];
  const dialPadSize = width * 0.2;
  const dialPadTextSize = dialPadSize * 0.4;
  const pinLength = 4;
  

    return (
        <View style = {styles.maincontainer}>
            <View style={styles.container}>
                <LoginTop message={"Introduza o Pin"} />
                <FlatList
                  data={dialPadContent}
                  numColumns={3} // set number of columns
                  keyExtractor={(_, index) => index.toString()}
                  renderItem={({ item }) => {
                    return (
                      <TouchableOpacity
                        disabled={item === ""} // make the empty space on the dialpad content unclickable
                        onPress={ async () => {
                          if (item === "X") {
                            setCode((prev) => prev.slice(0, -1));
                            console.log("code ="+code); 
                          } else {
                            if (code.length === pinLength) {
                              
                              let pin = ""; 
                              code.map( (element) => {
                                  pin = pin + element; 
                              }); 
                              
                              console.log("pin"+pin);
                              const phoneUser = await AsyncStorage.getItem('phone');
                              console.log("pin"+phoneUser);
                              const login =  await httpService.postRequest("registration/login/", { phone: phoneUser, pin: pin });
                              console.log("login"+JSON.stringify(login));
                              if ( login.logged ) {
                                resgisterInfo['personal_data'].type = login.data[0].type; 
                              }

                              if( login.logged && (login.data[0].state == null )) {
                                resgisterInfo['personal_data'].id = login.data[0].id_res; 
                                navigation.navigate("RegisterForm", {
                                  resgisterInfo: resgisterInfo,
                                });
                              }
                              if(  login.logged && login.data[0].state == 3 ) {
                                navigation.navigate("Home"); 
                              }

                              if(  login.logged && login.data[0].state >= 0 && login.data[0].state <3 ) {
                                navigation.navigate("FormReview", {
                                  resgisterInfo: resgisterInfo,
                                }); 
                              }
                              
                            }
                            setCode((prev) => [...prev, item]);
                            console.log("code "+code); 
                            //setMesssage(message)
                          }
                        }}
                        >
                        <View
                          style={[
                            {
                              backgroundColor: item === "" ? "transparent" : "#009681",
                              width: dialPadSize,
                              height: dialPadSize,
                            },
                            styles.dialPadContainer,
                          ]}
                        >
                          {item === "X" ? (
                            //<Feather name="delete" size={24} color="#3F1D38" />
                            <Ionicons name="arrow-back" size={30} color= 'white' />
                          ) : (
                            <Text
                              style={[{ fontSize: dialPadTextSize, color: 'white' }, styles.dialPadText]}
                            >
                              {item}
                            </Text>
                          )}
                        </View>
                      </TouchableOpacity>
                    );
                  }}
                />
            </View>
            <TouchableOpacity 
            style = {styles.buttonRecoverPin}
            onPress={ async () => {  navigation('SignUp')}} >
                  <Text style = {styles.labelRecoverPin}> Esqueci-me do Pin.</Text>
            </TouchableOpacity >
        </View>
    );
};

export default Login; 