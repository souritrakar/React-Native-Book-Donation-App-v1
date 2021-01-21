import React from 'react';
import { Text, View, StyleSheet,Dimensions,Image,Platform ,TouchableOpacity,KeyboardAvoidingView} from 'react-native';
import { AppLoading } from 'expo';
import firebase from "../firebase"
import {LinearGradient} from "expo-linear-gradient"
import Custombutton from "../components/Custombutton"
import Custominput from "../components/Custominput"

export default class LoginScreen extends React.Component{

    constructor(props){
        super(props)
        this.state={

          email:"",
          password:"",
          mobilenumber:"",
          city:"",
          name:"",
          buttonDisabled:true,
          opacity:0.3,
          loading:false,
          buttonPressed:false,
          displayCity:""
        }
    }

signUp=(email,password)=>{
  const {name}= this.state
  firebase.auth().createUserWithEmailAndPassword(email,password).then(()=>{
    this.props.navigation.navigate("LoginScreen")
    firebase.firestore().collection("Users").doc(email).set({
      email:email,
      password:password,
      name:name,
      city:this.state.city.toLowerCase(),
      mobile:this.state.mobilenumber,
      displayCity:this.state.city,


    })
    })
  .catch(err=>{
    alert(err)
  })
}

    render(){

      
        return(
            <LinearGradient
            colors={['#7F7FD5', '#86A8E7',"#91EAE4"]}
            style={styles.container}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            
          >
         

<Image
        source={require('../assets/loginimageuserprofile.jpg')}
        style={styles.logo}
        />
        <KeyboardAvoidingView>

        <Custominput 


iconType="lock"
keyboardType="default"
autoCapitalize="none"

autoCorrect={false}
placeholderText="Enter Name"
onChangeText={(text)=>this.setState({name:text})}

/>     
<Custominput 
 iconType="user"
 keyboardType="email-address"
 autoCapitalize="none"
 autoCorrect={false}
placeholderText="Enter Email"
onChangeText={(text)=>this.setState({email:text})}

/>
<Custominput 


 iconType="lock"
 keyboardType="default"
 autoCapitalize="none"
 secureTextEntry={true}
 autoCorrect={false}
placeholderText="Enter Password"
onChangeText={(text)=>this.setState({password:text})}

/>
<Custominput 


 iconType="lock"
 keyboardType="default"
 autoCapitalize="none"
 autoCorrect={false}
placeholderText="City"
onChangeText={(text)=>this.setState({city:text})}

/>
<Custominput 


 iconType="mobile1"
 keyboardType="number-pad"
 autoCapitalize="none"
 autoCorrect={false}
placeholderText="Enter Mobile"
onChangeText={(text)=>this.setState({mobilenumber:text})}

/>
</KeyboardAvoidingView>
<Custombutton onPress={()=>{this.signUp(this.state.email,this.state.password)}} buttonContainer={styles.login} buttonTitle="REGISTER"/>
<Text>{'\n'}</Text>
        <Text>{'\n'}</Text>
            </LinearGradient>
        )
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
      marginTop:Dimensions.get("window").height/15
    },
    logo:{
  width:Dimensions.get("window").width/2.21,
  height:Dimensions.get("window").height/4,
  borderRadius:100,
  marginTop:Dimensions.get("window").height/14,
  
    },
    ngoregister: {
      marginTop: Dimensions.get("window").height/10,
      width: '67%',
      height: Dimensions.get("window").height / 15,
      backgroundColor: '#2e64e5',
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
    },
    login: {
      marginTop: Dimensions.get("window").height/15,
      width: '67%',
      height: Dimensions.get("window").height / 15,
  backgroundColor:"#93291E",
      padding: 10,
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 3,
    },
  
  
  });