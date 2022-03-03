import React,{useState} from 'react';
import { StyleSheet, Text, View,Button ,TextInput } from 'react-native';
import { CheckBox} from 'react-native-elements';


const  Employeedetail = ({ navigation }) => {

  const[male,setMale] = useState(false);
	const[female,setFemale] = useState(false);
	const[other,setOther] = useState(false);
	
	const genderMale =() => {
		setMale(true);
		setFemale(false);
		setOther(false);
	}
	const genderFemale =() => {
		setMale(false);
		setFemale(true);
		setOther(false);
	}
	const genderOther =() => {
		setOther(true);
		setMale(false);
		setFemale(false);
	}
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput style={styles.input} editable maxLength={128} placeholder='Full Name' placeholderTextColor="#fff"  />
        <CheckBox style={styles.checkboxInput} title='Male' checked={male} checkedIcon="dot-circle-o" uncheckedIcon='circle-o' onPress={genderMale}/>
        <CheckBox style={styles.checkboxInput} title='Female' checked={female} checkedIcon="dot-circle-o" uncheckedIcon='circle-o' onPress={genderFemale}/>
        <CheckBox style={styles.checkboxInput} title='Other' checked={other} checkedIcon="dot-circle-o" uncheckedIcon='circle-o' onPress={genderOther}/>
        <TextInput style={styles.input} editable placeholder='Designation' maxLength ={64} placeholderTextColor="#fff"  />
        <TextInput style={styles.input} editable placeholder='Employee Number' maxLength ={64} placeholderTextColor="#fff"  />
        <TextInput style={styles.input} editable placeholder='Office Address' maxLength ={64} placeholderTextColor="#fff"  />
        <TextInput style={styles.input} editable placeholder='Contact Number'  maxLength ={10} placeholderTextColor="#fff"  />
      </View>
      <View style={styles.buttonContainer}>
        <Button style={styles.buttons} title='Signup' onPress={()=> navigation.navigate('Aftersignup')} />
      </View>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
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
    marginTop: 40,
    width:200,
  },
  buttons:{
    fontSize:30 ,
  },
});

export default Employeedetail