
import { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { usePushNotifications } from './src/service/notificationservice';

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './src/Components/Home';
import DriverAuth from './src/Components/driver/DriverAuth';
import UserAuth from './src/Components/user/UserAuth';
import UserPage from './src/Components/user/UserPage';
import DriverPage from './src/Components/driver/DriverPage';



const Stack = createStackNavigator();


export default function App() {
  const {expoPushToken ,notification} = usePushNotifications([])
   
const [expoToken, setExpoToken] = useState("no token");
useEffect(() => {
  if (expoPushToken) {
    setExpoToken(expoPushToken.data); // Ensure this is the correct path.
  }
}, [expoPushToken]);
console.log(expoToken)
console.log(notification)


  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="DriverAuth" component={DriverAuth} />
        <Stack.Screen name="UserAuth" component={UserAuth} />
        <Stack.Screen name="UserPage" component={UserPage} />
        <Stack.Screen name="DriverPage" component={DriverPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
