import styles from "./InputText.module.css"
// eslint-disable-next-line react/prop-types
const InputText = ({ placeHolder, valueProps, onChangeProps, label }) => {

    return (
        <label className={styles.input}>
            {label}
            <input  min={5} required placeholder={placeHolder} value={valueProps} onChange={(v) => onChangeProps(v.target.value)} />
        </label>
    )
}
export default InputText;