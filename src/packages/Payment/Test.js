import React, { Component } from 'react';
import { View, Text, Vibration, SafeAreaView } from 'react-native';
import { Button } from './Button';
import BraintreeDropIn from 'react-native-braintree-dropin-ui';

export default class Test extends Component {

  onPress() {
    BraintreeDropIn.show({
      clientToken: 'token',
      merchantIdentifier: 'kxptnxp278zj6h7p',
      googlePayMerchantId: 'googlePayMerchantId',
      countryCode: 'US',    //apple pay setting
      currencyCode: 'USD',   //apple pay setting
      merchantName: 'Your Merchant Name for Apple Pay',
      orderTotal: 'Total Price',
      googlePay: true,
      applePay: true,
      vaultManager: true,
      darkTheme: true,
    })
      .then(result => console.log(result))
      .catch((error) => {
        if (error.code === 'USER_CANCELLATION') {
          alert("")
          // update your UI to handle cancellation
        } else {
          // update your UI to handle other errors
        }
      });
  }

  render() {
    return (
      <SafeAreaView style={{ alignItems: 'center', flex: 1 }}>
        <Button title='Submit' onPress={() => { this.onPress() }} />
      </SafeAreaView>
    );
  }
}
