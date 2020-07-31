import React, { useState, useEffect, Component } from 'react';
import { View, Text, Button, Vibration, TextInput } from 'react-native';

export const InputField = (props) => {
    return (
        <TextInput
            secureTextEntry={props.secureTextEntry}
            multiline={props.multiline}
            autoFocus={props.autoFocus}
            onChangeText={props.onChangeText}
            value={props.value}
            style={[{}, props.style]}
            placeholder={props.placeholder}
            placeholderTextColor={props.placeholderTextColor}
        />
    )
}
