import { View, Text, TextInput } from 'react-native'
import React, { useState } from 'react'
import styles from './style'
import { Ionicons } from '@expo/vector-icons'
const AuthTextField = ({ placeholder = "", secureTextEntry = false, errors = {}, touched = {}, setFieldTouched = () => { }, handleBlur = () => { }, handleChange = () => { }, values = {}, name = "", keyboardType = 'default' }) => {
    const [showPassword, setShowPassword] = useState(secureTextEntry)
    return (
        <>
            {(errors[name] && touched[name]) && (
                <View style={styles.errorHolder}>
                    <Text style={styles.errorText}>*{errors[name]}</Text>
                </View>
            )
            }
            <View style={styles.inputWrapper}>
                <TextInput
                    keyboardType={keyboardType}
                    style={styles.input}
                    placeholder={placeholder}
                    secureTextEntry={showPassword}
                    onChangeText={(text) => {
                        handleChange(name)(text)
                    }} onBlur={() => {
                        handleBlur(name)
                        setFieldTouched(name)
                    }}
                    value={values[name]}
                />
                {
                    secureTextEntry && (
                        <Ionicons onPress={() => setShowPassword(!showPassword)} name={showPassword ? 'eye-off' : 'eye'} size={23} />

                    )
                }

            </View>

        </>
    )
}

export default AuthTextField