// Example of Splash, Login and Sign Up in React Native
// https://aboutreact.com/react-native-login-and-signup/
 
// Import React
import React from 'react';
 
// Import Navigators from React Navigation
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
 
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// Import Screens
import HomeScreen from '../DrawerScreens/HomeScreen';
import SettingsScreen from '../DrawerScreens/SettingsScreen';
// /import NavigationDrawerHeader from './Components/NavigationDrawerHeader';
 
const Tab = createBottomTabNavigator();

const MyTabs = ()=> {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
  );
}
// const Drawer = createDrawerNavigator();
  
const DrawerNavigatorRoutes = (props) => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        activeTintColor: '#cee1f2',
        color: '#cee1f2',
        itemStyle: {marginVertical: 5, color: 'white'},
        labelStyle: {
          color: '#d8d8d8',
        },
      }}
    //   screenOptions={{headerShown: false}}
    //   drawerContent={CustomSidebarMenu}
      >
      <Tab.Screen
        name="Home"
        // options={{drawerLabel: 'Home Screen'}}
        component={MyTabs}
      />
      <Tab.Screen
        name="SettingScreenStack"
        // options={{drawerLabel: 'Setting Screen'}}
        component={MyTabs}
      />
    </Tab.Navigator>
  );
};
 
export default DrawerNavigatorRoutes;
