import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView, KeyboardAvoidingView } from 'react-native';
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
import { loginValidationSchema } from '../../../validations/login';
import { Pressable } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage'
function Signup({ navigation }) {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(null)
    const [verificationMessage, setVerificationMessage] = useState(null)
    const handleSignUp = async (values) => {
        setIsLoading(true)
        const formatedData = formDataGenerator(values)
        const data = await authEndPointsHandler('agent/user/signin', formatedData, setError, setIsLoading)
        console.log(data)
        if (data.access_token) {
            await AsyncStorage.setItem("access_token", data?.access_token)
            await AsyncStorage.setItem("token_type", data?.token_type)
            await AsyncStorage.setItem("user", JSON.stringify(data?.user))
            navigation.replace("bottomTabs")
        }
        if (data?.message == 'Unauthorized') {
            setError(data?.message)
            setTimeout(() => {
                setError(null)
            }, 2000)
        }
        if (data?.password?.length > 0) {
            setError(data?.password[0])
            setTimeout(() => {
                setError(null)
            }, 2000)
        }
    };

    return (
        <SafeAreaView style={styles.container}>
            <KeyboardAvoidingView
                enabled
                style={{ flex: 1, }}
                keyboardVerticalOffset={15}
                behavior={Platform.OS == 'ios' ? 'padding' : null}
            >
                <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ alignItems: "center", justifyContent: "center", flex: 1 }} style={styles.listWrapper}>
                    {/* <View style={styles.appInfoWrapper}>
                    <Text style={styles.appName}>Darawal</Text>
                    <Text style={styles.appDescription}>Welcom to Darawal we appreciate to have you</Text>
                </View> */}
                    <Text style={styles.title}>Login</Text>
                    {
                        error && (
                            <View style={styles.errorWrapper}>
                                <Text style={styles.errorText}>{error}</Text>
                            </View>
                        )
                    }
                    <Formik
                        validationSchema={loginValidationSchema}
                        initialValues={{ email: "", password: "" }}
                        onSubmit={(values) => { handleSignUp(values) }}
                    >
                        {
                            ({ errors, touched, setFieldTouched, handleBlur, handleChange, handleSubmit, values }) => (
                                <View style={styles.form}>
                                    <AuthTextField keyboardType='email-address' name="email" errors={errors} touched={touched} setFieldTouched={setFieldTouched} handleBlur={handleBlur} handleChange={handleChange} values={values} placeholder="Email" />
                                    <AuthTextField name="password" errors={errors} touched={touched} setFieldTouched={setFieldTouched} handleBlur={handleBlur} handleChange={handleChange} values={values} secureTextEntry={true} placeholder="Password" />
                                    <AuthenticationButton title='Login' errors={errors} handleSubmit={() => { handleSubmit(values) }} />
                                </View>
                            )
                        }
                    </Formik>
                    <View style={styles.resetButtonWrapper}>
                        <Pressable onPress={() => navigation.navigate("resetpassword")}>
                            <Text style={styles.resetText}>Reset password?</Text>
                        </Pressable>
                    </View>
                    <View style={styles.bottomActionWrapper}>
                        <Text style={styles.or}>or?</Text>
                        <Pressable style={styles.segmentHolder} onPress={() => navigation.navigate('signup')}>
                            <Text style={styles.signupText}>sign up</Text>
                        </Pressable>
                    </View>

                    {
                        isLoading && (
                            <AppLoader />
                        )
                    }
                    {
                        verificationMessage && (
                            <VerificationMessage setVerificationMessage={setVerificationMessage} navigation={navigation} screen='login' description='We have sent verification email, verify by you email and then log in.' />
                        )
                    }

                </ScrollView>
            </KeyboardAvoidingView>
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
        padding: screenPadding,
        flex: 1,
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
    resetButtonWrapper: {
        width: "100%",
        alignItems: "flex-end",
        marginVertical: "4%",
        paddingVertical: 10
    },
    resetText: {
        fontWeight: "500",
        fontSize: fontSizes.primary,
        color: colors.logoColor
    }

});

export default Signup;