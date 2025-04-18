import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import axios from 'axios';
import CarList from './Carlist';

const EmployeeDashboard = () => {
    const [cars, setCars] = useState([]);
    const navigate = useNavigate(); 

    useEffect(() => {
        fetchCars();
    }, []);

    const fetchCars = async () => {
        try {
            const response = await axios.get('http://localhost:5000/cars');
            setCars(response.data);
        } catch (error) {
            console.error('Error fetching cars:', error);
        }
    };

    const updateCar = async (id, updatedCar) => {
        try {
            await axios.put(`http://localhost:5000/cars/${id}`, updatedCar);
            fetchCars();
        } catch (error) {
            console.error('Error updating car:', error);
        }
    };

    const handleLogout = () => {
        
        navigate('/'); 
    };

    return (
        <div style={styles.container}>
            <div style={styles.header}>
                <h2>Employee Dashboard</h2>
                <button onClick={handleLogout} style={styles.logoutButton}>Logout</button>
            </div>
            <CarList cars={cars} onUpdate={updateCar} />
        </div>
    );
};

const styles = {
    container: {
        padding: '20px',
    },
    header: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: '20px',
    },
    logoutButton: {
        padding: '10px 20px',
        backgroundColor: '#DC3545', // Red color for logout
        color: '#fff',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
        fontSize: '16px',
    },
};

export default EmployeeDashboard;