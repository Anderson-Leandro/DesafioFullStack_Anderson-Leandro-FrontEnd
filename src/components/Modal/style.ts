import styled from "styled-components";

export const StyledModal = styled.div`
	width: 100vw;
	height: 100vh;
	display: flex;
	justify-content: center;
	align-items: center;
	position: fixed;
	top: 0;
	left: 0;
	z-index: 10;
	background-color: rgba(0, 0, 0, 0.7);

	& > section {
		position: relative;
	}

	& > section > button {
		position: absolute;
		top: 0.5rem;
		right: 0.5rem;
		background-color: rgba(205, 37, 37, 0.85);
		font-size: 20px;
		color: var(--color-grey-0);
		padding: 0.5rem 0.8rem;
		border: none;
		border-radius: 50%;
	}
`;
