import React, { useState, useEffect } from 'react';
import '../../assets/css/pages/SlideNews.scss';
import { BsChevronLeft, BsChevronCompactRight } from 'react-icons/bs';

export default function SlideShow({ slides }) {
    const [currentIndex, setCurrentIndex] = useState(0);

    // Function to go to the previous image
    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
    };

    // Function to go to the next image
    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    };

    useEffect(() => {
        // Function to handle the automatic slide
        const timer = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
        }, 5000);

        return () => {
            clearInterval(timer);
        };
    }, [slides]);
    return (
        <>
            {slides.length > 0 ? <div className='home_img_container'>
                <h3>{slides[currentIndex].title}</h3>
                <img src={slides[currentIndex].image} alt="offer" />
                <div className='img_button'>
                    <button className='next_button but' onClick={nextSlide}><BsChevronCompactRight /></button>
                    <button className='prev_button but' onClick={prevSlide}><BsChevronLeft /></button>

                </div>
            </div> : ""}
        </>

    );
}
