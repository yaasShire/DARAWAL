import { View, Text, Pressable } from 'react-native'
import React, { useMemo } from 'react'
import { MotiView } from '@motify/components'
import { Easing } from 'react-native-reanimated'
import { colors } from '../../../constants/globalStyles'
const COLORS = {
    active: "#2c2c2c",
    inActive: "#DCDCDC"
}
const transition = {
    type: "timing",
    duration: 300,
    ease: Easing.out(Easing.ease)
}
const Switch = ({ isActive, onpress, size }) => {
    const trackWidth = useMemo(() => (
        size * 1.6
    ))
    const trackHeight = useMemo(() => (
        size * .8
    ))
    const knopSize = useMemo(() => (
        size * .6
    ))
    return (
        <Pressable onPress={onpress}>
            <View style={{ justifyContent: "center", alignItems: 'center' }}>
                <MotiView
                    transition={transition}
                    animate={{
                        backgroundColor: isActive ? colors.logoColor : colors.gray
                    }}
                    style={{ position: "absolute", width: trackWidth, height: trackHeight, borderRadius: trackHeight / 2, backgroundColor: "#2C2C2C" }}
                />
                <MotiView
                    transition={transition}
                    animate={{
                        translateX: isActive ? trackWidth / 2.5 : -trackWidth / 4
                    }}
                    style={{ width: size, height: size, borderRadius: size / 2, backgroundColor: "#fff", justifyContent: "center", alignItems: 'center' }}
                >
                    <MotiView
                        transition={transition}
                        animate={{
                            width: isActive ? 0 : knopSize,
                            borderColor: isActive ? colors.logoColor : COLORS.inActive
                        }}
                        style={{ width: knopSize, height: knopSize, borderRadius: knopSize / 2, borderWidth: size * .1, borderColor: COLORS.active }}
                    />
                </MotiView>
            </View>
        </Pressable>
    )
}

export default Switch