import { ReactNode, useEffect, useState } from "react"
import EstilosGlobais from "../../../components/EstilosGlobais/EstilosGlobais"
import MenuLateral from "../../../components/MenuLateral/MenuLateral"
import api from "../../../utils/api"
import styled from "styled-components"
import NavegacaoTelaTrilha from "../../../components/NavegacaoTelaTrilha"
import { useParams } from "react-router-dom"
import Trilha from "../Trilha"


const Secao = styled.section`
    background-image: url(../../../../public/EstradaNoite.jpeg);
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: 70%;
    padding-top: 25px;

    
    ul{
        list-style: none;
        padding: 0;
        display: flex;
        gap: 10px;
        justify-content: center;
        flex-wrap: wrap;
        height: 100%;
        align-items: flex-start;
        
    }
`


const TelaTrilha = () => {
<<<<<<< HEAD
    const [conteudo, setConteudo] = useState<any[]>([])
    
=======
    const [conteudo, setconteudo] = useState<any>([])
    const [concluido, setConcluido] = useState<boolean>(false)


>>>>>>> 4dcecc00f5db136dc329f7ee4f98bc9cccec5d9c
    function listarConteudos() {
        api.get("conteudo" )
            .then((response: any) => {
                setConteudo(response.data)
                console.table(response.data)
            })
            .catch((error: any) => {
                console.log("Error ao realizar um requisição", error);
            })
    }

    function verificarConteudoConcluido() {
      if(conteudo.concluido){
        
      }
    }

    const Titulo = styled.div`
        width: 80%;
        padding: 80px;
        h1{
        width: 100%;
        display: flex;
        justify-content: flex-start;
        font-size: 35px;
        font-family: PoppinsBold;
        color: white;
        margin: 0;
        }

    `



    useEffect(() => {
        listarConteudos();
        verificarConteudoConcluido();
    }, [])
    return (
        <>
            <EstilosGlobais />
            <main>
                <MenuLateral />

                <Secao>
                    <Titulo>
                        <h1>Meus Conteúdos</h1>
                    </Titulo>


                    <ul>
                        {
                            conteudo.map((conteudo: any) => {
                                return <NavegacaoTelaTrilha
                                    id={conteudo.id}
                                    key={conteudo.id}
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