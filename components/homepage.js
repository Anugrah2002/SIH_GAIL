import { StyleSheet, Text, View,Button } from 'react-native';



const Homepage =  ({ navigation })=>  {
  return (
    <View style={styles.container}>
      <Text style={styles.infotext}>Welcome to the GAIL Premises</Text>
      <Text style={styles.welcometext}>Fill Up the Employee Form by clicking on the button given 
                below and start using facilities serving by Gas Authority of India Ltd.
          </Text>
      <View style={styles.button}>
            <Button title='Fill The Form'
             onPress={() =>navigation.navigate('Employeeform') }/>
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