import { LinearGradient } from "expo-linear-gradient"
import React from "react"
import { SwipeListView } from 'react-native-swipe-list-view';
import {Text,View,Image,Button} from "react-native"
import firebase from "../firebase"

export default class Notifications extends React.Component{

    

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
      
            <LinearGradient
            colors={['#bfe9ff', '#ECE9E6']}
            start={{ x: 0, y: 0 }}
               end={{ x: 1, y: 1 }}  >
            
            <Text>Hey {this.state.name}, you have {this.state.notificationcount} unread notifications</Text>

            <Text>{'\n'}</Text>
            <Text>{'\n'}</Text>

            <SwipeListView
            useFlatList
            data={this.state.notifications}
            renderItem={ (data, rowMap) => (
                <View style={styles.rowFront}>
                    <Text>I am a notification in a SwipeListView</Text>
                </View>
            )}
            renderHiddenItem={ (data, rowMap) => (
                <View style={styles.rowBack}>
                    <Text>Left</Text>
                    <Text>Right</Text>
                </View>
            )}
            leftOpenValue={75}
            rightOpenValue={-75}
        />
               </LinearGradient>
                       
         
        )
    }
}