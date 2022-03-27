import React,{useState} from 'react';
import { StyleSheet, Text, View,Button ,TextInput, Alert, ScrollView, Pressable } from 'react-native';
import { CheckBox} from 'react-native-elements';
import axios from 'axios';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import  useTogglePasswordVisibility  from '../components/eyetoggleforpassword';


const  Employeedetail = ({ navigation }) => {

  const[fullname, setFullname] = useState('')
  const[designation, setDesignation] = useState('')
  const[employeenumber, setEmployeenumber] = useState('')
  const[officeaddress, setOfficeaddress] = useState('')
  const[contactnumber, setContactnumber] = useState('')
  const[password, setPassword] = useState('')
  const[gender, setGender] = useState('')
  const { passwordVisibility, rightIcon, handlePasswordVisibility } = useTogglePasswordVisibility();


  const handlesubmit = () => {

    if(fullname == '' || designation == '' || employeenumber == '' || officeaddress == ''|| contactnumber == '' || password == '' || gender == '')
  {
  Alert.alert("Please Enter All the Values.");
  }
  else{
  axios
      .post('https://sih-gail.herokuapp.com/userSignup/', {   //ALWAYS USE http:// BEFORE THE URL
        emp_name:fullname ,   // THE KEY NAME HAS TO BE SAME AS THE MODEL FIELD IN DJANGO MODEL AND ALWAYS USE SERIALIZER
        emp_desig:designation ,   // THE KEY NAME HAS TO BE SAME AS THE MODEL FIELD IN DJANGO MODEL AND ALWAYS USE SERIALIZER
        emp_no: employeenumber,   // THE KEY NAME HAS TO BE SAME AS THE MODEL FIELD IN DJANGO MODEL AND ALWAYS USE SERIALIZER
        office_add: officeaddress,   // THE KEY NAME HAS TO BE SAME AS THE MODEL FIELD IN DJANGO MODEL AND ALWAYS USE SERIALIZER
        contact_no: contactnumber,   // THE KEY NAME HAS TO BE SAME AS THE MODEL FIELD IN DJANGO MODEL AND ALWAYS USE SERIALIZER
        password: password,   // THE KEY NAME HAS TO BE SAME AS THE MODEL FIELD IN DJANGO MODEL AND ALWAYS USE SERIALIZER
        gender: gender,   // THE KEY NAME HAS TO BE SAME AS THE MODEL FIELD IN DJANGO MODEL AND ALWAYS USE SERIALIZER
      })
      .then((response) => {
        console.log('got it')
      }).catch((error) => {
          console.error(error);
        })

        Alert.alert("Form Save succesfully.");
      navigation.navigate('verification')
      
 
}
   
  }

 

  
  return (
    <ScrollView contentContainerStyle={{flexGrow: 1}}>
        <View style={styles.formcontainer}>
          <View style={styles.inputContainer}>
            <TextInput style={styles.input} editable maxLength={128} placeholder='Full Name' placeholderTextColor="#fff" value={fullname} onChangeText={(username) => setFullname(username)}  />
            <TextInput style={styles.input} editable maxLength={128} placeholder='Gender' placeholderTextColor="#fff" value={gender} onChangeText={(user_gender) => setGender(user_gender)}  />
            
            <TextInput style={styles.input} editable placeholder='Designation' maxLength ={64} placeholderTextColor="#fff"  value={designation} onChangeText={(user_designate) => setDesignation(user_designate)}/>
            <TextInput style={styles.input} editable placeholder='Employee Number' maxLength ={64} placeholderTextColor="#fff"  value={employeenumber} onChangeText={(user_employnumber) => setEmployeenumber(user_employnumber)}/>
            <TextInput style={styles.input} editable placeholder='Office Address' maxLength ={64} placeholderTextColor="#fff"  value={officeaddress} onChangeText={(user_officeaddress) => setOfficeaddress(user_officeaddress)}/>
            <TextInput style={styles.input} editable placeholder='Contact Number'  maxLength ={10} placeholderTextColor="#fff"  value={contactnumber} onChangeText={(user_mobileumber) => setContactnumber(user_mobileumber)} keyboardType={'numeric'} />
            <TextInput style={styles.input} editable placeholder='Password'  maxLength ={10} placeholderTextColor="#fff" 
             value={password} onChangeText={(user_password) => setPassword(user_password)}  secureTextEntry={passwordVisibility} />
             <Pressable onPress={handlePasswordVisibility}>
          <MaterialCommunityIcons name={rightIcon} size={22} color="#232323" />
        </Pressable>
          </View>
          <View style={styles.buttonContainer}>
            <Button title='Signup' onPress={handlesubmit} />
          </View>
        </View>
    </ScrollView>

  );
}


const styles = StyleSheet.create({
  container:{
    height:100,
  },
  formcontainer: {
    flex:1,
    backgroundColor: '#3B5380',
    alignItems: 'center',
    // justifyContent: 'center',
  },
  headerText:{
    fontSize:30,
    color:'red',
    fontWeight:'bold',
  },
  inputContainer:{
    marginTop:80,
  },
  input:{
    borderBottomWidth : 2,
    borderColor : '#fff',
    width:300,
    color : '#fff',
    fontSize: 20,
    padding:10,
  },
  checkboxInput:{
    borderBottomWidth : 2,
    backgroundColor:'#34495E',
    borderColor : '#fff',
    width:10,
    fontSize: 20,
  },
  buttonContainer:{
    marginTop: 50,
    width:200,
  },
});

export default Employeedetail