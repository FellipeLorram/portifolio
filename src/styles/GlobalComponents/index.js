import styled from 'styled-components'

export const Section = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  min-height: 100vh;
  position: relative;

  @media ${(props) => props.theme.breakpoints.md} {
   
  }

  @media ${(props) => props.theme.breakpoints.sm} {
  }
`

export const SectionTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100%;

@media ${props => props.theme.breakpoints.md}{
  }

  @media ${props => props.theme.breakpoints.sm}{
    margin-bottom: 8vh;
  }
`

export const SectionDivider = styled.div`
  height: 15vh;  
  width: 100%;

  @media ${props => props.theme.breakpoints.md}{
  }

  @media ${props => props.theme.breakpoints.sm}{
    height: 8vh;  
  }
`

