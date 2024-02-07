import styled, { keyframes } from "styled-components"
import EstilosGlobais from "../../../components/EstilosGlobais/EstilosGlobais"
import MenuLateral from "../../../components/MenuLateral/MenuLateral"
import Fabrica from '../../../assets/image/Fabrica.png'
import FabricaIcone2 from '../../../assets/image/Fabrica2.png'
import FabricaIcone3 from '../../../assets/image/Fabrica3-PhotoRoom.png-PhotoRoom.png'
import FabricaIcone4 from '../../../assets/image/FabricaFinal-PhotoRoom.png-PhotoRoom.png'
import Fusca1 from '../../../assets/image/fusca1.png'
import { Keyframes } from "styled-components/dist/types"
import LinksAsideColaborador from "../../../components/LinksAsideColaborador/LinksAsideColaborador"

const AreaVerde = styled.div`
    width: 100%;
    height: 100dvh;
    background-color: var(--principal-cor-4);
    display: flex;
`
const AreaInicio = styled.div`
    width: 100%;
    height: 300px;
    border-radius: 10px;
    background-color: var(--auxiliar-cor-1);
    position: relative;

    div{
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: flex-end;
    }
`

const AreaInicioContainer = styled.div`
    width: 250px;
    height: 100%;
    display: flex;
    align-items: center;
`

const EstradaContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    position: relative;
`
const Fabrica1 = styled.img`
    width: 130px;
    position: absolute;
    left: 100px;
    top: 120px;
`

const Estrada = styled.div`
    background-color: black;
    height: 200px;
    flex-grow: 1;
`

const Fabrica2 = styled.img`
    width: 150px;
    position: absolute;
    bottom: 150px;
    left: 350px;
`

const Fabrica3 = styled.img`
    width: 130px;
    position: absolute;
    left: 600px;
    top: 120px;
`
const FabricaFinal = styled.img`
    width: 150px;
    position: absolute;
    left: 850px;
    bottom: 150px;
`

const FaixaAmarela = styled.div`
    width: 100px;
    height: 10px;
    background-color: var(--principal-cor-5);
    display: flex;
    align-items: center;
`
const FaixaAmarelaContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    padding: 0px 20px;
    gap: 40px;
`

const mover: Keyframes = keyframes`
    0%{
       
        left: 0px;
    }

    50%{
        left: 300px;
    }
    75%{
        top: 0px;
    }
    100%{
        top: -100px;
    }

`
const Fusca = styled.img`
    display: flex;
    align-items: center;
    animation: ${mover} 5s ease-in-out forwards;
    position: absolute;
    z-index: 1;

`


const Trilha = () => {
    return (
        <>
            <EstilosGlobais />
            <main>
                <MenuLateral toValue='/editar'>
                    <LinksAsideColaborador />
                </MenuLateral>
                <AreaVerde>
                    <AreaInicioContainer>
                        <AreaInicio>
                            <div>
                                <Fusca src={Fusca1} alt="" />
                            </div>
                        </AreaInicio>
                    </AreaInicioContainer>

                    <EstradaContainer>
                        <Fabrica1 src={Fabrica} alt="" />
                        <Fabrica2 src={FabricaIcone2} alt="" />
                        <Fabrica3 src={FabricaIcone3} alt="" />
                        <FabricaFinal src={FabricaIcone4} alt="" />
                        <Estrada>
                            <FaixaAmarelaContainer>
                                <FaixaAmarela />
                                <FaixaAmarela />
                                <FaixaAmarela />
                                <FaixaAmarela />
                                <FaixaAmarela />
                                <FaixaAmarela />
                                <FaixaAmarela />
                                <FaixaAmarela />
                            </FaixaAmarelaContainer>
                        </Estrada>
                    </EstradaContainer>
                </AreaVerde>
            </main>
        </>
    )
}
export default Trilha