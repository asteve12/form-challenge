//styles
import ApplyStyle from "./style"

interface Props {
    btnName?:string
}

const Footer = (props:Props) => {
    return (
        <ApplyStyle >
            <button className="nextBtn">{props.btnName ? props.btnName:"Next"}</button>
            <button className="cancelBtn"> Cancel Payment</button>
        </ApplyStyle>
    )
}


export default Footer