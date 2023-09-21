import React, { useState } from 'react';
import video from '../../assets/image_video/videoSignup.mp4';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { endPoint } from '../../api';

function Signup() {
    const [form, setForm] = useState({ username: '', email: '', password: '', confirm_password: '' }); // Changed 'confom_password' to 'confirm_password'
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault(); // Prevent the default form submission behavior

        try {
            if (form.password === form.confirm_password) { // Changed 'confom_password' to 'confirm_password'
                // Send a POST request to the server for user signup
                const response = await axios.post(`${endPoint}register`, {
                    username: form.username,
                    email: form.email,
                    password: form.password,
                });
                if (response.data.action) {
                    navigate('/'); // Navigate to a specific page if the 'action' property is present in the response
                }
            } else {
                console.log('Passwords do not match');
            }
        } catch (error) {
            console.log('Signup failed', error);
            // Handle error cases if the post creation fails
        }
    };

    return (
        <div className="signup_main_container">
            <div className="left_container">
                <video autoPlay loop src={video}></video>
            </div>
            <div className="right_container">
                <div className="right_container">
                    <h3 className="heading">Sign up</h3>
                    <div className="reverse">
                        <form onSubmit={handleSubmit}>
                            <div className="input_box">
                                <input
                                    type="text"
                                    name="username"
                                    value={form.username}
                                    required
                                    onChange={(e) => setForm({ ...form, username: e.target.value })}
                                />
                                <label htmlFor="username">Username</label>
                            </div>
                            <div className="input_box">
                                <input
                                    type="email"
                                    name="email"
                                    value={form.email}
                                    required
                                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                                />
                                <label htmlFor="email">Email</label>
                            </div>
                            <div className="input_box">
                                <input
                                    type="password" // Changed 'text' to 'password'
                                    name="password"
                                    value={form.password}
                                    required
                                    onChange={(e) => setForm({ ...form, password: e.target.value })}
                                />
                                <label htmlFor="password">Password</label>
                            </div>
                            <div className="input_box">
                                <input
                                    type="password" // Changed 'text' to 'password'
                                    name="confirm_password"
                                    value={form.confirm_password}
                                    required
                                    onChange={(e) => setForm({ ...form, confirm_password: e.target.value })} // Changed 'confom_password' to 'confirm_password'
                                />
                                <label htmlFor="confirm_password">Confirm Password</label>
                            </div>
                            <div className="button">
                                <button type="submit">Sign Up</button> {/* Changed 'Submit' to 'submit' */}
                            </div>
                        </form>
                        <hr />
                        <Link to="/login">Already have an account? Sign In</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Signup;
