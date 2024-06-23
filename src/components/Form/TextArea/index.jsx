import styles from "./TextArea.module.css"
import { useLocation } from "react-router-dom";
// eslint-disable-next-line react/prop-types
const TextArea = ({ valueProps, placeHolder, onChangeProps, label, requiredProps }) => {
    const location = useLocation()
    return (
        <label className={styles.textArea}
        style={location.pathname === "/" ? {width:"100%"} :{width:"50%"}}
        >
            {label}
            <textarea minLength={10} maxLength={600} required={requiredProps} cols={33} rows={10} value={valueProps} placeholder={placeHolder} onChange={value => onChangeProps(value.target.value)} />
        </label>
    )
}

export default TextArea;