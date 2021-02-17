import React from "react"
import DrawerNav from "../components/DrawerNavigator"
import Custombutton from "../components/Custombutton"
import {View,StyleSheet,Dimensions} from "react-native"
export default class MainScreen extends React.Component{
    render(){
        return(
          
            <DrawerNav />
           
        
        )
    }
}

const styles= StyleSheet.create({
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
})