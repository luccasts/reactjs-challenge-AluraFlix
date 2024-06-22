import { Link, useLocation } from "react-router-dom";
import styles from './LinkPage.module.css';
// eslint-disable-next-line react/prop-types
const LinkPage = ({to,children}) => {
    const location = useLocation()
    return(
        <Link className=
        {`
            ${styles.link}
            ${location.pathname === to ? styles.active : ""}
        `} 
        to={to}>{children}</Link>
    )
}

export default LinkPage;
