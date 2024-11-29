import React, { useState } from 'react';
import { View, Button, Alert } from 'react-native';
import { Paystack } from 'react-native-paystack-webview';

function App() {
  const [showPaystack, setShowPaystack] = useState(false);

  const handlePayment = () => {
    setShowPaystack(true); // Trigger Paystack payment when the button is pressed
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Button
        title="Pay with Paystack"
        onPress={handlePayment} // Trigger payment process on button press
      />
      
      {showPaystack && (
        <Paystack
          paystackKey="pk_test_f73c293f14c859435bc6fe2aa081938ac5326239"
          amount={'25000.00'} // Amount in kobo (25000 = 250.00 NGN)
          billingEmail="paystackwebview@something.com"
          currency='ZAR'
          activityIndicatorColor="green"
          onCancel={(e) => {
            Alert.alert('Payment Canceled', 'You have canceled the payment process.');
            setShowPaystack(false); // Hide Paystack Webview on cancel
          }}
          onSuccess={(res) => {
            Alert.alert('Payment Successful', `Transaction ID: ${res.transaction.reference}`);
            setShowPaystack(false); // Hide Paystack Webview on success
          }}
          autoStart={true}
        />
      )}
    </View>
  );
}

export default App;
