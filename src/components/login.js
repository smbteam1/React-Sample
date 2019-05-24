import { Container, Item, Input, Label } from "native-base";
import React, { Component } from "react";
import { View, Button } from "react-native";
export class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  login() {
    this.props._login({
      email: this.state.email,
      password: this.state.password
    })
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.credentials) {
      this.props.navigation.navigate("home")
    }
  }
  render() {
    return (
      <Container
      >
        <View >

          <Item fixedLabel>
            <Label >Email</Label>
            <Input
              autoCapitalize="none"
              onChangeText={email => {
                this.state.email = email
              }}
              ref={email => (this.email = email)}
              returnKeyType={"next"}
              onSubmitEditing={() => {
                this.password._root.focus();
              }}
              placeholderTextColor={"white"}
            />
          </Item>
        </View>

        <View >

          <Item fixedLabel>
            <Label>Password</Label>
            <Input
              ref={password => (this.password = password)}
              returnKeyType={"next"}
              onSubmitEditing={() => {
                this.login();
              }}
              onChangeText={password => {
                this.state.password = password
              }}
              placeholderTextColor={"white"}
            />
          </Item>
        </View>
        <Button onPress={() => this.login()} title="LOGIN"></Button>

      </Container>
    );
  }
}
