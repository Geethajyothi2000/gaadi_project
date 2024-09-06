import React, { useState, useRef } from 'react';
import { View, TextInput, Text, StyleSheet, Button, Alert } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { Icon, Overlay } from 'react-native-elements';

function UserPage() {
  const [mapRegion, setMapRegion] = useState({
    latitude: 12.72250505165482,
    longitude: 75.51092589635077,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });
  const [isDrawerVisible, setDrawerVisible] = useState(false);
  const [directions, setDirections] = useState(null);
  const originRef = useRef(null);
  const destinationRef = useRef(null);

  const handleCalculateRoute = () => {
    const origin = originRef.current;
    const destination = destinationRef.current;
    if (origin && destination) {
      Alert.alert('Route Calculation', `Calculating route from ${origin} to ${destination}`);
      // Implement the route calculation here
    }
  };

  return (
    <View style={styles.container}>
      <Icon
        name="menu"
        size={30}
        onPress={() => setDrawerVisible(true)}
        containerStyle={{ position: 'absolute', top: 10, left: 10, zIndex: 1000 }}
      />
      
      {/* Using default parameter for isVisible */}
      <Overlay isVisible={isDrawerVisible} onBackdropPress={() => setDrawerVisible(false)}>
        <View style={styles.drawer}>
          <Text style={styles.drawerText}>User Name</Text>
          <Text style={styles.drawerText}>user@example.com</Text>
          <Button title="History" onPress={() => Alert.alert('History')} />
          <Button title="Profile" onPress={() => Alert.alert('Profile')} />
          <Button title="About" onPress={() => Alert.alert('About')} />
          <Button title="Sign Out" onPress={() => Alert.alert('Signed Out')} />
        </View>
      </Overlay>

      <View style={styles.routeBox}>
        <TextInput
          ref={originRef}
          placeholder="Origin"
          style={styles.input}
        />
        <TextInput
          ref={destinationRef}
          placeholder="Destination"
          style={styles.input}
        />
        <Button title="Calculate Route" onPress={handleCalculateRoute} />
      </View>

      <MapView
        style={styles.map}
        region={mapRegion}
        apiKey=""
      >
        {directions && <Marker coordinate={directions} />}
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: '100%',
    height: '80%',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 10,
  },
  routeBox: {
    position: 'absolute',
    top: 20,
    right: 10,
    left: 10,
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 5,
    zIndex: 1000,
  },
  drawer: {
    padding: 20,
    width: 200,
  },
  drawerText: {
    fontSize: 18,
    marginBottom: 10,
  },
});

export default UserPage;
