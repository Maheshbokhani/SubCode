import React, { useState, useEffect, Component } from 'react';
import { View, Text, Button, Vibration, TextInput } from 'react-native';

export const TextView = (props) => {
    const [text, setText] = useState(props.text);
    //here text means state name, setText means setstate value in text and useState('') means any value set in state

    useEffect(() => {
        if (text.length > 20) {
            alert("maximum limit")
        }
    }, [text])
    //useEffect use in condtion set in state

    return (
        <Text
            style={[{
                color: props.light ? 'lightgrey' : 'grey',
                width: '90%'
            }, props.style]}
        >
            {text}
        </Text>
    )

}