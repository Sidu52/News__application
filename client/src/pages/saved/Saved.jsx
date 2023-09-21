import React, { useEffect } from 'react'
import '../../assets/css/pages/Saved.scss';
import axios from 'axios';
import Header from '../../component/header/Header';
import { IoMdRemoveCircleOutline } from 'react-icons/io';
import { useDispatch, useSelector } from 'react-redux';
import { cartNews,removeNews } from '../../store/Store';

function Saved() {
    const dispatch = useDispatch();
    const News = useSelector((state) => state.saved);
    //Get data from localStorge
    const token = localStorage.getItem('jwtToken');

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await axios.get(
                    `http://localhost:9000/getNews`,
                    {
                        headers: {
                            Authorization: `Bearer ${token}`
                        }
                    }
                );
                if (response.data.action) {
                    dispatch(cartNews(response.data.news));
                }
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        }
        fetchData();
    }, []);

    const handleDelete = async (e, item) => {
        e.preventDefault();
        try {
            dispatch(removeNews(item));
            const response = await axios.post(
                'http://localhost:9000/newsDelete',
                item, // Move the item data to here
                {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                }
            );
            
        } catch (error) {
            console.log('Delete news failed', error);
        }
    };

    return (
        <div>
            <Header />
            {News.map((item) => (
                <div className="saved_main_container">
                    <div className="saved_container">
                        <div className="left_container">
                            <img src={item.image} alt="img" />
                        </div>
                        <div className="right_container">
                            <h3>{item.title}</h3>
                            <p>{item.description}</p>
                            <div className="buttons">
                                <IoMdRemoveCircleOutline onClick={((e) => handleDelete(e, item))} />
                            </div>
                        </div>
                    </div>

                </div>
            ))}

        </div>
    )
}
export default Saved;