import React, { Component } from 'react';
import { View, Text, Vibration, SafeAreaView, StyleSheet } from 'react-native';
import { ModalView } from './Modal';

export default class Test extends Component {

  render() {
    return (
      <SafeAreaView style={{ alignItems: 'center', flex: 1 }}>
        <ModalView
          visible={true}
          transparent={false}
          modalStyle={style.modalStyle}
          modalContent={<View>
          </View>}
        />
      </SafeAreaView>
    );
  }
}

const style = StyleSheet.create({
  modalStyle: {
    width: 250,
    height: 250,
    backgroundColor: 'green',
    alignSelf: 'center',
    marginTop: 50
  }
})