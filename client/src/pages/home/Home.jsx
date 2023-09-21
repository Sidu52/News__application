import React, { useEffect } from 'react'
import Header from '../../component/header/Header'
import MainNews from '../main/MainNews';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
function Home() {
    const navigate = useNavigate();
    //Get data from localStorge
    const token = localStorage.getItem('jwtToken');

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await axios.get(
                    `http://localhost:9000`,
                    {
                        headers: {
                            Authorization: `Bearer ${token}`
                        }
                    }
                );
                if (!response.data.action) {
                    console.log("3")
                    navigate('/login')
                }
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        }
        fetchData();
    }, []);

    return (
        <div>
            <Header />
            <MainNews />
        </div>
    )
}
export default Home
