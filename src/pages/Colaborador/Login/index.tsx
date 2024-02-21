import { Link } from "react-router-dom"
import EstilosGlobais from "../../../components/EstilosGlobais/EstilosGlobais"
import styled from "styled-components"
import logo from "../../../assets/icons/Logo_FirstRoad_Vertical_Colorido.svg"
import { AiFillEye } from "react-icons/ai";
import { useNavigate } from 'react-router-dom'
import api from "../../../utils/api";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
//import { UserContext } from "../../../context/auth";







const Secao = styled.section`
    background-image: url(../../../public/Estrada_manha.jpg);
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    width: 100%;
    height: 100dvh;
    p{
        margin: 0;
        color: yellow;
        font-size: 12px;
    }
        

    form{
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
`

const LoginContainer = styled.div`
    width: 450px;
    height: 80%;
    display: flex;
    flex-direction: column;
    border: 2px solid rgba(255, 255, 255, 0.218);
    border-radius: 10px;
    backdrop-filter: blur(15px);
    display: flex;
    justify-content: space-evenly;
    align-items: center;

    img{
        width: 120px;
    }
    h1{
        font-size: 35px;
        font-family: PoppinsBold;
        color: white;
        margin: 0px;
    }

    @media screen and (max-width: 600px){
        width: 350px;
    }
    @media screen and (max-width: 450px){
        width: 320px;
    }
`

const InputContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 80%;
    height: 35px;
    position: relative;
    gap: 10px;
    input{
        width: 100%;
        height: 100%;
        background-color: transparent;
        border: none;
        border-bottom: 3px solid #FFFFFF;
        outline: none;
        color: white;
        outline: none;

        &:focus::placeholder{
            color: transparent;
        }
    
        &::placeholder{
            color: white;
            font-size: 18px;
            pointer-events: none;
        }
    }
`

const Botao = styled.div`
    width: 200px;
    height: 40px;
    display: flex;
    justify-content: center;

    button{
        width: 100%;
        height: 100%;
        border-radius: 8px;
        border: none;
        color: black;
        font-size: 18px;
        font-family: PoppinsBold;
        background-color: white;
        &:hover{
            background-color: black;
            color: white;
            transition: .8s;
        }
    }
`

const CheckBox = styled.div`
    width: 100%;
    label{
        justify-content: center;
        align-items: center;
        display: flex;
        font-size: 16px;
        color: white;
    }

    input{
        width: 15px;
        height: 15px;
        margin-right: 5px;
    }
`

const LinkEstilizado = styled(Link)`
    text-decoration: none;
    color: white;
    &:hover{
        text-decoration: underline;
    }
    span{
        font-size: 16px;
        color: white;
        &:hover{
            text-decoration: underline;
        }
    }
`
const IconeSenha = styled(AiFillEye)`
    position: absolute;
    right: 10px;
    top: 8px;
    width: 20px;
    height: 20px;
    color: white;
    cursor: pointer;
`

type FormProps = z.infer<typeof schema>
const schema = z.object({
    senha: z.string().min(6, "A senha precisa ter pelo menos 6 caracteres"),
    email: z.string().email("Por favor Digite um email valido"),
})

const Login = () => {

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm<FormProps>({
        criteriaMode: "all",
        mode: "all",
        reValidateMode: "onChange",
        resolver: zodResolver(schema),
        defaultValues: {
            senha: '',
            email: '',
        }
    });

    const navigate = useNavigate();

    // const [email, setEmail] = useState<string>("");
    // const [senha, setSenha] = useState<string>("");
    // const [tipoUsuario, setTipoUsuario] = useState<string>("")

    const realizarAutenticacao = (data: FormProps) => {
        console.log("submit", data)
        api.post("login", data)
            .then((response: any) => {
                const decoded = (response.data.token)
                console.log(decoded.idUsuario);
                const tipo = decoded.tipo_usuario
                localStorage.setItem("token", JSON.stringify(decoded))

                switch (tipo) {
                    case "ADMIN":
                        navigate("/trilha")
                        break;
                    case "COLABORADOR":
                        navigate("/home")
                        break;
                    default:
                        navigate("/home")
                        break;
                }
            })
            .catch(() => {
                alert("Usuario não cadastrado")
            })

    }

    // function realizarAutenticacao(event: any) {
    //     event.preventDefault();

    //     // const usuario = {
    //     //     email: email,
    //     //     senha: senha
    //     // }

    //     api.post("login", usuario)
    //         .then((response) => {
    //             const decoded = (response.data.token)
    //             console.log(decoded.idUsuario);
    //             const tipo = decoded.tipo_usuario
    //             localStorage.setItem("token", JSON.stringify(decoded))

    //             switch (tipo) {
    //                 case "ADMIN":
    //                     navigate("/trilha")
    //                     break;
    //                 case "COLABORADOR":
    //                     navigate("/home")
    //                     break;
    //                 default:
    //                     navigate("/home")
    //                     break;
    //             }
    //         })
    //         .catch(() => {
    //             alert("Usuario não cadastrado")

    //         })










    return (
        <>
            <EstilosGlobais />
            <main>
                <Secao>
                    <form method="POST" onSubmit={handleSubmit(realizarAutenticacao)}>

                        <LoginContainer
                        >
                            <img src={logo} alt="" />
                            <h1>Login</h1>
                            <InputContainer>
                                <div>
                                    <input
                                        type="email"
                                        placeholder="E-mail"
                                        // onChange={(e) => setEmail(e.target.value)}
                                        {...register("email")}

                                    />
                                </div>

                                <div>
                                    {errors.email?.message && (
                                        <p>{errors.email?.message}</p>
                                    )}
                                </div>
                            </InputContainer>

                            <InputContainer>
                                <div>
                                    <input
                                        type="password"
                                        placeholder="Senha"
                                        // onChange={(e) => setSenha(e.target.value)}
                                        {...register("senha")}
                                    />
                                    <IconeSenha />
                                </div>

                                <div>
                                    {errors.senha?.message && (
                                        <p>{errors.senha?.message}</p>
                                    )}
                                </div>

                            </InputContainer>


                            <CheckBox>
                                <label htmlFor="">
                                    <input type="checkbox" />
                                    Lembrar senha
                                </label>
                            </CheckBox>

                            <Botao>
                                <button type="submit">Login</button>
                            </Botao>

                            <LinkEstilizado to="">
                                <span>Esqueceu a Senha?</span>
                            </LinkEstilizado>

                            <span>Precisa de ajuda? <LinkEstilizado to="">Suporte</LinkEstilizado></span>
                        </LoginContainer>
                    </form>
                </Secao>
            </main>
        </>
    )
}
export default Login




