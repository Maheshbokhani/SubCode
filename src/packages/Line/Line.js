import React, { useState, useEffect, Component } from 'react';
import { View, } from 'react-native';

export const Line = (props, onFocus) => {
    return (
        <View style={{
            width: props.width,
            height: props.height,
            backgroundColor: props.color
        }}>
        </View>
    )
}