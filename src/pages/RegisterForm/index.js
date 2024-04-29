import React  from 'react';
import { View, StyleSheet, Text, TextInput, Pressable, TouchableOpacity  } from 'react-native';
import { CheckBox } from 'react-native-elements'
import Header from './Components/Header';
import GradientButton from './Components/GradientButton';
import {  useState } from 'react';
import RegisterDataForm from '../../data/registerDataForm';
import {launchImageLibrary, launchCamera} from 'react-native-image-picker';
import { useRoute } from '@react-navigation/native';
import { List } from 'react-native-paper';
import * as FileSystem from 'expo-file-system';
import httpService from '../Services/HttpService';



 const RegisterForm = ({navigation }) => {

    const [view, setView] = useState(1);
    const route = useRoute();
    // Access passed parameters
    let  resgisterInfo  = route.params["resgisterInfo"];
    //console.log("entrou forms"+ resgisterInfo["personal_data"]))
    const data = RegisterDataForm[resgisterInfo.personal_data.type]; 
    const [form_title, setFormTitle] = useState(data[0].title);


    const styles = StyleSheet.create({
        maincontainer:{
          height: '100%',
          width: '100%',
          flex: 1
        },
        container: {
          flex: 1,
          alignItems: 'center',
          paddingTop: 50,
        },
        container_form: {
          height: '80%',
          flex: 1,
          alignItems: 'center',
          marginTop: '15%',
          paddingHorizontal: 20
        },
        gradient:{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'flex-end',
            bottom: '5%'
        },
        textTitle:{
          fontWeight: 'bold',
          color: 'black',
          fontSize: 24,
          paddingTop: 30,
        },
        header:{
          top:0
        },
        button:{
          width: '100%',
          height: 40,
          borderColor: 'gray',
          borderWidth: 1,
          paddingHorizontal: 10,
          marginBottom: 20,
          justifyContent: 'center',
        },
        input: {
          width: '100%',
          height: 40,
          borderColor: 'gray',
          borderWidth: 1,
          paddingHorizontal: 10,
          marginBottom: 20,
        },
        buttonImage:{
          paddingLeft: 20,
          paddingTop: 20,
        },
        textImage:{
          color: 'green'
        }
    })  
   

    const assignValue =function ( education ){
        console.log(education); 
      }
      
    const changeView = () => {
      if( view == 1 ) {
        navigation.navigate('SignUp',); 
      }
      else {
      var newView =  view -1; 
      console.log("entrou"+newView); 
      setFormTitle(data[newView-1].title)
      setView(newView); 
      }
    };

    const changeViewAdvance = () => {
      console.log("resgisterInf antes"+JSON.stringify(resgisterInfo)); 
        if(view == data.length){
          navigation.navigate('Picture',  {
            resgisterInfo: resgisterInfo,
          }); 
        } else {
          var newView =  view +1; 
          setFormTitle(data[newView-1].title)
          setView(newView);
          console.log("resgisterInf depois"+JSON.stringify(resgisterInfo)); 
        } 
    };

   
    const handleChange = (index) => {
      setStates(prevStates => {
        const updatedStates = [...prevStates];
        updatedStates[index] = true;
        return updatedStates;
      });
    };
    const createCheckbox =() =>{

      const [states, setStates] = useState(data[view-1].fields.map( item =>  true));

      let fields = data[view-1].fields.map( ({key, value })=> { 
        return (
          <View>
            <CheckBox
            title={value}
            checked={handleChange(key)}
            />
              <List.Accordion
                title=""
                expanded={states[key]}
                >
                <List.Item title="First item" />
                <List.Item title="Second item" />
             </List.Accordion>
          </View>
        ) 
      }); 
      return (
        <View style = {styles.container_form}>
          {fields}
        </View>
      ) 
    }

    const createButton =() =>{
      let fields = data[view-1].fields.map( ({key, value }) => {
        return(
          <Pressable key = {key} style={styles.button} onPress={()=>{ assignProp( data[view-1].key_tag, key, data[view-1].data) }}>
            <Text>{value}</Text>
          </Pressable>
        )
      }); 

      return (
        <View style = {styles.container_form}>
          {fields}
        </View>
      ) 
    }

    const createPicture =() =>{

      const handlePress = () => {
        // Handle press event
        console.log('Text pressed');
        const options = {
          mediaType: 'photo',
          includeBase64: false,
          maxHeight: 2000,
          maxWidth: 2000,
        };
  
        launchImageLibrary(options,  async (response) => {
          if (response.didCancel) {
          console.log('User cancelled image picker');
          } else if (response.error) {
          console.log('Image picker error: ', response.error);
          } else {
            let imageUri = response.uri || response.assets?.[0]?.uri;
            //setSelectedImage(imageUri);
            console.log("aqui"); 
            
            const base64ImageData =  await FileSystem.readAsStringAsync(imageUri, { encoding: FileSystem.EncodingType.Base64 });
            const data_pic = {
              "res_id": resgisterInfo['personal_data'].id,
              "picture": base64ImageData, 
              "tag": data[view-1].key_tag
              }
            httpService.postRequest("documents/", data_pic ); 
            
          }
        });
      };

      return (
        <View  style={styles.buttonImage}>
          <Pressable onPress={handlePress}>
            <Text style={styles.textImage}> + Adicionar Ficheiro</Text>
          </Pressable>
        </View>
      ) 
    }


    function assignProp( key, value, type) {
      Object.keys(resgisterInfo[type]).forEach( function (key2) {
        if( key2 == key) resgisterInfo[type][key2] = value; 

      })
      console.log(JSON.stringify(resgisterInfo)); 
    }

    const createForm =() =>{
      let fields = data[view-1].fields.map( ({key, value })=> {
        return(
          <TextInput
            key = {key}
            style={styles.input}
            onChangeText={(text) => { assignProp( key, text, data[view-1].data) }}
            //value={text}
            placeholder={value}
          />)
      }); 

      return (
        <View style = {styles.container_form}>
          {fields}
        </View>
      ) 
    }

    

    return (
        <View style = {styles.maincontainer}>
            <View style = {styles.header}>
                <Header onButtonPress={changeView} form_title = {form_title}/>  
                {data[view-1].type == "form"  ? (
                  createForm()
                ) : data[view-1].type == "button" ?  (
                  createButton()
                ) : data[view-1].type == "checkbox" ?  (
                  createCheckbox()
                ): (
                  createPicture()
                )}
            </View>
            <View style={styles.gradient}>
                <GradientButton onButtonPress={changeViewAdvance} form_title = {"Continuar"} />
            </View>
        </View>
    );
};

export default RegisterForm; 

