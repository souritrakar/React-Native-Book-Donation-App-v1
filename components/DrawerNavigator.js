import React from "react"
import {  createDrawerNavigator } from "react-navigation-drawer";
import {Ionicons} from "@expo/vector-icons"
import TabNavigator from "./TabNavigator";
import ProfileScreen from "../screens/ProfileScreen";
import {createAppContainer} from "react-navigation" 
import SignOut from "../screens/SignOut";

import DrawerNavigator2 from "./DrawerNavigator2";
import Notifications from "../screens/Notifications";

const MainNavigator = createDrawerNavigator(
    
    {
      Home: {
        navigationOptions: {
          drawerIcon: () => (
            <Ionicons name="md-home" style={{ color: "4973AB" }} size={20} />
          ),
          drawerLabel: "Home"
        },
        screen: TabNavigator
      },
      
      Profile: {
        navigationOptions: {
          drawerIcon: ({ tintColor }) => (
            <Ionicons name="ios-person" style={{ color: "4973AB" }} size={20}/>
         
          ),
          drawerLabel: "Profile"
        },
        screen: ProfileScreen
      },
      
  
      

    }

  );

const DrawerNav= createAppContainer(MainNavigator)
export default DrawerNav