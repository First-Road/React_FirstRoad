import { Link } from "react-router-dom";
import styled from "styled-components"

interface ItemProps {
    titulo: string;
    descricao: string;
    toValue: string
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
    gap: 20px;
    text-decoration: none;
    &:hover{
        background-color: var(--principal-cor-4);
        border-radius: 25px;
    }
    

    
`

const NavegacaoEstilizada = styled.li`
    width: 150px;
    height: 150px;
    background-color: var(--principal-cor-2);
    border-radius: 25px;

    @media screen and (max-width: 420px){
        width: 130px;
        height: 130px;
    }
`


const NavegacaoTelaTrilha = (props: ItemProps) => {
    return (
        <>
            <NavegacaoEstilizada>
                <LinkEstilizado to={props.toValue}>
                    <span>{props.titulo}</span>
                    <p>{props.descricao}</p>
                </LinkEstilizado>
            </NavegacaoEstilizada>
        </>
    )
}

export default NavegacaoTelaTrilha