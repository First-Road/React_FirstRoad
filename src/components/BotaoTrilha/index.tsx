import { ReactNode } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components"

interface ItemProps {
    titulo: ReactNode;
    toValue: string
    descricao: string
}

const LinkEstilizado = styled(Link)`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100%;
    justify-content: center;
    color: #FFFFFF;
    font-size: 1.4rem;
    font-family: PoppinsBold;
    gap: 5px;
    text-decoration: none;
    &:hover{
        background-color: var(--principal-cor-4);
        border-radius: 25px;
    }
    

    
`

const NavegacaoEstilizada = styled.li`
    width: 650px;
    height: 140px;
    background-color: var(--principal-cor-2);
    border-radius: 25px;

    @media screen and (max-width: 700px){
        flex-wrap: wrap;
        width: 400px;
    }

    @media screen and (max-width: 420px){
        width: 280px;
    }
`

const TituloCard = styled.span`
    font-size: 20px;
    display: flex;
    font-family: PoppinsBold;
    width: 100%;
    justify-content: flex-start;
    padding: 0px 0px 0px 30px;
    margin: 0;

    @media screen and (max-width: 700px){
        flex-wrap: wrap;
        width: 400px;
        padding: 0px 0px 0px 20px;
    }

    @media screen and (max-width: 420px){
        align-items: center;
        justify-content: center;
        padding: 0px;
        font-size: 35px;
    }
`

const Paragrafo = styled.p`
    font-size: 14px;
    width: 95%;
    margin: 0;
    @media screen and (max-width: 420px){
        width: 280px;
        display: none;
    }

    span{
        font-size: 16px;
        font-family: PoppinsBold;
    }
`


const BotaoTrilha = (props: ItemProps) => {
    return (
        <>
        <NavegacaoEstilizada>
            <LinkEstilizado to={props.toValue}>
                <TituloCard>{props.titulo}</TituloCard>
                <Paragrafo><span>descrição: </span>{props.descricao}</Paragrafo>
            </LinkEstilizado>
        </NavegacaoEstilizada>
    </>
    )
}
export default BotaoTrilha;