import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const ReferralSystem = () => {
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');
    const [message, setMessage] = useState('');
    const {referralCode}=useParams()

     

    const changeName = (e) => setName(e.target.value);
    const changeNumber = (e) => setNumber(e.target.value);

    const sendData = async (e) => {
        e.preventDefault();

        if (!name || !number) {
            setMessage('Please fill all fields.');
            return;
        }

        try {
            const response = await axios.post(`https://backendimprfct.onrender.com/userregister/${referralCode}`, {
                userName: name,
                mobileNumber: number,
            });

            if (response.data.success) {
                setMessage(response.data.message || 'Registration successful!');
            } else {
                setMessage(response.data.message || 'Registration failed.');
            }
        } catch (error) {
            setMessage('Server error. Please try again later.');
            console.error('Error:', error);
        }
    };

    return (
        <div style={{ fontFamily: 'Arial, sans-serif', backgroundColor: '#f4f4f9', margin: 0 }}>
            <header style={{ textAlign: 'center', padding: '10px 0', background: '#4CAF50', color: 'white', fontSize: '1.2rem' }}>
                Impract
            </header>

            <div style={{ background: 'white', margin: '20px', padding: '20px', borderRadius: '10px', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)' }}>
                <h2 style={{ margin: '0 0 15px', fontSize: '1.2rem', color: '#333' }}>Register Here</h2>
                <form onSubmit={sendData} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <label htmlFor="name" style={{ marginBottom: '5px', fontSize: '0.9rem', color: '#555', width: '100%' }}>Name</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={name}
                        placeholder="Enter your name"
                        onChange={changeName}
                        required
                        style={{ marginBottom: '15px', padding: '10px', border: '1px solid #ccc', borderRadius: '5px', fontSize: '0.9rem', width: '100%' }}
                    />

                    <label htmlFor="mobile" style={{ marginBottom: '5px', fontSize: '0.9rem', color: '#555', width: '100%' }}>Mobile Number</label>
                    <input
                        type="tel"
                        id="mobile"
                        name="mobile"
                        value={number}
                        placeholder="Enter your mobile number"
                        onChange={changeNumber}
                        required
                        style={{ marginBottom: '15px', padding: '10px', border: '1px solid #ccc', borderRadius: '5px', fontSize: '0.9rem', width: '100%' }}
                    />

                    <p style={{ color: 'red', fontSize: '0.9rem' }}>{message}</p>

                    <button
                        type="submit"
                        style={{ padding: '10px', background: '#4CAF50', color: 'white', border: 'none', borderRadius: '5px', fontSize: '1rem', cursor: 'pointer' }}>
                        Submit
                    </button>
                </form>
            </div>

            <footer style={{ textAlign: 'center', padding: '10px 0', background: '#333', color: 'white', fontSize: '0.9rem' }}>
                Impract &copy; 2025. All rights reserved.
            </footer>
        </div>
    );
};

export default ReferralSystem;
