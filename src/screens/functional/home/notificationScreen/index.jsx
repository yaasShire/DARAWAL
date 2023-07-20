import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import OrderCard from '../../../../components/molecules/orderCard';
import { colors, screenPadding } from '../../../../constants/globalStyles';
import Header from '../../../../components/molecules/header';
import { fetchData } from '../../../../api/functional/fetchData';
import AppLoader from '../../../../components/atoms/appLoader';
import ResponseModal from '../../../../components/molecules/responseModal';
import { postData } from '../../../../api/functional/postData';
import { RefreshControl } from 'react-native-gesture-handler';
import NoDataFound from '../../../../components/molecules/noDataFound';

const NotificationScreen = ({ navigation }) => {
    const [error, setError] = useState(null)
    const [isLoading, setIsLoading] = useState(false)
    const [orders, setOrders] = useState([])
    const [modalVisible, setModalVisible] = useState(false)
    const [modalTitle, setModalTitle] = useState("")
    const [modalDescription, setModalDescription] = useState("")
    const [orderId, setorderId] = useState(null)
    const [refreshing, setRefreshing] = useState(false)
    const [targetOrder, setTargetOrder] = useState(null)
    const getOrders = async () => {
        setIsLoading(true)
        const data = await fetchData('agent/orders/unassigned', setError, setIsLoading)
        if (data?.data?.data?.length > 0) {
            setOrders(data?.data?.data)
        }
    }
    useEffect(() => {
        getOrders()
    }, [])
    const onAccept = async () => {
        setModalTitle("Accept")
        setModalDescription("Accept this order by click accept button and pick the product from the seller.")
        setModalVisible(true)
    }
    const onReject = () => {
        setModalTitle("Reject")
        setModalDescription("Reject this order by click reject button and that order will be rejected.")
        setModalVisible(true)
    }
    const acceptOrderProcess = async () => {
        const formData = new FormData()
        formData.append('UOID', orderId)
        const data = await postData('agent/orders/accept', formData, setError, setIsLoading)
        if (data?.result?.data == 1) {
            navigation.navigate("shopLocation", { order: targetOrder })
        }
    }
    return (
        <View style={styles.container}>
            <Header navigation={navigation} title='Notificatios' backButton={true} backButtonColor='#000' />
            {
                orders?.length !== 0 ?
                    <FlatList
                        refreshControl={<RefreshControl refreshing={refreshing} onRefresh={getOrders} />}
                        showsVerticalScrollIndicator={false}
                        data={orders}
                        renderItem={({ item }) => <OrderCard setTargetOrder={setTargetOrder} setorderId={setorderId} onAccept={onAccept} onReject={onReject} setModalVisible={setModalVisible} order={item} />}
                        contentContainerStyle={{ padding: screenPadding }}
                    /> :
                    <NoDataFound fetchOrders={getOrders} />
            }

            {
                isLoading && (
                    <AppLoader />
                )
            }
            <ResponseModal acceptOrderProcess={acceptOrderProcess} modalTitle={modalTitle} modalDescription={modalDescription} modalVisible={modalVisible} setModalVisible={setModalVisible} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor: colors.primary
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 15,
    },
});

export default NotificationScreen;