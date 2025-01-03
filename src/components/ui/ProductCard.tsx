import React from "react";
import { Product } from "../../ts/interfaces/products";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import old_price_after_discount from "../../utils/discount";
import { Rate } from 'antd';


type ProductCardProps = {
    data: Product
}

const ProductCard: React.FC<ProductCardProps> = ({ data }) => {

    const [clickFav, setClickFav] = React.useState<boolean>(false);


    return <div className="product_card_wrapper">

        <div className="product_card">



            <div className="product_card_image_wrapper">
                {data.discount && <div className="product_card_discount_badge">
                    {data.discount} %
                </div>}


                <div className="product_card_fav_icon_wrapper">
                    {clickFav ? <FaHeart className="product_card_fav_icon_red" onClick={() => {
                        setClickFav(false)
                    }} /> : <FaRegHeart className="product_card_fav_icon" onClick={() => {
                        setClickFav(true)
                    }} />}
                </div>

                <figure>
                    <img src="https://img.freepik.com/free-vector/white-blurred-background_1034-249.jpg?w=360" alt={data.title} data-src={data.image} onLoad={(e) => {
                        e.currentTarget.src = e.currentTarget.dataset.src as string
                    }} />
                </figure>

                <div className="add_to_cart_button">
                    Add to cart
                </div>


            </div>


            <div className="product_card_text_wrapper">
                <h1>{data.title}</h1>

                <div className="product_card_price">
                    <p className="product_card_new_price"> ${data.price}</p>
                    {data.discount && <p className="product_card_old_price">${old_price_after_discount(data.price, data.discount)}</p>}
                </div>


                <div className="product_card_rating">
                    <Rate disabled defaultValue={Math.random() < 0.5 ? 4 : 5} />

                    <div>({Math.floor(Math.random() * 100)})</div>
                </div>
            </div>
        </div>

    </div>
}


export default ProductCard;