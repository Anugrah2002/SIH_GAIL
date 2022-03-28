import { StyleSheet, Text, View,Button } from 'react-native';



const Homepage =  ({ navigation })=>  {
  return (
    <View style={styles.container}>
      <Text style={styles.infotext}>Welcome to the VIT Bhopal Premises</Text>
      <Text style={styles.welcometext}>Fill Up the Employee Form by clicking on the button given 
                below and start using facilities serving by VIT Bhopal.
          </Text>
          <View style={styles.button}>
            <Button title='Login'
             onPress={() =>navigation.navigate('Login') }/>
        </View>
        <View style={styles.button2}>
        <Button title='Signup'
             onPress={() =>navigation.navigate('Employeeform') }/>
        </View>
        <View style={styles.button2}>
        <Button title='face'
             onPress={() =>navigation.navigate('uploadpicture') }/>
        </View>
      </View>


  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3B5380',
  },
  button:{
    paddingTop:60,
    padding:40,
  },
  button2:{
    // paddingTop:20,
    padding:40,

  },
  infotext:{
    fontSize:30,
    marginTop:40,
    color:'white',
    marginLeft:20,
    
  },
  welcometext:{
    fontSize:20,
    color:'white',
    marginLeft:20,
    paddingTop:20,

  }

});

export default Homepage