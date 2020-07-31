
import React from "react"
import { StyleSheet, Text, View, Dimensions, TextInput, TouchableOpacity, Alert } from "react-native"


class App extends React.Component {

    state = {
        email: '',
        password: ''
    }

    _submit() {
        alert(this.state.email + '  ' + this.state.password)
    }

    render() {
        return (
            <View style={styles.container}>

                <Text style={styles.text}>MDB Login</Text>

                <View style={{ marginTop: '5%' }}>

                    <TextInput style={styles.textInput}
                        placeholder={'Email or Username'}
                        value={this.state.email}
                        onChangeText={(val) => this.setState({ email: val })}
                    />

                    <TextInput style={styles.textInput}
                        placeholder={'Password'}
                        secureTextEntry={true}
                        value={this.state.password}
                        onChangeText={(val) => this.setState({ password: val })}
                    />

                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => { this._submit() }}
                    >
                        <Text style={styles.buttonText}>Sign In</Text>
                    </TouchableOpacity>

                </View>

            </View>
        )
    }
}

const styles = StyleSheet.create({
    text: {
        fontWeight: "bold",
        fontSize: 50,
        textAlign: 'center',
        color: 'blue'
    },
    textInput: {
        width: 300,
        height: 50,
        padding: 10,
        fontSize: 20,
        color: '#555555',
        backgroundColor: "white",
        borderRadius: 10,
        marginVertical: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.30,
        shadowRadius: 4.65,
        elevation: 8,
    },
    button: {
        width: 300,
        height: 50,
        marginTop: 20,
        backgroundColor: 'lightgreen',
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.30,
        shadowRadius: 4.65,
        elevation: 8,
    },
    container: {
        backgroundColor: 'lightblue',
        height: Dimensions.get('window').height,
        alignItems: 'center',
        justifyContent: 'center',

    },
    buttonText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'black',
        borderRadius: 20,

    }

})

export default App