import React from "react"
import {View} from "react-native"
import firebase from "../firebase"

export default class SignOut extends React.Component{

    constructor(props){
        super(props)
    }
    componentDidMount(){
        firebase.auth().signOut().then(()=>{
            this.props.navigation.navigate("LoginScreen")
        })
    }
    render(){
        return(
            <View>

            </View>
        )
    }
}