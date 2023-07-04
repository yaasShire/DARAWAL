import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import LottieView from 'lottie-react-native'
import styles from './style'
import loadingAnimation from '../../../assets/animations/loading/loading.json'
const AppLoader = () => {
    return (
        <View style={[styles.container, StyleSheet.absoluteFillObject]}>
            <LottieView source={loadingAnimation} autoPlay loop />
        </View>
    )
}

export default AppLoader