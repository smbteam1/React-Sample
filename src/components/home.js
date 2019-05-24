
import React, { Component } from "react";
import { Text, Button , View } from "react-native";

export class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {  };
  }
  goBack() {
    this.props.navigation.goBack()
  }

  render() {
    return (
      <View>
        <Text>Welcome to Home Screen</Text>
        {
          this.props.credentials&& this.props.credentials.email && <Text>Your email : {this.props.credentials.email}</Text>
        }
                {
          this.props.credentials&& this.props.credentials.password && <Text>Your password : {this.props.credentials.password}</Text>
        }
        <Text onPress={() => this.props.navigation.goBack()}></Text>
        <Button onPress={() => this.goBack()} title="GO BACK"></Button>
      </View>

    );
  }
}
