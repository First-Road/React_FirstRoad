import styled from "styled-components"
import { ReactNode } from "react"
import { IconBaseProps } from "react-icons";
import { Link } from "react-router-dom";





interface ItemProps{
    children: ReactNode;
    icone: IconBaseProps
    toValue: string 
}
const ItemListaEstilizado = styled.li`
    display: flex;
    flex-direction: column;
    a{
       
    }   

`

const LinkEstilizado = styled(Link)`
    display: flex;
    align-items: center;
    gap: 10px;
    color: #FFFFFF;
    font-size: 1.1rem;
    cursor: pointer;
    text-decoration: none;

    span:hover{
        color: var(--principal-cor-4);
        text-decoration: underline;
        transition: 0.5ms;
        
    }
`


const MenuItemNavegacao = (props: ItemProps) => {
    return (
        <>
            <ItemListaEstilizado>
                <LinkEstilizado to={props.toValue}>
                    <>
                        {props.icone}
                    </>
                    <span>{props.children}</span>
                </LinkEstilizado>
            </ItemListaEstilizado>
        </>
    )
}
export default MenuItemNavegacao