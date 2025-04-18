import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CarList from './Carlist'; 

// import React from 'react';

const EmployeeList = ({ employees }) => {
    return (
        <div style={styles.container}>
            {employees.map((employee) => (
                <div key={employee.id} style={styles.card}>
                    <div style={styles.imageContainer}>
                        <img src={employee.image_url} alt={employee.full_name} style={styles.employeeImage} />
                    </div>
                    <div style={styles.employeeDetails}>
                        <h4>{employee.full_name}</h4>
                        <p><strong>Date of Birth:</strong> {employee.date_of_birth}</p>
                        <p><strong>Phone Number:</strong> {employee.phone_number}</p>
                        <p><strong>Email:</strong> {employee.email_address}</p>
                        <p><strong>Employee ID:</strong> {employee.employee_id}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

const styles = {
    container: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        gap: '20px',
        padding: '20px',
    },
    card: {
        width: '300px',
        height: '560px',
        border: '1px solid #ddd',
        borderRadius: '8px',
        overflow: 'hidden',
        boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
        display: 'flex',
        flexDirection: 'column',
    },
    imageContainer: {
        flex: '1 0 25%', 
        backgroundColor: '#f0f0f0',
        hieght: '150px',
    },
    employeeImage: {
        width: '100%',
        height: '100%',
        objectFit: 'cover',
    },
    employeeDetails: {
        flex: '2 0 67%', 
        padding: '15px',
        textAlign: 'left',
    },
};

export default EmployeeList;