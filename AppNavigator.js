import LoginScreen from "./screen/LoginScreen";
import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {createStackNavigator, createSwitchNavigator, createAppContainer} from 'react-navigation';
import {AuthLoadingScreen} from "./screen/AuthLoadingScreen";
import DashboardScreen from "./screen/DashboardScreen";
import PlaceDetailsScreen from "./screen/PlaceDetailsScreen";
import MapScreen from "./screen/MapScreen";

// const AppNavigator =
// export default  AppNavigator;

export default class AppNavigator  extends  React.Component{

    render() {
        const Navigator=  createAppContainer(createSwitchNavigator(
            {
                AuthLoading: AuthLoadingScreen,
                App: AppStack,
                Auth: AuthStack,
            },
            {
                initialRouteName: 'AuthLoading',
            }
        ));
        return(
            <Navigator/>
        )
    }


}

const AppStack = createStackNavigator({dashboard: DashboardScreen, placeDetails:PlaceDetailsScreen,mapScreen:MapScreen});
const AuthStack = createStackNavigator({login: LoginScreen});
