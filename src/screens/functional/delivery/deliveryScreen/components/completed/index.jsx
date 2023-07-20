import { View, Text, FlatList, RefreshControl } from 'react-native'
import React, { useEffect, useState } from 'react'
import styles from './style'
import { fetchData } from '../../../../../../api/functional/fetchData'
import OrderCard from '../../../../../../components/molecules/orderCard'
import AppLoader from '../../../../../../components/atoms/appLoader'
const CompletedOrders = ({ setIsLoading = () => { }, setError = () => { }, isLoading = true, navigation = {} }) => {
    const [ongoingOrders, setOngoingOrders] = useState([])
    const [refreshing, setRefreshing] = useState(false)
    const getOnGoingOrders = async () => {
        setRefreshing(true)
        const data = await fetchData('agent/orders/completed', setError, setIsLoading)
        if (data?.data?.data?.length > 0) {
            setOngoingOrders(data?.data?.data)
            setRefreshing(false)
        }
    }
    useEffect(() => {
        getOnGoingOrders()
    }, [])
    return (
        <>
            <FlatList
                refreshControl={<RefreshControl refreshing={refreshing} onRefresh={getOnGoingOrders} />}
                showsVerticalScrollIndicator={false}
                style={styles.container}
                data={ongoingOrders}
                renderItem={({ item }) => (
                    <OrderCard showPhoneCall={false} accept={false} order={item} navigation={navigation} />
                )}

            />
            {
                isLoading && (
                    <AppLoader />
                )
            }
        </>
    )
}

export default CompletedOrders