import { Link } from "react-router-dom";
import styles from './LinkPage.module.css';
// eslint-disable-next-line react/prop-types
const LinkPage = ({to,children}) => {
    return(
        <Link className={styles.link} to={to}>{children}</Link>
    )
}

export default LinkPage;
