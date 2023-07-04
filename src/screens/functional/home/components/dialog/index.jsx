import { View, Text } from 'react-native'
import React from 'react'
import styles from './style'
import { Button, Dialog, Portal } from 'react-native-paper'
const OrderModal = ({ setSuccessAnimation = () => { }, setCancelAnimation = () => { }, alertTitle = "", orderData = {}, navigation = () => { }, visible = false, setVisible = () => { }, setnewOrderExist = () => { } }) => {
    const hideDialog = () => setVisible(false);
    return (
        <Portal>
            <Dialog visible={visible} onDismiss={hideDialog}>
                <Dialog.Title style={{ textAlign: "center" }}>{alertTitle} this order?</Dialog.Title>
                <Dialog.Actions>
                    <Button onPress={() => {
                        hideDialog()
                    }}>Cancel</Button>
                    <Button onPress={() => {
                        hideDialog()
                        alertTitle == 'Accept' ? setSuccessAnimation(true) : alertTitle == 'Reject' ? setCancelAnimation(true) : ""
                        setTimeout(() => {
                            setCancelAnimation(false)
                        }, 2000)
                        setTimeout(() => {
                            setSuccessAnimation(false)
                            alertTitle == 'Accept' ? navigation.navigate('shopLocation', { data: orderData }) : ""
                        }, 2000)
                        setnewOrderExist(false)
                    }}>Ok</Button>
                </Dialog.Actions>
            </Dialog>
        </Portal>
    )
}

export default OrderModal