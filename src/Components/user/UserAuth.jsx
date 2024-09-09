// Components/user/UserAuth.jsx
import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert, StyleSheet, TouchableOpacity } from 'react-native';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';

function UserAuth() {
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
    const endpoint = isLogin ? '/api_user/logIn' : '/api_user/signUp';
    const payload = isLogin
      ? { user_email: email, user_password: password }
      : { user_name: name, user_email: email, user_phone: phone, user_password: password };

    axios
      .post(`http://192.168.1.71:3000${endpoint}`, payload)  // Ensure IP matches backend server
      .then((response) => {
        Alert.alert(response.data.message);
        if (isLogin && response.data.success) {
          navigation.navigate('UserPage'); // Navigate to user page on success
        }
      })
      .catch((error) => {
        Alert.alert('Error', 'Login/Signup failed');
      });
  };

  return (
    <View style={styles.container}>
      <View style={styles.authBox}>
        <Text style={styles.title}>{isLogin ? 'Welcome Back!' : 'Create Account'}</Text>
        {!isLogin && (
          <TextInput
            style={styles.input}
            placeholder="Full Name"
            placeholderTextColor="#9A9A9A"
            value={name}
            onChangeText={setName}
          />
        )}
        <TextInput
          style={styles.input}
          placeholder="Email Address"
          placeholderTextColor="#9A9A9A"
          value={email}
          onChangeText={setEmail}
        />
        {!isLogin && (
          <TextInput
            style={styles.input}
            placeholder="Phone Number"
            placeholderTextColor="#9A9A9A"
            value={phone}
            onChangeText={setPhone}
          />
        )}
        <TextInput
          style={styles.input}
          placeholder="Password"
          placeholderTextColor="#9A9A9A"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />
        <TouchableOpacity style={styles.button} onPress={handleSubmit}>
          <Text style={styles.buttonText}>{isLogin ? 'Login' : 'Signup'}</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={toggleAuthMode}>
          <Text style={styles.toggleText}>
            {isLogin ? "Don't have an account? Sign Up" : 'Already have an account? Login'}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1E1E1E', // Dark background to match the look
    justifyContent: 'center',
    paddingHorizontal: 30,
  },
  authBox: {
    backgroundColor: '#2D2D2D', // Dark translucent background
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
    marginBottom: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  toggleText: {
    color: '#007AFF',
    textAlign: 'center',
    marginTop: 10,
    fontSize: 16,
  },
});

export default UserAuth;
