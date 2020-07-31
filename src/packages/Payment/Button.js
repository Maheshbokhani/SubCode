import React, { useState, useEffect, Component } from 'react';
import { View, Text, Vibration, TextInput, TouchableHighlight, TouchableOpacity } from 'react-native';
import { colors } from 'react-native-elements';

export const Button = (props) => {
    const [text, setText] = useState(props.title);
    //here text means state name, setText means setstate value in text and useState('') means any value set in state

    useEffect(() => {
        if (text.length > 20) {
            alert("maximum limit")
        }
    }, [text])
    //useEffect use in condtion set in state

    return (
        <TouchableOpacity
            onPress={props.onPress}
            style={[
                {
                    width: '80%',
                    height: 50,
                    borderRadius: 10,
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: 'green'
                },
                props.buttonStyle]}>
            <Text
                style={[
                    {
                        fontSize: 20,
                        color: 'white'
                    },
                    props.textStyle]}>
                {text}
            </Text>
        </TouchableOpacity>
    )

}