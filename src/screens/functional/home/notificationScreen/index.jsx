import { View, Text, StatusBar, Platform, ScrollView, FlatList } from 'react-native'
import React, { useState, useEffect } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import styles from './style'
import Header from '../../../../components/molecules/header'
import OrderCard from '../../../../components/molecules/orderCard'
import { orders } from '../../../../data'
import { Button, Dialog, Portal } from 'react-native-paper'
const Notification = ({ navigation }) => {
    const [visible, setVisible] = useState(false);
    const [alertTitle, setAlertTitle] = useState('')
    const hideDialog = () => setVisible(false);
    const [newOrderExist, setnewOrderExist] = useState(true)
    const [targetOrders, setTargetOrders] = useState([])
    const [value, setValue] = useState('Pending');
    const filterOrders = () => {
        setTargetOrders(orders.filter(order => order.status == "New"))
    }
    useEffect(() => {
        filterOrders()
    }, [])
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar barStyle={Platform.OS == 'android' ? 'dark-content' : 'light-content'} />
            <View style={{ position: "absolute" }}>
                <Portal>
                    <Dialog visible={visible} onDismiss={hideDialog}>
                        <Dialog.Title style={{ textAlign: "center" }}>{alertTitle} this order?</Dialog.Title>

                        <Dialog.Actions>
                            <Button onPress={() => {
                                hideDialog()
                                setnewOrderExist(false)
                            }}>Cancel</Button>
                            <Button onPress={() => {
                                hideDialog()
                                setnewOrderExist(false)
                                alertTitle == 'Accept' ? navigation.navigate('shopLocation') : ""
                            }}>Ok</Button>
                        </Dialog.Actions>
                    </Dialog>
                </Portal>
            </View>
            <View>
                <Header backButton={true} title="Notifications" navigation={navigation} />
            </View>
            <FlatList
                data={targetOrders}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <OrderCard data={item} setVisible={setVisible} hideDialog={hideDialog} setAlertTitle={setAlertTitle} />
                )}
                contentContainerStyle={{ rowGap: 15, alignItems: "center" }}
                showsVerticalScrollIndicator={false}

            />
        </SafeAreaView>
    )
}

export default Notification