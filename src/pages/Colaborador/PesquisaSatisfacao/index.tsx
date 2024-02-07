import styled from "styled-components";
import BotaoPadrao from "../../../components/BotaoPadrao/BotaoPadrao";
import EstilosGlobais from "../../../components/EstilosGlobais/EstilosGlobais"
import MenuLateral from "../../../components/MenuLateral/MenuLateral"
import { BsEmojiAngry, BsEmojiNeutral, BsEmojiLaughing, BsEmojiGrin, BsEmojiHeartEyes } from "react-icons/bs";
import { useState } from "react";
import LinksAsideColaborador from "../../../components/LinksAsideColaborador/LinksAsideColaborador";


const Secao = styled.section`
    width: 100%;
    height: 100dvh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #F3F3F3;
    gap: 40px;

    h1{
        font-size: 42px;
        font-family: PoppinsBold;
        color: var(--principal-cor-2);
        margin: 0px;
        @media screen and (max-width: 600px){
            font-size: 35px;
        }

        @media screen and (max-width: 510px){
            font-size: 25px;
        }
        @media screen and (max-width: 385px){
            font-size: 20px;
        }
    }

    h2{
        font-size: 25px;
        font-family: PoppinsBold;
        color: var(--principal-cor-2);
        margin: 0px;
        @media screen and (max-width: 600px){
            font-size: 20px;
        }
        @media screen and (max-width: 450px){
            font-size: 16px;
        }
        @media screen and (max-width: 350px){
            font-size: 14px;
        }
    }

    textarea{
        width: 70%;
        height: 30%;
        border: 4px solid #000000;
        background-color: #F3F3F3;
        border-radius: 8px;
        @media screen and (max-width: 510px){
            width: 90%;
        }
    }
`
const IconsContainer = styled.div`
    display: flex;
    justify-content: center;
    gap: 20px;
`

const MuitoRuim = styled(BsEmojiAngry)`
    width: 80px;
    height: 80px;
    cursor: pointer;
    @media screen and (max-width: 600px){
        width: 50px;
        height: 50px;
    }
    @media screen and (max-width: 350px){
        width: 45px;
        height: 45px;
    }
    
    &:hover{
        color: var(--auxiliar-cor-6);
        transition: 0.6s;
        transform: scale(1.1);
    }

`
const Ruim = styled(BsEmojiNeutral)`
    width: 80px;
    height: 80px;
    cursor: pointer;
    @media screen and (max-width: 600px){
        width: 50px;
        height: 50px;
    }
    @media screen and (max-width: 350px){
        width: 45px;
        height: 45px;
    }

    &:hover{
        color: var(--principal-cor-6);
        transition: 0.6s;
        transform: scale(1.1);
    }

`
const Regular = styled(BsEmojiLaughing)`
    width: 80px;
    height: 80px;
    cursor: pointer;
    @media screen and (max-width: 600px){
        width: 50px;
        height: 50px;
    }
    @media screen and (max-width: 350px){
        width: 45px;
        height: 45px;
    }
    &:hover{
        color: yellow;
        transition: 0.6s;
        transform: scale(1.1);
    }
`
const Bom = styled(BsEmojiGrin)`
    width: 80px;
    height: 80px;
    cursor: pointer;
    @media screen and (max-width: 600px){
        width: 50px;
        height: 50px;
    }
    @media screen and (max-width: 350px){
        width: 45px;
        height: 45px;
    }

    &:hover{
        color: yellowgreen;
        transition: 0.6s;
        transform: scale(1.1);
    }
`
const MuitoBom = styled(BsEmojiHeartEyes)`
    width: 80px;
    height: 80px;
    cursor: pointer;
    @media screen and (max-width: 600px){
        width: 50px;
        height: 50px;
    }
    @media screen and (max-width: 350px){
        width: 45px;
        height: 45px;
    }

    &:hover{
        color: var(--auxiliar-cor-7);
        transition: 0.6s;
        transform: scale(1.1);
    }
`

const BotaoContainer = styled.div`
    width: 100%;
    height: 50px;
    display: flex;
    justify-content: center;
`





const PesquisaSatisfacao = () => {
    return (
        <>
            <EstilosGlobais />
            <main>
                <MenuLateral toValue='/editar'>
                    <LinksAsideColaborador />
                </MenuLateral>
                <Secao>
                    <h1>Pesquisa de Satisfação</h1>

                    <IconsContainer>
                        <MuitoRuim />
                        <Ruim />
                        <Regular />
                        <Bom />
                        <MuitoBom />
                    </IconsContainer>

                    <h2>Conte para nós como foi sua experiência</h2>
                    <textarea name="" id=""></textarea>
                    <BotaoContainer>
                        <BotaoPadrao
                            estilizar={{ width: "200px" }}
                        >
                            Enviar
                        </BotaoPadrao>
                    </BotaoContainer>
                </Secao>
            </main>
        </>
    )
}
export default PesquisaSatisfacao