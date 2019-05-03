import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AppNavigator from './AppNavigator';
import {Provider} from "mobx-react";
import {RootStore} from "./store/RootStore";
import DashboardScreen from "./screen/DashboardScreen";

export default class App extends React.Component {
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
