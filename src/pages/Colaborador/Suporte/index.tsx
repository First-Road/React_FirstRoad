import styled from "styled-components"
import EstilosGlobais from "../../../components/EstilosGlobais/EstilosGlobais"
import ItemListaSuporte from "../../../components/ItemListaSuporte/ItemListaSuporte"
import MenuLateral from "../../../components/MenuLateral/MenuLateral"
import { Link } from "react-router-dom"
import { BsFillChatSquareTextFill, BsTelephoneForwardFill } from 'react-icons/bs'
import LinksAsideColaborador from "../../../components/LinksAsideColaborador/LinksAsideColaborador"

const Secao = styled.section`
    width: 100%;
    height: 100dvh;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    background-color: #F3F3F3;
`

const TituloContainer = styled.div`
    width: 100%;
    height: 50%;
    background-color: var(--grayscale-cor-1);
    display: flex;
    justify-content: center;
    align-items: flex-start;
    padding-top: 50px;

    h1{
        font-family: PoppinsBold;
        font-size: 42px ;
        color: white;

        @media screen and (max-width: 750px){
            font-size: 30px;
            @media screen and (max-width: 520px){
                font-size: 25px;
                padding-top: 20px;
            }
        }
    }
`

const SecaoNav = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    width: 70%;
    height: 70%;
    box-shadow: 2px 2px 4px #0000004f;
    top: 180px;
    border-radius: 8px;
    position: absolute;
    background-color: #F3F3F3;
    @media screen and (max-width: 1200px){
        width:90%;
        @media screen and (max-width: 520px){
            width: 100%;
        }
    }
`

const BarraPesquisa = styled.nav`
    width: 100%;
    display: flex;
    justify-content: center;

    input{
        width: 70%;
        height: 45px;
        border-radius: 8px;
        border: 2px solid var(--black-input);
        background-color: #F3F3F3;
        background-image: url('../../../public/icons8-lupa-48.png');
        background-repeat: no-repeat;
        background-size: 30px;
        background-position: 99%;
        outline: none;

        @media screen and (max-width: 750px){
            width:90%;
        }

        &::placeholder{
            color: black;
            padding-left: 20px;
        }

        &:focus::placeholder{
            color: transparent;
        }

        
    }

`

const LinksContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-evenly;

    nav{
        display: flex;
        flex-direction: column;

        h2{
            font-size: 25px;
            font-family: PoppinsBold;

            @media screen and (max-width: 750px){
                font-size: 20px;
            }
        }
        
        ul{
            display: flex;
            flex-direction: column;
            gap: 15px;
            list-style: none;
            margin: 0;
            padding: 0;
        }
    }

    div{
        display: flex;
        flex-direction: column;
        gap: 10px;
        justify-content: space-evenly;

        

        nav{
            width: 300px;
            height: 120px;
            box-shadow: 2px 2px 4px #0000004f;
            border-radius: 8px;

            @media screen and (max-width: 750px){
                width: 200px;
                height: 100px;

                @media screen and (max-width: 520px){
                    width: 75px;
                    height: 75px;
                }
            }

           

            &:hover{
                transition: .9s;
                transform: scale(1.1);
            
            }
        }
    }
`

const LinksEstilizado = styled(Link)`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    gap: 10px;
    cursor: pointer;
    text-decoration: none;

    span{
        font-size: 20px;
        text-decoration: underline;
        color: black;

        @media screen and (max-width: 750px){
            font-size: 16px;
            
            @media screen and (max-width: 520px){
                display: none;
            }
        }


    }
`

const IconeChat = styled(BsFillChatSquareTextFill)`
    @media screen and (max-width: 750px){
        width: 20px;
        @media screen and (max-width: 520px){
            width: 40px;
        }
    }
`
const IconeTelefone = styled(BsTelephoneForwardFill)`
    @media screen and (max-width: 750px){
        width: 20px;
        @media screen and (max-width: 520px){
            width: 40px;
        }
    }
`




const Suporte = () => {

    return (
        <>
            <EstilosGlobais />
            <main>
                <MenuLateral toValue='/editar'>
                    <LinksAsideColaborador />
                </MenuLateral>
                <Secao>
                    <TituloContainer>
                        <h1>Como podemos ajudar?</h1>
                    </TituloContainer>

                    <SecaoNav>
                        <BarraPesquisa>
                            <input type="text" name="duvida" placeholder="Por favor digite aqui a sua dúvida" />
                        </BarraPesquisa>

                        <LinksContainer>
                            <nav>
                                <h2>Principais respostas</h2>
                                <ul>
                                    <ItemListaSuporte toValue="">
                                        Esqueci a senha
                                    </ItemListaSuporte>

                                    <ItemListaSuporte toValue="">
                                        Conteúdo
                                    </ItemListaSuporte>

                                    <ItemListaSuporte toValue="">
                                        Tutorial
                                    </ItemListaSuporte>

                                    <ItemListaSuporte toValue="">
                                        Perfis de acesso
                                    </ItemListaSuporte>

                                    <ItemListaSuporte toValue="">
                                        Certificados
                                    </ItemListaSuporte>
                                </ul>
                            </nav>

                            <div>
                                <nav>
                                    <LinksEstilizado to=''>
                                        <span>Suporte via chat</span>
                                        <IconeChat size={30} color='black' />

                                    </LinksEstilizado>
                                </nav>

                                <nav>
                                    <LinksEstilizado to=''>
                                        <span>Suporte via telefone</span>
                                        <IconeTelefone size={30} color='black' />
                                    </LinksEstilizado>
                                </nav>
                            </div>
                        </LinksContainer>


                    </SecaoNav>
                </Secao>
            </main>
        </>
    )
}
export default Suporte