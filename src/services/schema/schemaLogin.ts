import * as yup from "yup";

export const schemaLogin = yup.object({
    email: yup
    .string()
    .required('este campo é obrigatorio'),
    password: yup
    .string()
    .required('este campo é obrigatorio')
})