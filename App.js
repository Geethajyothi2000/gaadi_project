import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { usePushNotifications } from './src/service/notificationservice';

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
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
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
