



import React, { useState, useEffect } from 'react';
import { Platform, Text, View, StyleSheet, Button } from 'react-native';
import * as Location from 'expo-location';

// export default function App() {
  

//   return (
//     <View >
//       <Text>Hello</Text>
//     </View>
//   );
// }



const AfterSignup =  ({ navigation })=>  {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      console.log(location)
      setLocation(location);
    })();
  }, []);

  let text = 'Waiting..';
  if (errorMsg) {
    text = errorMsg;
  } else if (location) {
    text = JSON.stringify(location);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.infotext}>Welcome to the Signup Page</Text>
      {/* <View style={styles.button}>
            <Button title='Fill The Form'
             onPress={() =>navigation.navigate('Employeeform') }/>
        </View> */}
      </View>


  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3B5380',
  },
  // button:{
  //   paddingTop:60,
  //   padding:40,
  // },
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

export default AfterSignup