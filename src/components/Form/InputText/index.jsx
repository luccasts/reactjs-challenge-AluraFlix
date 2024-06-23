import { useLocation } from "react-router-dom";
import styles from "./InputText.module.css"
// eslint-disable-next-line react/prop-types
const InputText = ({ placeHolder, valueProps, onChangeProps, label }) => {
    const location = useLocation()
    
    return (
        <label className={styles.input} style={location.pathname === "/" ? {width:"100%"} :{width:"50%"}}>
            {label}
            <input  minLength={5} required placeholder={placeHolder} value={valueProps} onChange={(v) => onChangeProps(v.target.value)} />
        </label>
    )
}
export default InputText;