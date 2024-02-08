import { useEffect, useState } from "react"
import EstilosGlobais from "../../../components/EstilosGlobais/EstilosGlobais"
import MenuLateral from "../../../components/MenuLateral/MenuLateral"
import api from "../../../utils/api"
import styled from "styled-components"
import NavegacaoHome from "../../../components/NavegacaoHome"
import NavegacaoTelaTrilha from "../../../components/NavegacaoTelaTrilha"


const Secao = styled.section`
    background-image: url(../../../../public/EstradaNoite.jpeg);
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
 
const TelaTrilha = () => {
    const [conteudo, setconteudo] = useState<any>([])

    function listarConteudos() {


        api.get("conteudos")
            .then((response: any) => {
                setconteudo(response.data);
                console.table(response.data)
            })
            .catch((error: any) => {
                console.log("Error ao realizar um requisição", error);
            })
    }

    useEffect(() => {
        listarConteudos();
    }, [])
    return(
        <>
            <EstilosGlobais />
            <main>
                <MenuLateral />

                <Secao>
                    <h1>Meus Conteúdos</h1>
                    
                    <ul>
                       {
                         conteudo.map((conteudo: any) => {
                            return <NavegacaoTelaTrilha
                                key={conteudo.id}
                                toValue="/PGModulos"
                                titulo={conteudo.titulo_conteudo}
                                descricao={conteudo.descricao_conteudo}
                            />
                        })
                       }
                    </ul>
                </Secao>

            </main>
        </>
    )
}
export default TelaTrilha;