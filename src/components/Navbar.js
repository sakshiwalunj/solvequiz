import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav style={styles.navbar}>
            <h1 style={styles.logo}>Quiz App</h1>
            <ul style={styles.navLinks}>
                <li style={styles.navItem}>
                    <Link to="/" style={styles.navLink}>Home</Link>
                </li>
                <li style={styles.navItem}>
                    <Link to="/about" style={styles.navLink}>About</Link>
                </li>
                
            </ul>
        </nav>
    );
};

const styles = {
    navbar: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: '70px',
        //backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent background
        padding: '0 20px',
        position: 'fixed',
        top: '0',
        left: '0',
        width: '100%',
        boxSizing: 'border-box',
        zIndex: '1000',
    },
    logo: {
        color: '#fff',
        fontSize: '24px',
        fontWeight: 'bold',
    },
    navLinks: {
        display: 'flex',
        listStyle: 'none',
        margin: '0',
        padding: '0',
        gap: '20px',
    },
    navItem: {
        margin: '0',
        padding: '15px',
        textAlign: 'center',
    },
    navLink: {
        color: '#fff',
        textDecoration: 'none',
        fontSize: '18px',
    },
};

export default Navbar;
