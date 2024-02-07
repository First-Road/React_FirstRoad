import AcessoConteudo from "../../../components/AcessoConteudo/AcessoConteudo"
import EstilosGlobais from "../../../components/EstilosGlobais/EstilosGlobais"
import LinksAsideColaborador from "../../../components/LinksAsideColaborador/LinksAsideColaborador"
import MenuLateral from "../../../components/MenuLateral/MenuLateral"


const Conteudo = () => {
    return (
        <>
            <EstilosGlobais />
            <main id="main">
                <MenuLateral toValue='/editar'>
                    <LinksAsideColaborador />
                </MenuLateral>

                <AcessoConteudo />
            </main>
        </>
    )
}

export default Conteudo