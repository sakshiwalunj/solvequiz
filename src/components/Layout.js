import React from 'react';
import { Outlet } from 'react-router-dom'; // Use Outlet to render child routes
import Navbar from './Navbar'; // Import Navbar component

const Layout = () => {
    return (
        <div style={styles.container}>
            {/* Background Video */}
            <video autoPlay loop muted style={styles.video}>
                <source src="/bgv.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            {/* Overlay for dark effect */}
            <div style={styles.overlay}></div>

            {/* Content including Navbar and Outlet */}
            <div style={styles.content}>
                {/* Navbar */}
                <Navbar />
                {/* Outlet renders child routes */}
                <div style={styles.pageContent}>
                    <Outlet />
                </div>
            </div>
        </div>
    );
};

const styles = {
    container: {
        position: 'relative',
        width: '100%',
        height: '100vh',
        overflow: 'hidden',
    },
    video: {
        position: 'absolute',
        top: '0',
        left: '0',
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        zIndex: '-1', // Ensure video is behind all content
    },
    overlay: {
        position: 'absolute',
        top: '0',
        left: '0',
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.5)', // Adds a semi-transparent overlay
        zIndex: '0', // Ensure overlay is above the video but below content
    },
    content: {
        position: 'relative',
        zIndex: '1', // Ensure content is above video and overlay
        width: '95%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-start',
        color: '#fff',
        paddingTop: '70px', // Space for Navbar
        boxSizing: 'border-box',
    },
    pageContent: {
        width: '100%',
        padding: '20px', // Padding to ensure content doesn't touch edges
        boxSizing: 'border-box',
    },
};

export default Layout;
