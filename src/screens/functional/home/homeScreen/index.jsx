import { View, Text, StatusBar, Platform, SafeAreaView, } from 'react-native'
import React, { useEffect, useState } from 'react'
import styles from './style'
import Header from '../../../../components/molecules/header';
import { Button, Switch } from 'react-native-paper';
import MapView, { Marker } from 'react-native-maps';
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
    const [origin, setOrigin] = useState({
        latitude: 37.78825,
        longitude: -122.4324,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
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
    const getCurrentLocation = async () => {
        const location = JSON.parse(await AsyncStorage.getItem('current_location'))
        setOrigin({
            latitude: location?.latitude,
            longitude: location?.longitude,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
        })
    }
    useEffect(() => {
        getFirstOrder()
        setSuccessAnimation(false)
        setCancelAnimation(false)
        getCurrentLocation()
    }, [])
    const region = {
        latitude: 37.78825,
        longitude: -122.4324,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
    }
    return (
        <View style={styles.container}>
            <SafeAreaView />
            <StatusBarComponent />
            <MapView region={origin} mapType='satellite' style={styles.map} customMapStyle={mapCustomStyle} >
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