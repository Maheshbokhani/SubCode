import React, { useState, useEffect } from 'react'
import { Modal, StyleSheet, View, Text } from 'react-native'

export const Toast = (props) => {
    const [visible, setVisible] = useState(props.visible);

    useEffect(() => {
        if (visible == true) {
            setTimeout(async () => {
                setVisible(false)
            }, props.duration ? props.duration : 2000)
        }
    }, [visible])

    return <Modal
        animationType={"slide"}
        transparent={true}
        visible={visible}
        onRequestClose={() => { console.log("Modal has been closed.") }}>
        <View style={[style.modal, {
            backgroundColor: props.backgroundColor,
            height: props.height,
            width: props.width,
            borderRadius: 10
        }, props.style]}>
            <Text style={[style.text, props.textStyle]}>{props.title}</Text>
        </View>
    </Modal>
}

const style = StyleSheet.create({
    modal: {
        alignItems: 'center',
        backgroundColor: 'green',
        height: 50,
        width: '80%',
        top: '85%',
        justifyContent: 'center',
        alignSelf: "center"
    },
    text: {
        padding: 15,
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: "center"
    }
})



