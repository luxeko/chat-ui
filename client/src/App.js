import './style.scss'
import Login from './Components/Login/Login.js';
import Dashboard from './Components/Dashboard/Dashboard.js';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import useToken from './Components/App/useToken.js';
import Register from './Components/Register/Register.js'

export default function App() {
    const { token, setToken } = useToken();
    if(!token) {
        return (
            <div className='App'>
                <Login setToken={setToken} />
            </div>
        )
    }
    return (
        <div className="App">
             <BrowserRouter>
                <Routes>
                    <Route path="/Dashboard" element={<Dashboard/>}></Route>
                    <Route path="/" element={<Login/>}></Route>
                    <Route path="/Register" element={<Register/>}></Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
}
