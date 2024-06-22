import styles from './Select.module.css'

// eslint-disable-next-line react/prop-types
const Select = ({ valueProps, placeHolder, onChangeProps, label, requiredProps }) => {
    return (
        <label className={styles.select}>
            {label}
            <select required={requiredProps} value={valueProps} placeholder={placeHolder} onChange={value => onChangeProps(value.target.value)}>
                <option>Selecione uma categoria</option>
                <option>Front End</option>
                <option>Back End</option>
                <option>Mobile</option>
            </select>
        </label>
    )
}

export default Select;