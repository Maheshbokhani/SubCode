// Step-1
// npm install --save react-native-location  OR  yarn add react-native-location
// pod install

import React, { Component } from 'react';
import {
    View, Text
} from 'react-native';
// Step-2
// import RNLocation
import RNLocation from 'react-native-location';
// import GPSState from 'react-native-gps-state'
import Geolocation from '@react-native-community/geolocation';

export default class Location extends Component {
    constructor(props, number = null) {
        super(props);
        this.state = {
            latitute: '',
            longitute: ''
        };
    }

    async componentDidMount() {

        // Step-3
        // Impilement configure

        // await Geolocation.getCurrentPosition(
        //     position => {
        //         console.warn('in geo location')
        //         this.setState({
        //             latitute: JSON.stringify(position.coords.latitude),
        //             longitute: JSON.stringify(position.coords.longitude),
        //         })
        //         console.warn("Lati from get notice " + this.state.latitute + " " + " Longi  from get notice" + this.state.longitute)
        //     },
        // )

        RNLocation.requestPermission({
            ios: 'whenInUse', // or 'always'
            android: {
                detail: 'coarse', // or 'fine'
                rationale: {
                    title: "We need to access your location",
                    message: "We use your location to show where you are on the map",
                    buttonPositive: "OK",
                    buttonNegative: "Cancel"
                }
            }
        }).then(granted => {
            if (granted) {
                this.locationSubscription = RNLocation.subscribeToLocationUpdates(locations => {
                    console.log('Location', locations)
                })
            }
        })


        RNLocation.getCurrentPermission()
            .then(currentPermission => {
                console.log('Location1', currentPermission)
            })

        await RNLocation.getLatestLocation({ timeout: 60000 })
            .then(latestLocation => {
                this.setState({
                    latitute: latestLocation.latitude,
                    longitute: latestLocation.longitude
                })
            })


        RNLocation.subscribeToLocationUpdates(locations => {
            console.log('updatelocation', locations)
        })

    }

    render() {

        // RNLocation.configure({
        //     distanceFilter: 100, // Meters
        //     desiredAccuracy: {
        //         ios: "best",
        //         android: "balancedPowerAccuracy"
        //     },
        //     // Android only
        //     androidProvider: "auto",
        //     interval: 5000, // Milliseconds
        //     fastestInterval: 10000, // Milliseconds
        //     maxWaitTime: 5000, // Milliseconds
        //     // iOS Only
        //     activityType: "other",
        //     allowsBackgroundLocationUpdates: false,
        //     headingFilter: 1, // Degrees
        //     headingOrientation: "portrait",
        //     pausesLocationUpdatesAutomatically: false,
        //     showsBackgroundLocationIndicator: false,
        // })


        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>Latitute:: {this.state.latitute}</Text>
                <Text>Longitude:: {this.state.longitute}</Text>
            </View>
        )
    }

}