import styled from "styled-components";

export const StyledInput = styled.input`
	height: 48px;
	padding: 0px 16px 0px 16px;
	border: 2px solid var(--color-grey-2);
	border-radius: 4px;
	width: 100%;
	background-color: var(--color-grey-2);
	color: var(--color-grey-0);
	font-weight: 400;
	font-size: 16px;
	line-height: 26px;

	&::placeholder {
		font-weight: 400;
		font-size: 16px;
		line-height: 26px;
		color: var(--color-grey-1);
	}

	&:focus {
		border-color: var(--color-grey-0);

		&::placeholder {
			color: var(--color-grey-0);
		}
	}
`;
