import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// Intentional issue: Missing StrictMode and ErrorBoundary
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
