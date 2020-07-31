import React, { Component } from 'react';
import { View, Text, Vibration, SafeAreaView } from 'react-native';
import { Header } from './Header';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Entypo from 'react-native-vector-icons/Entypo';

export default function Test() {

  return (
    <View style={{ alignItems: 'center', flex: 1 }}>
      <SafeAreaView style={{ flex: 0 }} />
      <Header
        height={70}
        backgroundColor={'grey'}
        leftOnPress={() => { alert('Left') }}
        rightOnPress={() => { alert('Right') }}

        leftIconComponent={{
          leftIcon: <FontAwesome name='bars' color={'white'} size={26} />
        }}

        centerTextComponent={{
          centerTextStyle: { fontSize: 24, color: 'white', fontWeight: 'bold' },
          centerText: 'Title',
        }}

        rightIconComponent={{
          rightIcon: <Entypo name='dots-three-vertical' color={'white'} size={20} />
        }}

        rightTextComponent={{
          rightTextStyle: { fontSize: 20, paddingRight: 2, color: 'white' },
          rightText: 'Setting',
        }}
      />
    </View>
  );
}

