import styled from "styled-components";

export const StyledSlogan = styled.div`
	width: 100%;
	margin: 0 auto;
	margin-top: 5rem;
	margin-bottom: 3.75rem;

	display: flex;
	flex-direction: column;
	gap: 0.625rem;
	max-width: 50rem;

	& > h1 {
		font-size: 3.75rem;
		font-weight: 800;
		color: var(--color-primary);
	}

	& > span {
		font-size: 1.25rem;
		font-weight: 500;
		align-self: flex-end;
		color: var(--color-grey-0);
	}

	@media (max-width: 450px) {
		align-items: center;
		justify-content: center;

		& > h1 {
			font-size: 2rem;
		}

		& > span {
			align-self: center;
			text-align: center;
		}
	}
`;
