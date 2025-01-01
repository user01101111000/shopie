import SectionTitle from "../../ui/SectionTitle";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import { Swiper, SwiperRef, SwiperSlide } from 'swiper/react';
import { Navigation } from "swiper/modules";

// @ts-ignore
import 'swiper/scss';
// @ts-ignore
import 'swiper/scss/navigation';


import { IoGameControllerOutline } from "react-icons/io5";
import { MdOutlineAudiotrack } from "react-icons/md";
import { MdOutlinePhoneAndroid } from "react-icons/md";
import { FaTv } from "react-icons/fa";
import { MdOutlineLaptopMac } from "react-icons/md";
import { FaHome } from "react-icons/fa";
import React, { MutableRefObject, useEffect, useRef } from "react";

const Category = () => {

    const swiper_ref: MutableRefObject<SwiperRef | null> = useRef<SwiperRef | null>(null)

    const data = [
        {
            name: "Gaming",
            icon: <IoGameControllerOutline />
        },
        {
            name: "Audio",
            icon: <MdOutlineAudiotrack />
        },
        {
            name: "Mobile",
            icon: <MdOutlinePhoneAndroid />
        },
        {
            name: "TV",
            icon: <FaTv />
        },
        {
            name: "Laptop",
            icon: <MdOutlineLaptopMac />
        },
        {
            name: "Appliances",
            icon: <FaHome />
        }
    ];


    const cate_boxes = data.map((cate: { name: string, icon: React.ReactNode }, i: number) => <SwiperSlide key={i}>
        <div className="category_box">
            <p>{cate.icon}</p>
            <h1>{cate.name}</h1>
        </div>
    </SwiperSlide>);


    return <section className="category_container">

        <SectionTitle title="Categories" />

        <div className="category_title_section">
            <h1>Browse By Category</h1>

            <div className="category_arrows_wrapper">
                <div className="category_arrow" onClick={(): void => {
                    swiper_ref?.current?.swiper.slidePrev();
                }}>
                    <FaArrowLeft className="arrow_icon" />
                </div>
                <div className="category_arrow" onClick={(): void => {
                    swiper_ref?.current?.swiper.slideNext();
                }}>
                    <FaArrowRight className="arrow_icon" />
                </div>
            </div>
        </div>


        <div className="category_wrapper">

            <Swiper
                ref={swiper_ref}
                modules={[Navigation]}
                navigation={{ nextEl: ".swiper-button-next", prevEl: ".swiper-button-prev" }}
                grabCursor
                spaceBetween={10}

                breakpoints={{
                    0: {
                        slidesPerView: 1,
                        spaceBetween: 10,
                    },
                    640: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    768: {
                        slidesPerView: 3,
                        spaceBetween: 30,
                    },
                    1024: {
                        slidesPerView: 4,
                        spaceBetween: 40,
                    },
                }}

            >
                {cate_boxes}

            </Swiper>


        </div>

    </section>
}

export default Category;