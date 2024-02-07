import styled from "styled-components"
import EstilosGlobais from "../../../components/EstilosGlobais/EstilosGlobais"
import MenuLateral from "../../../components/MenuLateral/MenuLateral"
import LinksAsideColaborador from "../../../components/LinksAsideColaborador/LinksAsideColaborador"
import BotaoTrilha from "../../../components/BotaoTrilha"
import api from "../../../utils/api";
import { useEffect, useState } from "react";
const Secao = styled.section`
    background-image: url(../../../../public/EstradaDefinitiva.jpeg);
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: 70%;
    padding-top: 25px;

    h1{
        font-size: 35px;
        font-family: PoppinsBold;
        color: white;
        width: 51%;
        margin: 0;
    }
    ul{
        list-style: none;
        padding: 0;
        display: flex;
        flex-direction: column;
        gap: 10px;
        justify-content: center;
        flex-wrap: wrap;
        
    }
`
const ListaTrilha = () => {
    const [trilha, setTrilha] = useState<any>([])
    function listarTrilhas() {


        api.get("trilha")
            .then((response: any) => {
                setTrilha(response.data);
                console.table(response.data)
            })
            .catch((error: any) => {
                console.log("Error ao realizar um requisição", error);
            })
    }

    useEffect(() => {
        listarTrilhas();
    }, [])

    return (

        <>
            <EstilosGlobais />
            <main>
                <MenuLateral>
                    <LinksAsideColaborador />
                </MenuLateral>
                <Secao>
                    <h1>Minhas Trilhas</h1>
                    <ul>

                        {
                            trilha.map((trilha: any) => {
                                return <BotaoTrilha
                                    key={trilha.id}
                                    toValue="/PGModulos"
                                    titulo={trilha.titulo_trilha}
                                    descricao={trilha.descricao_trilha}
                                />
                            })
                        }

                    </ul>
                </Secao>
            </main>

        </>

    )
}
export default ListaTrilha