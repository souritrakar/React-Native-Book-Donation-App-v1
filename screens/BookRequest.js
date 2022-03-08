import React from "react"
import {StyleSheet, Dimensions,Modal, View,Image,Text} from "react-native"
import Custombutton from "../components/Custombutton"
import Custominput from "../components/Custominput"
import firebase from "../firebase"
import { Card, ListItem, Button, Icon } from 'react-native-elements'
import GoogleBookSearch from 'react-native-google-books/GoogleBookSearch';
import Header from "../components/Header"
import { DrawerActions } from '@react-navigation/native'
export default class BookRequest extends React.Component{

    constructor(props){
        super(props)
            this.state={
                modalOpen:false,
                location:"",
                book:"",
                name:"" ,
                email:""
            }
    }

    makeBookRequest=(book,location,image,requesteremail)=>{
        if(this.state.book!==null && this.state.location.length>0){
            firebase.firestore().collection("Requests").add({
                bookname:book,
                location:location,
                requester:this.state.name,
                bookimage:image,
                requesteremail:requesteremail
            }).then(()=>{
                this.setState({book:null}),
                this.setState({location:""})
            })
        }
        else{
            alert("Book/Location is empty. Please try again.")
        }
   
    }
   componentDidMount(){
       firebase.auth().onAuthStateChanged(cred=>{
           if(cred){
               firebase.firestore().collection("Users").doc(cred.email).get().then(doc=>{
                   this.setState({name:doc.data().name,email:cred.email})
                   
                   cred.updateProfile({
                       displayName:doc.data().name
                   })
               })
           }
           else{
               alert("NOT SIGNED IN")
           }
       })
   }
    render(){
        return(
            <View style={styles.container}>
            <Header onpressbadge={()=>{alert("Notifications")}} title="HOME" onpress2={()=>{this.props.navigation.openDrawer()}}/>
           
                    <Custombutton buttonContainer={styles.login} onPress={()=>{this.setState({modalOpen:true})}} buttonTitle="REQUEST BOOK"/>
                    <Text>{'\n'}</Text>
                    <Text>{'\n'}</Text>
                    <Text>{'\n'}</Text>
                    <Text>{'\n'}</Text>
                    <Text>{'\n'}</Text>

                    <Text>{'\n'}</Text>
                     <Modal visible={this.state.modalOpen} animationType="slide" onRequestClose={()=>{this.setState({modalOpen:false})}}> 
                
                     <View> 
                         <Image
            source={require('../assets/arrowdown.png')}
            style={{ width: 30, height: 30,marginBottom:Dimensions.get("window").height/15 }}
            /> 
             <GoogleBookSearch                    
            apikey={"YOUR_API_KEY"}
        
            searchContainerStyle={{marginTop:32}}
            searchInputStyle={{fontSize:16}}
            resultContainerStyle={{padding:4}}
            resultItemStyle={{color:'blue'}}
            interval={300}
               
            onResultPress={(book)=> this.setState({book:book})} 
        /> 
        <Custominput placeholderText="Enter location" onChangeText={(text)=>{this.setState({location:text})}}/>
            <Custombutton buttonContainer={styles.login} buttonTitle="MAKE REQUEST" onPress={()=>{
                this.makeBookRequest(this.state.book.title,this.state.location,this.state.book.thumbnail,this.state.email)
            }} />
                </View> 
             </Modal> 
            </View>
        )
    }
}

        const styles= StyleSheet.create({
            container: {
                
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
