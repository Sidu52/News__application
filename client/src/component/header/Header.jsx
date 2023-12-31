import React from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { addtonews } from '../../store/Store';
import { Link, useNavigate } from 'react-router-dom';
import profile from '../../assets/image_video/profile.png';
import '../../assets/css/component/Header.scss';
import { FiShoppingCart } from 'react-icons/fi';
import { apiKey, categoryUrl } from '../../api';

function Header() {
    const navigate = useNavigate();
    const dispatch = useDispatch();


    //Get data from localStorge
    const user = localStorage.getItem('user');
    // Define the handle_news function   
    const handle_news = async (value) => {
        console.log(`${categoryUrl}=${value}&apikey=${apiKey}`)
        try {
            const response = await axios.get(`${categoryUrl}${value}&apikey=${apiKey}`);
            const data = response.data;
            const articles = data.articles;

            dispatch(addtonews(articles));

        } catch (error) {
            console.error("Error fetching data:", error);
        }
    }

    const handlelogout = (() => {
        localStorage.removeItem('jwtToken');
        localStorage.removeItem('user');
        navigator('/login')
    })
    return (
        <div className='header_main_container'>
            <div className="left_container">
                <a onClick={() => handle_news("business")}>Business</a>
                <a onClick={() => handle_news("technology")}>Technology</a>
                <a onClick={() => handle_news("entertainment")}>Entertainment</a>
                <a onClick={() => handle_news("sports")}>Cricket News</a>
                <a onClick={() => handle_news("health")}>Health News</a>
                <a onClick={() => handle_news("world")}>World News</a>
            </div>
            <div className="center_container">
                <h3 onClick={() => navigate('/')} >Alston</h3>
            </div>
            {!user ? <div className="right_container">
                <div>
                    <Link to='/login' className='first'>Login</Link>
                    <Link to='/signup'>Signup</Link>
                </div>
            </div> :
                <div className="right_container">
                    <div>
                        <Link onClick={handlelogout} className='first' >Logout</Link>
                        <FiShoppingCart onClick={(() => navigate('/cart'))} />
                    </div>
                </div>
            }

        </div>
    );
}
export default Header