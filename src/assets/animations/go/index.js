import React, { useEffect, useRef } from 'react';
import { Animated, Easing, View } from 'react-native';
import Lottie from 'lottie-react-native';
import goFile from '../../../assets/animations/go/data.json'
import { colors } from '../../../constants/globalStyles';
import { Text } from 'react-native';
import styles from './style'
export default function GoAnimation() {
    const animationProgress = useRef(new Animated.Value(0))

    useEffect(() => {
        Animated.timing(animationProgress.current, {
            toValue: 1,
            duration: 2000,
            easing: Easing.linear,
            useNativeDriver: false

        }).start();
    }, [])

    return (
        <View style={styles.animationWrapper}>
            <Text style={styles.successText}>Started the trip</Text>
            <Lottie
                source={goFile}
                progress={animationProgress.current}
            />
        </View>

    );
}