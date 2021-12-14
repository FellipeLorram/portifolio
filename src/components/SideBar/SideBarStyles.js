import styled from "styled-components"

export const SideBarContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: flex-end;
	flex-direction: column;
	gap: 1.5rem;
	height: 100vh;
	padding: 2rem;
	padding-bottom: 4rem;
	border-right: 1px solid ${props => props.theme.colors.border};
	
	@media ${props => props.theme.breakpoints.sm}{
		display: none;
	}


`;

export const IconContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;

	padding: .5rem;
	border-radius: ${props => props.theme.radius.main};
	cursor: pointer;
	transition: all .4s ease-in-out;

	:hover{
		background: ${props => props.theme.colors.secondary} ;
	}
`;
