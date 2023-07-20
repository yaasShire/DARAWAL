import React, { useEffect, useState } from 'react';
import { Alert, Modal, StyleSheet, Text, Pressable, View } from 'react-native';
import fireBallImage from '../../../../../../assets/images/fireBall.png';
import { Image } from 'react-native';
import { colors } from '../../../../../../constants/globalStyles';
import { Button, TextInput } from 'react-native-paper';
import ProfileField from '../field';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Formik } from 'formik'
import { formDataGenerator } from '../../../../../../utils';
import { postData } from '../../../../../../api/functional/postData';
const EditProfileDataModal = ({ getUserData = () => { }, onPress = () => { }, userData = {}, orderId = "", setEditProfile = () => { }, editProfile = false }) => {
    const [error, setError] = useState(null)
    const [isLoading, setIsLoading] = useState(false)
    const handleProfileData = async (values) => {
        const profileData = formDataGenerator(values)
        const { result } = await postData('agent/user/update', profileData, setError, setIsLoading)
        if (result?.status === 'updated successfully') {
            getUserData()
            setEditProfile(false)
        }
    }
    return (
        <Modal
            animationType="slide"
            onDismiss={() => setEditProfile(false)}
            transparent={true}
            visible={editProfile}
            onTouchCancel={() => setEditProfile(false)}
            onRequestClose={() => {
                setEditProfile(prev => !prev);
            }}>
            <View style={styles.centeredView}>
                <View style={styles.modalView}>
                    <Formik
                        initialValues={{ name: userData?.name, email: userData?.email, phone_number: userData?.phone_number }}
                        onSubmit={(values) => handleProfileData(values)}
                    >
                        {
                            ({ handleChange, handleBlur, handleSubmit, errors, touched, setFieldTouched, values }) => (
                                <>
                                    <View style={{ rowGap: 10, width: "100%", justifyContent: "center", alignItems: 'center' }}>
                                        <ProfileField focus={true} placeHolder="Name" name="name" touched={touched} setFieldTouched={setFieldTouched} errors={errors} value={values.name} handleBlur={handleBlur} handleChange={handleChange} />
                                        <ProfileField email={true} keyType="email-address" placeHolder="Email" name="email" touched={touched} setFieldTouched={setFieldTouched} errors={errors} value={values.email} handleBlur={handleBlur} handleChange={handleChange} />
                                        <ProfileField placeHolder="Phone Number" name="phone_number" touched={touched} setFieldTouched={setFieldTouched} errors={errors} value={values.phone_number} handleBlur={handleBlur} handleChange={handleChange} />
                                    </View>
                                    <View style={{ width: "100%", flexDirection: 'row', flex: 1, justifyContent: "space-around", alignItems: "center", borderRadius: 20 }}>
                                        <Button onPress={() => setEditProfile(false)} title='Cancel' style={{ width: 100, height: 50, borderRadius: 5 }} mode='outlined' >Cancel</Button>
                                        <Button title='Cancel' style={{ width: 100, height: 50, borderRadius: 5 }} mode='contained' onPress={() => handleSubmit(values)} >Save</Button>
                                    </View>
                                </>
                            )
                        }
                    </Formik>

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
        backgroundColor: colors.primary,
        borderRadius: 20,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
        paddingTop: 20,
        width: "90%",
        height: 350,
        // paddingTop: 10
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

export default EditProfileDataModal;