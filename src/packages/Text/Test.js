import React, { useState } from 'react';
import { View, Text, Button, Vibration, SafeAreaView } from 'react-native';
import { TextView } from './Text';

export default function Test() {
  const [text, setText] = useState('Hello');

  return (
    <SafeAreaView style={{ alignItems: 'center', flex: 1 }}>
      <TextView style={{ fontSize: 29 }} text={text} />
    </SafeAreaView>
  );

}
