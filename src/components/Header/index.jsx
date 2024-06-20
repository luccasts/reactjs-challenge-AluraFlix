
import styles from "./Header.module.css"
import LinkPage from "../LinkPage";
const Header = () => {
    return (
        <header className={styles.header}>
            <img src="images/logo.png" />
            <nav>
                <LinkPage to="/">Home</LinkPage>
                <LinkPage to='/novo-video'> Novo Vídeo </LinkPage>
            </nav>
        </header>
    )
}


export default Header;