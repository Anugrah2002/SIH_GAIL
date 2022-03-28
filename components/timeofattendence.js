import { TabRouter } from '@react-navigation/native';
import { StyleSheet, Text, View,Button } from 'react-native';



const Timeofattendence =  ({ navigation, route })=>  {
  return (
    <View style={styles.container}>
      <Text style={styles.infotext}>Welcome to the GAIL Premises</Text>
          <View style={styles.button}>
            <Button title='Entering the Campus'
             onPress={() =>navigation.navigate('uploadpicture',{userno:route.params.userno,locate:route.params.locate}) }/>
        </View>
        <View style={styles.button2}>
        <Button title='Exiting the campus'
             onPress={() =>navigation.navigate('uploadpicture') }/>
        </View>
        {/* <View style={styles.button2}>
        <Button title='face'
             onPress={() =>navigation.navigate('uploadpicture') }/>
        </View> */}
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

export default Timeofattendence