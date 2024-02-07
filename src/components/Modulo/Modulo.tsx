
import { FaBookBookmark } from "react-icons/fa6";
import { MdQuiz } from "react-icons/md";
import { FaInfoCircle } from 'react-icons/fa'
import styled from "styled-components";
import { ReactNode } from "react";
import { Link } from "react-router-dom";

interface ModuloProps {
    titulo: ReactNode;
    tituloCard: ReactNode
    textoModulo: ReactNode
    textoCard: ReactNode
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

    p{
        font-size: 20px;
        text-align: center;
        width: 90%;
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

const CardInstrucao = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    height: 200px;
    justify-content: space-evenly;
    width: 80%;
    background-color: var(--auxiliar-cor-7);
    border-radius: 8px;
    margin-bottom: 20px;

    h2{
        font-family: PoppinsBold;
        font-size: 25px;
        color: white;
        margin: 0px;

        @media screen and (max-width: 768px){
            font-size: 20px;
        }

        @media screen and (max-width: 520px){
            font-size: 16px;
        }
    }

    p{
        font-size: 20px;
        text-align: center;
        width: 90%;
        color: white;
        margin: 0px;

        @media screen and (max-width: 768px){
            font-size: 16px;
        }

        @media screen and (max-width: 520px){
            font-size: 14px; 
        }
    }

    div{
        display: flex;
        justify-content: center;
        gap: 20px;
        
        button{
            padding: 8px;
            width: 100px;
            border: none;
            background-color: var(--principal-cor-2);
            border-radius: 8px;
            color: white;
            font-size: 16px;

            &:hover{
                background-color: var(--principal-cor-4);
                transition: .7s;
                transform: scale(1.1);
            }  
        }
    }
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
                    <LinkEstilizado to=''>
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

            <CardInstrucao>
                <h2>{props.tituloCard}</h2>
                <p>{props.textoCard}</p>
                <div>
                    <div>
                        <button>Acessar</button>
                    </div>

                    <div>
                        <button>Finalizar</button>
                    </div>
                </div>
            </CardInstrucao>
        </Secao>
    )
}
export default Modulo