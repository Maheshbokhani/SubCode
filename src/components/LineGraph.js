// import React, { Component } from 'react';
// import {
//     View, Text, NativeModules, NativeEventEmitter, Dimensions, SafeAreaView
// } from 'react-native';
// // Step-2
// import {
//     LineChart,
// } from "react-native-chart-kit";

// const screenWidth = Dimensions.get("window").width;

// const chartConfig1 = {
//     fillShadowGradient: '#d42013',
//     fillShadowGradientOpacity: 0.03,
//     backgroundGradientFromOpacity: 0,
//     backgroundGradientToOpacity: 0,
//     color: (opacity = 1) => `rgba(212, 32, 19, ${opacity})`,
//     propsForDots: {
//         r: "0",
//         strokeWidth: "0",
//         stroke: "#ffa726"
//     },
//     propsForLabels: {
//         fontSize: "1",
//     },
//     barPercentage: 1,
//     propsForBackgroundLines: {
//         stroke: 0, // solid background lines with no dashes

//     }
// };

// const chartConfig = {
//     lineWidth: 10,
//     withShadow: false,
//     withOuterLines: false,
//     backgroundGradientFrom: "#1E2923",
//     backgroundGradientFromOpacity: 0,
//     backgroundGradientTo: "#08130D",
//     backgroundGradientToOpacity: 0.5,
//     color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
//     strokeWidth: 2, // optional, default 3
//     barPercentage: 0.5,
//     decimalPlaces: 2,
//     style: {
//         borderRadius: 16
//     }
// };


// const data = {
//     datasets: [
//         {
//             data: [20, 45, 28, 80, 9, 93, 10, 20, 30],
//         }
//     ],
// };

// export default class Linegraph extends Component {
//     render() {

//         return (
//             <SafeAreaView>
//                 <View style={{ justifyContent: "center", alignItems: 'center', flex: 1, marginTop: 100 }}>
//                     <LineChart
//                         data={data}
//                         width={screenWidth}
//                         height={200}
//                         chartConfig={chartConfig}
//                         bezier
//                         fromZero
//                         withShadow={false}
//                         withOuterLines={false}
//                         scaleYEnabled={false}
//                     />
//                 </View>
//             </SafeAreaView>
//         )
//     }
// }

import React from 'react'
import { Path } from 'react-native-svg'
import { AreaChart, Grid, ProgressCircle } from 'react-native-svg-charts'
import * as shape from 'd3-shape'
import { SafeAreaView, Dimensions, View, Text } from 'react-native'
import { ButtonGroup } from 'react-native-elements'
import Icon from 'react-native-vector-icons/Entypo';

class Line extends React.PureComponent {
    constructor() {
        super()
        this.state = {
            selectedIndex: 0
        }
        this.updateIndex = this.updateIndex.bind(this)
    }

    updateIndex(selectedIndex) {
        this.setState({ selectedIndex })
    }

    render() {

        const data = [0, 80, 20, 90, 40, 80,]

        const buttons = ['Bankxt Account', 'Savings Goals']
        const { selectedIndex } = this.state

        const Line = ({ line }) => (
            <Path
                key={'line'}
                d={line}
                stroke={'rgb(134, 65, 244)'}
                strokeWidth={5}
                fill={'none'}
            />
        )

        return (
            <SafeAreaView>
                <View style={{ backgroundColor: 'grey' }}>


                    <ButtonGroup
                        onPress={this.updateIndex}
                        selectedIndex={selectedIndex}
                        buttons={buttons}
                        textStyle={{ color: 'white' }}
                        containerStyle={{ height: 54, marginTop: 20, borderRadius: 15, backgroundColor: 'lightgreen' }}
                        selectedButtonStyle={{ borderRadius: 15, backgroundColor: 'darkgreen' }}
                        selectedTextStyle={{ color: 'black' }}
                        innerBorderStyle={{ width: 0 }}
                    />

                    <View style={{
                        width: 167,
                        marginLeft: 10,
                        height: 184,
                        backgroundColor: 'white',
                        borderRadius: 10
                    }}>
                        <View style={{ marginTop: 10, flexDirection: 'row', justifyContent: 'space-between', marginLeft: 10, marginRight: 10, alignItems: 'center' }}>
                            <View style={{ height: 15, width: 15, backgroundColor: 'blue', marginLeft: 12 }}></View>
                            <ProgressCircle
                                style={{ height: 40, width: 40, position: 'absolute' }}
                                progress={0.3}
                                progressColor={'rgb(134, 65, 244)'}
                                strokeWidth={7}
                                cornerRadius={5}
                            />
                            <View style={{ height: 30, width: 5, backgroundColor: 'blue' }}></View>
                        </View>
                        <AreaChart
                            style={{ marginTop: 20, height: 70, width: '100%' }}
                            data={data}
                            contentInset={{ top: 5, bottom: 5 }}
                            curve={shape.curveNatural}
                            svg={{ fill: 'rgba(134, 65, 244, 0.1)' }}
                        >
                            <Line />
                        </AreaChart>
                        <Text style={{ alignSelf: 'center' }}>Main Banxt</Text>
                        <Text style={{ alignSelf: 'center' }}>$ 1,234.56</Text>


                    </View>

                </View>
            </SafeAreaView>
        )
    }
}

export default Line