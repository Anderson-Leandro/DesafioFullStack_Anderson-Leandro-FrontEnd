import { useContext } from "react";
import { StyledButtonDefault } from "../../styles/components/buttons";
import { StyledInput } from "../../styles/components/inputs";
import { StyledTitle2 } from "../../styles/components/typography";
import { StyledModal } from "./style";
import { StyledFormContainer } from "../../styles/components/formContainer";
import { IAddContactData, ModalContext } from "../../contexts/ModalsContext";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { schemaAddContact } from "../../services/schema/schemaContact";
import { IUserUpdateData, UserContext } from "../../contexts/UserContext";
import { schemaUpdateUser } from "../../services/schema/schemaRegister";

const Modal = () => {
	const {
		addContact,
		modalType,
		setIsOpen,
		editContact,
		updateContact,
		updateUser,
	} = useContext(ModalContext);

	const { user } = useContext(UserContext);

	const { register, handleSubmit } = useForm<IAddContactData>({
		resolver: yupResolver(schemaAddContact),
	});

	const { register: register2, handleSubmit: handleSubmit2 } =
		useForm<IUserUpdateData>({
			resolver: yupResolver(schemaUpdateUser),
		});
	return (
		<>
			{modalType === "addContact" && (
				<StyledModal>
					<StyledFormContainer>
						<StyledTitle2 color="--color-grey-0">
							Informações do contato
						</StyledTitle2>
						<button
							className="close"
							onClick={() => setIsOpen(false)}
						>
							X
						</button>
						<form onSubmit={handleSubmit(addContact)}>
							<StyledInput
								placeholder="Nome"
								{...register("name")}
							/>
							<StyledInput
								placeholder="Email"
								{...register("email")}
							/>
							<StyledInput
								placeholder="Telefone"
								{...register("phoneNumber")}
							/>
							<StyledButtonDefault type="submit">
								Adicionar
							</StyledButtonDefault>
						</form>
					</StyledFormContainer>
				</StyledModal>
			)}

			{modalType === "updateContact" && (
				<StyledModal>
					<StyledFormContainer>
						<StyledTitle2 color="--color-grey-0">
							Editar contato
						</StyledTitle2>
						<button
							className="close"
							onClick={() => setIsOpen(false)}
						>
							X
						</button>
						<form onSubmit={handleSubmit(updateContact)}>
							<StyledInput
								placeholder="Nome"
								defaultValue={editContact.name}
								{...register("name")}
							/>
							<StyledInput
								placeholder="Email"
								defaultValue={editContact.email}
								{...register("email")}
							/>
							<StyledInput
								placeholder="Telefone"
								defaultValue={editContact.phoneNumber}
								{...register("phoneNumber")}
							/>
							<StyledButtonDefault type="submit">
								Adicionar
							</StyledButtonDefault>
						</form>
					</StyledFormContainer>
				</StyledModal>
			)}

			{modalType === "updateUser" && (
				<StyledModal>
					<StyledFormContainer>
						<StyledTitle2 color="--color-grey-0">
							Editar Usuario
						</StyledTitle2>
						<button
							className="close"
							onClick={() => setIsOpen(false)}
						>
							X
						</button>
						<form onSubmit={handleSubmit2(updateUser)}>
							<StyledInput
								placeholder="Nome"
								defaultValue={user?.name}
								{...register2("name")}
							/>
							<StyledInput
								placeholder="Email"
								defaultValue={user?.email}
								{...register2("email")}
							/>
							<StyledInput
								placeholder="Telefone"
								defaultValue={user?.phoneNumber}
								{...register2("phoneNumber")}
							/>

							<StyledInput
								placeholder="Senha"
								defaultValue={user?.password}
								{...register2("password")}
							/>

							<StyledInput
								placeholder="Confirmar senha"
								defaultValue={user?.password}
								{...register2("passwordConfirmation")}
							/>
							<StyledButtonDefault type="submit">
								Alterar
							</StyledButtonDefault>
						</form>
					</StyledFormContainer>
				</StyledModal>
			)}
		</>
	);
};

export default Modal;
