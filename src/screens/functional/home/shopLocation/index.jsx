import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';
import { FAB } from 'react-native-paper';

const ORIGIN = { latitude: 37.78825, longitude: -122.4324 };
const DESTINATION = { latitude: 37.7749, longitude: -122.4194 };
const API_KEY = 'AIzaSyCsJ_JBbomxUgMeWecFqNcOEk2g60NfKow';

const ShopLocation = () => {
    const [region, setRegion] = useState({
        latitude: ORIGIN.latitude,
        longitude: ORIGIN.longitude,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
    });

    const handleStartTrip = () => {
        // TODO: Start the trip
    };

    return (
        <View style={styles.container}>
            <MapView style={styles.map} region={region}>
                <Marker coordinate={ORIGIN} pinColor="blue" />
                <Marker coordinate={DESTINATION} pinColor="red" />
                <MapViewDirections
                    origin={ORIGIN}
                    destination={DESTINATION}
                    apikey={API_KEY}
                    strokeWidth={3}
                    strokeColor="hotpink"
                />
            </MapView>
            <FAB
                style={styles.fab}
                icon="car"
                onPress={handleStartTrip}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    map: {
        flex: 1,
    },
    fab: {
        position: 'absolute',
        margin: 16,
        right: 0,
        bottom: 0,
    },
});

export default ShopLocation;