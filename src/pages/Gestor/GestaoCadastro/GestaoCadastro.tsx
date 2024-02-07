import { Link } from "react-router-dom"
import EstilosGlobais from "../../../components/EstilosGlobais/EstilosGlobais"
import LinksAsideGestor from "../../../components/LinksAsideGestor/LinksAsideGestor"
import MenuLateral from "../../../components/MenuLateral/MenuLateral"
import styled from "styled-components"
import { useEffect, useState } from "react"
import api from "../../../utils/api"
import ListaUsuarios from "../../../components/ListaUsuarios/ListaUsuarios"
import Pagination from "../../../components/Paginacao/Paginação"



const Secao = styled.section`
    width: 100%;
    height: 100dvh;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #F3F3F3;

    header{
        display: flex;
        justify-content: space-around;
        width: 100%;
        height: 120px;
        align-items: center; 
    }
`
const LinkEstilizado = styled(Link)`
    width: 150px;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 35px;
    border-radius: 8px;
    background-color: var(--principal-cor-3);
    font-size: 18px;
    color: #FFFFFF;
    border: none;
    box-shadow: 2px 3px 5px #888888;
    cursor: pointer;
    text-decoration: none;
    font-size: 18px;
`

const InputContainer = styled.div`
    width: 50%;
    input{
        width: 100%;
        height: 35px;
        border-radius: 8px;
        border: 2px solid var(--black-input);
        background-color: #F3F3F3;
        background-image: url('../../../public/icons8-lupa-48.png');
        background-repeat: no-repeat;
        background-size: 30px;
        background-position: 99%;
        outline: none;

        &::placeholder{
            padding: 20px;
            color: black;
        }
    }
`

const TabelaContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    text-align: center;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    table{
        border-collapse: separate; 
        border-spacing: 50px 5px;

        thead{
            th{
                height: 30px;
                font-size: 18px;
                font-family: PoppinsBold;
                border-bottom: 2px solid;
            }
        }

        tbody{
            width: 100%;
            font-size: 14px;
        }
    }
`

const GestaoCadastro = () => {
    // Estado para armazenar a lista de usuários
    const [usuarios, setUsuarios] = useState<any[]>([]);
    const [currentPage, setCurrentPage] = useState(0);
    const itemsPerPage = 10;

    // Efeito para carregar os usuários da API ao montar o componente
    useEffect(() => {
        listarUsuarios();
    }, [])

    function listarUsuarios() {


        api.get("usuarios")
            .then((response: any) => {
                setUsuarios(response.data);
                console.table(response.data)
            })
            .catch((error: any) => {
                console.log("Error ao realizar um requisição", error);
            })
    }

    const handlePageChange = ({ selected }: { selected: number }) => {
        setCurrentPage(selected);
    };

    const offset = currentPage * itemsPerPage;
    const currentItems = usuarios.slice(offset, offset + itemsPerPage);
    return (
        <>
            <EstilosGlobais />
            <main>
                <MenuLateral ativo toValue='/editarGestor'>
                    <LinksAsideGestor />
                </MenuLateral>

                <Secao>
                    <header>
                        <InputContainer>
                            <input type="text" placeholder="Busque pelo colaborador" />
                        </InputContainer>

                        <LinkEstilizado to="/cadastroColaborador">
                            Cadastrar
                        </LinkEstilizado>
                    </header>
                    <TabelaContainer>
                        <table>
                            <thead>
                                <tr>
                                    <th>Nif</th>
                                    <th>Nome</th>
                                    <th>Situação</th>
                                    <th>Cargo</th>
                                    <th>Unidade</th>
                                </tr>
                            </thead>

                            <tbody>
                                {
                                    currentItems.map((usuario: any, id: number) => {
                                        return <tr key={id}>
                                            <ListaUsuarios
                                                nome={usuario.nome}
                                                nif={usuario.nif}
                                                cargo={usuario.cargo.nome_cargo}
                                                unidade={usuario.id_unidade.complemento}
                                            />


                                        </tr>
                                    })
                                }
                            </tbody>
                        </table>
                    </TabelaContainer>
                    <Pagination
                        pageCount={Math.ceil(usuarios.length / itemsPerPage)}
                        onPageChange={handlePageChange}
                    />
                </Secao>
            </main>
        </>
    )
}
export default GestaoCadastro