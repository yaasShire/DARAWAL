import { View, Text } from 'react-native'
import React from 'react'
import { TextInput } from 'react-native-paper'

const ProfileField = ({ placeHolder, focus = false, handleBlur = () => { }, handleChange = () => { }, errors = {}, value = "", name = "", touched = false, setFieldTouched = () => { }, email = false, keyType = "default" }) => {
    return (
        <TextInput
            autoFocus={focus}
            style={{ width: "90%", color: "#000", }}
            label={placeHolder}
            right={email && <TextInput.Icon icon="email" />}
            keyboardType={keyType}
            mode='flat'
            onChangeText={(text) => {
                handleChange(name)(text)
            }} onBlur={() => {
                handleBlur(name)
                setFieldTouched(name)
            }}
            value={value}
        />
    )
}

export default ProfileField