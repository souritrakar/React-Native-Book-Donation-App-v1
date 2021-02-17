import React from "react"
import {Image, Text,View,Dimensions,StyleSheet,Linking} from "react-native"
import {Card} from "react-native-paper"
import Custombutton from "./Custombutton"
export default class Book extends React.Component{

    constructor(props){
        super(props)
    }
    render(){
        return(
            <View style={{flex:1,justifyContent:"center",alignContent:"center"}}>
     <Card>
                <Image source={this.props.bookimage} style={{width:"fit-content"}}/>
                
                <Text style={styles.bookname}>{this.props.bookname}</Text>
                <Text style={styles.bookname}>{this.props.location}</Text>
                <Text style={styles.bookname}>{this.props.requester}</Text>
                <Custombutton onPress={()=>{Linking.openURL("https://www.google.com/maps/search/?api=1&query="+this.props.location)}} buttonTitle="OPEN LOCATION" buttonContainer={styles.login}/>
       </Card>
            </View>
        )
    }
   
}


const styles= StyleSheet.create({
    
        bookname:{
            fontSize:Dimensions.get("window").width/20,
            marginLeft:Dimensions.get("window").width/14,
            fontWeight:"bold"
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