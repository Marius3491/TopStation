import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import UserRegistration from './pages/UserRegistration/UserRegistration';
import ErrorPage from './components/ErrorPage/ErrorPage';
import Login from './pages/Login/Login';
import Logout from './pages/Logout/Logout';
import Cart from './components/Cart/Cart';
import './styles/styles.css';
import Footer from "./components/Footer/Footer";

function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [userId, setUserId] = useState(null);
    return (
        <Router>
            <div>
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/registration" element={<UserRegistration />} />
                    <Route path="/login" element={<Login setUserId={setUserId} setIsLoggedIn={setIsLoggedIn}/>} />
                    <Route path="/logout" element={<Logout setIsLoggedIn={setIsLoggedIn} />} />
                    <Route path="/cart" element={<Cart isLoggedIn={isLoggedIn} userId={userId} setIsLoggedIn={setIsLoggedIn}/>} />
                    <Route path="*" element={<ErrorPage message="Page not found" />} />
                </Routes>
                <Footer />
            </div>
        </Router>
    );
}

export default App;