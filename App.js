import React, { Component } from 'react';
import { Button, View, Text } from 'react-native';

class AnyColorButton extends Component {
  displayAlert() {
    alert('Alert this app is danger');
  }

  render() {
    return (
      <Button
        color={this.props.color}
        title="Click Me"
        onPress={this.displayAlert}
      />
    );
  }
}

export default class App extends Component {
  render() {
    return (
      <View style={{ marginbottom: 50 }}>
        <AnyColorButton color="black" />
        <Text>My First React Component</Text>
      </View>
    );
  }
}
