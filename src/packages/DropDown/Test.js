import React, { useState, useEffect } from 'react';
import { View, Text, Button, Vibration, SafeAreaView } from 'react-native';
import ModalDropdown from './DropDown';

/* Required npm i deprecated-react-native-listview */

export default function Test() {
  const DEMO_OPTIONS_1 = ['Item 1', 'Item 2', 'Item 3'];
  return (
    <SafeAreaView style={{ alignItems: 'center', flex: 1 }}>
      <ModalDropdown
        style={{
          paddingTop: 16,
          left: 0,
          height: 40,
        }}
        defaultIndex={0}
        animated={true}
        dropdownStyle={{ width: 150, }}
        textStyle={{ fontSize: (14), color: 'grey', alignSelf: 'center' }}
        dropdownTextStyle={{ alignSelf: 'center', fontSize: (14), color: 'grey' }}
        onSelect={(value) => alert(value)}
        defaultValue={'select...'}
        options={DEMO_OPTIONS_1}
      />
    </SafeAreaView>
  );
}

