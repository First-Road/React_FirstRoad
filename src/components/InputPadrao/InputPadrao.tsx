import { ReactNode } from "react"

interface InputProps{
    nameLabel: any
    type: any
    placeholder: any
    children: ReactNode
    onChange?: any
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
                onChange={props.onChange}
            />
        </>
    )
}
export default InputPadrao