import { View, Text, Pressable } from 'react-native'
import React from 'react'
import { Image } from 'react-native'
import { StyleSheet } from 'react-native'
import { FontAwesome } from '@expo/vector-icons'
import { colors } from '../../../../../constants/globalStyles'

const ContactCard = ({ icon = "", title = "", onPress = () => { } }) => {
    return (
        <View style={styles.wrapper}>
            <Pressable style={styles.container} onPress={onPress}>
                <FontAwesome name={icon} size={35} color={colors.primary} />
            </Pressable>
            <Text style={styles.description}>{title}</Text>
        </View>
    )
}

export default ContactCard


const styles = StyleSheet.create({
    wrapper: {
        justifyContent: "center",
        alignItems: 'center',
        rowGap: 10
    },
    container: {
        backgroundColor: colors.logoColor,
        height: 70,
        width: 70,
        borderRadius: 35,
        justifyContent: "center",
        alignItems: "center",
        borderWidth: 1,
        borderColor: colors.logoColor
    },
    description: {
        color: colors.primary,
        opacity: .7
    },
    image: {
        width: 40,
        height: 40,
        resizeMode: "contain"
    }
})