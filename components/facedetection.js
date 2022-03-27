import React,{useState,useEffect, useRef } from 'react';
import { StyleSheet, Text, View,Button, TextInput, Alert, Pressable, BackHandler } from 'react-native';
import { Camera } from 'expo-camera';
import * as FaceDetector from  'expo-face-detector'; 
import axios from 'axios';
import * as Location from 'expo-location'


const Face_detector =  ({ navigation, route })=>  {
    const[facedata, setFacedata] = useState([])
    const [imageUri, setImageUri] = useState(null);
    const [camera, setCamera]= useState(null);
    const [faceDetected, setFaceDetected] = useState([]);


    
    return (       
      <Camera style={styles.camera} type={Camera.Constants.Type.front}
          onFacesDetected={checkForFace}
          ref={(ref) => setCamera(ref)}
          faceDetectorSettings={{
              mode: FaceDetector.FaceDetectorMode.accurate,
              detectLandmarks: FaceDetector.FaceDetectorLandmarks.all,
              runClassifications: FaceDetector.FaceDetectorClassifications.all,
              minDetectionInterval: 500,
              tracking: true,
          }}>
      </Camera>
    )
}

const checkForFace = ({faces}) => {
  try {
    setFaceDetected(faces.length==0?false:true);
    if(faceDetected === true){
      console.log('face detected successfully');
      takePicture();
    }
  }catch (error) {
    console.error(error);

  }
}
const takePicture = async () => {
  console.log('ok')
    try{
      if (camera) {
      console.log('hello')
        const data = await camera.takePictureAsync();
        console.log('ooooo')
        console.log(data)
        console.log(data.uri);
        let localUri = data.uri;
        let filename = localUri.split('/').pop();

        // Infer the type of the image
        
        let match = /\.(\w+)$/.exec(filename);
        let type = match ? `image/${match[1]}` : `image`;

        // Upload the image using the fetch and FormData APIs
        let formData = new FormData();
        // Assume "photo" is the name of the form field the server expects
        var datas = formData.append('photo', { uri: localUri, name: filename, type });
        Alert.alert('face visible')
        axios.post('https://sih-gail.herokuapp.com/userAttendance/',{
            emp_no:route.params.userno,
            latitude:latitude,
            longitude:longitude,
            imagedata:datas,
            headers:{
              'content-type': 'multipart/form-data',
            },
      })
        .then((response) => {
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
      // takePicture();
      // navigation.navigate('Login')
      // Alert.alert('face detected successfully')
  } else{
      return Alert.alert('face not visible ')
  }
} catch (error) {
  console.error(error);
}
}

    
  

const styles = StyleSheet.create({
    camera: {
      flex: 1,
      backgroundColor: '#3B5380',
    },
    faces:{
        backgroundColor: 'white',
        alignSelf: 'stretch',
        alignItems:'center',
        justifyContent:'center',
        margin:10,
    },
    faceDesc:{
        fontSize:20,
    }
    
    
  
  });

export default Face_detector