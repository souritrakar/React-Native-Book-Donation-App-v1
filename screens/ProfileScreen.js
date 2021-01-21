import React from "react"
import {Text,Button,View} from "react-native"

export default class ProfileScreen extends React.Component{
    render(){
        return(
            <View>

                <Text>Profile Screen</Text>
                <Button  title="open drawer" onPress={()=>{
                    this.props.navigation.openDrawer()
                   
                }}/>
            </View>
        )
    }}