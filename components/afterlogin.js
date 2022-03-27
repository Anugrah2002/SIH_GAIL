import React, { useState, useEffect } from 'react';
import { Platform, Text, View, StyleSheet, Button } from 'react-native';
import * as Location from 'expo-location';
import { Camera } from 'expo-camera';




const AfterLogin =  ({ navigation, route})=>  {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const[hasPermission, setHaspermission] = useState('')



  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }

      let location = await Location.getCurrentPositionAsync({ accuracy: Location.Accuracy.BestForNavigation = 6 });
      
    //   console.log(location)
      setLocation(location);
    })();
  }, []);
  
  let text = 'Waiting..';
  if (errorMsg) {
    text = errorMsg;
  } else if (location) {
    text = JSON.stringify(location);
  }


  useEffect(() => {
    (async () => {
        const {status} = await Camera.requestCameraPermissionsAsync();
        setHaspermission(status === 'granted');

    })();
}, []);

if (hasPermission === false) {
    return <Text>No Access to camera</Text>
}


  return (
    <View style={styles.container}>
        <Text style={styles.infotext}>Welcome</Text>
        <View style={styles.button1}>
          <Button style={styles.markattendence} title='Mark Attendence'  onPress={() => navigation.navigate('facedetector',{userno:route.params.user,locate:location})} />
        </View>
        <View style={styles.button2}>
          <Button style={styles.attendencerecord} title='Attendence Record' onPress={() => navigation.navigate('Record')}/>
        </View>
    </View>

  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3B5380',
  },
  infotext:{
    fontSize:30,
    marginTop:40,
    color:'white',
    marginLeft:20,
    
  },
  button1:{
    marginTop:200,
    marginLeft:50,
    marginRight:50,

  },
  button2:{
    paddingTop:20,
    marginLeft:50,
    marginRight:50,

  },

  markattendence:{
    
  },

});

export default AfterLogin