import { StatusBar } from 'expo-status-bar';
import { Provider as PaperProfider } from 'react-native-paper';
import { Provider } from 'react-redux';
import { store } from './src/redux/store';
import RootStackNavigation from './src/navigation/rootStackNavigation';
import { useEffect, useState } from 'react';
import * as Location from 'expo-location';
import AsyncStorage from '@react-native-async-storage/async-storage';
export default function App() {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  useEffect(() => {
    (async () => {

      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      await AsyncStorage.setItem("current_location", JSON.stringify({
        latitude: location.coords.latitude,
        longitude: location.coords.longitude
      }))
      setLocation(location);
    })();
  }, []);

  return (
    <Provider store={store}>
      <PaperProfider>
        <RootStackNavigation />
      </PaperProfider>
    </Provider>
  );
}

