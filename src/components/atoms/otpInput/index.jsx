import { useEffect } from 'react'
import { View, Text, TextInput } from 'react-native'
import React from 'react'
import styles from './style'
const OtpInput = ({ input, input1 = () => { }, inputFocus = false, values, errors, handleSubmit, handleChange, handleBlur, touched, setFieldTouched, name, reference = "" }) => {

    return (
        <>
            <View style={styles.inputHolder}>
                <TextInput value={values[name]} onBlur={() => {
                    handleBlur(name)

                    setFieldTouched(name)
                }} onChangeText={(text) => {
                    handleChange(name)(text)
                }} returnKeyType='next' autoFocus={inputFocus} style={styles.input} keyboardType='number-pad' maxLength={1} />
            </View>
            <View>
                {(errors[name] && touched[name]) && (
                    <View style={styles.errorHolder}>
                        <Text style={styles.errorText}>{errors[name]}</Text>
                    </View>
                )
                }
            </View>
        </>
    )
}

export default OtpInput