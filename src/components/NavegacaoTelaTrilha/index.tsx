import { Link } from "react-router-dom";
import styled from "styled-components"
import { useNavigate } from "react-router-dom";

interface ItemProps {
    titulo: string;
    descricao: string;
    id: string;
}

const LinkEstilizado = styled(Link)`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100%;
    justify-content: center;
    color: #FFFFFF;
    gap: 10px;
    text-decoration: none;
    
    
    p{
        height: 100%;
        font-size: 16px;
        margin: 0px;
        padding: 10px;
        display: flex;
        align-items: flex-start;
        justify-content: center;
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
        font-size: 20px;
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

    @media screen and (max-width: 420px){
        width: 130px;
        height: 130px;
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