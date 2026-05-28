import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div style={{ textAlign: 'center', padding: '5rem' }}>
            <h1>404</h1>
            <p>Aradığınız sayfa bulunamadı.</p>
            <Link to="/" style={{ marginTop: '1rem', display: 'inline-block', color: '#007bff' }}>
                Ana sayfaya dön
            </Link>
        </div>
    );
};

export default NotFound;
