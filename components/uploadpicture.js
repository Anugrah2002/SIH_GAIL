import React,{useState,useEffect, useRef } from 'react';
import { StyleSheet, Text, View,Button, TextInput, Alert, Pressable } from 'react-native';
import { Camera } from 'expo-camera';
import * as FaceDetector from  'expo-face-detector'; 
import axios from 'axios';
import * as ImagePicker from 'expo-image-picker';

async function TakePhotoAndUpload() {

    let result = await ImagePicker.launchCameraAsync({
      allowsEditing: false, // higher res on iOS
      aspect: [4, 3],
    });
  
    if (result.cancelled) {
      return;
    }
    console.log('before fetching uri')
  
    let localUri = result.uri;
    let filename = localUri.split('/').pop();
  
    let match = /\.(\w+)$/.exec(filename);
    let type = match ? `image/${match[1]}` : `image`;
    console.log('picture has been')
  
    let formData = new FormData();
    // formData.append('photo', { uri: localUri, name: filename, type });
    formData.append('emp_no', 'anugrah');
    formData.append('latitude','24.74865' );
    formData.append('longitude', '74.5879424');
  
    return await fetch('https://sih-gail.herokuapp.com/userAttendance/', {
      method: 'POST',
      body: formData,
      header: {
        'content-type': 'multipart/form-data',
      },
      
    }).then((response) => {
      console.log(response);
    if(response.data.status === 'attendance locked')
    {
      Alert.alert("Attendence Locked successfully .");
      navigation.navigate('Afterlogin')
    }else if(response.data.status === 'error'){
      if(response.data.data === 'out of polygon'){
        Alert.alert('Please Be in the campus');
      }
      else{
        Alert.alert('face not detected');
      }
    }
      }).catch((error) => {
        console.error(error);
      })
  }


export default TakePhotoAndUpload