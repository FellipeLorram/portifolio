import styled from 'styled-components';
import { Section } from '../../styles/GlobalComponents';

export const ProjectSection = styled(Section)`
  padding-left: 15%;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
  @media ${(props) => props.theme.breakpoints.sm} {
    padding: 3rem;
  }

`;

export const MainProjectContainer = styled.div`
  cursor: pointer;
  margin-top: 8vh;
  width: 80%;
  display: flex; 
  align-items: center;
  justify-content: center;
  flex-direction: column;
  color: #fff;
  padding: 1rem;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  border-radius: 20px;
  transform: scale(.99);
  transition: all .2s ease-in-out;
  .left_side{
    width: 60%;
    background: #74e1ef;
    border-radius: 20px 0 0 20px;
  }
  .footer, .row{
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-direction: row;
  }

  .footer{
    color: ${(props) => props.theme.colors.primary};
    padding: 2rem 1rem 1rem 1rem;
    gap: 3rem;

    .link_a{
      padding: .5rem 1rem;
      background: #6937ff;
      border-radius: ${props => props.theme.radius.main};
      color: #fff;
      display: flex; 
      align-items: center;
      justify-content: center;
      gap: .5rem;
      text-transform: uppercase;
      font-size: 1.4rem;
    }

  }

  .row{
    justify-content: center;
  }

  img{
    height: 354px;
    width: 555px;    
  }

  :hover{
    transform: scale(1);
  }
  @media ${(props) => props.theme.breakpoints.sm} {
    width: 100%;

    .row{
      flex-direction: column;
    }
    img{
      height: 154px;
      width: 355px;    
      transform: translateX(-10%);
    }
    .left_side{
      width: 100%;
      border-radius: 20px 20px 0 0;

    }
    .footer{
      flex-direction: column;
      align-items: flex-start;
    }
  }


`;

export const MainProjectContainerInfo = styled.div`
  width: 40%;
  height: 100%;
  display: flex; 
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  background: #3a3c70;
  border-radius: 0 20px 20px 0;
  padding: 2rem 4rem;
  gap: 5rem;
  position: relative;

  .project_description{
    font-size: 2.5rem;
    text-align: left;
  }

  .tags_container{
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-direction: column;
    gap: 1rem
  }
  @media ${(props) => props.theme.breakpoints.sm} {
    padding: 2rem;
    gap: 3rem;
    width: 100%;
    border-radius: 0 0 20px 20px;
  }
`;

export const ProjectTitleContainer = styled.div`
  width: 100%;
  text-align: center;
  padding: 1rem;
  font-size: 1.5rem;
  text-transform: uppercase;
  font-weight: bold;
  letter-spacing: 1px;
`;
