import { View, Text, StyleSheet, Pressable, Linking } from 'react-native'
import React from 'react'
import LottieView from 'lottie-react-native'
import ContactCard from './components/contactCard'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { colors, fontWeights, screenPadding } from '../../../constants/globalStyles'
const Pending = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <View style={styles.animation}>
                <LottieView source={require('../../../assets/animations/pending.json')} autoPlay loop />
            </View>
            <View style={styles.txtsWrapper}>
                <Text style={[styles.txt, styles.title]}>We're evaluating your account</Text>
                <Text style={[styles.txt, styles.description]}>Our admin team will verify your account contact with us for us to verify that you are a legitimate, dedicated and reliable customer.</Text>
            </View>
            <View style={styles.contactsWrapper}>
                <ContactCard icon='wechat' title='Message' onPress={() => {
                    Linking.openURL(
                        'http://api.whatsapp.com/send?phone=252' + "612518368"
                    )
                }} />
                <ContactCard icon='phone' title='Call' onPress={() => {
                    Linking.openURL(`tel:612518368`)
                }} />
            </View>
            <View style={styles.loginBtnWrapper}>
                <Pressable style={styles.loginBtn} onPress={async () => {
                    // const status = JSON.parse(await AsyncStorage.getItem("verified"))
                    // console.log(status)
                    // await AsyncStorage.setItem('verified', JSON.stringify(true))
                    navigation.reset({
                        index: 0,
                        routes: [{ name: 'login' }],
                    });

                }}>
                    <Text style={styles.loginBtnText}>Log In</Text>
                </Pressable>
            </View>
        </View>
    )
}

export default Pending

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        rowGap: 60,
        padding: screenPadding,
        backgroundColor: "#2d2e2e"
    },
    animation: {
        width: "100%",
        height: 200,
    },
    txtsWrapper: {
        justifyContent: "center",
        alignItems: "center",
        rowGap: 12
    },
    txt: {
        textAlign: "center",
        color: colors.primary
    },
    title: {
        fontWeight: fontWeights.primary,
        fontSize: 18,
        opacity: .8
    },
    description: {
        fontWeight: fontWeights.primary,
        fontSize: 14,
        opacity: .7
    },
    contactsWrapper: {
        flexDirection: "row",
        justifyContent: "space-around",
        width: "100%"
    },
    loginBtnWrapper: {
        width: "100%"
    },
    loginBtn: {
        width: "100%",
        height: 60,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 5,
        backgroundColor: colors.logoColor
    },
    loginBtnText: {
        fontWeight: fontWeights.primary,
        fontSize: 19,
        color: colors.primary
    }
})



