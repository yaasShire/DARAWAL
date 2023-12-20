import { StatusBar } from 'expo-status-bar';
import { Provider as PaperProfider } from 'react-native-paper';
import { StyleSheet, Text, View, Platform, Button } from 'react-native';
import { Provider } from 'react-redux';
import { store } from './src/redux/store';
import RootStackNavigation from './src/navigation/rootStackNavigation';
import { useEffect, useState, useRef } from 'react';
import * as Location from 'expo-location';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Alert } from 'react-native';
import { postData } from './src/api/functional/postData';
import { ToastAndroid } from 'react-native';
import ToastBar from './src/components/molecules/toastBar';
import SplashAppScreen from './splashAppScreen';


export default function App() {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const [error, setError] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  const [loading, setLoading] = useState(true)


  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);
  if (loading) {
    return <SplashAppScreen />;
  }
  return (
    <Provider store={store}>

      <PaperProfider>
        <RootStackNavigation />
      </PaperProfider>
    </Provider>
  );
}

