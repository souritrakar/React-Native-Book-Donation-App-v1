import React from "react"

import {View} from "react-native"
import firebase from "../firebase"
import {Header as ElementHeader,Badge,Icon} from "react-native-elements"

export default class Header extends React.Component{
    constructor(props){
        super(props)
        this.state={
            notifications:[],
            notificationcount:"",
            email:"",
            name:""
        }

    }

    componentDidMount(){
        firebase.auth().onAuthStateChanged(cred=>{
            if(cred){
                firebase.firestore().collection("Users").doc(cred.email).collection("Notifications")
                .where("notificationstatus","==","unread").onSnapshot(snap=>{
                    var unread=snap.docs.map(doc=>{
                        data:doc.data()
                        id:doc.id
                    })
                   this.setState({notifications:unread})
                   this.setState({notificationcount:unread.length,email:cred.email,name:cred.displayName})
                   
                })
            }
        })
      
    }
    render(){
        return(
            <ElementHeader
            containerStyle={{
                backgroundColor: '#3D6DCC',
                justifyContent: 'space-around',
                flex:1,
                width:"100%"
            
              }}
            leftComponent={{ icon: 'menu', color: '#fff' }}
            centerComponent={{ text: 'MY TITLE', style: { color: '#fff' } }}
            rightComponent={<Bell onpressbadge={this.props.onpressbadge} badgecount={this.state.notificationcount}/>}
            />
        )
    }
}


const Hamburger=(props)=>{
    return(
        <Icon name="menu"  onPress={props.onpress}/>
    )
}
const Bell=(props)=>{
    return(
        <Badge onPress={props.onpressbadge} value={props.badgecount} status="error" />
    )
   
}