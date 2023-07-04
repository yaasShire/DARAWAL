import { View, Text, StatusBar, Platform, Image, TextInput, ScrollView, TouchableOpacity } from 'react-native'
import React, { useState, useRef, useEffect } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import styles from './style'
import Header from '../../../../components/molecules/header'
import otp2 from '../../../../assets/images/otp2.png'
import CustomButton from '../../../../components/atoms/button'
import { colors } from '../../../../constants/globalStyles'
import AuthButton from '../../../../components/atoms/authButton'
import { useDispatch } from 'react-redux'
import { setActiveTrip } from '../../../../redux/activeTrip'
const OTPVerification = ({ navigation }) => {
    const dispatch = useDispatch();
    const [input1, setInput1] = useState("")
    const [input2, setInput2] = useState("")
    const [input3, setInput3] = useState("")
    const [input4, setInput4] = useState("")
    const inputRef1 = useRef()
    const inputRef2 = useRef()
    const inputRef3 = useRef()
    const inputRef4 = useRef()
    const handleOTP = () => {
        dispatch(setActiveTrip({}))
        if ((input1 && input2) && (input3 && input4)) {
            navigation.navigate("home");
            navigation.navigate("deliveryStack", {
                screen: "delivery",

                params: { activeTab: 'Completed' },
            })
        }
    }

    return (
        <View style={styles.container}>
            <SafeAreaView />
            <StatusBar barStyle={'light-content'} />
            <Header backButton={true} title={"VERIFY"} navigation={navigation} />
            <ScrollView style={styles.miniWrapper}>
                <View style={styles.subtitleWrapper}>
                    <Text style={styles.subtitleText}>OTP VERIFICATION</Text>
                </View>
                <View style={styles.messageWrapper}>
                    <Text style={styles.messageText}>Please enter the code that we have sent to</Text>
                    <Text style={styles.number}>+252 612518368</Text>
                </View>
                <View style={styles.imageWrapper}>
                    <Image source={otp2} style={styles.image} />
                </View>
                {/* otp inputs start here */}
                <View style={styles.inputsWrapper}>
                    <View style={styles.inputView}>
                        <TextInput style={styles.input}
                            keyboardType='number-pad'
                            keyboardAppearance='dark'

                            maxLength={1}
                            autoFocus={true}
                            ref={inputRef1}
                            value={input1}
                            onChangeText={text => {
                                setInput1(prev => text)
                                if (text) {
                                    inputRef2.current.focus()
                                }


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
                                setInput2(prev => text)
                                if (text) {
                                    inputRef3.current.focus()
                                }
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
                                setInput3(prev => text)
                                if (text) {
                                    inputRef4.current.focus()
                                }
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
                <View style={styles.resendOTPWrapper}>
                    <Text style={styles.questionText}>Didn't you receive any otp?</Text>
                    <TouchableOpacity>
                        <Text style={styles.resendText}>resend code</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.buttonWrapper}>
                    <AuthButton color={colors.lagoon} label={"Verify"} handleOTP={handleOTP} />
                </View>
            </ScrollView>

        </View>
    )
}

export default OTPVerification