import styled from "styled-components"
import {CSSObject} from "styled-components"

const BotaoEstilizado = styled.button<CSSObject>`

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
`

type Props = {
    type?: any
    children: any
}

const BotaoPadrao = ( {children, type}: Props) => {
    return (
        <BotaoEstilizado  type={type}>{children}</BotaoEstilizado>

    )
}
export default BotaoPadrao