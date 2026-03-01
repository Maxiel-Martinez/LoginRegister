import React from "react";
import { Link } from "react-router-dom";
import "../LoginForm/LoginForm.css";
import { FaUserAlt, FaLock, FaEnvelope } from "react-icons/fa";

const RegisterForm = () => {
    return (
        <div className="wrapper">
            <form action="">
                <h1>Register</h1>

                <div className="input-box">
                    <input type="text" placeholder="Full Name" required />
                    <FaUserAlt className="icon" />
                </div>

                <div className="input-box">
                    <input type="email" placeholder="Email" required />
                    <FaEnvelope className="icon" />
                </div>

                <div className="input-box">
                    <input type="text" placeholder="Username" required />
                    <FaUserAlt className="icon" />
                </div>

                <div className="input-box">
                    <input type="password" placeholder="Password" required />
                    <FaLock className="icon" />
                </div>

                <div className="input-box">
                    <input type="password" placeholder="Confirm Password" required />
                    <FaLock className="icon" />
                </div>

                <button type="submit" className="btn">Register</button>

                <div className="register-link">
                    <p>Already have an account? <Link to="/">Login</Link></p>
                </div>
            </form>
        </div>
    );
}

export default RegisterForm;