import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledLinkDefault = styled(Link)`
	height: 48px;
	padding: 0px 20px 0px 20px;
	border-radius: 4px;
	width: 100%;

	font-weight: 500;
	font-size: 14px;
	line-height: 21px;

	color: var(--color-white);
	background: var(--color-grey-2);
	border: 2px solid var(--color-grey-2);

	display: flex;
	justify-content: center;
	align-items: center;

	text-decoration: none;

	&:hover {
		background-color: var(--color-grey-1);
		border-color: var(--color-grey-1);
	}
`;

export const StyledLinkMedium = styled(StyledLinkDefault)`
	height: 40px;
	padding: 0px 16px 0px 16px;

	background: var(--color-grey-3);
	border: 2px solid var(--color-grey-3);

	&:hover {
		background-color: var(--color-grey-2);
		border-color: var(--color-grey-2);
	}
`;
