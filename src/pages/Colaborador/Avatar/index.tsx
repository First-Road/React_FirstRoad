import { Swiper, SwiperSlide } from "swiper/react"
import 'swiper/css'
import 'swiper/css/effect-cards'
import { EffectCards } from "swiper/modules"


import styled from "styled-components"
import './Avatar.css'
import EstilosGlobais from "../../../components/EstilosGlobais/EstilosGlobais"
import MenuLateral from "../../../components/MenuLateral/MenuLateral"
import Fusca from '../../../assets/image/Fusca.jpeg'
import Lamborghini from '../../../assets/image/Lamborghini.jpeg'
import Truck from '../../../assets/image/Scania Truck.jpeg'
import Porsche from '../../../assets/image/Porsche.jpeg'
import Ducati from '../../../assets/image/Ducati.jpeg'
import LinksAsideColaborador from "../../../components/LinksAsideColaborador/LinksAsideColaborador"


const SlideContainer = styled(Swiper)`
    width: 370px;
    height: 370px;
    
`
const SlideEstilizado = styled(SwiperSlide)`
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 15px;
    position: relative;
    img{
        height: 100%;
        width: 100%;
        
    }
    div{
        height: 100px;
        width: 100%;
        padding: 6px;
        box-sizing: border-box;
        position: absolute;
        top: 300px;
        background: rgb(27, 27, 27, .5);
        color: white;

        h2{
            margin: 10px 0px 15px 20px;
            font-size: 30px;
            font-family: PoppinsBold;
        }

        p{
            font-size: 16px;
            margin: 20px;
            visibility: hidden;
            opacity: 0;
            
            span{
                font-weight: bold;
            }
        }
    }
`



const Container = styled.section`
display: flex;
align-items: center;
justify-content: flex-start;
flex-direction: column;
gap: 30px;
padding-top: 20px;
width: 100%;
height: 100dvh;
background-color: #F3F3F3;
`

const H1Estilizado = styled.h1`
    margin: 20px 0px 0px 0px ;
    font-size: 42px;
    font-family: PoppinsBold;
    color: var(--principal-cor-2);

`

const PEstilizado =styled.p`
    margin: 0;
    font-size: 20px;
    width: 900px;
    text-align: center;
`



const Avatar = () => {
    return (
        <>
            <EstilosGlobais />
            <main>
                <MenuLateral toValue='/editar'>
                    <LinksAsideColaborador />
                </MenuLateral>
                <Container>
                    <H1Estilizado>Avatar</H1Estilizado>
                    <PEstilizado>Sabemos que para viajar, escolher seu veículo é muito importante. Confira os modelos disponíveis e escolha seu parceiro de viagem!</PEstilizado>
                    <SlideContainer
                        grabCursor={true}
                        effect={'cards'}
                        modules={[EffectCards]}
                    >


                        <SlideEstilizado className="card">
                            <img src={Fusca} alt="Carro Fusca" />
                            <div className="intro">
                                <h2>Fusca</h2>
                                <p>O <span>Fusca</span> foi o primeiro modelo de automóvel fabricado pela Volkswagen, foi o carro mais vendido do mundo. é um carro popular compacto. tenha a sensação nostálgica nessa viagem dirigindo nosso clássico.</p>
                            </div>
                        </SlideEstilizado>

                        <SlideEstilizado className="card">
                            <img src={Lamborghini} alt="Carro Lamborghine" />
                            <div className="intro">
                                <h2>Lamborghini</h2>
                                <p>A <span>Lamborghini</span> ícone indiscutível no mundo automobilístico, personifica o luxo uma fusão perfeita entre elegância e agressividade, capturando a atenção de todos que têm o privilégio de testemunhar sua presença. </p>
                            </div>
                        </SlideEstilizado>

                        <SlideEstilizado className="card">
                            <img src={Truck} alt="Caminhão Scania" />
                            <div className="intro">
                                <h2>Scania Truck</h2>
                                <p>Os caminhões da <span>Scania</span> verdadeiros colossos das estradas, personificam a robustez e a confiabilidade que definem a reputação dessa renomada marca. são verdadeiros parceiros de negócios na jornada pelo sucesso logístico.</p>
                            </div>
                        </SlideEstilizado>

                        <SlideEstilizado className="card">
                            <img src={Porsche} alt="Caminhão Scania" />
                            <div className="intro">
                                <h2>Porsche</h2>
                                <p>Os carros da <span>Porsche</span> são sinônimos de performance excepcional, design icônico e uma herança de engenharia inigualável. é uma expressão de paixão e comprometimento com a arte da condução.</p>
                            </div>
                        </SlideEstilizado>

                        <SlideEstilizado className="card">
                            <img src={Ducati} alt="moto da ducati" />
                            <div className="intro">
                                <h2>Ducati</h2>
                                <p>Montar uma moto da <span>Ducati</span> não é apenas conduzir; é participar de uma tradição de excelência, onde a paixão pela velocidade e a busca pela perfeição se unem para criar uma experiência única sobre duas rodas.</p>
                            </div>
                        </SlideEstilizado>
                    </SlideContainer>
                </Container>
            </main>

        </>
    )
}

export default Avatar