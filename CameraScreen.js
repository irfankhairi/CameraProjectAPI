
import * as React from 'react';
import {Component, StyleSheet,Button, Image, View, Text, CameraRoll, Alert} from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions';

export default class CameraScreen extends React.Component {
  state = { image: null,};

  render() {
    let { image } = this.state;
    
    return (
        <View style={styles.container}>  
        <View>
        <Text>Camera Page</Text>
        </View>
        <View style={styles.button}>
        <Button onPress={() => this.props.navigation.navigate('Home')} title="Home" />
        </View>
        {image && <Image source={{ uri: image }} style={{ justifyContent: 'space-evenly', width: 250, height: 250 }} />}

        <View style={styles.camerabutton}>
        <Button color="#0000CD" title="Take picture with Camera" onPress={this._takePhoto} />
      </View>
      </View>

    );
  }

  _takePhoto = async () => {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);

    if (status == 'granted') {
    try {
      let pic = await ImagePicker.launchCameraAsync({
        allowEditing: true,
        aspect: [4, 3],
        quality: 1,
        exif: true
      });
      if (!pic.cancelled) {
        this.setState({ image: pic.uri });
      }
      CameraRoll.saveToCameraRoll(this.state.image);
    } catch (E) {
      console.log(E);
    }
  }
  else{
    Alert.alert("You need permission to use Camera");
 }
  };
}

const styles = StyleSheet.create({

  container: {
    flex: 2,
    justifyContent: 'center',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    textAlignVertical: 'top',
    },

  camerabutton: {
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'space-evenly'
  }

});

