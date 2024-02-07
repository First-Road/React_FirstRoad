import { GiPadlock } from "react-icons/gi";
import Certificado from '../../../assets/icons/certificado2.png'
import styled from "styled-components";
import EstilosGlobais from "../../../components/EstilosGlobais/EstilosGlobais";
import MenuLateral from "../../../components/MenuLateral/MenuLateral";
import { Link } from "react-router-dom";
import LinksAsideColaborador from "../../../components/LinksAsideColaborador/LinksAsideColaborador";

const Secao = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100dvh;
    gap: 20px;
    background-color: #F3F3F3;

    h1{
        font-family: PoppinsBold;
        font-size: 42px;
        margin: 0;
        color: var(--principal-cor-2);
    }

    p{
        font-size: 20px;
        color: black;
    }
`

const CertificadoImg = styled.img`
    width: 300px;
    @media screen and (max-width: 850px) {
        width: 250px;
    }
    @media screen and (max-width: 700px) {
        width: 200px;
    }
    @media screen and (max-width: 520px) {
        width: 150px;
    }    
`

const SecaoCertificados = styled.div`
    display: flex;
    gap: 25px;
`
const ColunaCertificado = styled.div`
    display: flex;
    flex-direction: column;
    gap: 15px;
`

const Cadeado = styled(GiPadlock)`
    position: absolute;
    left: 120px;
    top: 80px;
    width: 70px;
    height: 70px;
    @media screen and (max-width: 850px) {
        left: 100px;
        top: 50px;
    }
    @media screen and (max-width: 700px) {
        left: 75px;
        top: 60px;
        width: 50px;
        height: 50px;
    }
    @media screen and (max-width: 520px) {
        
    }    
`

const DivCertificado = styled.div`
    position: relative;
    
`




const Certificados = () => {
    return (
        <>
            <EstilosGlobais />
            <main>
                <MenuLateral toValue='/editar'>
                    <LinksAsideColaborador />
                </MenuLateral>
                <Secao>
                    <h1>Certificados</h1>
                    <p>Acesse aqui os seus certificados adquiridos em sua jornada:</p>

                    <ColunaCertificado>
                        <SecaoCertificados>
                            <DivCertificado>
                                <Link to='/visualizarCertificado'>
                                    <CertificadoImg src={Certificado} alt="" />
                                </Link>
                            </DivCertificado>
                            <DivCertificado>
                                <CertificadoImg src={Certificado} alt="" />
                                <Cadeado />
                            </DivCertificado>
                        </SecaoCertificados>

                        <SecaoCertificados>
                            <DivCertificado>
                                <CertificadoImg src={Certificado} alt="" />
                                <Cadeado />
                            </DivCertificado>
                            <DivCertificado>
                                <CertificadoImg src={Certificado} alt="" />
                                <Cadeado />
                            </DivCertificado>
                        </SecaoCertificados>
                    </ColunaCertificado>
                </Secao>
            </main>
        </>
    )
}

export default Certificados