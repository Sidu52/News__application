import React from 'react';
import Header from '../../component/header/Header'
import '../../assets/css/pages/NewsPage.scss'
import { useSelector } from 'react-redux';
function NewsPage() {
    const data = useSelector((state) => state.data);
    console.log(data)
    return (
        <>
            <Header />
            <div className='home_main_container'>
                <div>
                    <h3>{data.title}</h3>
                    <p>{data.description}</p>
                    <hr />
                    <img src={data.image} alt="img" />
                    <p>{data.content}</p>
                </div>
            </div>
        </>

    )
}
export default NewsPage;