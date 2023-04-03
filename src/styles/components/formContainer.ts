import styled from "styled-components";

export const StyledFormContainer = styled.section`
	width: 100%;
	max-width: 500px;
	margin: 0 auto;
	padding: 30px 18px;
	display: flex;
	flex-direction: column;
	gap: 25px;
	align-items: center;
	background-color: var(--color-grey-3);
	border-radius: 4px;

	& > form {
		width: 100%;
		display: flex;
		flex-direction: column;
		gap: 25px;
	}

	& > form > div {
		width: 100%;
		display: flex;
		flex-direction: column;
		gap: 18px;
	}

	& > a {
		width: 100%;
	}
`;
