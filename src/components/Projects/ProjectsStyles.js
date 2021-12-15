import styled from 'styled-components';
import { Section } from '../../styles/GlobalComponents';

export const ProjectSection = styled(Section)`
  padding-left: 15%;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
  gap: 10rem;
  @media ${(props) => props.theme.breakpoints.sm} {
    padding: 1rem;
  }

`;

export const ProjectContainer = styled.div`
  width: 80%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 20px;
  padding: 2rem;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  position: relative;

  @media ${(props) => props.theme.breakpoints.sm} {
    padding: 0;
    width: 100%;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;

  }
`;

export const ProjectContainerInfo = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  flex-direction: column;
  justify-self: end;
  background: ${props => props.color};
  color: #fff;
  max-width: 50%;
  padding: 5rem 4rem;
  gap: 3.5rem;
  border-radius: 20px;

  .title{
    opacity: 0.8;
    font-size: 2rem;
  }
  .description{
    font-size: 3rem;
    line-height: 4rem;
  }
  .tags{
    width: 100%;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    flex-direction: row;
    opacity: 0.8;
  }

  .visit, .source{
    color: #fff;
    font-size: 2.5rem;
    position: relative;

    ::after{
      content: '';
      width: 40%;
      height: 2px;
      background: #fff;
      position: absolute;
      left: 0;
      bottom: -10%;
      transition: all .2s ease-in-out;
    }
    :hover{
      ::after{
        width: 100%;
      }
    }
  }

  .source{
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 4px;
    gap: .8rem;
    color: #fff;
    font-size: 1rem;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    max-width: 100%;
    padding: 2.5rem;
    gap: 2.5rem;

    .title{
      font-size: 1.5rem;
    }
    .description{
      font-size: 2rem;
    }
    .tags{
      flex-direction: column;
      align-items: flex-start;
      gap: 0.3rem;
    }
  }
`;

export const ProjectContainerImage = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  border-radius: 20px;
  z-index: -1;
  border-radius: 20px;
  background: rgba(0,0,0,0.4);

  img{
    width: 100%;
    height: 100%;
    border-radius: 20px;
  }
  @media ${(props) => props.theme.breakpoints.sm} {
    display: none;
  }
`;
