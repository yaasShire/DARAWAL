import { View, Text, Image, ScrollView, TouchableOpacity, StatusBar } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import styles from './style'
import TextFieldC from '../../../components/atoms/textField'
import { Formik } from 'formik'
import { loginValidationSchema } from '../../../validations/login'
import CustomButton from '../../../components/atoms/button'
import SignInImage from '../../../assets/images/signin.png'
import { colors } from '../../../constants/globalStyles'
import AuthButton from '../../../components/atoms/authButton'
const Login = ({ navigation }) => {
    const handleSignIn = () => {
        navigation.navigate('bottomTabs')
    }
    return (
        <>
            <StatusBar barStyle="white-content" />
            <ScrollView style={styles.container}>
                <View style={styles.titlesHolder}>
                    <View >
                        <Text style={styles.title1}>welcome to</Text>
                        <Text style={styles.title2}>DARAWAL</Text>
                    </View>
                    <View>
                        <Text style={styles.description}>Earn money with us</Text>
                        <Text style={styles.description}>by delivering orders!</Text>
                    </View>
                </View>
                <View style={styles.imageHolder}>
                    <Image source={SignInImage} style={styles.image} />
                </View>
                <Formik
                    initialValues={{ phoneNumber: "", password: "" }}
                    validationSchema={loginValidationSchema}
                    onSubmit={handleSignIn}
                >
                    {
                        ({ errors, touched, setFieldTouched, handleBlur, handleChange, handleSubmit, values }) => (
                            <>
                                <View style={styles.fieldsHolder}>
                                    <TextFieldC title="Phone Number" name="phoneNumber" values={values} errors={errors} handleBlur={handleBlur} handleSubmit={handleSubmit} handleChange={handleChange} touched={touched} setFieldTouched={setFieldTouched} />
                                    <TextFieldC title="Password" name="password" values={values} errors={errors} handleBlur={handleBlur} handleSubmit={handleSubmit} handleChange={handleChange} touched={touched} setFieldTouched={setFieldTouched} />
                                </View>
                                <View style={styles.buttonHolder}>
                                    <AuthButton title='Login' color={colors.secondary} destination='bottomTabs' navigation={navigation} handleSubmit={handleSubmit} />
                                </View>
                            </>
                        )
                    }

                </Formik>



            </ScrollView>
        </>
    )
}

export default Login