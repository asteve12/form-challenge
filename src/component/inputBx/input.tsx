//style
import React, { ReactNode } from "react";
import { InputBox } from "./style"

interface Props {
    className: string,
    formObj: any,
    placeholder: string,
    id:string
}

const InputBx = (props:Props):JSX.Element => {
    

    return <InputBox
        className={props.className}
        onChange={props.formObj.handleChange}
        value={props.formObj.values[props.id]}
        id={props.id}
        placeholder={props.placeholder}
        onBlur={props.formObj.handleBlur}
    ></InputBox>
        
}


export default InputBx;