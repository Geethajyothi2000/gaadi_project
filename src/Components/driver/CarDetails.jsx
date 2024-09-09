import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert, StyleSheet } from 'react-native';
import axios from 'axios';
import { useRoute, useNavigation } from '@react-navigation/native';

function CarDetails() {
  const [carColor, setCarColor] = useState('');
  const [carNumber, setCarNumber] = useState('');
  const [carModel, setCarModel] = useState('');
  const [carType, setCarType] = useState('');
  const route = useRoute();
  const navigation = useNavigation();

  const driverId = route.params?.driverId;

  const handleSubmit = () => {
    axios
      .post('http://192.168.1.71:3000/api_driver/car_details', {
        driver_id: driverId,
        car_color: carColor,
        car_number: carNumber,
        car_model: carModel,
        car_type: carType,
      })
      .then((response) => {
        Alert.alert(response.data.message);
        if (response.data.success) {
          navigation.navigate('DriverAuth'); // Navigate back to login
        }
      })
      .catch((error) => {
        Alert.alert('Error', 'Car details submission failed');
      });
  };

  return (
    <View style={styles.container}>
      <View style={styles.authBox}>
        <Text style={styles.title}>Car Details</Text>
        <TextInput
          style={styles.input}
          placeholder="Car Color"
          placeholderTextColor="#9A9A9A"
          value={carColor}
          onChangeText={setCarColor}
        />
        <TextInput
          style={styles.input}
          placeholder="Car Number"
          placeholderTextColor="#9A9A9A"
          value={carNumber}
          onChangeText={setCarNumber}
        />
        <TextInput
          style={styles.input}
          placeholder="Car Model"
          placeholderTextColor="#9A9A9A"
          value={carModel}
          onChangeText={setCarModel}
        />
        <TextInput
          style={styles.input}
          placeholder="Car Type"
          placeholderTextColor="#9A9A9A"
          value={carType}
          onChangeText={setCarType}
        />
        <TouchableOpacity style={styles.button} onPress={handleSubmit}>
          <Text style={styles.buttonText}>Submit</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1E1E1E', // Dark background
    justifyContent: 'center',
    paddingHorizontal: 30,
  },
  authBox: {
    backgroundColor: '#2D2D2D', // Dark box to highlight the form
    borderRadius: 15,
    padding: 20,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 10,
    elevation: 10,
  },
  title: {
    fontSize: 28,
    color: '#fff',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    height: 50,
    backgroundColor: '#3C3C3C',
    borderRadius: 10,
    paddingHorizontal: 15,
    color: '#fff',
    marginBottom: 15,
    fontSize: 16,
  },
  button: {
    height: 50,
    backgroundColor: '#007AFF',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10, // Added margin for spacing
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default CarDetails;
