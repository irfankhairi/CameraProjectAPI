import React, { Component } from "react";
import { View, Text, StyleSheet, Button } from "react-native";

export default class HomeScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View>
          
        <Text>Home Page</Text>
        <Text>Press "Camera" to snap a picture</Text>
        <Text>Press "Gallery" to choose a picture to display</Text>
        </View>
        <View style={styles.button}>
        <Button onPress={() => this.props.navigation.navigate('Camera')} title="Camera" />
        <Button onPress={() => this.props.navigation.navigate('Gallery')} title="Gallery" />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    textAlignVertical: 'top',
  },
  button: {
    flexDirection: 'row'  
  }
});