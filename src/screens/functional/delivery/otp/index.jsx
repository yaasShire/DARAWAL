import React, { useState, useRef, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { postData } from '../../../../api/functional/postData';
import SuccessOTPModal from './components/successModalOTP';
import StatusBarComponent from '../../../../components/atoms/statusBar';
// import SuccessOTPModal from './components/successModal';



const OTP = ({ route, navigation }) => {
    const [otp, setOTP] = useState('')
    const [error, setError] = useState(null)
    const [isLoading, setIsLoading] = useState(true)
    const [otpResponseModal, setOtpResponseModal] = useState(false)
    const [verificationResult, setVerificationResult] = useState('')
    const [successModalOtp, setSuccessModalOtp] = useState(false)
    const inputRef1 = useRef(null);
    const inputRef2 = useRef(null);
    const inputRef3 = useRef(null);
    const inputRef4 = useRef(null);
    const inputRef5 = useRef(null);
    const inputRef6 = useRef(null);

    const handleOTPChange = (value, inputRef) => {
        setOTP((prevOTP) => {
            const newOTP = prevOTP + value;
            if (newOTP.length === 6) {
                handleVerifyOTP(newOTP);
            } else {
                inputRef.current.focus();
            }
            return newOTP;
        });
    };

    const handleVerifyOTP = async (newOTP) => {
        const formData = new FormData()
        formData.append('UOID', route?.params?.id)
        formData.append('OTP', Number(newOTP))
        formData.append('type', 2)
        console.log(formData)
        const { result } = await postData('agent/orders/verifyotp', formData, setError, setIsLoading)
        console.log(result)
        setSuccessModalOtp(true)
        if (result?.status) {
            setVerificationResult(result?.status)
        }

    };

    const handleClearOTP = () => {
        setOTP('');
        inputRef1.current.focus();
    };
    useEffect(() => {
        (() => {
            inputRef1.current.focus();
        })()
    }, [])

    return (
        <View style={styles.container}>
            <StatusBarComponent />
            <Text style={styles.title}>Enter OTP</Text>
            <Text style={styles.subtitle}>Please enter the 6-digit code sent to your phone.</Text>
            <View style={styles.inputContainer}>
                <TextInput
                    ref={inputRef1}
                    style={styles.input}
                    onChangeText={(value) => handleOTPChange(value, inputRef2)}
                    value={otp[0] || ''}
                    keyboardType="numeric"
                    maxLength={1}
                    autoFocus
                />
                <TextInput
                    ref={inputRef2}
                    style={styles.input}
                    onChangeText={(value) => handleOTPChange(value, inputRef3)}
                    value={otp[1] || ''}
                    keyboardType="numeric"
                    maxLength={1}
                />
                <TextInput
                    ref={inputRef3}
                    style={styles.input}
                    onChangeText={(value) => handleOTPChange(value, inputRef4)}
                    value={otp[2] || ''}
                    keyboardType="numeric"
                    maxLength={1}
                />
                <TextInput
                    ref={inputRef4}
                    style={styles.input}
                    onChangeText={(value) => handleOTPChange(value, inputRef5)}
                    value={otp[3] || ''}
                    keyboardType="numeric"
                    maxLength={1}
                />
                <TextInput
                    ref={inputRef5}
                    style={styles.input}
                    onChangeText={(value) => handleOTPChange(value, inputRef6)}
                    value={otp[4] || ''}
                    keyboardType="numeric"
                    maxLength={1}
                />
                <TextInput
                    ref={inputRef6}
                    style={styles.input}
                    onChangeText={(value) => handleOTPChange(value, null)}
                    value={otp[5] || ''}
                    keyboardType="numeric"
                    maxLength={1}
                />
            </View>
            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.button} onPress={handleClearOTP}>
                    <Text style={styles.buttonText}>Clear</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={handleVerifyOTP}>
                    <Text style={styles.buttonText}>Verify OTP</Text>
                </TouchableOpacity>
            </View>
            <SuccessOTPModal handleClearOTP={handleClearOTP} verificationResult={verificationResult} successModalOtp={successModalOtp} setSuccessModalOtp={setSuccessModalOtp} navigation={navigation} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    subtitle: {
        fontSize: 16,
        textAlign: 'center',
        marginBottom: 30,
    },
    inputContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 30,
        paddingHorizontal: 10,
        width: "100%"
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        padding: 10,
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        width: 60,
        height: 60,
    },
    buttonContainer: {
        flexDirection: 'row',
    },
    button: {
        backgroundColor: '#007AFF',
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 5,
        marginRight: 10,
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
});

export default OTP;