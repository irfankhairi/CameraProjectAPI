import * as React from 'react';
import {Component, StyleSheet,Button, Image, View, Text, CameraRoll, Alert} from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions';

export default class GalleryScreen extends React.Component {
  state = { image: null,};

  render() {
    let { image } = this.state;
    return (
      
      <View style={styles.container}>
        <View>
        <Text>Gallery Page</Text>
        </View>
        <View style={styles.button}>
        <Button onPress={() => this.props.navigation.navigate('Home')} title="Home" />
        </View>
        {image && <Image source={{ uri: image }} style={{ justifyContent: 'space-evenly', width: 250, height: 250 }} />}
        
        <View style={styles.gallerybutton}>
        <Button color="#32CD32" title="Select image from Gallery" onPress={this._pickImage} />
        </View>
      </View>
    );
  }

_pickImage = async () => {

  const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
  if (status == 'granted') {
  try {
    let pic = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
    if (!pic.cancelled) {
      this.setState({ image: pic.uri });
    }
    console.log(pic);
  } catch (E) {
    console.log(E);
  }
}
else{
  Alert.alert("You need permission to use Camera Roll");
}
};
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
  gallerybutton: {
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'space-evenly'
  },

  button: {
    flexDirection: 'row'  
  }
});
