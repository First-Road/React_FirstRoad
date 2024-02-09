import { useParams } from "react-router-dom";
import EstilosGlobais from "../../../components/EstilosGlobais/EstilosGlobais"
import LinksAsideColaborador from "../../../components/LinksAsideColaborador/LinksAsideColaborador"
import MenuLateral from "../../../components/MenuLateral/MenuLateral"
import Modulo from "../../../components/Modulo/Modulo"
import api from "../../../utils/api";
import { useEffect, useState } from "react";


const PgModulos = () => {
    
    const [link, setLink] = useState<string>("")
    const [titulo, setTitulo] = useState<string>("")
    const [descricao, setDescricao] = useState<string>("")

    const {idConteudo} = useParams()

    function ExibirDetalhesModulo() {
        console.log(idConteudo);
        
        api.get("conteudo/" + idConteudo)
        .then((response: any) => {

            setLink(response.data.link)
            setTitulo(response.data.titulo_conteudo)
            setDescricao(response.data.descricao_conteudo)
            console.table(response.data)
        })
        .catch((error: any) => {
            console.log("Error ao realizar um requisição", error);
        })
    }

    useEffect(() => {
        ExibirDetalhesModulo();
    }, [])

    return (
        <>
            <EstilosGlobais />
            <main>
                <MenuLateral toValue='/editar'>
                    <LinksAsideColaborador />
                </MenuLateral>
                <Modulo
                    titulo={`Modulo - ${titulo}`}
                    textoModulo={descricao}
                    link={link}

                />
            </main>
        </>
    )
}
export default PgModulos