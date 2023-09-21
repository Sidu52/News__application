import React, { useState } from 'react';
import video from '../../assets/image_video/videologin.mp4';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

function SignIn() {
    const [form, setForm] = useState({ email: '', password: '' });
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault(); // Prevent the default form submission behavior

        try {
            const response = await axios.post(`${endPoint}signin`, {
                email: form.email,
                password: form.password,
            });
            const user = response.data.user;
            // Store user data in local storage
            localStorage.setItem('user', JSON.stringify(response.data.user));
            localStorage.setItem('jwtToken', response.data.token);

            if (response.data.action) {
                navigate('/');
            }
        } catch (error) {
            console.log('Sign in failed', error);
        }
    };

    return (
        <div className="signup_main_container">
            <div className="left_container">
                <video autoPlay loop src={video}></video>
            </div>
            <div className="right_container">
                <div className="right_container">
                    <h3 className="heading">Sign in</h3>
                    <form onSubmit={handleSubmit}>
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
                        <div className="button">
                            <button type="submit" style={{ width: 'auto' }}>
                                Sign In
                            </button>
                            <p>Forgot password?</p>
                        </div>
                    </form>
                </div>
                <Link to="/signup">Don't have an account? Sign Up</Link>
            </div>
        </div>
    );
}

export default SignIn;
