import { Link } from "react-router-dom"
import styled from "styled-components"
import { FaPen } from 'react-icons/fa'
import { RiDeleteBin6Fill } from "react-icons/ri";

type ListaProps = {
    nif: number
    nome: string
    cargo: string
    unidade: string
}

const LinhaTabela = styled.td`
    padding-top: 10px;
    select{
        height: 35px;
        border-radius: 8px;
        border: 2px solid var(--black-input);
        background-color: #F3F3F3;
        option{
           text-align: center;
        }
    }
`

const LinhaIcones = styled.td`
    padding-top: 10px;

    a{
        padding-left: 10px;
    }
`

const ListaUsuarios = (props: ListaProps) => {


    return (
        <>
            <LinhaTabela>{props.nif}</LinhaTabela>
            <LinhaTabela>{props.nome}</LinhaTabela>
            <LinhaTabela>
                <select name="situacao" id="">
                    <option value="Concluido">Concluido</option>
                    <option value="Em Andamento">Em andamento</option>
                    <option value="Em Atraso">Em Atraso</option>
                </select>
            </LinhaTabela>
            <LinhaTabela>{props.cargo}</LinhaTabela>
            <LinhaTabela>{props.unidade}</LinhaTabela>
            <LinhaIcones>
                
                    <Link to="">
                        <FaPen size={25} color="#025E73" />
                    </Link>

                    <Link to="">
                        <RiDeleteBin6Fill size={25} color="#025E73" />
                    </Link>

            </LinhaIcones>
        </>
    )
}
export default ListaUsuarios