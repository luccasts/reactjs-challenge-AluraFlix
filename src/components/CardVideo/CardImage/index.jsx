import styles from "./CardImage.module.css"
// eslint-disable-next-line react/prop-types
const CardImage = ({image, title, category}) => {
    return (
        <img style={{borderColor:`var(--${category})`}}
        className={styles.image} src={image} alt={title} />
    )
}

export default CardImage;