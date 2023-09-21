import React, { useEffect, useState } from 'react';
import SlideShow from '../../component/slideNews/SlideNews';
import axios from 'axios';
import { AiOutlineHeart } from 'react-icons/ai';
import '../../assets/css/component/MainNews.scss';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addtonews, addtodata } from '../../store/Store';
import { url } from '../../api';

function MainNews() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const News = useSelector((state) => state.news);




    const [currentPage, setCurrentPage] = useState(1);
    const [slide, setSlides] = useState([]);
    const itemsPerPage = 8;

    useEffect(() => {
        fetchData();
    }, []);

    async function fetchData() {
        try {
            const response = await axios.get(url);
            const data = response.data;
            const articles = data.articles;
            // Dispatch articles to Redux
            dispatch(addtonews(articles));
            if (articles.length > 0) {
                // Extract slide articles
                setSlides(articles.slice(0, 3));
            } else {
                console.error("No articles found in the response.");
            }
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    }

    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;

    const handlePageChange = (newPage) => {
        setCurrentPage(newPage);
    };

    const totalPages = Math.ceil(News.length / itemsPerPage);
    const paginationButtons = [];

    for (let i = 1; i <= totalPages; i++) {

        paginationButtons.push(
            <button
                key={i}
                onClick={() => handlePageChange(i)}
                className={currentPage === i ? 'active' : ''}
            >
                {i}
            </button>
        );
    }
    const handleCart = async (item) => {
        try {
            const response = await axios.post('http://localhost:9000/cart', item);
            alert(response.data.message)

        } catch (error) {
            console.log('Sign in failed', error);
        }

    }
    const handleClick = ((item) => {
        dispatch(addtodata(item));
        navigate('/newspage');
    })
    return (
        <div>
            <SlideShow slides={slide} />
            <div className="main_news_container">
                <h3 className='headingfirst'>Latest News</h3>
                <div className='cards'>
                    {News.length > 0 && (
                        <div className="img_container">
                            <img src={News[0].image} alt="image" />
                            <h4>{News[0].title}</h4>
                            <p>{News[0].description}</p>
                        </div>
                    )}
                    <div className="right_side">
                        {News.slice(1, 3).map((item, index) => (
                            <div key={index}>
                                <img src={item.image} alt="image" />
                                <h4>{item.title}</h4>
                                <p>{item.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className='card_main_contaienr'>
                {News.slice(startIndex, endIndex).map((item, index) => (
                    <div key={index} className='card_container'>
                        <AiOutlineHeart onClick={(() => { handleCart(item) })} />
                        <h4>{item.name}</h4>
                        <h3>{item.title}</h3>
                        <p>{item.description}</p>
                        <img src={item.image} alt="" />
                        <button onClick={(() => { handleClick(item) })}>Seemore</button>
                    </div>
                ))}
            </div>
            <div className="pagination">
                {paginationButtons}
            </div>
        </div>
    );
}

export default MainNews;
