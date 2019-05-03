import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {inject} from "mobx-react";
@inject('rootStore')
export default class LoginScreen extends React.Component {
  render() {
    console.log(this.props.rootStore.authStore.loginFormData);
    return (
      <View style={styles.container}>
        <Text>Open up App.jsloin!</Text>
      </View>
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
