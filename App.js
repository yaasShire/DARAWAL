import { StatusBar } from 'expo-status-bar';
import { Provider as PaperProfider } from 'react-native-paper';
import { Provider } from 'react-redux';
import { store } from './src/redux/store';
import RootStackNavigation from './src/navigation/rootStackNavigation';
import { useEffect, useState } from 'react';
import * as Location from 'expo-location';
import AsyncStorage from '@react-native-async-storage/async-storage';
import messaging from '@react-native-firebase/messaging';
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


  async function requestUserPermission() {
    const authStatus = await messaging().requestPermission();
    const enabled =
      authStatus === messaging?.Status?.AUTHORIZED ||
      authStatus === messaging?.AuthorizationStatus?.PROVISIONAL;

    if (enabled) {
      console.log('Authorization status:', authStatus);
    }
  }

  useEffect(() => {
    if (requestUserPermission()) {
      messaging().getToken().then(async (token) => {
        const formData = new FormData()
        formData.append('fcm', token)
        const data = await postData('agent/user/updateFCM', formData, setError, setIsLoading)
      });
    } else {
      alert("notification permission declined")
    }

    messaging().onNotificationOpenedApp(remoteMessage => {
      console.log(
        'Notification caused app to open from background state:',
        remoteMessage.notification,
      );
      console.log('====================================');
      console.log(remoteMessage);
      console.log('====================================');
      ToastAndroid.show('Request sent successfully!', ToastAndroid.TOP);
    });

    // Check whether an initial notification is available
    messaging()
      .getInitialNotification()
      .then(remoteMessage => {
        if (remoteMessage) {
          console.log(
            'Notification caused app to open from quit state:',
            remoteMessage.notification,
          );
        }
      });

    messaging().setBackgroundMessageHandler(async remoteMessage => {
      console.log('Message handled in the background!', remoteMessage);
    });

    const unsubscribe = messaging().onMessage(async remoteMessage => {
      console.log(remoteMessage)
      Alert.alert(remoteMessage.data.title, remoteMessage.data.message);
    });
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
    return unsubscribe;
  }, []);


  useEffect(() => {
    if (requestUserPermission()) {
      messaging().getToken().then(async (token) => {
        const formData = new FormData()
        formData.append('fcm', token)
        const data = await postData('seller/user/updateFCM', formData, setError, setIsLoading)
      });
    } else {
      alert("notification permission declined")
    }

    messaging().onNotificationOpenedApp(remoteMessage => {
      console.log(
        'Notification caused app to open from background state:',
        remoteMessage.notification, 'yes sir'
      );
    });

    // Check whether an initial notification is available
    messaging()
      .getInitialNotification()
      .then(remoteMessage => {
        if (remoteMessage) {
          console.log(
            'Notification caused app to open from quit state:',
            remoteMessage.notification,
          );
        }
      });

    messaging().setBackgroundMessageHandler(async remoteMessage => {
      console.log('Message handled in the background!', remoteMessage);
    });


    const unsubscribe = messaging().onMessage(async remoteMessage => {
      Alert.alert(remoteMessage.data.title, remoteMessage.data.message);
      console.log(remoteMessage)
    });

    return unsubscribe;
  }, []);

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

