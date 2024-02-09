
import { FaBookBookmark } from "react-icons/fa6";
import { MdQuiz } from "react-icons/md";
import { FaInfoCircle } from 'react-icons/fa'
import styled from "styled-components";
import { ReactNode } from "react";
import { Link } from "react-router-dom";
import BotaoPadrao from "../BotaoPadrao/BotaoPadrao";

interface ModuloProps {
    titulo: ReactNode;
    textoModulo: ReactNode
    link: string
}

const Secao = styled.section`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
`

const Header = styled.div`
    display: flex;
    width: 100%;
    height: 100px;
    background-color: var(--principal-cor-5);
    justify-content: center;
    align-items: center;

    h1{
        font-family: PoppinsBold;
        font-size: 35px;
        color: white ;
        @media screen and (max-width: 768px){
            font-size: 25px;
        }
        @media screen and (max-width: 520px){
            font-size: 20px; 
        }
        @media screen and (max-width: 450px){
            font-size: 16px; 
        }
    }
`

const Conteudo = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: center;
    gap: 40px;

    p{
        font-size: 20px;
        text-align: center;
        width: 70%;
        @media screen and (max-width: 768px){
            font-size: 16px;
        }
    }
`

const LinksContainer = styled.div`
    width: 60%;
    display: flex;
    justify-content: space-between;
    @media screen and (max-width: 768px){
        width: 80%;
    }
`

const LinkEstilizado = styled(Link)`
    color: black;
    text-decoration: none;

    div{
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 10px;
        text-align: center;

        &:hover{
            text-decoration: underline var(--principal-cor-2) 2px;
        }

        span{
            font-size: 20px;
            cursor: pointer;
            @media screen and (max-width: 768px){
                font-size: 16px;
                text-align: center;
            }
        }
    }

    
`

const Material = styled(FaBookBookmark)`
    width: 80px;
    height: 80px;
    color: var(--principal-cor-2);
    cursor: pointer;

    @media screen and (max-width: 768px){
        width: 50px;
        height: 50px;
    }
`
const Quiz = styled(MdQuiz)`
    width: 80px;
    height: 80px;
    color: var(--principal-cor-2);
    cursor: pointer;

    @media screen and (max-width: 768px){
        width: 50px;
        height: 50px;
    }

`
const Suporte = styled(FaInfoCircle)`
    width: 80px;
    height: 80px;
    color: var(--principal-cor-2);
    cursor: pointer;

    @media screen and (max-width: 768px){
        width: 50px;
        height: 50px;
    }
`


const ContainerBotao = styled.div`
    width: 70%;
    display: flex;
    justify-content: flex-end;
    padding-bottom: 50px;

`



const Modulo = (props: ModuloProps) => {
    return (
        <Secao>
            <Header>
                <h1>{props.titulo}</h1>
            </Header>

            <Conteudo>
                <p>{props.textoModulo}</p>

                <LinksContainer>
                    <LinkEstilizado to={props.link}>
                        <div>
                            <Material />
                            <span>Material do Módulo</span>
                        </div>
                    </LinkEstilizado>
                    <LinkEstilizado to=''>
                        <div>
                            <Quiz />
                            <span>Quiz</span>
                        </div>
                    </LinkEstilizado>
                    <LinkEstilizado to=''>
                        <div>
                            <Suporte />
                            <span>Suporte</span>
                        </div>
                    </LinkEstilizado>
                </LinksContainer>
            </Conteudo>

            <ContainerBotao>
                <BotaoPadrao>Finalizar</BotaoPadrao>
            </ContainerBotao>
        </Secao>
    )
}
export default Modulo