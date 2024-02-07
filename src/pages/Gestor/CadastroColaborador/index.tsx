import styled from "styled-components"
import BotaoPadrao from "../../../components/BotaoPadrao/BotaoPadrao"
import { SetStateAction, useEffect, useState } from "react"
import api from "../../../utils/api"
import InputPadrao from "../../../components/InputPadrao/InputPadrao"
import EstilosGlobais from "../../../components/EstilosGlobais/EstilosGlobais"
import MenuLateral from "../../../components/MenuLateral/MenuLateral"
import LinksAsideGestor from "../../../components/LinksAsideGestor/LinksAsideGestor"

const Secao = styled.section`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 70px;

    h1{
        font-size: 42px;
        font-family: PoppinsBold;
        color: var(--principal-cor-3);
    }

    @media screen and (max-width: 700px){
        gap: 50px;
    }

    form{
        display: flex;
        gap: 20px;
        width: 70dvw;
        max-width: 1000px;
        justify-content: center;

       @media screen and (max-width: 1000px){
        width: 90dvw;
       }

    }
`

const DivInputContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    width: 100%;

    @media screen and (max-width: 700px){
        width: 250px;
    }

    @media screen and (max-width: 400px){
        width: 130px;
    }
`

const DivInput = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2px;

    label{
        color: #000000;
        font-size: 16px;
        font-family: PoppinsBold ;
    }

    select{
        height: 35px;
        border: 2px solid var(--black-input);
        border-radius: 8px;
        background-color: var(--grayscale-cor-4);
        padding-left: 10px;

    }
    

    input{
        height: 30px;
        border: 2px solid var(--black-input);
        border-radius: 8px;
        background-color: var(--grayscale-cor-4);
        
        
        
    }

    input::placeholder{
        padding-left: 10px;
    }
    
`

const DivSenha = styled.div`
    display: flex;
    flex-direction: column;
    width: 50%;
    

    input{
        height: 32px;
        border: 2px solid var(--black-input);
        border-radius: 8px;
        background-color: var(--grayscale-cor-4);

        @media screen and (max-width: 700px){
            width: 100%;
        }
        
    }

    input::placeholder{
        padding-left: 10px;
    }

    label{
        color: #000000;
        font-size: 16px;
        font-family: PoppinsBold ;
    }

`

const DivSenhaContainer = styled.div`
    display: flex;
    gap: 20px;
`

const BotaoContainer = styled.div`
    width: 100%;
    display: flex;
    align-items: flex-end;
    justify-content: flex-end;
    height: 100%;
`



const CadastroColaborador = () => {

    const [nomeCompleto, setNomeCompleto] = useState<string>("")
    const [nif, setNif] = useState<string>("")
    const [senha, setSenha] = useState<string>("")
    const [email, setEmail] = useState<string>("")
    const [dataNascimento, setDataNascimento] = useState<string>("")
    const [tipoUsuario, setTipoUsuario] = useState<string>("COLABORADOR")
    const [cargos, setCargos] = useState<any[]>([]);
    const [unidades, setUnidades] = useState<any[]>([]);

    function CadastrarColaborador(event: any) {
        event.preventDefault();

        const formData = new FormData();

        formData.append("nome", nomeCompleto)
        formData.append("nif", nif)
        formData.append("senha", senha)
        formData.append("email", email)
        formData.append("data_nascimento", dataNascimento)
        formData.append("tipo_Usuario", tipoUsuario)


        api.post("usuarios", formData)
            .then((response: any) => {
                console.table(response)
                alert("Usuário cadastrado com sucesso!")
            })
            .catch((error: any) => {
                console.log(error)
                alert("Falha ao cadastrar um novo usuário")
            })
    }



    function ListarUnidades() {
        api.get("unidades")
            .then((response: any) => {
                setUnidades(response.data);
                console.log(response.data)
            })
            .catch((error: any) => {
                console.log("Error ao realizar um requisição", error);
            })
    }



    useEffect(() => {
        ListarUnidades();
    }, []);
    return (

        <>
            <EstilosGlobais />
            <main>
                <MenuLateral ativo toValue='/editarGestor'>
                    <LinksAsideGestor />
                </MenuLateral>
                <Secao>
                    <h1>Cadastrar Colaborador</h1>
                    <input type="file" />
                    <form action="" method="POST" onSubmit={CadastrarColaborador}>
                        <DivInputContainer>
                            <DivInput>
                                <label htmlFor="Nome Completo">Nome Completo</label>
                                <input
                                    type="text"
                                    placeholder="Digite seu nome completo"
                                    required
                                    onChange={(e) => {
                                        setNomeCompleto(e.target.value)
                                    }}
                                />
                            </DivInput>
                            <DivInput>
                                <label htmlFor="Nif">NIF</label>
                                <input
                                    type="number"
                                    placeholder="00000000"
                                    required
                                    onChange={(e) => {
                                        setNif(e.target.value)
                                    }}
                                />
                            </DivInput>

                            <DivSenhaContainer>
                                <DivSenha>
                                    <InputPadrao
                                        nameLabel="senha"
                                        children="Senha"
                                        placeholder="Digite a senha do colaborador"
                                        type="password"
                                        onChange={(e: { target: { value: SetStateAction<string> } }) => setSenha(e.target.value)}

                                    />
                                </DivSenha>

                                <DivSenha>
                                    <InputPadrao
                                        nameLabel="senha"
                                        children="Confirme a senha"
                                        placeholder="Confirme a senha"
                                        type="password"
                                    />
                                </DivSenha>
                            </DivSenhaContainer>

                            <DivInput>
                                <label htmlFor="E-mail">E-mail</label>
                                <input
                                    type="email"
                                    placeholder="email@enail.vw.com.br"
                                    required
                                    onChange={(e) => {
                                        setEmail(e.target.value)
                                    }}
                                />
                            </DivInput>
                        </DivInputContainer>

                        <DivInputContainer>
                            <DivInput>
                                <label htmlFor="Data de nascimento">Data de nascimento</label>
                                <input
                                    type="date"
                                    required
                                    onChange={(e) => {
                                        setDataNascimento(e.target.value)
                                    }}
                                />
                            </DivInput>

                            <DivInput>
                                <label htmlFor="Unidade">Unidade</label>
                                <select
                                    name="Selecione"
                                    aria-placeholder="Selecione"
                                    // onChange={(e) => {
                                    //     setUnidade(e.target.value)
                                    // }}

                                    value={unidades}
                                    
                                >
                                    <option disabled selected value="Selecione">Selecione</option>

                                    {
                                        unidades.map((unidade: any) => {
                                            return <option
                                                value={unidade.id}
                                                key={unidade.id}
                                            >
                                                {unidade.razao_social}
                                            </option>
                                        })
                                    }
                                </select>
                            </DivInput>

                            <DivInput>
                                <label htmlFor="Cargo">Cargo</label>
                                <select
                                    name="Selecione"
                                    aria-placeholder="Selecione"
                                    // onChange={(e) => {
                                    //     setCargos(e.target.value)
                                    // }}

                                    value={cargos}
                                    
                                >
                                    <option  disabled selected value="Selecione">Selecione</option>

                                    {
                                        cargos.map((cargo: any) => {
                                            return <option
                                                value={cargo.id}
                                                key={cargo.id}
                                            >
                                                {cargo.nome_cargo}
                                            </option>
                                        })
                                    }
                                </select>
                            </DivInput>
                            <BotaoContainer>
                                <BotaoPadrao
                                    largura='200px'
                                >
                                    Salvar
                                </BotaoPadrao>
                            </BotaoContainer>
                        </DivInputContainer>
                    </form>
                </Secao>
            </main>

        </>


    )
}

export default CadastroColaborador