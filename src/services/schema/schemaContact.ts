import * as yup from "yup";

export const schemaAddContact = yup.object({
	name: yup.string().required("O título é obrigatorio"),
	email: yup.string().email().required("O email é obrigatório"),
	phoneNumber: yup
		.string()
		.min(10, "Inserir número com ddd")
		.max(11)
		.required("O tefone é obrigatório"),
});
