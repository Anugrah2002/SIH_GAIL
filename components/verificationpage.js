import { StyleSheet, Text, View,Button } from 'react-native';



const VerificationPage =  ({ navigation })=>  {
  return (
    <View style={styles.container}>
      <Text style={styles.infotext}>Welcome </Text>
      <Text style={styles.welcometext}>Welcome User you have successfully created your account, but you cannot use the facility until the owner willbe verifying you

      Thankyou!
      Please Go Back to login page.
          </Text>
          <View style={styles.button}>
            <Button title='Login'
             onPress={() =>navigation.navigate('Login') }/>
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

export default VerificationPage