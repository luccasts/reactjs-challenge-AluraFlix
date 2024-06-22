import styles from "./TextArea.module.css"
// eslint-disable-next-line react/prop-types
const TextArea = ({ valueProps, placeHolder, onChangeProps, label, requiredProps }) => {
    return (
        <label className={styles.textArea}>
            {label}
            <textarea required={requiredProps} cols={33} rows={10} value={valueProps} placeholder={placeHolder} onChange={value => onChangeProps(value.target.value)} />
        </label>
    )
}

export default TextArea;