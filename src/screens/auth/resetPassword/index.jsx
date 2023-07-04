import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import AuthTextField from '../../../components/atoms/authTextField';
import { Formik } from 'formik';
import { signupValidationSchema } from '../../../validations/signup';
import { SafeAreaView } from 'react-native-safe-area-context';
import { colors, fontSizes, screenPadding } from '../../../constants/globalStyles';
import { authEndPointsHandler } from '../../../api/auth';
import { formDataGenerator } from '../../../utils';
import AuthenticationButton from '../../../components/atoms/authenticationButton';
import VerificationMessage from '../signup/components/success';
import AppLoader from '../../../components/atoms/appLoader';
import { Pressable } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage'
import { resetPasswordValidation } from '../../../validations/resetPassword';
function ResetPassword({ navigation }) {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(null)
    const [verificationMessage, setVerificationMessage] = useState(null)
    const handleSignUp = async (values) => {
        setIsLoading(true)
        const formatedData = formDataGenerator(values)
        const data = await authEndPointsHandler('agent/user/resetpassword', formatedData, setError, setIsLoading)
        console.log(data)
        if (data?.status == 'Account identified') {
            setVerificationMessage(data?.message)
        }



    };

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.listWrapper}>
                <Text style={styles.title}>Reset Password</Text>
                {
                    error && (
                        <View style={styles.errorWrapper}>
                            <Text style={styles.errorText}>{error}</Text>
                        </View>
                    )
                }
                <Formik
                    validationSchema={resetPasswordValidation}
                    initialValues={{ email: "", name: "" }}
                    onSubmit={(values) => { handleSignUp(values) }}
                >
                    {
                        ({ errors, touched, setFieldTouched, handleBlur, handleChange, handleSubmit, values }) => (
                            <View style={styles.form}>
                                <AuthTextField keyboardType='email-address' name="email" errors={errors} touched={touched} setFieldTouched={setFieldTouched} handleBlur={handleBlur} handleChange={handleChange} values={values} placeholder="Email" />
                                <AuthTextField name="name" errors={errors} touched={touched} setFieldTouched={setFieldTouched} handleBlur={handleBlur} handleChange={handleChange} values={values} secureTextEntry={true} placeholder="Name" />
                                <AuthenticationButton title='Reset Password' errors={errors} handleSubmit={() => { handleSubmit(values) }} />
                            </View>
                        )
                    }
                </Formik>
                <View style={styles.loginWrapper}>
                    <Pressable>
                        <Text style={styles.resetText}>log in?</Text>
                    </Pressable>
                </View>
                {
                    isLoading && (
                        <AppLoader />
                    )
                }
                {
                    verificationMessage && (
                        <VerificationMessage setVerificationMessage={setVerificationMessage} navigation={navigation} screen='login' description='We have sent verification email, verify by you email, reset your password then log in.' />
                    )
                }

            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.primary,


    },
    title: {
        fontSize: 32,
        fontWeight: 'bold',
        marginBottom: 32,
    },
    form: {
        width: '100%',
    },
    input: {
        backgroundColor: '#f0f0f0',
        borderRadius: 8,
        padding: screenPadding,
        marginBottom: 16,
        fontSize: 16,
    },
    errorWrapper: {
        justifyContent: "center",
        alignItems: "center",
        marginVertical: 10
    },
    errorText: {
        color: "red",
        textAlign: "center",
        fontWeight: "500"
    },
    appInfoWrapper: {
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
        height: 100
    },
    appName: {
        fontWeight: "600",
        fontSize: 20
    },
    appDescription: {
        fontSize: 15,
        fontWeight: "400",
        color: "gray",
        textAlign: "center",
    },
    listWrapper: {
        alignItems: "center",
        padding: screenPadding,
        justifyContent: "center",
        flex: 1
    },
    segmentHolder: {
    },
    signupText: {
        color: colors.logoColor,
        marginLeft: 5,
        fontSize: 18
    },
    or: {
        fontSize: 18
    },
    bottomActionWrapper: {
        marginVertical: 20,
        flexDirection: "row"
    },
    loginWrapper: {
        width: "100%",
        alignItems: "center",
        marginVertical: "4%",
        paddingVertical: 10
    },
    resetText: {
        fontWeight: "500",
        fontSize: fontSizes.primary,
        color: colors.logoColor
    }

});

export default ResetPassword;