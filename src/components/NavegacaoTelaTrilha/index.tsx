import { Link } from "react-router-dom";
import styled from "styled-components"
import { useNavigate } from "react-router-dom";

interface ItemProps {
    titulo: string;
    descricao: string;
    id?: string;
}

const LinkEstilizado = styled(Link)`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100%;
    justify-content: center;
    color: #FFFFFF;
    gap: 25px;
    text-decoration: none;
    @media screen and (max-width: 420px){
        gap: 40px;
    }
    
    
    p{
        height: 100%;
        font-size: 14px;
        margin: 0px;
        padding: 10px;
        display: flex;
        align-items: flex-start;
        justify-content: center;
        @media screen and (max-width: 420px){
            padding: 0px 5px;
        }
    }
    &:hover{
        background-color: var(--principal-cor-4);
        border-radius: 25px;
    }
    

    
`

const ContainerTitulo = styled.div`
    width: 100%;
    height: 20%;
    span{
        height: 100%;
        font-size: 18px;
        margin: 0px;
        font-family: PoppinsBold;
        display: flex;
        align-items: flex-start;
        justify-content: center;
        padding: 20px 10px 0px 10px;
    }
`



const NavegacaoEstilizada = styled.li`
    width: 250px;
    height: 250px;
    background-color: var(--principal-cor-2);
    border-radius: 25px;
    @media screen and (max-width: 520px) {
        width: 200px;
        height: 300px;
    }
    @media screen and (max-width: 420px){
        width: 300px;
        height: 165px;
    }
`




const NavegacaoTelaTrilha = (props: ItemProps) => {

    const navigate = useNavigate();

    function redirecionarConteudo() {
        navigate("/PGModulos/" + props.id);
    }
    return (
        <>
            <NavegacaoEstilizada onClick={redirecionarConteudo}>
                <LinkEstilizado>
                    <ContainerTitulo>
                        <span>{props.titulo}</span>
                    </ContainerTitulo>

                    <p>{props.descricao}</p>
                </LinkEstilizado>
            </NavegacaoEstilizada>
        </>
    )
}

export default NavegacaoTelaTrilha