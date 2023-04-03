import { useContext, useState } from "react";
import { StyledCard } from "./style";
import { StyledButtonMedium } from "../../styles/components/buttons";
import { ModalContext } from "../../contexts/ModalsContext";

interface ICardProps {
	id: string;
	name: string;
	email: string;
	phoneNumber: string;
}

const Card = ({ id, name, email, phoneNumber }: ICardProps) => {
	const ddd = phoneNumber.slice(0, 2);
	const number = phoneNumber.slice(2);

	const { getContact, deleteContact } = useContext(ModalContext);

	const [options, setOptions] = useState(false);

	return (
		<StyledCard>
			<span>{name}</span>
			<span>{email}</span>
			<span>
				({ddd}) {number}
			</span>
			<button onClick={() => setOptions(true)}>...</button>
			{options && (
				<div>
					<button className="close" onClick={() => setOptions(false)}>
						X
					</button>
					<StyledButtonMedium
						onClick={() => {
							getContact(id);
							setOptions(false);
						}}
					>
						Editar
					</StyledButtonMedium>

					<StyledButtonMedium
						onClick={() => {
							deleteContact(id);
							setOptions(false);
						}}
					>
						Excluir
					</StyledButtonMedium>
				</div>
			)}
		</StyledCard>
	);
};

export default Card;
