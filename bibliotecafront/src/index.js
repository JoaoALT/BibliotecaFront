import React from 'react';
import ReactDOM from 'react-dom/client';
import { Biblioteca } from './Biblioteca';
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <Biblioteca/>
    </BrowserRouter> 
)
