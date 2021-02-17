import React from "react"
import BookRequest from "../screens/BookRequest"
import BookDonate from "../screens/BookDonate"
import {Text} from "react-native"
import {Ionicons} from "@expo/vector-icons"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Notifications from "../screens/Notifications"
const Tab= createBottomTabNavigator()

const TabNavigator=()=>{
    return(
    <Tab.Navigator screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            if (route.name === 'REQUEST') {
                iconName = focused ? 'book' : 'book-outline';
            }
            else if(route.name === "DONATE"){
              iconName= focused ? 'bookmarks' : 'bookmarks-outline'
            }
            else if(route.name === "Notifications"){
                iconName= focused ? 'bell' : 'bell'
              }
  
            // You can return any component that you like here!
            return <Ionicons  name={iconName} size={size} color={color} />;
        },
    })}
    tabBarOptions={{
        activeTintColor: '#42C0FB',
        inactiveTintColor: 'gray',
    }}>
        <Tab.Screen  name="DONATE" component={BookRequest} />
      
        <Tab.Screen name="REQUEST" component={BookDonate}/>
        <Tab.Screen component={Notifications} name="Notifications" />
      </Tab.Navigator>
    )

}

export default TabNavigator