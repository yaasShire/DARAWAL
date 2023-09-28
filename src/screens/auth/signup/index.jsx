import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView, Pressable, KeyboardAvoidingView, SafeAreaView, Platform } from 'react-native';
import AuthTextField from '../../../components/atoms/authTextField';
import { Formik } from 'formik';
import { signupValidationSchema } from '../../../validations/signup';
// import { SafeAreaView } from 'react-native-safe-area-context';
import { HeightDimension, colors, screenPadding } from '../../../constants/globalStyles';
import { authEndPointsHandler } from '../../../api/auth';
import { formDataGenerator } from '../../../utils';
import AuthenticationButton from '../../../components/atoms/authenticationButton';
import VerificationMessage from './components/success';
import AppLoader from '../../../components/atoms/appLoader';
function Signup({ navigation }) {
    const [password, setPassword] = useState('')
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(null)
    const [verificationMessage, setVerificationMessage] = useState(null)
    const handleSignUp = async (values) => {
        setIsLoading(true)
        const formatedData = formDataGenerator(values)
        const data = await authEndPointsHandler('agent/user/signup', formatedData, setError, setIsLoading)
        console.log('====================================');
        console.log(data);
        console.log('====================================');
        if (data?.phone_number) {
            setError(data?.phone_number[0])
            setTimeout(() => {
                setError(null)
            }, 2000)
        }
        if (data?.password) {
            setError(data?.password[0])
            setTimeout(() => {
                setError(null)
            }, 2000)
        }
        if (data?.status == 'account created') {
            // setVerificationMessage(data?.message)
            navigation.reset({
                index: 0,
                routes: [{ name: 'pending' }],
            });
        }
        if (data?.email) {
            setError(data?.email[0])
            setTimeout(() => {
                setError(null)
            }, 2000)
        }
    };

    return (
        <SafeAreaView style={styles.container}>
            <KeyboardAvoidingView
                enabled
                style={{ flex: 1 }}
                keyboardVerticalOffset={15}
                behavior={Platform.OS == 'ios' ? 'padding' : null}
            >
                <ScrollView showsVerticalScrollIndicator={false} style={styles.listWrapper} contentContainerStyle={{ alignItems: "center" }}>
                    <View style={styles.appInfoWrapper}>
                        <Text style={styles.appName}>Darawal</Text>
                        <Text style={styles.appDescription}>Welcom to Darawal we appreciate to have you</Text>
                    </View>
                    <Text style={styles.title}>Sign Up</Text>
                    {
                        error && (
                            <View style={styles.errorWrapper}>
                                <Text style={styles.errorText}>{JSON.stringify(error)}</Text>
                            </View>
                        )
                    }
                    <Formik
                        validationSchema={signupValidationSchema}
                        initialValues={{ name: "", phone_number: "", city: "", email: "", password: "", confirmPassword: "", accountNo: "", accountType: "", accountHolder: "" }}
                        onSubmit={(values) => { handleSignUp(values) }}
                    >
                        {
                            ({ errors, touched, setFieldTouched, handleBlur, handleChange, handleSubmit, values }) => (
                                <View style={styles.form}>
                                    <AuthTextField name="name" errors={errors} touched={touched} setFieldTouched={setFieldTouched} handleBlur={handleBlur} handleChange={handleChange} values={values} placeholder="Full Name" />
                                    <AuthTextField keyboardType='number-pad' name="phone_number" errors={errors} touched={touched} setFieldTouched={setFieldTouched} handleBlur={handleBlur} handleChange={handleChange} values={values} placeholder="Phone Number" />
                                    <AuthTextField name="city" errors={errors} touched={touched} setFieldTouched={setFieldTouched} handleBlur={handleBlur} handleChange={handleChange} values={values} placeholder="City" />
                                    <AuthTextField keyboardType='email-address' name="email" errors={errors} touched={touched} setFieldTouched={setFieldTouched} handleBlur={handleBlur} handleChange={handleChange} values={values} placeholder="Email" />
                                    <AuthTextField keyboardType='number-pad' name="accountNo" errors={errors} touched={touched} setFieldTouched={setFieldTouched} handleBlur={handleBlur} handleChange={handleChange} values={values} placeholder="Account Number" />
                                    <AuthTextField keyboardType='default' name="accountType" errors={errors} touched={touched} setFieldTouched={setFieldTouched} handleBlur={handleBlur} handleChange={handleChange} values={values} placeholder="Account Type" />
                                    <AuthTextField keyboardType='default' name="accountHolder" errors={errors} touched={touched} setFieldTouched={setFieldTouched} handleBlur={handleBlur} handleChange={handleChange} values={values} placeholder="Account Holder" />
                                    <AuthTextField name="password" errors={errors} touched={touched} setFieldTouched={setFieldTouched} handleBlur={handleBlur} handleChange={handleChange} values={values} secureTextEntry={true} placeholder="Password" />
                                    <AuthTextField name="confirmPassword" errors={errors} touched={touched} setFieldTouched={setFieldTouched} handleBlur={handleBlur} handleChange={handleChange} values={values} secureTextEntry={true} placeholder="Confirm Password" />
                                    <AuthenticationButton title='Sign up' errors={errors} handleSubmit={() => { handleSubmit(values) }} />
                                </View>
                            )
                        }
                    </Formik>
                    <View style={styles.bottomActionWrapper}>
                        <Text style={styles.or}>or?</Text>
                        <Pressable style={styles.segmentHolder} onPress={() => navigation.navigate('login')}>
                            <Text style={styles.loginText}>log in</Text>
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
        // alignItems: "center",
        padding: screenPadding,
        flex: 1,
    },
    segmentHolder: {
    },
    loginText: {
        color: colors.logoColor,
        marginLeft: 5,
        fontSize: 18
    },
    bottomActionWrapper: {
        marginVertical: 20,
        flexDirection: "row"
    },
    or: {
        fontSize: 18

    }

});

export default Signup;