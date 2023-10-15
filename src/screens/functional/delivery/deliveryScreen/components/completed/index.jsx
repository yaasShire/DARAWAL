import { View, Text, FlatList, RefreshControl } from 'react-native'
import React, { useEffect, useState } from 'react'
import styles from './style'
import { fetchData } from '../../../../../../api/functional/fetchData'
import OrderCard from '../../../../../../components/molecules/orderCard'
import AppLoader from '../../../../../../components/atoms/appLoader'
import NoDataFound from '../../../../../../components/molecules/noDataFound'
const CompletedOrders = ({ setIsLoading = () => { }, setError = () => { }, isLoading = true, navigation = {} }) => {
    const [completedOrder, setComplatedOrder] = useState([])
    const [refreshing, setRefreshing] = useState(false)
    const completedOrders = async () => {
        const data = await fetchData('agent/orders/completed', setError, setIsLoading)
        if (data?.data?.data?.length > 0) {
            setComplatedOrder(data?.data?.data)
        }
    }
    useEffect(() => {
        completedOrders()
    }, [])
    return (
        <View style={{ flex: 1 }}>
            <FlatList
                refreshControl={<RefreshControl refreshing={refreshing} onRefresh={completedOrders} />}
                showsVerticalScrollIndicator={false}
                style={styles.container}
                data={completedOrder}
                renderItem={({ item }) => (
                    <OrderCard showPhoneCall={false} accept={false} order={item} navigation={navigation} />
                )}
            />
            {
                isLoading && (
                    <AppLoader />
                )
            }
            {
                !completedOrder.length && <NoDataFound />
            }
        </View>
    )
}

export default CompletedOrders