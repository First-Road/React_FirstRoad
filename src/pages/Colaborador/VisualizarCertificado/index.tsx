import EstilosGlobais from "../../../components/EstilosGlobais/EstilosGlobais"
import MenuLateral from "../../../components/MenuLateral/MenuLateral"
import { IoLogoWhatsapp } from "react-icons/io";
import { AiFillInstagram } from "react-icons/ai";
import { IoLogoLinkedin, IoDownload } from "react-icons/io5";
import { FaShareAltSquare } from "react-icons/fa";
import Certificado from '../../../assets/icons/certificado.png'
import styled from "styled-components";
import LinksAsideColaborador from "../../../components/LinksAsideColaborador/LinksAsideColaborador";

const Secao = styled.section`
    width: 100%;
    height: 100dvh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #F3F3F3;
    
        
    img{
        width: 700px;
        @media screen and (max-width: 768px) {
            width: 550px;
        }
        @media screen and (max-width: 600px) {
            width: 450px;
        }
        @media screen and (max-width: 470px) {
            width: 350px;
        }
        @media screen and (max-width: 370px) {
            width: 310px;
        }
    }
`

const Elementos = styled.div`
    display: flex;
    flex-direction: column;
    gap: 25px;
    
`

const ElementosCompartilhar = styled.div`
    display: flex;
    gap: 25px;
    justify-content: center;
`

const Share = styled(FaShareAltSquare)`
    width: 80px;
    height: 80px;
    @media screen and (max-width: 768px) {
        width: 60px;
        height: 60px;
    }
    @media screen and (max-width: 470px) {
        width: 40px;
        height: 40px;
    }
`
const WhatsApp = styled(IoLogoWhatsapp)`
    width: 80px;
    height: 80px;
    @media screen and (max-width: 768px) {
        width: 60px;
        height: 60px;
    }
    @media screen and (max-width: 470px) {
        width: 40px;
        height: 40px;
    }
`
const Linkedin = styled(IoLogoLinkedin)`
    width: 80px;
    height: 80px;
    @media screen and (max-width: 768px) {
        width: 60px;
        height: 60px;
    }
    @media screen and (max-width: 470px) {
        width: 40px;
        height: 40px;
    }
`
const Instagram = styled(AiFillInstagram)`
    width: 80px;
    height: 80px;
    @media screen and (max-width: 768px) {
        width: 60px;
        height: 60px;
    }
    @media screen and (max-width: 470px) {
        width: 40px;
        height: 40px;
    }
`
const Download = styled(IoDownload)`
    width: 80px;
    height: 80px;
    @media screen and (max-width: 768px) {
        width: 60px;
        height: 60px;
    }
    @media screen and (max-width: 470px) {
        width: 40px;
        height: 40px;
    }
`


const VisualizarCertificado = () => {
    return (
        <>
            <EstilosGlobais toValue='/editar'/>
            <main>
                <MenuLateral>
                    <LinksAsideColaborador />
                </MenuLateral>
                <Secao>
                    <Elementos>
                        <img src={Certificado} alt="" />
                        <ElementosCompartilhar>
                            <Share />
                            <Instagram />
                            <Linkedin />
                            <WhatsApp />
                            <Download />
                        </ElementosCompartilhar>
                    </Elementos>
                </Secao>
            </main>
        </>
    )
}
export default VisualizarCertificado