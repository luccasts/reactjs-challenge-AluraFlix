import styles from "./ButtonForm.module.css"

// eslint-disable-next-line react/prop-types
const ButtonForm = ({ onclickProps, children, typeProps }) => {
    return (
        <button onClick={onclickProps}  className={styles.button} >
            {children}
        </button>
    )
}
export default ButtonForm;
//onSubmit={onclickProps}
//onClick={onclickProps}