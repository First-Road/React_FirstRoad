import { useEffect, useState } from "react"
import EstilosGlobais from "../../../components/EstilosGlobais/EstilosGlobais"
import MenuLateral from "../../../components/MenuLateral/MenuLateral"
import api from "../../../utils/api"
import styled from "styled-components"
import NavegacaoTelaTrilha from "../../../components/NavegacaoTelaTrilha"


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

    h1{
        display: flex;
        justify-content: flex-start;
        font-size: 35px;
        font-family: PoppinsBold;
        color: white;
        margin: 0;
        height: 400px;
        align-items: center;
    }

    @media screen and (max-width: 1000px) {
        width: 100%;
        height: 100%;
        position: absolute;
        left: 5px;
    }

    
    ul{
        list-style: none;
        padding: 0;
        display: flex;
        gap: 10px;
        justify-content: center;
        flex-wrap: wrap;
        height: 100%;
        align-items: center;
        
    }
`


const TelaTrilha = () => {

    const [conteudo, setConteudo] = useState<any[]>([])

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



   
       

    



    useEffect(() => {
        listarConteudos();
    }, [])
    return (
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