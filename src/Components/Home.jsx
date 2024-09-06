// Components/Home.jsx
import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

function Home() {
  const navigation = useNavigation();

  const navigateToUserAuth = () => {
    navigation.navigate('UserAuth');
  };

  const navigateToDriverAuth = () => {
    navigation.navigate('DriverAuth');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to Gaadi App</Text>
      <View style={styles.buttonContainer}>
        <Button title="User" onPress={navigateToUserAuth} />
        <Button title="Driver" onPress={navigateToDriverAuth} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 32,
    marginBottom: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '60%',
  },
});

export default Home;
