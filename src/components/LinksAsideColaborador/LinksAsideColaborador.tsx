import { FaAddressBook, FaHome, FaInfoCircle, FaMapMarkedAlt, FaTruck, FaUser} from "react-icons/fa"
import MenuItemNavegacao from "../MenuItemNavegação/MenuItemNavegacao"
import * as Icon from '@phosphor-icons/react'

const LinksAsideColaborador = () => {
    return (
        <>
            <MenuItemNavegacao toValue="/home" icone={<FaHome size={25} color="#FFFFFF" />} >
                Tela Inicial
            </MenuItemNavegacao>


            <MenuItemNavegacao toValue="/avatar" icone={<FaTruck size={25} color="#FFFFFF" />} >
                Avatar
            </MenuItemNavegacao>



            <MenuItemNavegacao toValue="/trilha" icone={<FaMapMarkedAlt size={25} color="#FFFFFF" />} >
                Trilha
            </MenuItemNavegacao>



            <MenuItemNavegacao toValue="" icone={<FaAddressBook size={25} color="#FFFFFF" />} >
                Agenda
            </MenuItemNavegacao>



            <MenuItemNavegacao toValue="/suporte" icone={<FaInfoCircle size={25} color="#FFFFFF" />} >
                Suporte
            </MenuItemNavegacao>



            <MenuItemNavegacao toValue="/certificados" icone={<Icon.Files size={25} color="#FFFFFF" weight="fill" />} >
                Certificados
            </MenuItemNavegacao>
        </>
    )
}
export default LinksAsideColaborador