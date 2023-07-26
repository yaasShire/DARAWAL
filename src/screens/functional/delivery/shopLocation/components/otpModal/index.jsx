import React, { useState } from 'react';
import { Alert, Modal, StyleSheet, Text, Pressable, View } from 'react-native';
import fireBallImage from '../../../../../../assets/images/fireBall.png';
import { Image } from 'react-native';
import { colors } from '../../../../../../constants/globalStyles';
const SendOTPModal = ({ onPress = () => { }, handleClearOTP = () => { }, orderId = "", setOtpModal = () => { }, otpModal = false, otpResponseText = "", navigation = {}, verificationResult = "", setDeliveryToShopTripStarted = () => { } }) => {
    return (
        <Modal
            animationType="slide"
            onDismiss={() => setOtpModal(false)}
            transparent={true}
            visible={otpModal}
            onRequestClose={() => {
                setOtpModal(prev => !prev);
            }}>
            <View style={styles.centeredView}>
                <View style={styles.modalView}>
                    <View>
                        <Image source={fireBallImage} style={styles.image} />
                    </View>
                    <View style={styles.textWrapper}>
                        <Text style={styles.title}>Send OTP Modal</Text>
                        <Text style={styles.description}>To verify the buyer send an OTP to him and then verify it, filling the numbers in to fields.</Text>
                    </View>
                    <View style={styles.btnsWrapper}>
                        <Pressable style={[styles.btn, styles.btn1]} onPress={() => {
                            setOtpModal(false)
                        }}>
                            <Text style={styles.btnText}>Cancel</Text>
                        </Pressable>
                        <Pressable style={styles.btn} onPress={onPress}>
                            <Text style={styles.btnText}>Send OTP</Text>
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
        // margin: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        // padding: 35,
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
        borderTopColor: colors.secondaryGray
    },
    btn1: {
        borderRightWidth: 1,
        borderRightColor: colors.secondaryGray
    },
    btn: {
        width: "50%",
        height: "100%",
        justifyContent: "center",
        alignItems: "center",
    },
    btnText: {
        color: colors.tertiary,
        fontSize: 18,
        fontWeight: "500"
    },
    textWrapper: {
        justifyContent: "center",
        alignItems: "center",
        padding: 20
    },
    title: {
        fontSize: 20,
        fontWeight: "500"
    },
    description: {
        textAlign: "center",
        fontSize: 15,
        fontWeight: "500",
        opacity: .8
    },
    image: {
        width: 100,
        height: 100,
        resizeMode: "contain"
    }
});

export default SendOTPModal;