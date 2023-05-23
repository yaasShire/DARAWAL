import { View, Text, StatusBar, Platform, FlatList } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import React, { useState, useEffect } from 'react'
import styles from './style'
import Header from '../../../../components/molecules/header'
import { Button, Dialog, Portal, SegmentedButtons } from 'react-native-paper';
import OrderCard from '../../../../components/molecules/orderCard'
import { orders } from '../../../../data'
import RBSheet from "react-native-raw-bottom-sheet";
const Delivery = ({ navigation, route }) => {
    const [value, setValue] = useState(route?.params?.activeTab ? route?.params?.activeTab : 'Pending');
    const [targetOrders, setTargetOrders] = useState([])
    const [alertTitle, setAlertTitle] = useState('')
    const hideDialog = () => setVisible(false);
    const [visible, setVisible] = useState(false);

    const filterOrders = (status) => {
        setTargetOrders(orders.filter(order => order.status == status))
    }
    useEffect(() => {
        filterOrders(value)
    }, [])

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar barStyle={Platform.OS == 'android' ? 'dark-content' : 'light-content'} />
            <Portal>
                <Dialog visible={visible} onDismiss={hideDialog}>
                    <Dialog.Title style={{ textAlign: "center" }}>{alertTitle}</Dialog.Title>

                    <Dialog.Actions>
                        <Button onPress={() => {
                            hideDialog()

                        }}>Cancel</Button>
                        <Button onPress={() => {
                            hideDialog()
                        }}>Ok</Button>
                    </Dialog.Actions>
                </Dialog>
            </Portal>
            <View>
                <Header profile={true} title='Deliveries' bellIcon={true} navigation={navigation} />
            </View>
            <View>
                <SegmentedButtons

                    value={value}
                    onValueChange={setValue}

                    buttons={[
                        {
                            value: 'Pending',
                            label: 'Pending',
                            checkedColor: "#fff",
                            style: { backgroundColor: value == 'Pending' ? "#4FA19B" : "#D9D9D9" },
                            onPress: () => filterOrders("Pending")
                        },
                        {
                            value: 'On the way',
                            label: 'On the way',
                            checkedColor: "#fff",
                            style: { backgroundColor: value == 'On the way' ? "#4FA19B" : "#D9D9D9" },
                            onPress: () => filterOrders("On the way")

                        },
                        {
                            value: 'Completed',
                            label: 'Completed',
                            checkedColor: "#fff",
                            style: { backgroundColor: value == 'Completed' ? "#4FA19B" : "#D9D9D9" },
                            onPress: () => filterOrders("Completed")
                        },
                    ]}
                />
            </View>
            <FlatList
                style={styles.ordersWrapper}
                data={targetOrders}
                showsVerticalScrollIndicator={false}
                renderItem={({ item }) => (
                    <OrderCard navigation={navigation} data={item} status={item.status} setVisible={setVisible} hideDialog={hideDialog} setAlertTitle={setAlertTitle} />
                )}
                contentContainerStyle={{ rowGap: 15, alignItems: "center" }}
            />


        </SafeAreaView>
    )
}

export default Delivery