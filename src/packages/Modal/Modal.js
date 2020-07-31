import React, { useState, useEffect, Component } from 'react';
import { Modal, Vibration, View } from 'react-native';

export const ModalView = (props) => {
    const [visible, setVisible] = useState(props.visible);
    //here text means state name, setText means setstate value in text and useState('') means any value set in state

    useEffect(() => {
        // if (text.length > 20) {
        //     alert("maximum limit")
        // }
    }, [visible])
    //useEffect use in condtion set in state

    return (
        <Modal
            animationType={props.animationType}
            transparent={props.transparent}
            visible={visible}
            onRequestClose={() => { setVisible(false) }}>
            <View style={props.modalStyle}>
                {props.modalContent}
            </View>
        </Modal>
    )
}