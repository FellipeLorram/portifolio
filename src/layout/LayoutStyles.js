import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-direction: row;
    min-height: 100vh;
    .side{
        width: 5%;
        min-height: 100vh;
    }
    .main{
        position: relative;
        width: 95%;
        overflow-y: auto;
        height: 100vh;
        overflow-x: hidden;
    }
    @media ${(props) => props.theme.breakpoints.sm} {
        .side{
            display: none;
        }
        .main{
            width: 100%;
        }
    }

`;
