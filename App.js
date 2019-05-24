import React, { Component } from "react";
import { Provider } from "react-redux";
import store from "./src/store";
import { AppWithNavigationState } from "./src/AppWithNavigationState";
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
``;

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <Provider store={store}>
        <AppWithNavigationState />
      </Provider>
    );
  }
}
