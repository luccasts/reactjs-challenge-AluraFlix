
import styles from "./Header.module.css"
import LinkPage from "../LinkPage";
import { useLocation } from "react-router-dom";
const Header = () => {
    const location = useLocation();
    
    return (
        <header style={{background: location.pathname === "/novo-video" ? "#000000E5": ""}} className={styles.header}>
            <img src={"/images/logo.png"}  />
            <nav className={styles.nav}>
                <LinkPage to="/">Home</LinkPage>
                <LinkPage to='/novo-video'> Novo Vídeo </LinkPage>
            </nav>
        </header>
    )
}


export default Header;