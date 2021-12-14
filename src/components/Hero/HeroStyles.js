import styled from 'styled-components';
import { Section } from '../../styles/GlobalComponents';

export const HeroSection = styled(Section)`
  ::before {
    content: '';
    border-bottom-right-radius: ${(props) => props.theme.radius.extraLarge};
    position: absolute;
    top: 0;
    left: 0;
    background: rgba(230, 230, 255, 0.3);
    width: 95%;
    height: 97%;
    z-index: -1;
    @media ${(props) => props.theme.breakpoints.sm} {
    width: 98%;
    border-bottom-right-radius: ${(props) => props.theme.radius.large};
   }
  }

`;

export const MessageButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${props => props.theme.colors.secondary};
  border-radius: ${props => props.theme.radius.main};
  color: ${props => props.theme.colors.primary};
  padding: 1rem 1.5rem;
  cursor: pointer;
  box-shadow: rgba(17, 12, 46, 0.35) 0px 48px 100px 0px;
  gap: 1rem;
  font-size: 3rem;
  transition: all .3s ease-in-out;
  :hover{
    transform: scale(1.01);
  }
  svg{
    width: 30px;
    height: 30px;
  }
`;

export const FreeLanceText = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: #6937ff;
  border-radius: ${props => props.theme.radius.main};
  color: #fff;
  padding: .5rem 1rem;
  gap: 1rem;
  transition: all .3s ease-in-out;
  cursor: pointer;
  box-shadow: rgba(17, 12, 46, 0.35) 0px 48px 100px 0px;
  :hover{
    transform: scale(1.01);
  }
  svg{
    stroke: #fff;
  }

  
`;

export const LeftSide = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  padding-left: 12%;
  gap: 3rem;
  .text{
    text-align: left;
    line-height: 20px;
  }

  p{
    font-size: 1.3rem;
  }

  .big{
    font-size: 2rem;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    padding: 3rem;
    .big{
      font-size: 1.3rem;
    }
    .text{
      text-align: left;
      line-height: 20px;
    }

  }
  @media ${(props) => props.theme.breakpoints.md} {
    width: 100%;
    display: flex;
    flex-direction: column;

    margin: 0 auto;
  }
`;

export const RigthSide = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: center;

  @media ${(props) => props.theme.breakpoints.sm} {
    width: 80%;
    display: flex;
    flex-direction: column;
    margin: 0 auto;
  }
  @media ${(props) => props.theme.breakpoints.md} {
    width: 100%;
    display: flex;
    flex-direction: column;

    margin: 0 auto;
  }
`;
