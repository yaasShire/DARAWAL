import * as yup from 'yup'

export const resetPasswordValidation = yup.object().shape({
    email: yup
        .string()
        .email("Please enter a valid email")
        .required('required'),
    name: yup
        .string()
        .required('required')

})
