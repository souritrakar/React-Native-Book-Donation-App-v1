import React from "react"
import {Text,Button} from "react-native"
import firebase from "../firebase"
export default class BookDonate extends React.Component{
    constructor(){
        super()
        this.state={
            credname:""
        }
    }

    componentDidMount(){
        firebase.auth().onAuthStateChanged(cred=>{
            this.setState({credname:cred.displayName})
        })
    }
    render(){
        return(
            <Text>CRED DISPLAY NAME: {this.state.credname}</Text>
        )
    }
}