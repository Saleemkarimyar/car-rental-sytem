import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import axios from 'axios';
import CarList from './Carlist'; 
import EmployeeList from './EmployeeList';

const AdminDashboard = () => {
    const [cars, setCars] = useState([]);
    const [employees, setEmployees] = useState([]);
    const [customers, setCustomers] = useState([]);
    const [newCar, setNewCar] = useState({
        make: '',
        model: '',
        year: '',
        price: '',
        availability: 'available',
        color: '',
        image_url: 'https://via.placeholder.com/300?text=Car+Image',
    });
    const [newEmployee, setNewEmployee] = useState({
        full_name: '',
        date_of_birth: '',
        phone_number: '',
        email_address: '',
        employee_id: '',
        image_url: 'https://via.placeholder.com/150?text=Employee+Image',
    });
    const [newCustomer, setNewCustomer] = useState({
        full_name: '',
        date_of_birth: '',
        license_number: '',
    });

    const navigate = useNavigate(); 

    useEffect(() => {
        fetchCars();
        fetchEmployees();
        fetchCustomers();
    }, []);

    const fetchCars = async () => {
        try {
            const response = await axios.get('http://localhost:5000/cars');
            setCars(response.data);
        } catch (error) {
            console.error('Error fetching cars:', error);
        }
    };

    const fetchEmployees = async () => {
        try {
            const response = await axios.get('http://localhost:5000/employees');
            setEmployees(response.data);
        } catch (error) {
            console.error('Error fetching employees:', error);
        }
    };

    const fetchCustomers = async () => {
        try {
            const response = await axios.get('http://localhost:5000/customers');
            setCustomers(response.data);
        } catch (error) {
            console.error('Error fetching customers:', error);
        }
    };

    const addCar = async () => {
        try {
            await axios.post('http://localhost:5000/cars', newCar);
            fetchCars();
            setNewCar({
                make: '',
                model: '',
                year: '',
                price: '',
                availability: 'available',
                color: '',
                image_url: 'https://via.placeholder.com/300?text=Car+Image',
            });
        } catch (error) {
            console.error('Error adding car:', error);
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

    const deleteCar = async (id) => {
        try {
            await axios.delete(`http://localhost:5000/cars/${id}`);
            fetchCars();
        } catch (error) {
            console.error('Error deleting car:', error);
        }
    };

    const addEmployee = async () => {
        try {
            await axios.post('http://localhost:5000/employees', newEmployee);
            fetchEmployees();
            setNewEmployee({
                full_name: '',
                date_of_birth: '',
                phone_number: '',
                email_address: '',
                employee_id: '',
                image_url: 'https://via.placeholder.com/150?text=Employee+Image',
            });
        } catch (error) {
            console.error('Error adding employee:', error);
        }
    };

    const addCustomer = async () => {
        try {
            await axios.post('http://localhost:5000/customers', newCustomer);
            fetchCustomers();
            setNewCustomer({
                full_name: '',
                date_of_birth: '',
                license_number: '',
            });
        } catch (error) {
            console.error('Error adding customer:', error);
        }
    };

    const handleLogout = () => {
        
        navigate('/'); 
    };

    return (
        <div style={styles.container}>
            <div style={styles.header}>
                <h2>Admin Dashboard</h2>
                <button onClick={handleLogout} style={styles.logoutButton}>Logout</button>
            </div>

            {/* Cars Section */}
            <h3>Cars</h3>
            <CarList cars={cars} onUpdate={updateCar} onDelete={deleteCar} isAdmin />
            <div style={styles.form}>
                <h4>Add New Car</h4>
                <input
                    type="text"
                    placeholder="Make"
                    value={newCar.make}
                    onChange={(e) => setNewCar({ ...newCar, make: e.target.value })}
                    style={styles.input}
                />
                <input
                    type="text"
                    placeholder="Model"
                    value={newCar.model}
                    onChange={(e) => setNewCar({ ...newCar, model: e.target.value })}
                    style={styles.input}
                />
                <input
                    type="number"
                    placeholder="Year"
                    value={newCar.year}
                    onChange={(e) => setNewCar({ ...newCar, year: e.target.value })}
                    style={styles.input}
                />
                <input
                    type="number"
                    placeholder="Price per Day"
                    value={newCar.price}
                    onChange={(e) => setNewCar({ ...newCar, price: e.target.value })}
                    style={styles.input}
                />
                <select
                    value={newCar.availability}
                    onChange={(e) => setNewCar({ ...newCar, availability: e.target.value })}
                    style={styles.input}
                >
                    <option value="available">Available</option>
                    <option value="rented">Rented</option>
                </select>
                <input
                    type="text"
                    placeholder="Color"
                    value={newCar.color}
                    onChange={(e) => setNewCar({ ...newCar, color: e.target.value })}
                    style={styles.input}
                />
                <input
                    type="text"
                    placeholder="Image URL"
                    value={newCar.image_url}
                    onChange={(e) => setNewCar({ ...newCar, image_url: e.target.value })}
                    style={styles.input}
                />
                <button onClick={addCar} style={styles.button}>Add Car</button>
            </div>

            {/* Employees Section */}
            <h3>Employees</h3>
            <EmployeeList employees={employees} />
            <div style={styles.form}>
                <h4>Add New Employee</h4>
                <input
                    type="text"
                    placeholder="Full Name"
                    value={newEmployee.full_name}
                    onChange={(e) => setNewEmployee({ ...newEmployee, full_name: e.target.value })}
                    style={styles.input}
                />
                <input
                    type="date"
                    placeholder="Date of Birth"
                    value={newEmployee.date_of_birth}
                    onChange={(e) => setNewEmployee({ ...newEmployee, date_of_birth: e.target.value })}
                    style={styles.input}
                />
                <input
                    type="text"
                    placeholder="Phone Number"
                    value={newEmployee.phone_number}
                    onChange={(e) => setNewEmployee({ ...newEmployee, phone_number: e.target.value })}
                    style={styles.input}
                />
                <input
                    type="email"
                    placeholder="Email Address"
                    value={newEmployee.email_address}
                    onChange={(e) => setNewEmployee({ ...newEmployee, email_address: e.target.value })}
                    style={styles.input}
                />
                <input
                    type="text"
                    placeholder="Employee ID"
                    value={newEmployee.employee_id}
                    onChange={(e) => setNewEmployee({ ...newEmployee, employee_id: e.target.value })}
                    style={styles.input}
                />
                <input
                    type="text"
                    placeholder="Image URL"
                    value={newEmployee.image_url}
                    onChange={(e) => setNewEmployee({ ...newEmployee, image_url: e.target.value })}
                    style={styles.input}
                />
                <button onClick={addEmployee} style={styles.button}>Add Employee</button>
            </div>

            {/* Customers Section */}
            <h3>Customers</h3>
            <div style={styles.customerList}>
                {customers.map((customer) => (
                    <div key={customer.id} style={styles.customerItem}>
                        <p><strong>Name:</strong> {customer.full_name}</p>
                        <p><strong>Date of Birth:</strong> {customer.date_of_birth}</p>
                        <p><strong>License Number:</strong> {customer.license_number}</p>
                    </div>
                ))}
            </div>
            <div style={styles.form}>
                <h4>Add New Customer</h4>
                <input
                    type="text"
                    placeholder="Full Name"
                    value={newCustomer.full_name}
                    onChange={(e) => setNewCustomer({ ...newCustomer, full_name: e.target.value })}
                    style={styles.input}
                />
                <input
                    type="date"
                    placeholder="Date of Birth"
                    value={newCustomer.date_of_birth}
                    onChange={(e) => setNewCustomer({ ...newCustomer, date_of_birth: e.target.value })}
                    style={styles.input}
                />
                <input
                    type="text"
                    placeholder="License Number"
                    value={newCustomer.license_number}
                    onChange={(e) => setNewCustomer({ ...newCustomer, license_number: e.target.value })}
                    style={styles.input}
                />
                <button onClick={addCustomer} style={styles.button}>Add Customer</button>
            </div>
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
    form: {
        margin: '20px 0',
        padding: '20px',
        border: '1px solid #ddd',
        borderRadius: '5px',
        backgroundColor: '#f9f9f9',
        maxWidth: '600px',
        marginLeft: 'auto',
        marginRight: 'auto',
    },
    input: {
        display: 'block',
        width: '100%',
        padding: '8px',
        margin: '10px 0',
        borderRadius: '5px',
        border: '1px solid #ccc',
    },
    button: {
        padding: '10px 20px',
        backgroundColor: '#007BFF',
        color: '#fff',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
    },
    customerList: {
        display: 'flex',
        flexWrap: 'wrap',
        gap: '20px',
        justifyContent: 'center',
    },
    customerItem: {
        border: '1px solid #ddd',
        borderRadius: '5px',
        padding: '15px',
        width: '300px',
        backgroundColor: '#fff',
        boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
    },
};

export default AdminDashboard;