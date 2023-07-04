import React, { useState } from 'react';
import { Alert, Modal, StyleSheet, Text, Pressable, View } from 'react-native';
import { Image } from 'react-native';
import responseIMG from '../../../assets/images/responseIMG.png'
import { colors, fontWeights } from '../../../constants/globalStyles';
const ResponseModal = ({ setModalVisible = () => { }, modalVisible = false, setResponseModal = () => { }, modalDescription = "", modalTitle = "", acceptOrderProcess = () => { } }) => {
    return (
        <Modal
            animationType="slide"
            onDismiss={() => setModalVisible(false)}
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
                Alert.alert('Modal has been closed.');
                setModalVisible(!modalVisible);
            }}>
            <View style={styles.centeredView}>
                <View style={styles.modalView}>
                    <View>
                        <Image source={responseIMG} style={styles.image} />
                    </View>
                    <View style={styles.textWrapper}>
                        <Text style={styles.title}>{modalTitle}</Text>
                        <Text style={styles.description}>{modalDescription}</Text>
                    </View>
                    <View style={styles.btnsWrapper}>
                        <Pressable style={[styles.btn, styles.btn1]} onPress={() => setModalVisible(false)}>
                            <Text style={styles.btnText}>Cancel</Text>
                        </Pressable>
                        <Pressable style={styles.btn} onPress={() => {
                            setResponseModal(true)
                            setTimeout(() => {
                                setModalVisible(false)
                            }, 100)
                            if (modalTitle == 'Accept') {
                                acceptOrderProcess()
                            }
                        }}>
                            <Text style={styles.btnText}>{modalTitle}</Text>
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
        height: 350,
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
        borderTopColor: colors.primaryGray
    },
    btn1: {
        borderRightWidth: 1,
        borderRightColor: colors.primaryGray
    },
    btn: {
        width: "50%",
        height: "100%",
        justifyContent: "center",
        alignItems: "center",
    },
    btnText: {
        color: colors.blue,
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

export default ResponseModal;