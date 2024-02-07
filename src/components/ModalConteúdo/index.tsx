import { IoArrowBackCircle } from "react-icons/io5"
import api from "../../utils/api"
import { useEffect, useState } from "react"



const ModalConteudo = () => {
    const [Conteudo, setConteudo] = useState<any>(null)
    function ChamarDadosApi() {
        api.get("conteudo")
            .then((response) => {
                setConteudo(response.data)
                console.table(response.data)
            })
            .catch((error) => {
                console.error("Erro ao obter dados da API:", error);
            })
    }

    useEffect(() => {
        ChamarDadosApi()
    }, [])
    return (
        <section>
            <header>
                <IoArrowBackCircle />
            </header>

            <main>
                <title>
                   
                </title>
            </main>
        </section>
    )
}
export default ModalConteudo