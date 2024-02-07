import EstilosGlobais from "../../../components/EstilosGlobais/EstilosGlobais"
import InputPadrao from "../../../components/InputPadrao/InputPadrao"
import LinksAsideColaborador from "../../../components/LinksAsideColaborador/LinksAsideColaborador"
import MenuLateral from "../../../components/MenuLateral/MenuLateral"


const EditarPerfil = () => {
    return (
        <>
            <EstilosGlobais />
            <main>
                <MenuLateral toValue='/editar'>
                    <LinksAsideColaborador />
                </MenuLateral>
            </main>
        </>
    )
}
export default EditarPerfil