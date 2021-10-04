import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import SwiperCore, { Pagination, Autoplay } from 'swiper';





// install Swiper modules
SwiperCore.use([Pagination, Autoplay]);


export default function Trial() {

    // const swiper = new Swiper('.swiper', {
    //     autoplay: {
    //         delay: 5000,
    //     },
    // });

    // new Swiper('.my-swiper', {
    //     freeMode: true,
    //     freeModeMinimumVelocity: 0.2,
    //     freeModeMomentum: false,
    // });

    // autoplay={{
    //     "delay": 2500,
    //     "disableOnInteraction": false
    // }}


    return (
        <div >

            <Swiper loop={true} style={{ height: '50vh', backgroundColor: 'red' }} spaceBetween={50} pagination={{
                "clickable": true
            }}>
                <SwiperSlide>Horizontal Slide 1</SwiperSlide>
                <SwiperSlide>
                    <Swiper autoplay='5000' style={{ height: '50vh', backgroundColor: 'yellow' }} direction={'vertical'} spaceBetween={50} pagination={{
                        "clickable": true,
                    }}>
                        <SwiperSlide autoplay='5000'>Vertical Slide 1</SwiperSlide>
                        <SwiperSlide>Vertical Slide 2</SwiperSlide>
                        <SwiperSlide>Vertical Slide 3</SwiperSlide>
                        <SwiperSlide>Vertical Slide 4</SwiperSlide>
                        <SwiperSlide>Vertical Slide 5</SwiperSlide>
                    </Swiper>
                </SwiperSlide>
                <SwiperSlide>Horizontal Slide 3</SwiperSlide>
                <SwiperSlide>Horizontal Slide 4</SwiperSlide>
            </Swiper>
        </div>
    )
}