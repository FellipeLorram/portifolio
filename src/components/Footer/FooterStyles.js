import styled from "styled-components"

export const FooterContainer = styled.section`
	background: #fff;
	min-height: 180vh;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: center;
  position: relative;

  ::before {
    content: '';
    border-top-left-radius: ${(props) => props.theme.radius.extraLarge};
    position: absolute;
    top: 0;
    left: 0;
    background: #6937ff;
    width: 100%;
    height: 100%;
    z-index: 0;
    @media ${(props) => props.theme.breakpoints.sm} {
    width: 98%;
    border-bottom-right-radius: ${(props) => props.theme.radius.large};
   }
  }

  @media ${props => props.theme.breakpoints.sm} {
  }
`;
