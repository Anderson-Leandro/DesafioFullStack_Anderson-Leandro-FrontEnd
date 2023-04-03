import { useContext } from "react";
import { StyledButtonDefault } from "../../styles/components/buttons";
import { StyledContainer } from "../../styles/components/container";
import { StyledFormContainer } from "../../styles/components/formContainer";
import { StyledInput } from "../../styles/components/inputs";
import { StyledLinkDefault } from "../../styles/components/links";
import {
	StyledHeadline,
	StyledTitle1,
} from "../../styles/components/typography";
import { StyledSlogan } from "./style";
import {
	IUserContext,
	IUserLoginData,
	UserContext,
} from "../../contexts/UserContext";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { schemaLogin } from "../../services/schema/schemaLogin";

const Home = () => {
	const { userLogin } = useContext<IUserContext>(UserContext);

	const { register, handleSubmit } = useForm<IUserLoginData>({
		resolver: yupResolver(schemaLogin),
	});
	return (
		<>
			<StyledContainer>
				<StyledSlogan>
					<h1>Contacts.com</h1>
					<span>Seus contatos seguros e fáceis de encontrar!</span>
				</StyledSlogan>
				<StyledFormContainer>
					<StyledTitle1 color="--color-grey-0">
						Bem Vindo
					</StyledTitle1>
					<form onSubmit={handleSubmit(userLogin)}>
						<StyledInput
							placeholder="Email"
							{...register("email")}
						/>
						<StyledInput
							placeholder="Senha"
							type="password"
							{...register("password")}
						/>

						<StyledButtonDefault
							color="--color-primary"
							type="submit"
						>
							Entre
						</StyledButtonDefault>
					</form>

					<StyledHeadline color="--color-grey-0">
						Ainda não é cadastrado?
					</StyledHeadline>

					<StyledLinkDefault to={"/register"}>
						Cadastre-se
					</StyledLinkDefault>
				</StyledFormContainer>
			</StyledContainer>
		</>
	);
};

export default Home;
