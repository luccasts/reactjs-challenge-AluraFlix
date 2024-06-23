import styles from "./Footer.module.css"

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <img  className={styles.img} src={"/images/logo.png"} />
        </footer >
    )
}


export default Footer;