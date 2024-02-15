import { ReactNode } from "react"

interface InputProps{
    nameLabel: any
    type: any
    placeholder: any
    children: ReactNode
}



const InputPadrao = (props: InputProps) => {
    return(
        <>
            <label 
                htmlFor={props.nameLabel}>
                {props.children}
            </label>
            <input 
                type={props.type} 
                placeholder={props.placeholder}
                minLength={6}
            />
        </>
    )
}
export default InputPadrao