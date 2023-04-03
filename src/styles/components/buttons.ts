import styled, { css } from "styled-components";

interface IColor {
	color?: string;
}

export const StyledButtonDefault = styled.button`
	height: 48px;
	padding: 0px 20px 0px 20px;
	border-radius: 4px;
	width: 100%;

	${({ color }: IColor) => {
		if (color === "--color-primary") {
			return css`
				color: white;
				background: var(--color-primary);
				border: 2px solid var(--color-primary);

				&:hover {
					background-color: var(--color-primary-focus);
					border-color: var(--color-primary-focus);
				}

				&:disabled {
					background: var(--color-primary-disable);
					border: 2px solid var(--color-primary-disable);
				}
			`;
		} else if (color === "--color-primary-disable") {
			return css`
				color: white;
				background: var(--color-primary-disable);
				border: 2px solid var(--color-primary-disable);
			`;
		} else {
			return css`
				color: var(--color-white);
				background: var(--color-grey-2);
				border: 2px solid var(--color-grey-2);

				&:hover {
					background-color: var(--color-grey-1);
					border-color: var(--color-grey-1);
				}
			`;
		}
	}}
`;

export const StyledButtonMedium = styled(StyledButtonDefault)`
	height: 32px;
`;
