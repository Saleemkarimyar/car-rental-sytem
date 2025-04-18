import React from 'react';

const CarList = ({ cars, onUpdate, onDelete, isAdmin = false }) => {
    return (
        <div style={styles.container}>
            {cars.map((car) => (
                <div key={car.id} style={styles.card}>
                    <img src={car.image_url} alt={`${car.make} ${car.model}`} style={styles.carImage} />
                    
                    <div style={styles.carDetails}>
                        <h4>{car.make} {car.model}</h4>
                        <p><strong>Year:</strong> {car.year}</p>
                        <p><strong>Price:</strong> ${car.price}/day</p>
                        <p><strong>Availability:</strong> {car.availability}</p>
                        <p><strong>Color:</strong> {car.color}</p>
                        <div style={styles.actions}>
                            <button
                                onClick={() =>
                                    onUpdate(car.id, {
                                        ...car,
                                        availability: car.availability === 'available' ? 'rented' : 'available',
                                    })
                                }
                                style={styles.button}
                            >
                                Toggle Availability
                            </button>
                            {isAdmin && (
                                <button onClick={() => onDelete(car.id)} style={styles.deleteButton}>
                                    Delete
                                </button>
                            )}
                        </div>
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
        display: 'flex',
        width: '600px',
        border: '1px solid #ddd',
        borderRadius: '8px',
        overflow: 'hidden',
        boxShadow: '0 2.5px 5px rgb(0, 254, 254)',
        background: '#a7ffff'
    },
    carImage: {
        width: '200px',
        height: '150px',
        objectFit: 'fill',
    },
    carDetails: {
        padding: '15px',
        flex: 1,
    },
    actions: {
        marginTop: '10px',
    },
    button: {
        padding: '5px 10px',
        backgroundColor: '#007BFF',
        color: '#fff',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
        marginRight: '10px',
    },
    deleteButton: {
        padding: '5px 10px',
        backgroundColor: '#DC3545',
        color: '#fff',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
    },
};

export default CarList;