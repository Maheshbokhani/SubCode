import React, { Component } from 'react';
import { View, Text, Button, Vibration, SafeAreaView } from 'react-native';
import { Line } from './Line';

export default class Testing extends Component {

  render() {
    return (
      <SafeAreaView style={{ alignItems: 'center', flex: 1 }}>
        <Line width='90%' height={1} color={'blue'} />
      </SafeAreaView>
    );
  }
}
