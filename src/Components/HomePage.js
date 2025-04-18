import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import car1 from '../images/Car1.png'; 
import car2 from '../images/Car2.png';
import car3 from '../images/Car3.png';

const HomePage = () => {
    const navigate = useNavigate();
    const images = [car1, car2, car3];
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 2000); 
        return () => clearInterval(interval); 
    }, [images.length]);

    return (
        <div style={styles.container}>
            <div style={styles.leftSection}>
                <h2>Welcome to Car Rental System</h2>
                <p>
                    Rent a car with ease and explore the world at your own pace. We offer a wide range of vehicles to suit your needs, from compact cars to luxury SUVs. Book now and start your journey!
                </p>
                <button style={styles.button} onClick={() => navigate('/login')}>
                    Get Started
                </button>
            </div>
            <div style={styles.rightSection}>
                <img
                    src={images[currentImageIndex]}
                    alt="Car"
                    style={styles.image}
                />
            </div>
        </div>
    );
};

const styles = {
    container: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        minHeight: '80vh',
        height: '100vh',
        padding: '20px',
    },
    leftSection: {
        flex: 1,
        padding: '20px',
    },
    rightSection: {
        flex: 1,
        padding: '20px',
    },
    image: {
        width: '100%',
        height: '400px',
        objectFit: 'cover',
        borderRadius: '10px',
        transition: 'opacity 0.5s ease-in-out',
    },
    button: {
        padding: '10px 20px',
        backgroundColor: '#007BFF',
        color: '#fff',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
        fontSize: '16px',
    },
};

export default HomePage;