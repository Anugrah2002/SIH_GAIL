// import React,{useState,useEffect, useRef } from 'react';
// import { StyleSheet, Text, View,Button, TextInput, Alert, Pressable } from 'react-native';
// import { Camera } from 'expo-camera';
// import * as FaceDetector from  'expo-face-detector'; 
// import axios from 'axios';


// const Face_detector =  ({ navigation })=>  {
//     const[hasPermission, setHaspermission] = useState('')
//     const[facedata, setFacedata] = useState([])
//     const [imageUri, setImageUri] = useState(null);
//     const [camera, setCamera]= useState(null);

//     const [faceDetected, setFaceDetected] = useState([])

//     useEffect(() => {
//         (async () => {
//             const {status} = await Camera.requestCameraPermissionsAsync();
//             setHaspermission(status === 'granted');

//         })();
//     }, []);

//     if (hasPermission === false) {
//         return <Text>No Access to camera</Text>
//     }


//     const checkForFace = ({faces}) => {
//         try {
//           setFaceDetected(faces.length==0?false:true);
//           if(faceDetected===true){
//               axios.post('https://sih-gail.herokuapp.com/userAttendance/',{

//             })
//             // takePicture();
//             // navigation.navigate('Login')
//             // Alert.alert('face detected successfully')
//           }else{
//               return Alert.alert('face not visible ')
//           }
//         } catch (error) {
//           console.error(error);
//         }
//     }


    
//     const takePicture = async () => {
//         try{
//         if (camera) {
//         console.log('hello')
//           const data = await camera.takePictureAsync();
//           console.log('ooooo')
//           console.log(data)
//           console.log(data.uri);
//           setImageUri(data.uri);
//         }
//         } catch(error)  {
//             console.error(error);
//           }
        
//     }

//     return (       
//         <Camera style={styles.camera} type={Camera.Constants.Type.front}
//             onFacesDetected={checkForFace}
//             ref={(ref) => setCamera(ref)}
//             faceDetectorSettings={{
//                 mode: FaceDetector.FaceDetectorMode.accurate,
//                 detectLandmarks: FaceDetector.FaceDetectorLandmarks.all,
//                 runClassifications: FaceDetector.FaceDetectorClassifications.all,
//                 minDetectionInterval: 500,
//                 tracking: true,
//             }}>
//         </Camera>
//       )
// }
// const styles = StyleSheet.create({
//     camera: {
//       flex: 1,
//       backgroundColor: '#3B5380',
//     },
//     faces:{
//         backgroundColor: 'white',
//         alignSelf: 'stretch',
//         alignItems:'center',
//         justifyContent:'center',
//         margin:10,
//     },
//     faceDesc:{
//         fontSize:20,
//     }
    
    
  
//   });

// export default Face_detector