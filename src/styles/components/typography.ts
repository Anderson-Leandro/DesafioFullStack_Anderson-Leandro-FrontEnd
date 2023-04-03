import styled from "styled-components";

interface IColor {
	color: string;
}

export const StyledTitle1 = styled.h1`
	font-size: 18px;
	line-height: 28px;
	font-weight: 700;
	color: var(${(props: IColor) => props.color});
`;

export const StyledTitle2 = styled.h2`
	font-size: 16px;
	line-height: 26px;
	font-weight: 700;
	color: var(${(props: IColor) => props.color});
`;

export const StyledTitle3 = styled.h3`
	font-size: 14px;
	line-height: 24px;
	font-weight: 700;
	color: var(${(props: IColor) => props.color});
`;

// texts

export const StyledHeadline = styled.span`
	font-size: 12px;
	line-height: 22px;
	font-weight: 400;
	color: var(${(props: IColor) => props.color});
`;

export const StyledHeadlineBold = styled(StyledHeadline)`
	font-weight: 600;
`;

export const StyledHeadlineItalic = styled(StyledHeadline)`
	font-style: italic;
`;

export const StyledLabel = styled.label`
	font-size: 12px;
	line-height: 12px;
	font-weight: 400;
	color: var(${(props: IColor) => props.color});
`;
