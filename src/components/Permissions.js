// Step-1
// npm install --save react-native-permissions
// pod install

/* Step-2 Set permission in Info.plist in xcode
  <key>NSAppleMusicUsageDescription</key>
  <string>YOUR TEXT</string>
  <key>NSBluetoothAlwaysUsageDescription</key>
  <string>YOUR TEXT</string>
  <key>NSBluetoothPeripheralUsageDescription</key>
  <string>YOUR TEXT</string>
  <key>NSCalendarsUsageDescription</key>
  <string>YOUR TEXT</string>
  <key>NSCameraUsageDescription</key>
  <string>YOUR TEXT</string>
  <key>NSContactsUsageDescription</key>
  <string>YOUR TEXT</string>
  <key>NSFaceIDUsageDescription</key>
  <string>YOUR TEXT</string>
  <key>NSLocationAlwaysAndWhenInUseUsageDescription</key>
  <string>YOUR TEXT</string>
  <key>NSLocationAlwaysUsageDescription</key>
  <string>YOUR TEXT</string>
  <key>NSLocationWhenInUseUsageDescription</key>
  <string>YOUR TEXT</string>
  <key>NSMicrophoneUsageDescription</key>
  <string>YOUR TEXT</string>
  <key>NSMotionUsageDescription</key>
  <string>YOUR TEXT</string>
  <key>NSPhotoLibraryUsageDescription</key>
  <string>YOUR TEXT</string>
  <key>NSRemindersUsageDescription</key>
  <string>YOUR TEXT</string>
  <key>NSSpeechRecognitionUsageDescription</key>
  <string>YOUR TEXT</string>
  <key>NSSiriUsageDescription</key>
  <string>YOUR TEXT</string>

  -----> set permission in podfile
  
  permissions_path = '../node_modules/react-native-permissions/ios'
  pod 'Permission-BluetoothPeripheral', :path => "#{permissions_path}/BluetoothPeripheral.podspec"
  pod 'Permission-Calendars', :path => "#{permissions_path}/Calendars.podspec"
  pod 'Permission-Camera', :path => "#{permissions_path}/Camera.podspec"
  pod 'Permission-Contacts', :path => "#{permissions_path}/Contacts.podspec"
  pod 'Permission-FaceID', :path => "#{permissions_path}/FaceID.podspec"
  pod 'Permission-LocationAlways', :path => "#{permissions_path}/LocationAlways.podspec"
  pod 'Permission-LocationWhenInUse', :path => "#{permissions_path}/LocationWhenInUse.podspec"
  pod 'Permission-MediaLibrary', :path => "#{permissions_path}/MediaLibrary.podspec"
  pod 'Permission-Microphone', :path => "#{permissions_path}/Microphone.podspec"
  pod 'Permission-Motion', :path => "#{permissions_path}/Motion.podspec"
  pod 'Permission-Notifications', :path => "#{permissions_path}/Notifications.podspec"
  pod 'Permission-PhotoLibrary', :path => "#{permissions_path}/PhotoLibrary.podspec"
  pod 'Permission-Reminders', :path => "#{permissions_path}/Reminders.podspec"
  pod 'Permission-Siri', :path => "#{permissions_path}/Siri.podspec"
  pod 'Permission-SpeechRecognition', :path => "#{permissions_path}/SpeechRecognition.podspec"
  pod 'Permission-StoreKit', :path => "#{permissions_path}/StoreKit.podspec"

-------> set permission in android in Androidmanifest file

 <uses-permission android:name="android.permission.ACCEPT_HANDOVER" />
  <uses-permission android:name="android.permission.ACCESS_BACKGROUND_LOCATION" />
  <uses-permission android:name="android.permission.ACCESS_COARSE_LOCATION" />
  <uses-permission android:name="android.permission.ACCESS_FINE_LOCATION" />
  <uses-permission android:name="android.permission.ACTIVITY_RECOGNITION" />
  <uses-permission android:name="android.permission.ANSWER_PHONE_CALLS" />
  <uses-permission android:name="android.permission.BODY_SENSORS" />
  <uses-permission android:name="android.permission.CALL_PHONE" />
  <uses-permission android:name="android.permission.CAMERA" />
  <uses-permission android:name="android.permission.GET_ACCOUNTS" />
  <uses-permission android:name="android.permission.PROCESS_OUTGOING_CALLS" />
  <uses-permission android:name="android.permission.READ_CALENDAR" />
  <uses-permission android:name="android.permission.READ_CALL_LOG" />
  <uses-permission android:name="android.permission.READ_CONTACTS" />
  <uses-permission android:name="android.permission.READ_EXTERNAL_STORAGE" />
  <uses-permission android:name="android.permission.READ_PHONE_NUMBERS" />
  <uses-permission android:name="android.permission.READ_PHONE_STATE" />
  <uses-permission android:name="android.permission.READ_SMS" />
  <uses-permission android:name="android.permission.RECEIVE_MMS" />
  <uses-permission android:name="android.permission.RECEIVE_SMS" />
  <uses-permission android:name="android.permission.RECEIVE_WAP_PUSH" />
  <uses-permission android:name="android.permission.RECORD_AUDIO" />
  <uses-permission android:name="android.permission.SEND_SMS" />
  <uses-permission android:name="android.permission.USE_SIP" />
  <uses-permission android:name="android.permission.WRITE_CALENDAR" />
  <uses-permission android:name="android.permission.WRITE_CALL_LOG" />
  <uses-permission android:name="android.permission.WRITE_CONTACTS" />
  <uses-permission android:name="android.permission.WRITE_EXTERNAL_STORAGE" />
  <uses-permission android:name="com.android.voicemail.permission.ADD_VOICEMAIL" />

*/

import React, { Component } from 'react';
import {
    View, Text, NativeModules, NativeEventEmitter, TouchableOpacity
} from 'react-native';
// Step-3
// import PERMISSIONS
import { request, PERMISSIONS, checkMultiple, openSettings, check } from 'react-native-permissions';

PERMISSIONS.ANDROID.ACCEPT_HANDOVER;
PERMISSIONS.ANDROID.ACCESS_BACKGROUND_LOCATION;
PERMISSIONS.ANDROID.ACCESS_COARSE_LOCATION;
PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION;
PERMISSIONS.ANDROID.ACTIVITY_RECOGNITION;
PERMISSIONS.ANDROID.ADD_VOICEMAIL;
PERMISSIONS.ANDROID.ANSWER_PHONE_CALLS;
PERMISSIONS.ANDROID.BODY_SENSORS;
PERMISSIONS.ANDROID.CALL_PHONE;
PERMISSIONS.ANDROID.CAMERA;
PERMISSIONS.ANDROID.GET_ACCOUNTS;
PERMISSIONS.ANDROID.PROCESS_OUTGOING_CALLS;
PERMISSIONS.ANDROID.READ_CALENDAR;
PERMISSIONS.ANDROID.READ_CALL_LOG;
PERMISSIONS.ANDROID.READ_CONTACTS;
PERMISSIONS.ANDROID.READ_EXTERNAL_STORAGE;
PERMISSIONS.ANDROID.READ_PHONE_NUMBERS;
PERMISSIONS.ANDROID.READ_PHONE_STATE;
PERMISSIONS.ANDROID.READ_SMS;
PERMISSIONS.ANDROID.RECEIVE_MMS;
PERMISSIONS.ANDROID.RECEIVE_SMS;
PERMISSIONS.ANDROID.RECEIVE_WAP_PUSH;
PERMISSIONS.ANDROID.RECORD_AUDIO;
PERMISSIONS.ANDROID.SEND_SMS;
PERMISSIONS.ANDROID.USE_SIP;
PERMISSIONS.ANDROID.WRITE_CALENDAR;
PERMISSIONS.ANDROID.WRITE_CALL_LOG;
PERMISSIONS.ANDROID.WRITE_CONTACTS;
PERMISSIONS.ANDROID.WRITE_EXTERNAL_STORAGE;


PERMISSIONS.IOS.BLUETOOTH_PERIPHERAL;
PERMISSIONS.IOS.CALENDARS;
PERMISSIONS.IOS.CAMERA;
PERMISSIONS.IOS.CONTACTS;
PERMISSIONS.IOS.FACE_ID;
PERMISSIONS.IOS.LOCATION_ALWAYS;
PERMISSIONS.IOS.LOCATION_WHEN_IN_USE;
PERMISSIONS.IOS.MEDIA_LIBRARY;
PERMISSIONS.IOS.MICROPHONE;
PERMISSIONS.IOS.MOTION;
PERMISSIONS.IOS.PHOTO_LIBRARY;
PERMISSIONS.IOS.REMINDERS;
PERMISSIONS.IOS.SIRI;
PERMISSIONS.IOS.SPEECH_RECOGNITION;
PERMISSIONS.IOS.STOREKIT;

export default class Permission extends Component {

    componentDidMount() {

        check(PERMISSIONS.ANDROID.CAMERA)
            .then((result) => {
                switch (result) {
                    case RESULTS.UNAVAILABLE:
                        console.log(
                            'This feature is not available (on this device / in this context)',
                        );
                        break;
                    case RESULTS.DENIED:
                        console.log(
                            'The permission has not been requested / is denied but requestable',
                        );
                        break;
                    case RESULTS.GRANTED:
                        console.log('The permission is granted');
                        break;
                    case RESULTS.BLOCKED:
                        console.log('The permission is denied and not requestable anymore');
                        break;
                }
            })
            .catch((error) => {
                // …
            });


        request(PERMISSIONS.IOS.CAMERA).then((result) => {
            console.log('Result', result),
                openSettings().catch(() => console.warn('cannot open settings'));
        });

        request(PERMISSIONS.ANDROID.CAMERA).then((result) => {
            console.log('Result', result)
            openSettings().catch(() => console.warn('cannot open settings'));
        });

        // checkMultiple([PERMISSIONS.ANDROID.CAMERA, PERMISSIONS.ANDROID.READ_EXTERNAL_STORAGE]).then(
        //     (statuses) => {
        //         console.log('Camera', statuses[PERMISSIONS.ANDROID.CAMERA]);
        //         console.log('FaceID', statuses[PERMISSIONS.ANDROID.READ_EXTERNAL_STORAGE]);
        //     },
        // );


    }

    render() {
        return (
            <Text></Text>
        )
    }


}
