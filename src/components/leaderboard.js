import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Leaderboard = () => {
    const [leaderboard, setLeaderboard] = useState([]);
    const [message, setMessage] = useState('');
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchLeaderboard = async () => {
            try {
                const response = await axios.get('http://localhost:10000/leaderBoard');
                if (response.data.success) {
                    setLeaderboard(response.data.user);
                } else {
                    setMessage(response.data.message);
                }
            } catch (error) {
                setMessage('Error fetching leaderboard data');
            } finally {
                setLoading(false);
            }
        };

        fetchLeaderboard();
    }, []);

    return (
        <div style={{ fontFamily: 'Arial, sans-serif', backgroundColor: '#f4f4f9', margin: 0 }}>
            <header style={{
                textAlign: 'center',
                padding: '10px 0',
                background: '#4CAF50',
                color: 'white',
                fontSize: '1.5rem'
            }}>
                Impract
            </header>

            <div style={{
                background: 'white',
                margin: '20px',
                padding: '20px',
                borderRadius: '10px',
                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
            }}>
                <h2 style={{ marginBottom: '15px', fontSize: '1.2rem', color: '#333' }}>Leaderboard</h2>
                {loading ? (
                    <p style={{ textAlign: 'center', fontSize: '1rem', color: '#555' }}>Loading...</p>
                ) : leaderboard.length > 0 ? (
                    <div style={{ overflowX: 'auto' }}>
                        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                            <thead>
                                <tr style={{ background: '#4CAF50', color: 'white' }}>
                                    <th style={{ padding: '10px', border: '1px solid #ddd' }} scope="col">S.No</th>
                                    <th style={{ padding: '10px', border: '1px solid #ddd' }} scope="col">Name</th>
                                    <th style={{ padding: '10px', border: '1px solid #ddd' }} scope="col">Referral Points</th>
                                </tr>
                            </thead>
                            <tbody>
                                {leaderboard.map((user, index) => (
                                    <tr
                                        key={index}
                                        style={{
                                            textAlign: 'center',
                                            background: index % 2 === 0 ? '#f9f9f9' : 'white'
                                        }}
                                    >
                                        <td style={{ padding: '10px', border: '1px solid #ddd' }}>{index + 1}</td>
                                        <td style={{ padding: '10px', border: '1px solid #ddd' }}>{user.userName}</td>
                                        <td style={{ padding: '10px', border: '1px solid #ddd' }}>{user.referralCount}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                ) : (
                    <p
                        style={{
                            color: 'red',
                            fontSize: '1rem',
                            textAlign: 'center'
                        }}
                        aria-live="polite"
                    >
                        {message}
                    </p>
                )}
            </div>

            <footer style={{
                textAlign: 'center',
                padding: '10px 0',
                background: '#333',
                color: 'white',
                fontSize: '0.9rem'
            }}>
                Impract &copy; 2025. All rights reserved.
            </footer>
        </div>
    );
};

export default Leaderboard;
