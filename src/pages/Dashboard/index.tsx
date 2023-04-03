import Card from "../../components/Card";
import Modal from "../../components/Modal";
import { StyledButtonMedium } from "../../styles/components/buttons";
import { StyledContainer } from "../../styles/components/container";
import { StyledTitle2 } from "../../styles/components/typography";
import "./style.css";
import { ModalContext } from "../../contexts/ModalsContext";
import { useContext, useState } from "react";
import { UserContext } from "../../contexts/UserContext";
import { Navigate } from "react-router-dom";

const Dashboard = () => {
	const { isOpen, contacts, openModal } = useContext(ModalContext);
	const { user, logout } = useContext(UserContext);
	const [options, setOptions] = useState(false);

	return (
		<>
			{user ? (
				<StyledContainer className="container">
					<div className="top_menu">
						{/* <StyledInput placeholder="Pesquisar por..." /> */}

						<div>
							<StyledButtonMedium
								onClick={() => setOptions(true)}
							>
								{user.name}
							</StyledButtonMedium>
							{options && (
								<div>
									<button
										className="close"
										onClick={() => setOptions(false)}
									>
										X
									</button>
									<StyledButtonMedium
										onClick={() => {
											openModal("updateUser");
											setOptions(false);
										}}
									>
										Editar
									</StyledButtonMedium>

									<StyledButtonMedium
										onClick={() => {
											logout();
											setOptions(false);
										}}
									>
										Sair
									</StyledButtonMedium>
								</div>
							)}
						</div>
					</div>

					<div className="menu">
						{/* <select name="" id="oio" onChange={order}>
							<option value="name">Nome</option>
							<option value="new">Mais recentes</option>
							<option value="old">Mais antigos</option>
						</select> */}

						<StyledButtonMedium
							color="--color-primary"
							onClick={() => openModal("addContact")}
						>
							+ Add Contato
						</StyledButtonMedium>
					</div>
					{isOpen && <Modal />}
					<div className="teste">
						<StyledTitle2 color="--color-grey-0">
							Meus Contatos
						</StyledTitle2>

						<ul className="lista">
							<div className="head">
								<span>Nome</span>
								<span>Email</span>
								<span>Telefone</span>
								<span>Opções</span>
							</div>

							{contacts.map((contact) => (
								<Card
									key={contact.id}
									id={contact.id}
									name={contact.name}
									email={contact.email}
									phoneNumber={contact.phoneNumber}
								/>
							))}
						</ul>
					</div>
				</StyledContainer>
			) : (
				<Navigate to={"/"} />
			)}
		</>
	);
};

export default Dashboard;
