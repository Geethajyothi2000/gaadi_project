// Components/driver/DriverAuth.jsx
import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert, StyleSheet, TouchableOpacity } from 'react-native';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';

function DriverAuth() {
  const [isLogin, setIsLogin] = useState(true);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();

  const toggleAuthMode = () => {
    setIsLogin(!isLogin);
  };

  const handleSubmit = () => {
    const endpoint = isLogin ? '/api_driver/logIn' : '/api_driver/signUp';
    const payload = isLogin ? { driver_email: email, driver_password: password } : { driver_name: name, driver_email: email, driver_phone: phone, driver_password: password };

    axios.post(`http://192.168.1.71:3000${endpoint}`, payload)
      .then(response => {
        Alert.alert(response.data.message);
        if (isLogin && response.data.success) {
          navigation.navigate('DriverPage'); // Navigate to driver page on success
        }
      })
      .catch(error => {
        Alert.alert('Error', 'Login/Signup failed');
      });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{isLogin ? 'Driver Login' : 'Driver Signup'}</Text>
      {!isLogin && (
        <TextInput
          style={styles.input}
          placeholder="Full Name"
          value={name}
          onChangeText={setName}
        />
      )}
      <TextInput
        style={styles.input}
        placeholder="Email Address"
        value={email}
        onChangeText={setEmail}
      />
      {!isLogin && (
        <TextInput
          style={styles.input}
          placeholder="Phone Number"
          value={phone}
          onChangeText={setPhone}
        />
      )}
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <Button title={isLogin ? 'Login' : 'Signup'} onPress={handleSubmit} />
      <TouchableOpacity onPress={toggleAuthMode}>
        <Text style={styles.toggleText}>
          {isLogin ? "Don't have an account? Signup" : 'Already have an account? Login'}
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 12,
    paddingLeft: 10,
  },
  toggleText: {
    color: 'blue',
    textAlign: 'center',
    marginTop: 10,
  },
});

export default DriverAuth;
