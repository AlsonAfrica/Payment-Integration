import React from 'react';
import { ScrollView } from 'react-native';
import { View, Text, Image, Button, StyleSheet, StatusBar } from 'react-native';
import Payment from './payment';
import { useState } from 'react';

const App = () => {

  const [showPaystack, setShowPaystack] = useState(false);


  return (
    <ScrollView>
    <View style={styles.container}>
      <StatusBar style="auto" />
        <View style={styles.headingText}>
          <Text style={{textAlign:"center", fontWeight:"bold", fontSize:20}}>Black Friday Land Sale</Text>
        </View>
      {/* Card 1 */}
      <View style={styles.card}>
        <Image source={require("./assets/land2.jpg")} style={styles.cardImage} />
        <Text style={styles.cardTitle}>Beautiful Land for Sale</Text>
        <Text style={styles.cardDescription}>A peaceful and perfect land for a liberating future</Text>
        <Text style={styles.cardPrice}>Price: R5.000</Text>
        <Text style={styles.cardLocation}>Location: Basonia</Text>
        <Button title="Make Payment" onPress={()=>setShowPaystack(true)} />
      </View>

      {/* Card 2 */}
      <View style={styles.card}>
        <Image source={require("./assets/land.jpg")} style={styles.cardImage} />
        <Text style={styles.cardTitle}>Luxury Villa</Text>
        <Text style={styles.cardDescription}>A luxurious villa located in the heart of Sandton.</Text>
        <Text style={styles.cardPrice}>Price: R10,000</Text>
        <Text style={styles.cardLocation}>Location: Sandton</Text>
        <Button title="Make Payment" onPress={() => setShowPaystack(true)} />
      </View>
    </View>

    {showPaystack && (
      <Payment
      showPaystack={showPaystack}
      setShowPaystack={setShowPaystack}
      />
    )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 20,
    backgroundColor: '#f8f8f8',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    marginBottom: 20,
    padding: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 10, // Adds shadow on Android
  },
  cardImage: {
    width: '100%',
    height: 200,
    borderRadius: 10,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
  },
  cardDescription: {
    fontSize: 14,
    color: '#555',
    marginTop: 5,
  },
  cardPrice: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 10,
  },
  cardLocation: {
    fontSize: 14,
    color: '#777',
    marginTop: 5,
    marginBottom:10
  },
  headingText:{
    marginBottom:10,
    alignItems:"center",
    justifyContent:"center"
  }
});

export default App;
