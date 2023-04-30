import * as yup from 'yup'

export const otpVerification = yup.object().shape({
    input1: yup
        .string()
        .max(1, ({ max }) => `OTP number must be at most ${max} length. `)
        .required('OTP  number is required'),
    input2: yup
        .string()
        .max(1, ({ max }) => `OTP number must be at most ${max} length. `)
        .required('OTP  number is required'),
    input3: yup
        .string()
        .max(1, ({ max }) => `OTP number must be at most ${max} length. `)
        .required('OTP  number is required'),
    input4: yup
        .string()
        .max(1, ({ max }) => `OTP number must be at most ${max} length. `)
        .required('OTP  number is required'),

})
