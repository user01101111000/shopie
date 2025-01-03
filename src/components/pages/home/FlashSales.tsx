import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import SectionTitle from "../../ui/SectionTitle";
import { Swiper, SwiperRef, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { MutableRefObject, useRef } from "react";
import useGetAllProductsQuery from "../../../hooks/service/useGetAllProductsQuery";
import { Product } from "../../../ts/interfaces/products";
import ProductCard from "../../ui/ProductCard";
import ViewAllProductsButton from "../../ui/ViewAllProductsButton";

const FlashSales = () => {

    const { data, isLoading } = useGetAllProductsQuery("flash_sales");


    const flash_sales_elements = data?.products.filter((x: Product) => x.discount).slice(0, 10).map((x: Product) => <SwiperSlide key={x.id}>
        <ProductCard data={x} />
    </SwiperSlide>)

    const swiper_ref: MutableRefObject<SwiperRef | null> = useRef<SwiperRef | null>(null);

    return <section className="flash_sales_container">

        <SectionTitle title="Today's Flash Sales" />

        <div className="flash_sales_container_header">


            <h1>Flash Sales</h1>


            <div className="flash_sales_arrows_wrapper">
                <div className="flash_sales_arrow" onClick={() => {
                    swiper_ref.current?.swiper.slidePrev();
                }}>
                    <FaArrowLeft className="arrow_icon" />
                </div>
                <div className="flash_sales_arrow" onClick={() => {
                    swiper_ref.current?.swiper.slideNext();
                }}>
                    <FaArrowRight className="arrow_icon" />
                </div>
            </div>
        </div>



        <div className="flash_sales_slider_wrapper">

            <Swiper
                ref={swiper_ref}
                modules={[Navigation]}
                navigation={{ nextEl: ".swiper-button-next", prevEl: ".swiper-button-prev" }}
                grabCursor
                spaceBetween={10}
                breakpoints={{
                    0: {
                        slidesPerView: 1,

                    },
                    640: {
                        slidesPerView: 2,

                    },
                    768: {
                        slidesPerView: 3,

                    },
                    1024: {
                        slidesPerView: 4,

                    },
                }}

            >
                {flash_sales_elements}
            </Swiper>
        </div>

        <div className="flash_sales_view_all_products_wrapper">
            <ViewAllProductsButton title="View All Products" url="/products" />
        </div>
    </section>
}

export default FlashSales;  