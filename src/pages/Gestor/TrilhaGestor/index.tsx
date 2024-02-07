import styled from "styled-components";
import EstilosGlobais from "../../../components/EstilosGlobais/EstilosGlobais"
import LinksAsideGestor from "../../../components/LinksAsideGestor/LinksAsideGestor"
import MenuLateral from "../../../components/MenuLateral/MenuLateral"
import { FaUser } from "react-icons/fa"
import { RiDeleteBin6Fill } from "react-icons/ri";
import BotaoPadrao from "../../../components/BotaoPadrao/BotaoPadrao";

const Secao = styled.section`
    width: 100%;
    height: 100dvh;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    background-color: #F3F3F3;
`

const Header = styled.div`
    display: flex;
    justify-content: space-around;
    width: 100%;
    align-items: center;
    div{
       display: flex;
       align-items: center;
       gap: 20px;
       span{
           font-size: 20px;
       }         
       div{
            display: flex;
            justify-content: center;
            align-items: center;
            width: 100px;
            height:90px;
            border-radius: 50%;
            background-color: #F3F3F3;
            border: 2px solid black;
        }
    }
`

const Titulo = styled.h1`
    margin: 0;
    font-family: PoppinsBold;
`
const UserIcon = styled(FaUser)`
    width: 35px;
    height: 35px;
`
const DeleteIcon = styled(RiDeleteBin6Fill)`
    width: 30px;
    height: 30px;
    color: red;
    cursor: pointer;
`

const TrilhaCadastrada = styled.div`
    display: flex;
    flex-direction: column;

    h2{
        margin: 0;
        padding-bottom: 20px;
        font-size: 20px;
    }
`

const ContainerLista = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    div{
        display: flex;
        gap: 20px;
        align-items: center;
        span{
            font-size: 16px;
        }

        input{
            width: 100px;
            height: 35px;
            border-radius: 8px;
            border: 2px solid var(--black-input);
            background-color: #F3F3F3;
        }
    }
    
`

const ContainerAdicionar = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
`

const AdicionarTitle = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    h2{
        margin: 0;
        font-size: 20px;
    }

    input{
        width: 400px;
        height: 35px;
        border-radius: 8px;
        border: 2px solid var(--black-input);
        background-color: #F3F3F3;
        background-image: url('../../../public/icons8-lupa-48.png');
        background-repeat: no-repeat;
        background-size: 30px;
        background-position: 99%;
        outline: none;
    }
`

const ListaAdicionar = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    span{
        font-size: 16px;
    }
`


const TrilhaGestor = () => {
    return (
        <>
            <EstilosGlobais />
            <main>
                <MenuLateral ativo toValue='/editarGestor'>
                    <LinksAsideGestor />
                </MenuLateral>

                <Secao>
                    <Header>
                        <Titulo>Trilha de Conteúdo do Colaborador</Titulo>

                        <div>
                            <span>Kauan</span>
                            <div>
                                <UserIcon />
                            </div>
                        </div>
                    </Header>

                    <TrilhaCadastrada>
                        <h2>Trilhas Cadastradas</h2>
                        <ContainerLista>
                            <div>
                                <span>Trilha Ti</span>
                                <input type="time" placeholder="Tempo para Conclusão" />
                                <DeleteIcon />
                            </div>
                            <div>
                                <span>Trilha Ti</span>
                                <input type="time" placeholder="Tempo para Conclusão" />
                                <DeleteIcon />
                            </div>
                            <div>
                                <span>Trilha Ti</span>
                                <input type="time" placeholder="Tempo para Conclusão" />
                                <DeleteIcon />
                            </div>
                            <div>
                                <span>Trilha Ti</span>
                                <input type="time" placeholder="Tempo para Conclusão" />
                                <DeleteIcon />
                            </div>
                        </ContainerLista>
                    </TrilhaCadastrada>

                    <ContainerAdicionar>
                        <AdicionarTitle>
                            <h2>Adicionar Trilha</h2>
                            <input type="text" placeholder="Digite a trilha que deseja" />
                        </AdicionarTitle>
                        <ListaAdicionar>
                            <span>trilha Ti</span>
                            <span>trilha Ti</span>
                            <span>trilha Ti</span>
                            <span>trilha Ti</span>
                        </ListaAdicionar>
                        <div>
                            <BotaoPadrao>Salvar</BotaoPadrao>
                        </div>
                    </ContainerAdicionar>
                </Secao>
            </main>
        </>
    )
}
export default TrilhaGestor