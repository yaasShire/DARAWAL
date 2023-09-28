import * as yup from 'yup'

export const signupValidationSchema = yup.object().shape({

    name: yup
        .string()
        .min(9, ({ min }) => `full name number must be at least ${min} characters`)
        .required('required'),
    phone_number: yup
        .string()
        .min(10, ({ min }) => `phone number must be at least ${min} characters`)
        .required('required'),
    city: yup
        .string()
        .required('required'),
    email: yup
        .string()
        .email("Please enter a valid email")
        .required('required'),
    accountNo: yup
        .string()
        .required('required'),
    accountType: yup
        .string()
        .required('required'),
    accountHolder: yup
        .string()
        .required('required'),
    password: yup
        .string()
        .required('required'),
    confirmPassword: yup
        .string()
        .oneOf([yup.ref('password'), null], 'Passwords must match').required('required')

})
