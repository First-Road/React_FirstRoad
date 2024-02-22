import styled from "styled-components"
import BotaoPadrao from "../../../components/BotaoPadrao/BotaoPadrao"
import EstilosGlobais from "../../../components/EstilosGlobais/EstilosGlobais"
import MenuLateral from "../../../components/MenuLateral/MenuLateral"
import LinksAsideGestor from "../../../components/LinksAsideGestor/LinksAsideGestor"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import api from "../../../utils/api"
import { forwardRef, useEffect, useState } from "react"

const Secao = styled.section`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 70px;

    @media screen and (max-width: 1000px) {
        width: 100%;
        height: 100%;
        position: absolute;
        left: 5px;
    }

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

        p{
            margin: 0px;
            color: red;
        }

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




const BotaoContainer = styled.div`
    width: 100%;
    display: flex;
    align-items: flex-end;
    justify-content: flex-end;
    height: 100%;
`
type FormProps = z.infer<typeof schema>
const schema = z.object({
    password: z.string().min(6, "A senha precisa ter pelo menos 6 caracteres"),
    confirmPassword: z.string(),
    nome: z.string().min(5, "Por favor digite um nome valido!"),
    unidades: z.string(),
    nif: z.string().max(8, "Por favor Digite um nif de 8 caracteres"),
    email: z.string().email("Por favor Digite um email valido"),
    dataNascimento: z.string(),
}).refine((fields) => fields.password === fields.confirmPassword, {
    path: ['confirmPassword'],
    message: "As senhas precisam ser iguais"
}).refine((fields) => fields.unidades.length, {
    path: ['unidades'],
    message: "Por favor, selecione uma unidade"
});



const CadastroColaborador = () => {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors }
    } = useForm<FormProps>({
        criteriaMode: "all",
        mode: "all",
        reValidateMode: "onChange",
        resolver: zodResolver(schema),
        defaultValues: {
            confirmPassword: '',
            password: '',
            dataNascimento: '',
            email: '',
            nif: "",
            nome: '',
            unidades: ''
        }
    });

    const [foto, setFoto] = useState<any>(null);

    const formData = new FormData();
    formData.append("url_imagem", foto);
    
    const watchAllFields = watch();
    
    const handleSubmitData = (data: FormProps) => {
        console.log("submit", data, formData, watchAllFields)

        api.post("usuarios", watchAllFields)
            .then((response: any) => {
                console.log(response);
                alert("Usuário cadastrado com sucesso!😊🤗");
            })
            .catch((error: any) => {
                console.log(error);
                alert("Falha ao cadastrar um novo usuário");
            })

            
           

    }
    
    const [unidades, setUnidades] = useState<any[]>([])

    function listarUnidades() {
        api.get("unidades")
            .then((response: any) => {
                console.table(response.data)
                setUnidades(response.data)
            })
            .catch((error: any) => {
                console.log(error);
                console.log("Error ao realizar um requisição", error);
            })
    }

    


    function verificarCampoUpload(event: any) {
        console.log(event.target.files[0]);
        setFoto(event.target.files[0]);
    }


    useEffect(() => {
        listarUnidades()
    }, [])



    return (

        <>
            <EstilosGlobais />
            <main>
                <MenuLateral ativo toValue='/editarGestor' menuAtivo>
                    <LinksAsideGestor />
                </MenuLateral>
                <Secao>
                    <h1>Cadastrar Colaborador</h1>
                    <input type="file" onChange={verificarCampoUpload} />
                    <form action="" method="POST" onSubmit={handleSubmit(handleSubmitData)}>
                        <DivInputContainer>
                            <DivInput>
                                <label htmlFor="Nome Completo">Nome Completo</label>
                                <input
                                    type="text"
                                    placeholder="Digite seu nome completo"
                                    {...register("nome")}
                                    

                                />
                                {errors.nome?.message && (
                                    <p>{errors.nome?.message}</p>
                                )}

                            </DivInput>
                            <DivInput>
                                <label htmlFor="Nif">NIF</label>
                                <input
                                    type="number"
                                    placeholder="00000000"
                                    {...register("nif")}
                                    maxLength={8}
                                    

                                />
                                {errors.nif?.message && (
                                    <p>{errors.nif?.message}</p>
                                )}

                            </DivInput>

                            <DivInput>
                                <label htmlFor="Senha">Senha</label>
                                <input
                                    placeholder="Digite a senha do colaborador"
                                    type="password"
                                    {...register("password")}
                                    

                                />
                                {errors.password?.message && (
                                    <p>{errors.password?.message}</p>
                                )}
                            </DivInput>

                            <DivInput>
                                <label htmlFor="E-mail">E-mail</label>
                                <input
                                    type="email"
                                    placeholder="email@enail.vw.com.br"
                                    {...register("email")}
                                    
                                />
                                {errors.email?.message && (
                                    <p>{errors.email?.message}</p>
                                )}
                            </DivInput>
                        </DivInputContainer>

                        <DivInputContainer>
                            <DivInput>
                                <label htmlFor="Data de nascimento">Data de nascimento</label>
                                <input
                                    type="date"
                                    {...register("dataNascimento")}
                                
                                />
                                {errors.dataNascimento?.message && (
                                    <p>{errors.dataNascimento?.message}</p>
                                )}


                            </DivInput>

                            <DivInput>
                                <label htmlFor="Unidade">Unidade</label>
                                <select
                                    aria-placeholder="Selecione"
                                    {...register("unidades")}
                                    defaultValue="1"
                                    

                                >
                                    <option value="1" hidden>Selecione</option>
                                    {
                                        unidades.map((unidade: any) => {
                                            return (
                                                <option
                                                    key={unidade.id}
                                                    value={unidade.complemento}
                                                >
                                                    {unidade.complemento}
                                                </option>
                                            )
                                        })
                                    }
                                </select>

                            </DivInput>

                            <DivInput>
                                <label htmlFor="Confirme a senha">Confirme a Senha</label>
                                <input
                                    placeholder="Confirme a senha"
                                    type="password"
                                    {...register("confirmPassword")}
                                />
                                {errors.confirmPassword?.message && (
                                    <p>{errors.confirmPassword?.message}</p>
                                )}
                            </DivInput>
                            <BotaoContainer>
                                <BotaoPadrao
                                    type="submit"
                                >
                                    Salvar
                                </BotaoPadrao>
                            </BotaoContainer>
                        </DivInputContainer>
                    </form>
                </Secao>
            </main >

        </>


    )
}

export default CadastroColaborador



