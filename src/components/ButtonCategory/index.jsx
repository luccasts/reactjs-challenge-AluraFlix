import styles from "./ButtonCategory.module.css"
import "./ButtonCategory.css"
// eslint-disable-next-line react/prop-types
const ButtonCategory = ({children, category, size}) => {

    return (
        <div style={{background:`var(--${category})`}} className={`${styles.button}  ${size}Button`}
        >
            {children}
        </div>
    )
}

export default ButtonCategory;