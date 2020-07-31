import React, { useState, useEffect } from 'react';
import { View, Text, Button, Vibration, SafeAreaView } from 'react-native';
import { InputField } from './TextInput';

export default function Test() {
  const [text, setText] = useState('');

  useEffect(() => {
    if (text.length > 30) {
      alert("maximum limit")
    }
  }, [text])

  return (
    <SafeAreaView style={{ alignItems: 'center', flex: 1 }}>
      <InputField
        style={{
          width: '90%',
          fontSize: 29,
          padding: 10,
          borderWidth: 1
        }}
        autoFocus={true}
        onChangeText={(val) => setText(val)}
        value={text}
      />
    </SafeAreaView>
  );
}

