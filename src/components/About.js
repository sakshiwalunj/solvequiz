import React from 'react';
import { FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa';

const About = () => {
    return (
        <div style={styles.container}>
            <img
                src="https://cdn.pixabay.com/photo/2023/12/01/00/43/anime-girl-8422665_1280.jpg"
                alt="Sakshi"
                style={styles.image}
            />
            <div style={styles.textContainer}>
                <h1 style={styles.heading}>About Me</h1>
                <p style={styles.text}>
                    Hi, I'm Sakshi, a passionate software developer. This project was developed to help you learn Redux Toolkit and improve your React skills. If you find this project useful, consider buying me a coffee to support my work!
                </p>
                <a href="https://www.buymeacoffee.com/sakshi" style={styles.button}>
                    Buy Me a Coffee
                </a>
                <div style={styles.contact}>
                    <a href="mailto:sakshi@example.com" style={styles.icon}><FaEnvelope /></a>
                    <a href="https://www.linkedin.com/in/sakshiwalunj" style={styles.icon}><FaLinkedin /></a>
                    <a href="https://github.com/sakshiwalunj" style={styles.icon}><FaGithub /></a>
                </div>
            </div>
        </div>
    );
};

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '20px',
        textAlign: 'center',
       // backgroundColor: '#333', // Dark background for contrast
        color: '#fff', // White text color
        minHeight: '100vh', // Ensure full height
    },
    image: {
        borderRadius: '50%',
        width: '150px',
        height: '150px',
        objectFit: 'cover',
        marginBottom: '20px',
    },
    textContainer: {
        maxWidth: '600px',
    },
    heading: {
        fontSize: '2rem',
        marginBottom: '10px',
    },
    text: {
        fontSize: '1.2rem',
        marginBottom: '20px',
    },
    button: {
        display: 'inline-block',
        padding: '10px 20px',
        fontSize: '1rem',
        borderRadius: '5px',
        textDecoration: 'none',
        backgroundColor: '#6c757d',
        color: 'white',
        transition: 'background-color 0.3s ease',
    },
    contact: {
        marginTop: '20px',
    },
    icon: {
        margin: '0 10px',
        color: '#fff',
        fontSize: '1.5rem',
        textDecoration: 'none',
        transition: 'color 0.3s ease',
    },
};

export default About;
