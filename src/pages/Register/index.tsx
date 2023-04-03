import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { StyledButtonDefault } from "../../styles/components/buttons";
import { StyledContainer } from "../../styles/components/container";
import { StyledFormContainer } from "../../styles/components/formContainer";
import { StyledInput } from "../../styles/components/inputs";
import {
	StyledHeadline,
	StyledTitle1,
} from "../../styles/components/typography";
import {
	IUserContext,
	IUserRegisterData,
	UserContext,
} from "../../contexts/UserContext";
import { schemaRegister } from "../../services/schema/schemaRegister";
import { useContext } from "react";
import { StyledLinkDefault } from "../../styles/components/links";
import "./style.css";

const Register = () => {
	const { registerUser } = useContext<IUserContext>(UserContext);

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<IUserRegisterData>({
		resolver: yupResolver(schemaRegister),
	});

	return (
		<>
			<StyledContainer className="register_container">
				{/* <StyledSlogan></StyledSlogan> */}
				<StyledFormContainer>
					<StyledTitle1 color="--color-grey-0">
						Cadastre-se
					</StyledTitle1>
					<form onSubmit={handleSubmit(registerUser)}>
						<StyledInput
							placeholder="Nome completo"
							{...register("name")}
						/>
						{errors.name?.message && (
							<StyledHeadline color="--color-grey-0">
								{errors.name.message}
							</StyledHeadline>
						)}
						<StyledInput
							placeholder="Email"
							{...register("email")}
						/>
						{errors.email?.message && (
							<StyledHeadline color="--color-grey-0">
								{errors.email.message}
							</StyledHeadline>
						)}
						<StyledInput
							placeholder="Telefone"
							{...register("phoneNumber")}
						/>
						{errors.phoneNumber?.message && (
							<StyledHeadline color="--color-grey-0">
								{errors.phoneNumber.message}
							</StyledHeadline>
						)}

						<StyledInput
							placeholder="Senha"
							type="password"
							{...register("password")}
						/>
						{errors.password?.message && (
							<StyledHeadline color="--color-grey-0">
								{errors.password.message}
							</StyledHeadline>
						)}
						<StyledInput
							placeholder="Confirmar Senha"
							type="password"
							{...register("passwordConfirmation")}
						/>
						{errors.passwordConfirmation?.message && (
							<StyledHeadline color="--color-grey-0">
								{errors.passwordConfirmation.message}
							</StyledHeadline>
						)}

						<StyledButtonDefault
							color="--color-primary"
							type="submit"
						>
							Cadastrar
						</StyledButtonDefault>
					</form>

					<StyledHeadline color="--color-grey-0">
						Já possui cadastro?
					</StyledHeadline>

					<StyledLinkDefault to={"/"}>Fazer Login</StyledLinkDefault>
				</StyledFormContainer>
			</StyledContainer>
		</>
	);
};

export default Register;
