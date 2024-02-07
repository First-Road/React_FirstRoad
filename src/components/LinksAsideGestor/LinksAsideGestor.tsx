import { FaInfoCircle, FaUser } from "react-icons/fa"
import MenuItemNavegacao from "../MenuItemNavegação/MenuItemNavegacao"
import { FaPeopleGroup } from "react-icons/fa6";
import { BiSolidBookContent, BiSolidDashboard} from "react-icons/bi";

const LinksAsideGestor = () => {
    return (
        <>
            <MenuItemNavegacao toValue="/editarGestor" icone={<FaUser size={25} color="#FFFFFF" />} >
                Perfil
            </MenuItemNavegacao>


            <MenuItemNavegacao toValue="/avatar" icone={<FaPeopleGroup size={25} color="#FFFFFF" />} >
                Gestão de Cadastro
            </MenuItemNavegacao>



            <MenuItemNavegacao toValue="/trilha" icone={<BiSolidBookContent size={25} color="#FFFFFF" />} >
                Trilha de Conteúdo
            </MenuItemNavegacao>



            <MenuItemNavegacao toValue="" icone={<BiSolidDashboard size={25} color="#FFFFFF" />} >
                Dashboard
            </MenuItemNavegacao>



            <MenuItemNavegacao toValue="/suporte" icone={<FaInfoCircle size={25} color="#FFFFFF" />} >
                Suporte
            </MenuItemNavegacao>
        </>
    )
}
export default LinksAsideGestor