import React from "react"
import {Text,Button,Modal,StyleSheet, Dimensions, View} from "react-native"
import Custombutton from "../components/Custombutton"
import Custominput from "../components/Custominput"
import firebase from "../firebase"
export default class BookRequest extends React.Component{

    constructor(props){
        super(props)
            this.state={
                modalOpen:false,
                location:"",
                book:"",
                name:""  
            }
    }
   componentDidMount(){
       firebase.auth().onAuthStateChanged(cred=>{
           if(cred){
               firebase.firestore().collection("Users").doc(cred.email).get().then(doc=>{
                   this.setState({name:doc.data().name})
                   cred.updateProfile({
                       displayName:doc.data().name
                   })
               })
           }
       })
   }
    render(){
        return(
            <View style={styles.container}>
            <Text style={styles.heading}>Request a book here:</Text>
            <Custombutton buttonContainer={styles.login} onPress={()=>{this.setState({modalOpen:true})}} buttonTitle="REQUEST BOOK"/>
            <Modal visible={this.state.modalOpen} animationType="slide" onRequestClose={()=>{this.setState({modalOpen:false})}}>

                <Text>This is inside the modal</Text>
            </Modal>
            </View>
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