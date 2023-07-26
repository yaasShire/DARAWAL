import React, { useState } from 'react';
import { Alert, Modal, StyleSheet, Text, Pressable, View } from 'react-native';
import fireBallImage from '../../../../../../assets/images/fireBall.png';
import { Image } from 'react-native';
const SuccessOTPModal = ({ handleClearOTP = () => { }, orderId = "", setSuccessModalOtp = () => { }, successModalOtp = false, otpResponseText = "", navigation = {}, verificationResult = "", }) => {
    return (
        <Modal
            animationType="slide"
            onDismiss={() => setSuccessModalOtp(false)}
            transparent={true}
            visible={successModalOtp}
            onRequestClose={() => {
                setSuccessModalOtp(prev => !prev);
            }}>
            <View style={styles.centeredView}>
                <View style={styles.modalView}>
                    <View>
                        <Image source={fireBallImage} style={styles.image} />
                    </View>
                    <View style={styles.textWrapper}>
                        <Text style={styles.title}>{verificationResult}</Text>
                        <Text style={styles.description}>{otpResponseText}</Text>
                    </View>
                    <View style={styles.btnsWrapper}>
                        <Pressable style={styles.btn} onPress={() => {
                            // navigation.navigate("sellerVerifyOTP", { UOID: orderId })
                            // setSuccessModalOtp(false)
                            if (verificationResult == 'OTP not found.' || verificationResult == 'Invalid OTP.') {
                                handleClearOTP()
                                setSuccessModalOtp(false)
                            }
                            if (verificationResult == 'OTP verified successfully.') {
                                navigation?.navigate("delivery")
                            }
                        }}>
                            <Text style={styles.btnText}>{verificationResult === 'OTP not found.' ? 'Try again' : 'Ok'}</Text>
                        </Pressable>
                    </View>
                </View>
            </View>
        </Modal>

    );
};

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22,
    },
    modalView: {
        backgroundColor: 'white',
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: "space-between",
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
        width: "90%",
        height: 300,
        paddingTop: 10
    },
    button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2,
    },
    buttonOpen: {
        backgroundColor: '#F194FF',
    },
    buttonClose: {
        backgroundColor: '#2196F3',
    },
    textStyle: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    modalText: {
        marginBottom: 15,
        textAlign: 'center',
    },
    btnsWrapper: {
        flexDirection: "row",
        width: "100%",
        justifyContent: "space-around",
        alignItems: "center",
        height: 70,
        borderTopWidth: 1,
        borderTopColor: 'gray'
    },
    btn1: {
        borderRightWidth: 1,
        borderRightColor: 'gray'
    },
    btn: {
        width: "100%",
        height: "100%",
        justifyContent: "center",
        alignItems: "center",
    },
    btnText: {
        color: 'blue',
        fontSize: 18,
        fontWeight: '500'
    },
    textWrapper: {
        justifyContent: "center",
        alignItems: "center",
        padding: 20
    },
    title: {
        fontSize: 20,
        fontWeight: '500'
    },
    description: {
        textAlign: "center",
        fontSize: 15,
        fontWeight: '500',
        opacity: .8
    },
    image: {
        width: 100,
        height: 100,
        resizeMode: "contain"
    }
});

export default SuccessOTPModal;