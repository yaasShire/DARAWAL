import { View, Text, StatusBar, Platform, SafeAreaView, } from 'react-native'
import React, { useEffect, useState, useRef } from 'react'
import styles from './style'
import Header from '../../../../components/molecules/header';
import { Button, Switch } from 'react-native-paper';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import StatusCard from '../../../../components/molecules/statusCard';
import OrderCard from '../../../../components/molecules/orderCard';
import { Dialog, Portal } from 'react-native-paper';
import { orders } from '../../../../data';
import SuccessAnimation from '../../../../assets/animations/success';
import CancelAnimation from '../../../../assets/animations/cancel';
import OrderModal from '../components/dialog';
import Status from './components/status';
import { mapCustomStyle } from '../../../../utils';
import { fetchData } from '../../../../api/functional/fetchData';
import AsyncStorage from '@react-native-async-storage/async-storage';
import StatusBarComponent from '../../../../components/atoms/statusBar';
import Constants from 'expo-constants';
import { postData } from '../../../../api/functional/postData';

// send notifications




//send notificaations ends here






const Home = ({ navigation }) => {
    const [isSwitchOn, setIsSwitchOn] = useState(false)
    const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn)
    const [visible, setVisible] = React.useState(false)
    const [alertTitle, setAlertTitle] = useState('')
    const [newOrderExist, setnewOrderExist] = useState(false)
    const [orderData, setOrderData] = useState({})
    const [successAnimation, setSuccessAnimation] = useState(false)
    const [cancelAnimation, setCancelAnimation] = useState(false)
    const [orders, setOrders] = useState([])
    const [error, setError] = useState(null)
    const [isLoading, setIsLoading] = useState(true)
    const [expoPushToken, setExpoPushToken] = useState('');
    const [notification, setNotification] = useState(false);
    const notificationListener = useRef();
    const responseListener = useRef();
    const [location, setLocation] = useState({
        latitude: 2.046934,
        longitude: 45.318161,
    });
    const [errorMsg, setErrorMsg] = useState(null);
    const [origin, setOrigin] = useState({
        latitude: 2.046934,
        longitude: 45.318161,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421
    })
    const hideDialog = () => setVisible(false)

    const getFirstOrder = async () => {
        const { data } = await fetchData('agent/orders/unassigned', setError, setIsLoading)
        // console.log(data)
        if (data?.data?.length > 0) {
            setOrders(data?.data)
            setnewOrderExist(true)
        }
    }

    useEffect(() => {
        (async () => {

            let { status } = await Location.requestForegroundPermissionsAsync();
            if (status !== 'granted') {
                setErrorMsg('Permission to access location was denied');
                return;
            }

            let location = await Location.getCurrentPositionAsync({});
            setLocation(location);
            setOrigin({
                latitude: location?.coords.latitude,
                longitude: location?.coords.longitude,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
            })
        })();
    }, []);

    useEffect(() => {
        getFirstOrder()
        setSuccessAnimation(false)
        setCancelAnimation(false)
    }, [])
    const region = {
        latitude: 2.046934,
        longitude: 45.318161,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421
    }






    return (
        <View style={styles.container}>
            <SafeAreaView />
            <StatusBarComponent />
            <MapView region={origin} provider={PROVIDER_GOOGLE} style={styles.map}  >
                <Marker
                    coordinate={origin}
                    title={'Location'}
                    description={'Current Location'}
                />
            </MapView>
            <Header bellIconColor="#fff" navigation={navigation} profile={true} bellIcon={true} bgColor='transparent' />
            <Status isSwitchOn={isSwitchOn} onToggleSwitch={onToggleSwitch} />
            <OrderModal setnewOrderExist={setnewOrderExist} setSuccessAnimation={setSuccessAnimation} setCancelAnimation={setCancelAnimation} alertTitle={alertTitle} orderData={orderData} navigation={navigation} visible={visible} setVisible={setVisible} />
            <View style={styles.statusCardWrapper}>
                {/* {
                    newOrderExist ?
                        <OrderCard setOrderData={setOrderData} navigation={navigation} order={orders[0]} setVisible={setVisible} hideDialog={hideDialog} setAlertTitle={setAlertTitle} />
                        : null
                } */}
            </View>
            {successAnimation && (
                <SuccessAnimation />

            )}
            {
                cancelAnimation && (

                    <CancelAnimation />
                )
            }
        </View>
    )
}

export default Home