import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import logoCaminhoes from '../../assets/icons/logocaminhoes.png'
import fotoPadrao from '../../assets/icons/fotopadrao_user_aside.svg'
import { FaPen } from 'react-icons/fa'
import { ImExit } from "react-icons/im"
import LogoFirstRoad from '../../assets/icons/Logo_FirstRoad_aside.svg'
import { TiThMenu } from 'react-icons/ti'
import { useState } from "react";


const Icone = styled(Link)`
    display: none;
    
    @media screen and (max-width:1000px){
        display: flex;
        background-color:  ${(props: any) => props.$menuAtivo ? "#025E73" : '#048ABF'};
        padding: 7px;
        border-radius: 0 15px 15px 0;
        position: absolute;
        top: 20px;
        left: 265px; 
    }
    
`
const SombraEstilizada = styled.div`
    @media screen and (max-width: 1000px) {
        width: 100vw;
        background-color: #0000004f;
        position: fixed;
        top: 0;
        left: ${(props: any) => props.$ativoSombra ? '0' : '100vw'};
        overflow: hidden;
        transition: .5s;
        backdrop-filter: blur(10px);
        z-index: 3;
    }
`

const MenuEstilizado = styled.aside`
    display: flex;
    height: 100dvh;
    width: 270px;
    background-color:  ${(props: any) => props.$ativo ? '#025E73' : '#048ABF'};
    position: relative;
    left: 0px;
    transition: all 0.5s ease;
    z-index: 2;

    @media screen and(max-width: 1000px) {
        position: absolute;

    }

    div{
        display: flex;
        flex-direction: column;
        align-items: center;
        padding-top: 20px;
        justify-content: space-around;
    
        img{
            width: 100px;
        }
        
        div{
            position: relative;
            div{
                width: 30px;
                position: absolute;
                top: 80px;
                left: 75px;
            }
        }

        form{
            width: 270px;
            display: flex;
            justify-content: center;
            ul{
                display: flex;
                flex-direction: column;
                margin: 0;
                padding: 0;
                align-items: flex-start;
                gap: 20px;
            }
        }

        footer{
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 15px;
            
            div{
                cursor: pointer;
            }
        }
    }
`






const MenuLateral = ({ children, toValue, ativo = false, menuAtivo = false }: any) => {
    const [ativoSombra, setAtivoSombra] = useState(false);
    const navigate = useNavigate()
    addEventListener("resize", () => {
        const eventoMenu: any = window.innerWidth
        const aside: any = document.getElementById("aside")
        if (eventoMenu >= 1000) {
            aside.style.left = "0px"
        }
        else {
            aside.style.left = "-265px"
        }
    });

    function mostrarMenu(event: any) {
        event.preventDefault()

        const sombra: any = document.getElementById("sombra")
        const body: any = document.getElementById("body")
        const aside: any = document.getElementById("aside")

        if (window.getComputedStyle(aside!).left == "0px") {
            aside.style.left = "-265px"
            setAtivoSombra(false)
        }
        else {
            aside.style.left = "0px"
            setAtivoSombra(true)
        }
    }

    const realizarLogout = () => {
        localStorage.removeItem("token");
        navigate("/");
    }



    return (
        <>
            
            <SombraEstilizada $ativoSombra={ativoSombra}/>
            <MenuEstilizado $ativo={ativo} id="aside" >
            

                <div>

                    <img src={logoCaminhoes} alt="logo caminhoes" />

                    <Icone onClick={mostrarMenu} $menuAtivo={menuAtivo}>
                        <TiThMenu size={30} color='#FFFFFF' />
                    </Icone>

                    <div>
                        <img src={fotoPadrao} alt="" />
                        <div>
                            <Link to={toValue}>
                                <FaPen color="#FFFFFF" size={20} />
                            </Link>
                        </div>
                    </div>

                    <form>
                        <ul>
                            {children}
                        </ul>
                    </form>

                    <footer>
                        <div>
                            <ImExit size={25} color="#FFFFFF" onClick={realizarLogout} />
                        </div>
                        <img src={LogoFirstRoad} alt="" />
                    </footer>

                </div>
            </MenuEstilizado>
        </>
    )
}
export default MenuLateral;