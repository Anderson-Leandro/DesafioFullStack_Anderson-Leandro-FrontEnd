import * as yup from "yup";

export const schemaRegister = yup.object({
	name: yup.string().required("Campo obrigatório!"),
	email: yup
		.string()
		.required("Campo obrigatório!")
		.email("Deve ser um email válido"),
	phoneNumber: yup
		.string()
		.min(10, "Deve conter o DDD")
		.max(11, "Deve ter no máximo 11 digitos")
		.required("Campo obrigatório!"),
	password: yup
		.string()
		.required("Campo obrigatório!")
		.matches(/[A-Z]/, "Deve conter ao menos 1 letra maiúscula")
		.matches(/[a-z]/, "Deve conter ao menos 1 letra minúscula")
		.matches(/\d/, "Deve conter ao menos 1 número")
		.matches(/[\W|_]/, "Deve conter um caractere especial")
		.matches(/.{8,}/, "Deve ter no mínimo 8 caracteres"),
	passwordConfirmation: yup
		.string()
		.required("Campo obrigatótio!")
		.oneOf([yup.ref("password")], "As senhas devem ser iguais"),
});

export const schemaUpdateUser = yup.object({
	name: yup.string().optional(),
	email: yup.string().email("Deve ser um email válido").optional(),
	phoneNumber: yup
		.string()
		.min(10, "Deve conter o DDD")
		.max(11, "Deve ter no máximo 11 digitos")
		.optional(),
	password: yup
		.string()
		.matches(/[A-Z]/, "Deve conter ao menos 1 letra maiúscula")
		.matches(/[a-z]/, "Deve conter ao menos 1 letra minúscula")
		.matches(/\d/, "Deve conter ao menos 1 número")
		.matches(/[\W|_]/, "Deve conter um caractere especial")
		.matches(/.{8,}/, "Deve ter no mínimo 8 caracteres")
		.optional(),
	passwordConfirmation: yup
		.string()
		.oneOf([yup.ref("password")], "As senhas devem ser iguais")
		.optional(),
});
