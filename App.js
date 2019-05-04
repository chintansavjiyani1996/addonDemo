import React from 'react';
import AppNavigator from './AppNavigator';
import {Provider} from "mobx-react";
import {RootStore} from "./store/RootStore";

export default class App extends React.Component {

  render() {
    return (
        <Provider rootStore={new RootStore()}>
          <AppNavigator/>
        </Provider>
    );
  }
}
