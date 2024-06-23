import styles from './Select.module.css'
import { useLocation } from "react-router-dom";
// eslint-disable-next-line react/prop-types
const Select = ({ valueProps, placeHolder, onChangeProps, label }) => {
    const location = useLocation()
    return (
        <label className={styles.select} style={location.pathname === "/" ? {width:"100%"} :{width:"50%"}}>
            {label}
            <select name='category' required value={valueProps} placeholder={placeHolder} onChange={value => onChangeProps(value.target.value)}>
                <option value="">Selecione uma categoria</option>
                <option value="Front End">Front End</option>
                <option value="Back End">Back End</option>
                <option value="Mobile">Mobile</option>
            </select>
        </label>
    )
}

export default Select;