import React, { useState, useEffect, Component } from 'react';
import { View, ActivityIndicator } from 'react-native';

export const Loader = (props) => {
    const [visible] = useState(props.visible)
    return (
        visible == true &&
        <ActivityIndicator
            style={[{
                position: 'absolute',
                left: 0,
                right: 0,
                bottom: 0,
                top: 0,
                backgroundColor: '#d3d3d390'
            }, props.style]}
            size="large"
        />
    )
}
