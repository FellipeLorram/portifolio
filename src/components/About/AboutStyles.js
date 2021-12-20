import styled from 'styled-components'

export const AboutContainer = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-direction: column;
    z-index:2;
    color: #fff;
    padding-top: 12rem;
    gap: 7rem;

    .top-side{
        padding-left: 15%;
        padding-right: 30%;
        display: flex;
        align-items: flex-start;
        justify-content: center;
        flex-direction: row;
        gap: 5rem;

        .about{
            color: #cdcbdf;
            line-height: 1.89;
            cursor: pointer;
            padding: 0 1rem;
            transition: all .1s ease-in-out;
            position: relative;
            margin-left: 5rem;

            ::before {
                content: '';
                top: 0;
                left: -7%;
                height: 100%;
                position: absolute;
                z-index:3;
                width: 7%;
                transition: all .2s ease-in-out;
            }
            ::after {
                content: '';
                top: 0;
                right: -27%;
                height: 100%;
                position: absolute;
                z-index:3;
                width: 27%;
                transition: all .2s ease-in-out;
            }

            :hover{
                background: rgba(0, 0, 0, 0.1);
                ::before{
                    background-image: linear-gradient(to right,  transparent,  rgba(0, 0, 0, 0.1));
                }
                ::after{
                    background-image: linear-gradient(to right, rgba(0, 0, 0, 0.1), transparent);
                }
            }
        }
    }

    .bottom-side{
        padding: 0 15%;
        padding-left: 20%;
        width: 100%;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        svg{
            transform: scale(0.7);
        }
    }
    .icon-container{
        padding: 1rem;
        display: flex;
        align-items: center;
        justify-content: center;
        border: 1px solid rgba(255, 255, 255, 0.1);
        border-top: none;
        transition: all 0.2s ease-in-out;

        :first-of-type{
            border-left: none;
        }

        :nth-of-type(3){
            border-right: none;
        }
        :nth-of-type(4){
            border-bottom: none;
            border-left: none;
        }
        :nth-of-type(5){
            border-bottom: none;
        }
        :nth-of-type(6){
            border-bottom: none;
            border-right: none;
        }

        :hover{
            background: rgba(0, 0, 0, 0.1);
        }
    }
`;