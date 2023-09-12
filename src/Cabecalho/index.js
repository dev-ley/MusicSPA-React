
import { Link, useLocation } from 'react-router-dom';
import styles from './Cabecalho.module.css';

function Cabecalho() {

    const localizacao = useLocation();

    return (
        <header className={styles.cabecalho}>
            <nav className={styles.nav}>
            <Link className={`
                ${styles.logo}
                ${localizacao.pathname === '/' ? styles.linkDestacado : ""}
                `} to="/">Simo
            </Link>

            <Link className={`
                ${styles.link}
                ${localizacao.pathname === '/Discover' ? styles.linkDestacado : ""}
                `} to="/Discover">Discover
            </Link>

            <Link className={`
                ${styles.link}
                ${localizacao.pathname === '/Signin' ? styles.linkDestacado : ""}
                `} to="/Signin">Sign In
            </Link>
            </nav>
        </header>
    )
}

export default Cabecalho;