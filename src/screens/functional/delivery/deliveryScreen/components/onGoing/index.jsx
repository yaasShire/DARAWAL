import { View, Text, FlatList, RefreshControl } from 'react-native'
import React, { useEffect, useState } from 'react'
import styles from './style'
import { fetchData } from '../../../../../../api/functional/fetchData'
import OrderCard from '../../../../../../components/molecules/orderCard'
import AppLoader from '../../../../../../components/atoms/appLoader'
import NoDataFound from '../../../../../../components/molecules/noDataFound'
const OnGoing = ({ setIsLoading = () => { }, setError = () => { }, isLoading = true, navigation = {} }) => {
    const [ongoingOrders, setOngoingOrders] = useState([])
    const [refreshing, setRefreshing] = useState(false)
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
        <View style={{ flex: 1 }}>
            {
                !ongoingOrders.length ? <NoDataFound /> :
                    <FlatList
                        refreshControl={<RefreshControl refreshing={refreshing} onRefresh={getOnGoingOrders} />}
                        showsVerticalScrollIndicator={false}
                        style={styles.container}
                        data={ongoingOrders}
                        renderItem={({ item }) => (
                            <OrderCard accept={false} order={item} navigation={navigation} navigateMap />
                        )}

                    />
            }
            {
                isLoading && (
                    <AppLoader />
                )
            }
        </View>
    )
}

export default OnGoing