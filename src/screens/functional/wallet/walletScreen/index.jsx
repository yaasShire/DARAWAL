import { View, Text, StatusBar, Platform, SafeAreaView } from 'react-native'
import React from 'react'
import styles from './style'
const Wallet = () => {
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar barStyle={Platform.OS == 'android' ? 'dark-content' : 'light-content'} />
            <Text>wallet</Text>
        </SafeAreaView>
    )
}

export default Wallet