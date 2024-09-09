// Components/Home.jsx
import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Icon } from 'react-native-elements';

function Home() {
  const navigation = useNavigation();
  const [selectedTab, setSelectedTab] = useState('user'); // To keep track of the selected tab

  // Handlers to navigate to different screens
  const navigateToUserAuth = () => {
    navigation.navigate('UserAuth');
  };

  const navigateToDriverAuth = () => {
    navigation.navigate('DriverAuth');
  };

  return (
    <View style={styles.container}>
      {/* Header with Rides (User) and Delivery (Driver) options */}
      <View style={styles.headerContainer}>
        <TouchableOpacity
          style={[
            styles.tabButton,
            selectedTab === 'user' && styles.selectedTab,
          ]}
          onPress={() => {
            setSelectedTab('user');
            navigateToUserAuth();
          }}
        >
          <Icon
            name="car"
            type="font-awesome"
            size={20}
            color={selectedTab === 'user' ? 'black' : 'gray'}
          />
          <Text
            style={[
              styles.tabText,
              selectedTab === 'user' && styles.selectedTabText,
            ]}
          >
            User
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.tabButton,
            selectedTab === 'driver' && styles.selectedTab,
          ]}
          onPress={() => {
            setSelectedTab('driver');
            navigateToDriverAuth();
          }}
        >
          <Icon
            name="truck"
            type="font-awesome"
            size={20}
            color={selectedTab === 'driver' ? 'black' : 'gray'}
          />
          <Text
            style={[
              styles.tabText,
              selectedTab === 'driver' && styles.selectedTabText,
            ]}
          >
            Driver
          </Text>
        </TouchableOpacity>
      </View>

      {/* Welcome Text */}
      <View style={styles.welcomeContainer}>
        <Text style={styles.title}>Welcome to Gaadi App</Text>
        
      </View>

      {/* Instruction Text */}
     
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    justifyContent: 'center',
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#f8f8f8',
    borderRadius: 25,
    padding: 10,
    marginHorizontal: 20,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
  },
  tabButton: {
    flex: 1,
    alignItems: 'center',
    padding: 10,
    borderRadius: 25,
  },
  selectedTab: {
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 3,
  },
  tabText: {
    marginTop: 5,
    fontSize: 14,
    color: 'gray',
  },
  selectedTabText: {
    color: 'black',
    fontWeight: 'bold',
  },
  welcomeContainer: {
    alignItems: 'center',
    marginVertical: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    marginTop: 5,
  },
  instructionContainer: {
    alignItems: 'center',
    marginTop: 20,
  },
  instructionText: {
    fontSize: 16,
    color: '#666',
  },
});

export default Home;
