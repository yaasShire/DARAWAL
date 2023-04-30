import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import styles from './style'
import { Ionicons } from '@expo/vector-icons'
const TextFieldC = ({ name = '', title = '', values = {}, handleChange = () => { }, handleBlur = () => { }, handleSubmit = () => { }, errors = {}, isValid = false, touched = false, setFieldTouched = () => { } }) => {
    const [showPassword, setShowPassword] = useState(true)
    return (
        <>
            <View style={styles.fieldHolder}>
                {title == "Choose Location" ? <TouchableOpacity style={styles.locationIconButton}><Ionicons style={styles.locationIcon} name='location' size={23} color="red" /></TouchableOpacity> : ''}

                <TextInput
                    keyboardType={title == 'email' ? 'email-address' : 'default'}
                    onChangeText={(text) => {
                        handleChange(name)(text)
                    }} onBlur={() => {
                        handleBlur(name)
                        setFieldTouched(name)
                    }} value={values[name]} numberOfLines={2} placeholder={title} style={styles.input} secureTextEntry={title == 'Password' && showPassword ? true : title == 'Confirm Password' && showPassword ? true : false} editable={title == 'Choose Location' ? false : true} />
                {title == 'Password' ? <TouchableOpacity onPress={() => setShowPassword(!showPassword)}><Ionicons name={showPassword ? 'eye' : 'eye-off'} size={23} /></TouchableOpacity> : title == 'Confirm Password' ? <TouchableOpacity onPress={() => setShowPassword(!showPassword)}><Ionicons name={showPassword ? 'eye' : 'eye-off'} size={23} /></TouchableOpacity> : ''}
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

export default TextFieldC