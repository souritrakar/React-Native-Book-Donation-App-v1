import React from "react"
import {  createDrawerNavigator,DrawerItems } from "react-navigation-drawer";
import {Ionicons} from "@expo/vector-icons"
import TabNavigator from "./TabNavigator";
import ProfileScreen from "../screens/ProfileScreen";
import {createAppContainer} from "react-navigation" 
import SignOut from "../screens/SignOut";
import { Button, View } from "react-native";
import firebase from "../firebase"
export default class DrawerNavigator2 extends React.Component{
    constructor(props){
        super(props)
    }

    signOut=()=>{
        firebase.auth().signOut().then(()=>{
            this.props.navigation.navigate("HomeScreen")
        }).catch(err=>{
            alert(err)
        })
    }
    render(){
        return(
            <View>
                <DrawerItems {...this.props}  />
                <Button title="Logout" onPress={()=>{this.signOut}}/>
            </View>
        )
    }
}