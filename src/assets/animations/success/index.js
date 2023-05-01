import React, { useEffect, useRef } from 'react';
import { Animated, Easing, View } from 'react-native';
import Lottie from 'lottie-react-native';
import successFile from '../../../assets/animations/success/data.json'
import { colors } from '../../../constants/globalStyles';
import { Text } from 'react-native';
import styles from './style'

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
        <View style={styles.animationWrapper}>
            <Text style={styles.successText}>Order accepted</Text>
            <Lottie


                source={successFile}
                progress={animationProgress.current}
            />
        </View>

    );
}