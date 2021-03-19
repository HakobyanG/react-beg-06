import { Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import styles from './navbar.module.css';

const Navbar = () => {
    return (
        <Nav className={styles.nabar}>
            <Nav.Item >
                <NavLink
                    to="/"
                    className={styles.nav_link}
                    activeClassName={styles.activeNavLink}
                    exact={true}
                >
                    Home
                    </NavLink>
            </Nav.Item>
            <Nav.Item>
                <NavLink
                    to="/contact"
                    className={styles.nav_link}
                    exact={true}
                    activeClassName={styles.activeNavLink}
                >
                    Contact 
                </NavLink>
            </Nav.Item>
            <Nav.Item>
                <NavLink
                    to="/about"
                    className={styles.nav_link}
                    activeClassName={styles.activeNavLink}
                    exact={true}
                >
                    About 
                    </NavLink>
            </Nav.Item>
        </Nav>
    );
}

export default Navbar;