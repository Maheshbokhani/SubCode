import React, { Component } from 'react';
import { View, Text, Vibration, SafeAreaView } from 'react-native';
import { Toast } from './Toast';

export default function Test() {

  return (
    <SafeAreaView style={{ alignItems: 'center', flex: 1 }}>

      <Toast
        title='Toast message'
        visible={true}
        backgroundColor={'grey'}
        duration={5000}
      />

    </SafeAreaView>
  );
}

