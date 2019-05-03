import React from 'react';
import { StyleSheet, Text, View,AsyncStorage } from 'react-native';
import AppNavigator from './AppNavigator';
import {Provider} from "mobx-react";
import {RootStore} from "./store/RootStore";
import DashboardScreen from "./screen/DashboardScreen";

export default class App extends React.Component {
  componentDidMount()
  {
AsyncStorage.setItem("userToken","sdksadajkhjs")
// AsyncStorage.clear()
  }

  render() {

    return (
        <Provider rootStore={new RootStore()}>
          <AppNavigator/>
        </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
