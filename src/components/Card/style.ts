import styled from "styled-components";

export const StyledCard = styled.li`
	display: flex;
	justify-content: space-between;
	align-items: center;
	background-color: var(--color-grey-new);
	color: var(--color-white);
	border-radius: 0.5rem;
	padding: 1rem 0.5rem;
	position: relative;

	& > span {
		width: 30%;
	}
	& > span + span {
		width: 35%;
	}
	& > span + span + span {
		width: 20%;
	}

	& > button {
		margin-right: 1rem;
		transform: rotate(90deg);
		border: none;
		background-color: none;
		font-size: 1.25rem;
		color: var(--color-grey-0);
	}

	& > div {
		position: absolute;

		top: 3px;
		right: 5px;

		display: flex;
		align-items: center;
		flex-direction: row-reverse;
		padding: 1rem;
		gap: 5px;
		z-index: 20;
		background-color: var(--color-grey-3);
		border-radius: 8px;
	}

	& > div .close {
		background-color: rgba(205, 37, 37, 0.85);
		font-size: 20px;
		color: var(--color-grey-0);
		padding: 0.5rem 0.8rem;
		border: none;
		border-radius: 50%;
	}

	@media (max-width: 750px) {
		flex-direction: column;
		align-items: flex-start;
		width: 100%;
		padding-left: 1rem !important;
		position: relative;
		gap: 0.3125rem;

		& > span {
			width: 100% !important;
		}

		& > button {
			position: absolute;
			top: 0.625rem;
			right: 0.3125rem;
		}
	}
`;
