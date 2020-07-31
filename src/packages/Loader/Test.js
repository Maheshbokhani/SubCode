import React, { useState, useEffect, Component } from 'react';
import { View, Text, Button, Vibration, SafeAreaView } from 'react-native';
import { Loader } from './Loader'

export default class Test extends Component {
  render() {
    return (
      <View style={{ alignItems: 'center', flex: 1 }}>
        <View style={{ backgroundColor: 'blue', height: '100%', width: '100%' }}></View>
        <Loader visible={true} />
      </View>
    );
  }
}
