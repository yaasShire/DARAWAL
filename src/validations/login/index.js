import * as yup from 'yup'

export const loginValidationSchema = yup.object().shape({

    phoneNumber: yup
        .string()
        .min(9, ({ min }) => `Phone number must be at least ${min} characters`)
        .required('Phone number is required'),
    password: yup
        .string()
        .min(8, ({ min }) => `Password must be at least ${min} characters`)
        .required('Password is required'),

})
