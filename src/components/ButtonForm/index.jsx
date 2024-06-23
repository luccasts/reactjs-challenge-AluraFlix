import styles from "./ButtonForm.module.css"

// eslint-disable-next-line react/prop-types
const ButtonForm = ({ onclickProps, children }) => {
    return (
        <button onClick={onclickProps}  className={styles.button} >
            {children}
        </button>
    )
}
export default ButtonForm;