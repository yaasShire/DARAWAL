import React, { useEffect, useRef, useState } from 'react';
import { Alert, Modal, StyleSheet, Text, Pressable, View, Animated, Easing } from 'react-native';
import { Image } from 'react-native';
import Lottie from 'lottie-react-native';
import orderAcceptedAnimation from '../../../../../../assets/animations/success/data.json'
import responseIMG from '../../../../../../assets/images/responseIMG.png'
// import { colors, fontWeights } from '../../../constants/globalStyles';
import { colors, fontWeights } from '../../../../../../constants/globalStyles';
const SuccessOrderAcceptedModal = ({ navigation = () => { }, setSuccessModalShow = () => { }, successModalShow = false, setResponseModal = () => { }, modalDescription = "", modalTitle = "", acceptOrderProcess = () => { } }) => {

    const animationProgress = useRef(new Animated.Value(0))

    useEffect(() => {
        Animated.timing(animationProgress.current, {
            toValue: 1,
            duration: 1500,
            easing: Easing.linear,
            useNativeDriver: false

        }).start();
    }, [])
    return (
        <Modal
            animationType="slide"
            onDismiss={() => setSuccessModalShow(false)}
            transparent={true}
            visible={successModalShow}
            onRequestClose={() => {
                setSuccessModalShow(!successModalShow);
            }}>
            <View style={styles.centeredView}>
                <View style={styles.modalView}>
                    <View>
                        {/* <Image source={responseIMG} style={styles.image} /> */}
                        <Lottie style={{ width: 100, height: 100 }} source={orderAcceptedAnimation} progress={animationProgress.current} />
                    </View>
                    <View style={styles.textWrapper}>
                        <Text style={styles.title}>{modalTitle}</Text>
                        <Text style={styles.description}>Order is accpeted to process this order navigate to the on going orders screen.</Text>
                    </View>
                    <View style={styles.btnsWrapper}>
                        <Pressable style={[styles.btn, styles.btn1]} onPress={() => setSuccessModalShow(false)}>
                            <Text style={[styles.btnText, styles.btnText1]}>Cancel</Text>
                        </Pressable>
                        <Pressable style={styles.btn} onPress={() => {
                            setSuccessModalShow(false)
                            navigation.navigate("deliveryStack", { screen: "delivery" })
                        }}>
                            <Text style={styles.btnText}>Ok</Text>
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
        height: 290,
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
    btnText1: {
        color: "gray"
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
        height: 65,
        borderTopWidth: 1,
        borderTopColor: colors.primaryGray
    },

    btn: {
        width: "50%",
        height: "100%",
        justifyContent: "center",
        alignItems: "center",
    },
    btn1: {
        borderRightWidth: 1,
        borderRightColor: colors.primaryGray,
        color: "gray"
    },
    btnText: {
        color: "blue",
        fontSize: 18,
        fontWeight: fontWeights.primary
    },
    textWrapper: {
        justifyContent: "center",
        alignItems: "center",
        padding: 20
    },
    title: {
        fontSize: 20,
        fontWeight: fontWeights.secondary
    },
    description: {
        textAlign: "center",
        fontSize: 15,
        fontWeight: fontWeights.primary,
        opacity: .8
    },
    image: {
        width: 100,
        height: 100,
        resizeMode: "contain"
    }
});

export default SuccessOrderAcceptedModal;