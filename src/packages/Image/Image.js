import React, { useState, useEffect, Component } from 'react';
import { Image } from 'react-native';

export const ImageView = (props) => {
    return (
        <Image style={[
            {
                width: props.size,
                height: props.size,
                borderRadius: props.rounded ? props.size / 2 : 10,
                justifyContent: 'center',
                alignItems: 'center',
            },
            props.imageStyle]}
            resizeMode={props.rounded ? 'cover' : 'contain'}
            source={props.source}
        />

    )

}