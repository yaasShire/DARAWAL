import { View, Text, StatusBar, Platform, FlatList, SafeAreaView } from 'react-native'
import React, { useState, useEffect } from 'react'
import styles from './style'
import Header from '../../../../components/molecules/header'
import { Button, Dialog, Portal, SegmentedButtons } from 'react-native-paper';
import OrderCard from '../../../../components/molecules/orderCard'
import { orders } from '../../../../data'
import RBSheet from "react-native-raw-bottom-sheet";
import { colors } from '../../../../constants/globalStyles'
import { fetchData } from '../../../../api/functional/fetchData'
import OnGoing from './components/onGoing';
import CompletedOrders from './components/completed';
import AppLoader from '../../../../components/atoms/appLoader';
const Delivery = ({ navigation, route }) => {
    const [value, setValue] = useState(route?.params?.activeTab ? route?.params?.activeTab : 'Pending');
    const [targetOrders, setTargetOrders] = useState([])
    const [error, setError] = useState(null)
    const [isLoading, setIsLoading] = useState(true)
    const [targetTab, settargetTab] = useState("On Going")

    const OrdersMap = new Map()
    OrdersMap.set('On Going', <OnGoing navigation={navigation} setIsLoading={setIsLoading} error={error} setError={setError} isLoading={isLoading} />)
    OrdersMap.set('Completed', <CompletedOrders navigation={navigation} setIsLoading={setIsLoading} error={error} setError={setError} isLoading={isLoading} />)


    return (
        <View style={styles.container}>
            <SafeAreaView />
            <StatusBar barStyle={Platform.OS == 'android' ? 'dark-content' : 'light-content'} />
            <View>
                <Header profile={true} title='Deliveries' bellIcon={true} navigation={navigation} />
            </View>
            <SegmentedButtons
                style={styles.segmentsWrapper}
                value={value}
                onValueChange={setValue}

                buttons={[
                    {
                        value: 'On the way',
                        label: 'On the way',
                        checkedColor: "#fff",
                        uncheckedColor: "#000",
                        style: { backgroundColor: targetTab == 'On Going' ? colors.logoColor : colors.gray },
                        onPress: () => settargetTab("On Going")

                    },
                    {
                        value: 'Completed',
                        label: 'Completed',
                        checkedColor: "#fff",
                        uncheckedColor: "#000",
                        style: { backgroundColor: targetTab == 'Completed' ? colors.logoColor : colors.gray },
                        onPress: () => settargetTab("Completed")
                    },
                ]}
            />

            {
                OrdersMap.get(targetTab)
            }
            {
                isLoading && (
                    <AppLoader />
                )
            }
        </View>
    )
}

export default Delivery