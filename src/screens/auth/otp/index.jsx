import { View, Text, StatusBar, Image, ScrollView, Platform, TextInput } from 'react-native'
import React, { useRef, useState } from 'react'
import OtpInput from '../../../components/atoms/otpInput'
import { SafeAreaView } from 'react-native-safe-area-context'
import styles from './style'
import otpImage from '../../../assets/images/otp.png'
import AuthButton from '../../../components/atoms/authButton'
import { Formik } from 'formik'
import { otpVerification } from '../../../validations/otp'
import { colors } from '../../../constants/globalStyles'
const OTP = ({ navigation }) => {
    const [input1, setInput1] = useState("")
    const [input2, setInput2] = useState("")
    const [input3, setInput3] = useState("")
    const [input4, setInput4] = useState("")
    const inputRef1 = useRef()
    const inputRef2 = useRef()
    const inputRef3 = useRef()
    const inputRef4 = useRef()

    const handleOTP = () => {
        navigation.navigate('newPassword')
    }
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar barStyle={Platform.OS == 'android' ? 'light-content' : 'dark-content'} />
            <ScrollView style={styles.mainHolder}>
                <View style={styles.textHolder}>
                    <Text style={styles.otpText}>OTP CODE</Text>
                </View>
                <View style={styles.imageHolder}>
                    <Image source={otpImage} style={styles.otpImage} />
                </View>
                <View style={styles.inputsWrapper}>
                    <View style={styles.inputView}>
                        <TextInput style={styles.input}
                            keyboardType='number-pad'
                            maxLength={1}
                            autoFocus={true}
                            ref={inputRef1}
                            value={input1}
                            onChangeText={text => {
                                setInput1(prev => {
                                    text
                                    if (text) {
                                        inputRef2.current.focus()
                                    }
                                })


                            }}
                        />
                    </View>
                    <View style={styles.inputView}>
                        <TextInput style={styles.input}
                            keyboardType='number-pad'
                            maxLength={1}
                            value={input2}
                            ref={inputRef2}
                            onChangeText={text => {
                                setInput2(prev => {
                                    text
                                    if (text) {
                                        inputRef3.current.focus()
                                    }
                                })


                            }}
                        />
                    </View>
                    <View style={styles.inputView}>
                        <TextInput style={styles.input}
                            keyboardType='number-pad'
                            maxLength={1}
                            ref={inputRef3}
                            value={input3}
                            onChangeText={text => {
                                setInput3(prev => {
                                    text
                                    if (text) {
                                        inputRef4.current.focus()
                                    }
                                })


                            }}


                        />
                    </View>
                    <View style={styles.inputView}>
                        <TextInput style={styles.input}
                            keyboardType='number-pad'
                            maxLength={1}
                            ref={inputRef4}
                            value={input4}
                            onChangeText={text => {
                                setInput4(prev => text)
                                if (input4 !== '') {
                                    inputRef2.current.focus();
                                }

                            }}
                        />
                    </View>
                </View>
                <View style={styles.buttonHolder}>
                    <AuthButton title={"Verify"} color={colors.secondary} navigation={navigation} destination='login' />
                </View>

            </ScrollView>
        </SafeAreaView>
    )
}

export default OTP;