import React, { Component } from 'react';
import { View, Text, Vibration, SafeAreaView } from 'react-native';
import { Button } from './Button';

class Test extends Component {

  render() {
    return (
      <SafeAreaView style={{ alignItems: 'center', flex: 1, justifyContent: 'center', paddingTop: 50 }}>
        <Button title='Submit' onPress={() => { alert('Button') }} />
      </SafeAreaView>
    );
  }
}



export default Test;