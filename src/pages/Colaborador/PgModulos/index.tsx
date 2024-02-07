import EstilosGlobais from "../../../components/EstilosGlobais/EstilosGlobais"
import LinksAsideColaborador from "../../../components/LinksAsideColaborador/LinksAsideColaborador"
import MenuLateral from "../../../components/MenuLateral/MenuLateral"
import Modulo from "../../../components/Modulo/Modulo"


const PgModulos = () => {
    return (
        <>
            <EstilosGlobais />
            <main>
                <MenuLateral toValue='/editar'>
                    <LinksAsideColaborador />
                </MenuLateral>
                <Modulo
                    titulo="Módulo 1 - Instruções de Acesso"
                    textoModulo="Neste Módulo você irá conhecer os sistemas que deverá acessar e como conseguir solicitar o permissionamento deles clique no ícone do sistema para maiores informações:"
                    tituloCard="Intranet"
                    textoCard="Onde todos ps funcionários encontram documentos, procedimentos, links para portais importantes como o PORTAL RH, Central de TI e Chamados."
                />
            </main>
        </>
    )
}
export default PgModulos