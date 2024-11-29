import React, { useState } from 'react';
import { View, Button, Alert } from 'react-native';
import { Paystack } from 'react-native-paystack-webview';

export const handlePayment = () => {
    setShowPaystack(true); 
  };

function Payment({showPaystack, setShowPaystack}) {

  

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Button
        title="Pay with Paystack"
        onPress={handlePayment} 
      />
      
      {showPaystack && (
        <Paystack
          paystackKey="pk_test_f73c293f14c859435bc6fe2aa081938ac5326239"
          amount={'5000.00'} 
          billingEmail="paystackwebview@something.com"
          currency='ZAR'
          activityIndicatorColor="green"
          onCancel={(e) => {
            Alert.alert('Payment Canceled', 'You have canceled the payment process.');
            setShowPaystack(false); 
          }}
          onSuccess={(res) => {
            Alert.alert('Payment Successful', `Transaction ID: ${res.transactionRef.reference}`);
            setShowPaystack(false); 
          }}
          autoStart={true}
        />
      )}
    </View>
  );
}

export default Payment;