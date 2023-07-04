import React, { useEffect, useRef } from 'react';
import { Animated, Easing, Modal, View } from 'react-native';
import Lottie from 'lottie-react-native';
import cancelFile from './data.json'
import { colors } from '../../../constants/globalStyles';
import { Text } from 'react-native';
import styles from './style'

export default function CancelAnimation() {
    const animationProgress = useRef(new Animated.Value(0))

    useEffect(() => {
        Animated.timing(animationProgress.current, {
            toValue: 1,
            duration: 1400,
            easing: Easing.linear,
            useNativeDriver: false

        }).start();
    }, [])
    return (

        <Modal animationType="slide" transparent >
            <View style={styles.centeredView}>
                <View style={styles.modalView}>
                    <Lottie style={styles.lottie} source={cancelFile} progress={animationProgress.current} />
                    <Text style={styles.successText}>Order Canceled</Text>
                </View>
            </View>
        </Modal>

    );
}