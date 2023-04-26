import { View, Text, StatusBar, Platform } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import React, { useState } from 'react'
import styles from './style'
import Header from '../../../../components/molecules/header';
import { Button, Switch } from 'react-native-paper';
import MapView from 'react-native-maps';
import StatusCard from '../../../../components/molecules/statusCard';
import OrderCard from '../../../../components/molecules/orderCard';
import { Dialog, Portal } from 'react-native-paper';
import { orders } from '../../../../data';

const Home = ({ navigation }) => {
    const [isSwitchOn, setIsSwitchOn] = useState(false);
    const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);
    const [visible, setVisible] = React.useState(false);
    const [alertTitle, setAlertTitle] = useState('')
    const [newOrderExist, setnewOrderExist] = useState(true)
    const hideDialog = () => setVisible(false);
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

                            }}>Cancel</Button>
                            <Button onPress={() => {
                                hideDialog()
                                navigation.navigate('shopLocation')
                            }}>Ok</Button>
                        </Dialog.Actions>
                    </Dialog>
                </Portal>
            </View>
            <StatusBar barStyle={Platform.OS == 'android' ? 'light-content' : 'dark-content'} />
            <View style={styles.headerWrapper}>
                <Header navigation={navigation} profile={true} bellIcon={true} />
            </View>
            <View style={styles.onlineWrapper}>
                <Text style={styles.onlineText}>Online</Text>
                <Switch color='green' value={isSwitchOn} onValueChange={onToggleSwitch} />
            </View>
            <View style={styles.mapWrapper}>
                <MapView style={styles.map} />
            </View>
            <View style={styles.statusCardWrapper}>
                {
                    newOrderExist ?
                        <OrderCard data={orders[0]} setVisible={setVisible} hideDialog={hideDialog} setAlertTitle={setAlertTitle} />
                        : <StatusCard />
                }


            </View>

        </SafeAreaView>
    )
}

export default Home