import styled from "styled-components"


export const ContactContainer = styled.div`
width: 100%;
height: 80vh;
position: relative;
color: #fff;
display: flex;
align-items: center;
justify-content: space-between;
flex-direction: row;
color: #fff;
padding: 5rem;
.button-container{
    width: 100%;
    justify-content: center;
    align-items: flex-start;
    display: flex;
}
::before{
    content: '';
    border-top-right-radius: ${(props) => props.theme.radius.extraLarge};
    position: absolute;
    top: 0;
    left: 0;
    background: #221e41;
    width: 97%;
    height: 100%;
}
.copy{
    position: absolute;
    left: 15rem;
    bottom: 2rem;
    color: rgba(255,255,255,0.5);
}
`;



export const TextContainer = styled.div`
z-index: 2;
color: #fff;
width: 50%;
padding-left: 15rem;
.main-text{
    font-size: 4.3rem;
    font-weight: bold;
    margin-bottom: 2rem;
    line-height: 1.48;

}
.sub-text{
    font-size: 2rem;
    color: #cdcbdf;
    line-height: 1.5;
}

`;

export const MessageButton = styled.div`
display: flex;
align-items:center;
justify-content: center;
flex-direction: row;
z-index:2;
background: rgba(0,173,255,0.9);
padding: 2rem;
gap: 1.4rem;
transition: all 0.3s ease-in-out;
letter-spacing: 0.4px;
border-radius: 10px;
font-size:1.8rem;
cursor: pointer;
svg{
    stroke: #fff;
}
:hover{
    background: rgba(0,173,255,0.7);
}
`;
