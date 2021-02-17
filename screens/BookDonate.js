import React from "react"
import {Text,ScrollView,Linking,View,Modal,StyleSheet,Dimensions} from "react-native"
import Book from "../components/Book"
import firebase from "../firebase"
import {LinearGradient} from "expo-linear-gradient"
import { Card, ListItem, Button, Icon } from 'react-native-elements'

import Custominput from "../components/Custominput"
import Custombutton from "../components/Custombutton"
export default class BookDonate extends React.Component{
    constructor(){
        super()
        this.state={
            credname:"",
            requests:[],
            email:"",
            message:"",
            modalOpen:false
        }
    }


    donateBook=(requesteremail,bookname,message)=>{
        
        var donorid = Math.random().toString(36).substring(7)
    
       
        if(message.length>1){
            firebase.firestore().collection("Users").doc(requesteremail).collection("Notifications").add({
                donorid:donorid,
                donoremail:this.state.email,
                donorname:this.state.credname,
                book:bookname,
                date:firebase.firestore.FieldValue.serverTimestamp(),
                message:message,
                notificationstatus:"unread"
            }).then(()=>{
                this.setState({modalOpen:false})
            })
        }
        else{
            alert("Message has to be more than 1 character.")
        }
    
    }
    componentDidMount(){
        firebase.auth().onAuthStateChanged(cred=>{
            if(cred){
                this.setState({credname:cred.displayName,email:cred.email})
                firebase.firestore().collection("Requests").onSnapshot(snap=>{
                   const requests=[]
                   snap.forEach(doc=>{
                       requests.push(doc.data())
                   })
                   this.setState({requests:requests})
                })
            }
            else{
                alert("NOT SIGNED IN")
            }
        })
    }
    render(){
        return(
           
           
                 <ScrollView>
             <LinearGradient
                                    colors={['#bfe9ff', '#ECE9E6']}
                                    start={{ x: 0, y: 0 }}
                                    end={{ x: 1, y: 1 }}
   
                                  >


            {
                this.state.requests &&
                this.state.requests.map((request,i)=>{
                    return(
                        <LinearGradient
                        colors={['#bfe9ff', '#ECE9E6']}
                    
                        start={{ x: 0, y: 0 }}
                        end={{ x: 1, y: 1 }}
                        key={i}
                      >
                          
                         <Modal visible={this.state.modalOpen} animationType="slide">
                      <Custominput placeholderText="Enter a message for the requester" onChangeText={(text)=>{this.setState({message:text})}}/>
                      <Custombutton buttonContainer={styles.login} buttonTitle="DONATE" onPress={()=>{this.donateBook(request.requesteremail,request.bookname,this.state.message)}}/>
                           </Modal>
                        <Card>
                        <Card.Title>{request.bookname}</Card.Title>
                        <Card.Divider/>
                        <Text style={{marginBottom: 10,fontWeight:"bold"}}>
                            {request.requester}
                            </Text>
                            <Card.Divider/>
                        <Card.Image source={request.bookimage}>
                      
                        </Card.Image>
                        
                        <Card.Divider/>

                          <Button
                           onPress={()=>{Linking.openURL("https://www.google.com/maps/search/?api=1&query=" + request.location)}}
                            buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
                            title='VIEW LOCATION' />
                        <Card.Divider/>
                        <Button

                           onPress={()=>{this.setState({modalOpen:true})}}
                            buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0,backgroundColor:"green"}}
                            title='DONATE BOOK' />
                      </Card>
                      </LinearGradient>
                     
                    )
                })
            }
            </LinearGradient>
            </ScrollView>
            
            
        )
    }
}
const styles= StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
    
    },
    
    heading:{
        fontWeight:"bold",
        fontSize:Dimensions.get("window").height/20
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
})