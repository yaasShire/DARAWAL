import * as yup from 'yup'

export const loginValidationSchema = yup.object().shape({

    email: yup
        .string()
        .email("Please enter a valid email")
        .required('required'),
    password: yup
        .string()
        .required('required')

})
