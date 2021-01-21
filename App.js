import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View,Dimensions } from 'react-native';
import {NavigationContainer} from "@react-navigation/native"

import { createStackNavigator} from "@react-navigation/stack"
import LoginScreen from "./screens/LoginScreen"
import HomeScreen from './screens/HomeScreen';
import TabNavigator from './components/TabNavigator';
import RegisterScreen from './screens/RegisterScreen';
import DrawerNavigator from './components/DrawerNavigator';
import MainScreen from "./screens/MainScreen"
const Stack= createStackNavigator()
function MyStack(){
  return(
    <Stack.Navigator
    screenOptions={{
      headerStyle:{
        backgroundColor:'#E2E2E2',
        height:Dimensions.get("window").height/13
      },
      
      headerTintColor:'black',
      headerTitleStyle:{
        fontWeight:'bold',
        
      }
    }}
    >
      <Stack.Screen
      
      name="HomeScreen"

      component={HomeScreen}
      options={{title:'Home'}}
      />

      <Stack.Screen
      name="LoginScreen"
      component={LoginScreen}
      options={{title:"Login"}}
      
      />
      <Stack.Screen
      name="RegisterScreen"
      component={RegisterScreen}
      options={{title:"Register"}}
      
      />
   
    
      
       <Stack.Screen
        name="MainScreen"
        component={MainScreen}
        options={{title:'Main',headerLeft:null}}



      />
    

    </Stack.Navigator>
  )
}
export default class App extends React.Component {
  render(){
    return (
     <NavigationContainer>

       <MyStack/>
     </NavigationContainer>
    );
  }
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
