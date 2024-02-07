import { ReactNode } from "react";
import { Link } from "react-router-dom"
import styled from "styled-components"
import { MdLiveHelp } from 'react-icons/md'

interface ItemProps {
    children: ReactNode;
    toValue: string
}

const ListaSuporte = styled.li`
    
`

const LinkEstilizado = styled(Link)`
    display: flex;
    align-items: center;
    gap: 15px;
    text-decoration: none;

    
    .small{
        font-size:20px;
    }

    span{
        color: black;
        font-size: 20px;

        @media screen and (max-width: 750px){
            font-size: 16px;
        }
        
        &:hover{
            color: var(--principal-cor-2);
            transition: .7s;
            transform: scale(1.1);
            
        }
    }
    
`

const ItemListaSuporte = (props: ItemProps) => {
    return (
        <ListaSuporte>
            <LinkEstilizado to={props.toValue}>
                <MdLiveHelp color="black" size={30} className="small"/>
                <span>{props.children}</span>
            </LinkEstilizado>
        </ListaSuporte>
    )
}
export default ItemListaSuporte