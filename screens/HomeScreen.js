import React from 'react';
import { Text, View, StyleSheet,Dimensions,Image,Platform,SafeAreaView,ScrollView } from 'react-native';
import { AppLoading } from 'expo';
import * as Font from 'expo-font';
import {LinearGradient} from "expo-linear-gradient"
import Custombutton from "../components/Custombutton"

import LottieView from "lottie-react-native"




export default class HomeScreen extends React.Component {


constructor(props){
  super(props)

}



  render() {

      return (
     
     <SafeAreaView>
       <ScrollView>
         <LinearGradient
        colors={['#ADA996', '#F2F2F2','#DBDBDB',"#EAEAEA"]}
        style={styles.container}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
      >

        <Text style={styles.appheading}>Book Santa</Text>
        <Image
        source={require('../assets/bookgif-unscreen.gif')}
        style={styles.logo}
        
        />

        <Custombutton
        buttonTitle="REGISTER"

        onPress={()=>{this.props.navigation.navigate("RegisterScreen")}}
        buttonContainer={styles.ngoregister}

        />







            <Custombutton  onPress={()=>{this.props.navigation.navigate("LoginScreen")}} buttonContainer={styles.login} buttonTitle="LOGIN"  />

         
 
        <Text>{'\n'}</Text>
        <Text>{'\n'}</Text>
        <Text>{'\n'}</Text>
        <Text>{'\n'}</Text>
        </LinearGradient>
        </ScrollView>
        </SafeAreaView>
      
      );
    }
  }





const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  
  },

  appheading:{
   
    fontSize:Dimensions.get("window").width/11.5,
    marginTop:Dimensions.get("window").height/25
  },
  logo:{
width:Dimensions.get("window").width/2.21,
height:Dimensions.get("window").height/4.3,

marginTop:Dimensions.get("window").height/14
  },
  ngoregister: {
    marginTop: Dimensions.get("window").height/10,
    width: '67%',
    height: Dimensions.get("window").height / 15,
    backgroundColor: '#FF5F6D',
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 3,
  },
  userregister: {
    marginTop: Dimensions.get("window").height/20,
    width: '67%',
    height: Dimensions.get("window").height / 15,
    backgroundColor: '#2e64e5',
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 3,
    shadowOpacity:5
  },
  login: {
    marginTop: Dimensions.get("window").height/15,
    width: '67%',
    height: Dimensions.get("window").height / 15,
backgroundColor:"#1D976C",
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 3,
    marginBottom:Dimensions.get("screen").height/10
  },
  userlogin: {
    marginTop: Dimensions.get("window").height/15,
    width: '67%',
    height: Dimensions.get("window").height / 15,
backgroundColor:"#FFC371",
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 3,

  },


});