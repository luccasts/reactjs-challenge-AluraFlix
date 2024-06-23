import styles from "./CardImage.module.css"
// eslint-disable-next-line react/prop-types
const CardImage = ({ image, title, category , videoLink}) => {
    return (
        <a href={videoLink} target="_blank">
            <div style={{ borderColor: `var(--${category})`, backgroundImage:`url(${image})`, boxShadow:` 0px 0px 17px 8px  inset var(--${category})`}}
                className={styles.image} src={image} alt={title}>
            </div>
        </a>
    )
}

export default CardImage;