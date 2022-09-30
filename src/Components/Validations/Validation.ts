import * as yup from "yup"



export const schema  = yup.object().shape({
    name: yup.string().required('Name is required'),
    email: yup.string().email().required('A valid email is required'),
    password: yup.string().min(4).max(25).required('Your password must be between 4 and 25 characters'),
    confirmPassword: yup.string().oneOf([yup.ref("password"), null]).required('Your password must be equals'),
});