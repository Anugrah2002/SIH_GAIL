import React, { useState, useEffect } from 'react';
import { Platform, Text, View, StyleSheet, Button } from 'react-native';
import * as Location from 'expo-location';
import RadioButtonGroup, { RadioButtonItem } from "expo-radio-button";




const Attendencerecord =  ({ navigation })=>  {

  return (
    <View style={{ marginTop: 50 }}>
      <Text>Attendence</Text>
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

});

export default Attendencerecord