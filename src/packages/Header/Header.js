import React, { useState, useEffect, Component } from 'react';
import { View, Text, Vibration, TextInput, TouchableHighlight, TouchableOpacity, SafeAreaView } from 'react-native';
import { colors } from 'react-native-elements';

export const Header = (props) => {
    const [text, setText] = useState('');
    //here text means state name, setText means setstate value in text and useState('') means any value set in state

    useEffect(() => {
        if (text.length > 20) {
            alert("maximum limit")
        }
    }, [text])
    //useEffect use in condtion set in state

    return (
        <View style={{
            height: props.height ? props.height : 60,
            width: '100%',
            backgroundColor: props.backgroundColor ? props.backgroundColor : 'blue',
            justifyContent: 'space-between',
            flexDirection: 'row',
            paddingLeft: 20,
            paddingRight: 20
        }}>


            <View style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'flex-start'
            }}>
                <TouchableOpacity style={{
                    flexDirection: 'row',
                    alignItems: 'center'
                }}
                    onPress={props.leftOnPress}>
                    {props.leftIconComponent &&
                        props.leftIconComponent.leftIcon
                    }
                    {props.leftTextComponent &&
                        <Text style={props.leftTextComponent.leftTextStyle}>{props.leftTextComponent.leftText}</Text>
                    }
                </TouchableOpacity>
            </View>

            <View style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                {props.centerIconComponent &&
                    props.centerIconComponent.centerIcon
                }
                {props.centerTextComponent &&
                    <Text style={props.centerTextComponent.centerTextStyle}>{props.centerTextComponent.centerText}</Text>
                }
            </View>

            <View style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'flex-end'
            }}>
                <TouchableOpacity style={{
                    flexDirection: 'row',
                    alignItems: 'center'
                }}
                    onPress={props.rightOnPress}>
                    {props.rightTextComponent &&
                        <Text style={props.rightTextComponent.rightTextStyle}>{props.rightTextComponent.rightText}</Text>
                    }
                    {props.rightIconComponent &&
                        props.rightIconComponent.rightIcon
                    }
                </TouchableOpacity>

            </View>
        </View >
    )
}