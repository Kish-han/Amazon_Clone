import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Banner = () => {
    return (
        <div className='relative' >
            <div className="absolute w-full h-32 bg-gradient-to-t from-gray-100 to-transparent bottom-0 z-20">
            </div>
            <Carousel
                autoPlay
                infiniteLoop
                showStatus={false}
                showIndicators={false}
                showThumbs={false}
                interval={5000}
            >
                <div className="">
                    <img loading='lazy' src="https://bit.ly/3xrPAQt" alt="" />
                </div>
                <div className="">
                    <img loading='lazy' src="https://bit.ly/3qJoUXE" alt="" />
                </div>
                <div className="">
                    <img loading='lazy' src="https://bit.ly/3S4srLE" alt="" />
                </div>
            </Carousel>
        </div>
    )
}

export default Banner