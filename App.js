import React, { Component } from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from "./Screens/HomeScreen";
import CameraScreen from "./Screens/CameraScreen";
import GalleryScreen from "./Screens/GalleryScreen";

const RootStack = createStackNavigator(
  {
    Home: HomeScreen,
    Camera: CameraScreen,
    Gallery: GalleryScreen
  },
  {
    initialRouteName: 'Home'
  }
);

const AppContainer = createAppContainer(RootStack);

export default class App extends Component {
  render() {
    return (
       <AppContainer />
    );
  }
}