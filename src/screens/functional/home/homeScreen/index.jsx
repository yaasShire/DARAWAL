import { View, Text, StatusBar, Platform, SafeAreaView, } from 'react-native'
import React, { useEffect, useState } from 'react'
import styles from './style'
import Header from '../../../../components/molecules/header';
import { Button, Switch } from 'react-native-paper';
import MapView from 'react-native-maps';
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
        getFirstOrder()
        setSuccessAnimation(false)
        setCancelAnimation(false)
    }, [])
    console.log(orders)
    return (
        <View style={styles.container}>
            <SafeAreaView />
            <StatusBar barStyle={'light-content'} />
            <MapView mapType='satellite' style={styles.map} customMapStyle={mapCustomStyle} />
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