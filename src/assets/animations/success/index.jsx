import React, { useEffect, useRef } from 'react';
import { Animated, Easing, View, Modal } from 'react-native';
import Lottie from 'lottie-react-native';
import successFile from './data.json'
import { colors } from '../../../constants/globalStyles';
import { Text } from 'react-native';
import styles from './style'
import { Dialog, Portal } from 'react-native-paper';

export default function SuccessAnimation() {
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
                    <Lottie style={styles.lottie} source={successFile} progress={animationProgress.current} />
                    <Text style={styles.successText}>Order accepted</Text>
                </View>
            </View>
        </Modal>

    );
}