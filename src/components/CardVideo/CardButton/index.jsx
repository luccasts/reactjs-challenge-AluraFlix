import styles from "./CardButton.module.css"
import "./CardButton.css"

// eslint-disable-next-line react/prop-types
const CardButton = ({onclick, text, src, alt}) => {
    return (
       
            <button className={`${styles.button}`} onClick={onclick}>
                <img src={src} alt={alt}/>
                {text}</button>
    )


}

export default CardButton;