import React,{useState} from 'react';
import { StyleSheet, Text, View,Button, TextInput, Alert, Pressable } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import  useTogglePasswordVisibility  from '../components/eyetoggleforpassword';
import axios from 'axios';


const LoginPage =  ({ navigation })=>  {
    const { passwordVisibility, rightIcon, handlePasswordVisibility } = useTogglePasswordVisibility();

    const[employeenumber, setEmployeenumber] = useState('')
    const[passwords, setPassword] = useState('')
  

    const checkLogin = () => {

        if(employeenumber == '' ||  passwords == '')
      {
      Alert.alert("Please Enter All the Values.");
      }
    else{
      axios
          .post('https://8000-anshulakotiya-sihgail-o32qjuu43i7.ws-us38.gitpod.io/userLogin/', {  
            username: employeenumber,   // THE KEY NAME HAS TO BE SAME AS THE MODEL FIELD IN DJANGO MODEL AND ALWAYS USE SERIALIZER
            password: passwords,   // THE KEY NAME HAS TO BE SAME AS THE MODEL FIELD IN DJANGO MODEL AND ALWAYS USE SERIALIZER
          })
          .then((response) => {
              console.log(response.data.status)
            if(response.data.status === 'success')
            {
              Alert.alert("Logged in Successfully.");
              navigation.navigate('Afterlogin',{user:employeenumber})
            }else if(response.data.status === 'user not active'){
              navigation.navigate('verification')
            }
            else{
              Alert.alert('Enter the valid credentials')
            }
              }).catch((error) => {
                console.error(error);
              })
    
            
        }
    }

  return (
    <View style={styles.container}>
        <View style={styles.inputcontainer}>
     <TextInput style={styles.input} editable placeholder='Employee Number' maxLength ={64} placeholderTextColor="#fff" 
     value={employeenumber} onChangeText={(user_employ) => setEmployeenumber(user_employ)}/>
     <TextInput style={styles.input} editable placeholder='Password' maxLength ={64} placeholderTextColor="#fff"
      value={passwords} onChangeText={(user_passwo) => setPassword(user_passwo)} secureTextEntry={passwordVisibility} />
    <Pressable onPress={handlePasswordVisibility}>
          <MaterialCommunityIcons name={rightIcon} size={22} color="#232323" />
        </Pressable>
        </View>
     <View style={styles.buttonContainer}>
            <Button title='Login' onPress={checkLogin} />
          </View>
      </View>


  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3B5380',
    alignContent:'center',
  },
  input:{
    borderBottomWidth : 2,
    borderColor : '#fff',
    width:300,
    color : '#fff',
    fontSize: 20,
    padding:10,
  },
  buttonContainer:{
    alignContent:'center',
    marginTop: 50,
    paddingTop:30,
    padding:40,
  },
});

export default LoginPage