import React, { Component } from 'react';
import {
    SafeAreaView,
    StyleSheet,
    TextInput,
    View,
    Text
} from 'react-native';

import RNSpeedometer from '../components/SpeedoMeterChart/SpeedoMeter'

export default class App extends Component {
    state = { value: 0 };
    //Initial value for Speedometer
    onChange = value => this.setState({ value: parseInt(value) });
    //setting the value for Speedometer
    render() {
        return (
            <SafeAreaView style={styles.container}>
                <RNSpeedometer
                    value={this.state.value}
                    //value for Speedometer
                    size={300}
                    //Size of Speedometer
                    minValue={0}
                    //Min value for Speedometer
                    maxValue={100}
                    //Max value for Speedometer
                    allowedDecimals={0}
                    //Decimals value allowed or not
                    labels={[
                        {
                            name: 'Low Risk',
                            labelColor: '#ff2900',
                            activeBarColor: '#ff2900',
                        },
                        {
                            name: 'Medium Risk',
                            labelColor: '#f4ab44',
                            activeBarColor: '#f4ab44',
                        },
                        {
                            name: 'High Risk',
                            labelColor: '#00ff6b',
                            activeBarColor: '#00ff6b',
                        },
                    ]}
                //Labels for the different steps of Speedometer
                />
                <View style={{ marginTop: 70, padding: 20 }}>
                    <Text style={{ fontSize: 20 }}>
                        Enter the value for the speedometer graph between 0 to 100
            </Text>
                    <TextInput
                        placeholder="Enter Speedometer Value"
                        style={styles.textInput}
                        onChangeText={this.onChange}
                    />
                </View>
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    textInput: {
        height: 25,
        fontSize: 16,
        marginTop: 30,
        borderBottomWidth: 0.3,
        borderBottomColor: 'black',
    },
});