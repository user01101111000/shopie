import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';

// @ts-ignore
import 'swiper/css';
// @ts-ignore
import 'swiper/css/pagination';

import { img_0, img_1, img_2, img_3, img_4, img_5, img_6, img_7 } from "../../../utils/assets"

const Slider = () => {

    const imgs = [img_0, img_1, img_2, img_3, img_4, img_5, img_6, img_7];

    const sliderImgs = imgs.map((img, i) => <SwiperSlide key={i}>
        <img src={img} alt={"img_" + i} loading='lazy' />
    </SwiperSlide>)


    return <Swiper
        modules={[Pagination, Autoplay]}
        grabCursor
        autoplay={{ delay: 2000, pauseOnMouseEnter: true, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        spaceBetween={20}
        speed={1200}
        slidesPerView={1}
    >
        {sliderImgs}
    </Swiper>
}

export default Slider;