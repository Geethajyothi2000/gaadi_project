import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { Tab, TabView } from 'react-native-elements';

function DriverPage() {
  const [index, setIndex] = useState(0);
  const [isOnline, setIsOnline] = useState(false);

  const handleOnlineStatus = () => {
    setIsOnline(!isOnline);
  };

  return (
    <View style={styles.container}>
      {/* Tab Bar */}
      <Tab
        value={index}
        onChange={(e) => setIndex(e)}
        indicatorStyle={styles.indicatorStyle}
      >
        <Tab.Item title="Home" icon={{ name: 'home', type: 'font-awesome' }} />
        <Tab.Item title="Earnings" icon={{ name: 'money', type: 'font-awesome' }} />
        <Tab.Item title="Ratings" icon={{ name: 'star', type: 'font-awesome' }} />
        <Tab.Item title="Account" icon={{ name: 'user', type: 'font-awesome' }} />
      </Tab>

      {/* TabView Content */}
      <TabView value={index} onChange={setIndex} animationType="spring">
        {/* Map Tab */}
        <TabView.Item style={styles.tabViewItem}>
          <View style={{ flex: 1 }}>
            <MapView
              style={styles.map}
              initialRegion={{
                latitude: 12.72250505165482,
                longitude: 75.51092589635077,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
              }}
            >
              <Marker coordinate={{ latitude: 12.72250505165482, longitude: 75.51092589635077 }} />
            </MapView>
            {/* Button to switch online/offline */}
            <View style={styles.buttonContainer}>
              <Button
                title={isOnline ? 'Now Offline' : 'Now Online'}
                onPress={handleOnlineStatus}
                color={isOnline ? 'red' : 'green'}
              />
            </View>
          </View>
        </TabView.Item>

        {/* Earnings Tab */}
        <TabView.Item style={styles.tabViewItem}>
          <Text>Earnings Section</Text>
        </TabView.Item>

        {/* Ratings Tab */}
        <TabView.Item style={styles.tabViewItem}>
          <Text>Ratings Section</Text>
        </TabView.Item>

        {/* Account Tab */}
        <TabView.Item style={styles.tabViewItem}>
          <Text>Account Section</Text>
          <Button title="Sign Out" onPress={() => console.log('Signed out')} />
        </TabView.Item>
      </TabView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1c1c1c', // Similar dark background as in the image
  },
  map: {
    width: '100%',
    height: '100%', // Make the map cover the entire available area
  },
  buttonContainer: {
    position: 'absolute',
    bottom: 20, // Place the button near the bottom
    alignSelf: 'center', // Center the button horizontally
    backgroundColor: '#ccc', // Light background for the button (similar to the image)
    borderRadius: 20,
    padding: 10,
    elevation: 5, // Add shadow for better visual effect
  },
  tabViewItem: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  indicatorStyle: {
    backgroundColor: 'white',
    height: 3,
  },
});

export default DriverPage;
