import React from 'react';

const Footer = () => {
    return (
        <footer style={styles.footer}>
            <p>&copy; 2025 Car Rental System. All rights reserved.</p>
        </footer>
    );
};

const styles = {
    footer: {
        textAlign: 'center',
        padding: '10px',
        backgroundColor: '#333',
        color: '#fff',
        bottom: 0,
        width: '100%',
    },  
};

export default Footer;