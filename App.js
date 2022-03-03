import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Employeedetail from './components/employeeedetails'
import Homepage from './components/homepage'
import AfterSignup from './components/aftersignup';


const Stack = createNativeStackNavigator();

const MyStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name="Home" component={Homepage}/>
      <Stack.Screen name='Employeeform' component={Employeedetail}/>
      <Stack.Screen name='Aftersignup' component={AfterSignup}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default MyStack