import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Employeedetail from './components/employeeedetails'
import Homepage from './components/homepage'
import AfterLogin from './components/afterlogin';
import Attendencerecord from './components/attendencerecord';
import LoginPage from './components/loginform';
// import Face_detector from './components/facedetection';
import VerificationPage from './components/verificationpage';
import TakePhotoAndUpload from './components/uploadpicture';
import Timeofattendence from './components/timeofattendence';
import { DataProvider } from './context/context';


const Stack = createNativeStackNavigator();

const MyStack = () => {
  return (
    <DataProvider>
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name="Home" component={Homepage}/>
      <Stack.Screen name='Employeeform' component={Employeedetail}/>
      <Stack.Screen name='Afterlogin' component={AfterLogin}/>
      <Stack.Screen name='Record' component={Attendencerecord}/>
      <Stack.Screen name='Login' component={LoginPage}/>
      {/* <Stack.Screen name='facedetector' component={Face_detector}/> */}
      <Stack.Screen name='verification' component={VerificationPage}/>
      <Stack.Screen name='uploadpicture' component={TakePhotoAndUpload}/>
      <Stack.Screen name='timeofattendence' component={Timeofattendence}/>
      </Stack.Navigator>
    </NavigationContainer>
    </DataProvider>
  );
};
export default MyStack