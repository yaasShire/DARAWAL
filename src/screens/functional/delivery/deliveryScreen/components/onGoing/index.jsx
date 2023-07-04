import { View, Text, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import styles from './style'
import { fetchData } from '../../../../../../api/functional/fetchData'
import OrderCard from '../../../../../../components/molecules/orderCard'
import AppLoader from '../../../../../../components/atoms/appLoader'
const OnGoing = ({ setIsLoading = () => { }, setError = () => { }, isLoading = true, navigation = {} }) => {
    const [ongoingOrders, setOngoingOrders] = useState([])
    const getOnGoingOrders = async () => {
        const data = await fetchData('agent/orders/ongoing', setError, setIsLoading)
        if (data?.data?.data?.length > 0) {
            setOngoingOrders(data?.data?.data)
        }
    }
    useEffect(() => {
        getOnGoingOrders()
    }, [])
    return (
        <>
            <FlatList
                showsVerticalScrollIndicator={false}
                style={styles.container}
                data={ongoingOrders}
                renderItem={({ item }) => (
                    <OrderCard accept={false} order={item} navigation={navigation} navigateMap />
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

export default OnGoing