import React from 'react'
import { SafeAreaView, Dimensions, View, Text, TextInput, TouchableOpacity, } from 'react-native'
import { ButtonGroup } from 'react-native-elements'
import Icon from 'react-native-vector-icons/FontAwesome';

const { width, height } = Dimensions.get('window');
const isIphone = Platform.OS === "ios"
export const iPhoneX = (isIphone && height === 812) || (isIphone && height === 896);
const screen_unused_height = isIphone ? iPhoneX ? 78 : 28 : 24;
const screen_height = height - screen_unused_height;
const ratioCount = screen_height / 667;
const countPixelRatio = (size) => size * ratioCount;

class Login extends React.PureComponent {
    render() {
        return (
            <SafeAreaView style={{ backgroundColor: 'lightgrey', flex: 1 }}>
                <View style={{ alignItems: 'center' }}>
                    <View>
                        <Text style={{ fontSize: countPixelRatio(35), color: 'black', fontWeight: '600', }}>SkillMaster</Text>
                    </View>
                    <View>
                        <TextInput
                            style={{
                                width: width - countPixelRatio(100),
                                height: countPixelRatio(35),
                                backgroundColor: 'white',
                                paddingLeft: 15
                            }}
                            placeholderTextColor={'grey'}
                            placeholder={'email'}
                        />
                        <TextInput
                            style={{
                                marginTop: countPixelRatio(15),
                                width: width - countPixelRatio(100),
                                height: countPixelRatio(35),
                                backgroundColor: 'white',
                                paddingLeft: 15
                            }}
                            secureTextEntry={true}
                            placeholderTextColor={'grey'}
                            placeholder={'password'}
                        />
                        <TouchableOpacity style={{
                            marginTop: countPixelRatio(15),
                            width: width / 3,
                            height: countPixelRatio(35),
                            backgroundColor: '#549bf7',
                            alignSelf: 'center',
                            justifyContent: 'center',
                            alignItems: 'center',
                            borderRadius: 5
                        }}>
                            <Text style={{ fontSize: 15, color: 'white' }}>Sign In</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{
                            marginTop: countPixelRatio(10),
                            width: width / 3,
                            alignSelf: 'center',
                            justifyContent: 'center',
                            alignItems: 'center',
                            borderRadius: 5
                        }}>
                            <Text style={{ fontSize: countPixelRatio(13), color: '#3283ed' }}>create account</Text>
                        </TouchableOpacity>
                    </View>
                    <View>
                        <Icon.Button
                            name="facebook"
                            backgroundColor="#3b5998"
                            onPress={this.loginWithFacebook}
                        >
                            Login with Facebook
        `               </Icon.Button>
                    </View>
                </View>
            </SafeAreaView>
        )
    }
}

export default Login;