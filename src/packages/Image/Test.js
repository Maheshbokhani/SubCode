import React, { Component } from 'react';
import { View, Text, Vibration, SafeAreaView } from 'react-native';
import { ImageView } from './Image';


export default class Test extends Component {

  render() {
    return (
      <SafeAreaView style={{ alignItems: 'center', flex: 1 }}>
        <ImageView
          rounded
          size={250}
          source={{ uri: 'https://www.pngitem.com/pimgs/m/78-786293_1240-x-1240-0-avatar-profile-icon-png.png' }} />
      </SafeAreaView>
    );
  }
}
