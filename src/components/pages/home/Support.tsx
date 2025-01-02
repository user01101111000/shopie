import { BsTruck } from "react-icons/bs";
import { BiSupport } from "react-icons/bi";
import { GoShieldCheck } from "react-icons/go";
import SectionTitle from "../../ui/SectionTitle";


const Support = () => {
    return <section className="support_wrapper">

        <SectionTitle title="Why Shopie?" />


        <div className="support_container">
            <div className="support_box">

                <div className="support_box_icon_wrapper">
                    <BsTruck className="support_box_icon" />
                </div>

                <div className="support_box_text">
                    <h1>FREE AND FAST DELIVERY</h1>
                    <p>Free delivery for all orders over $140</p>
                </div>


            </div>

            <div className="support_box">

                <div className="support_box_icon_wrapper">
                    <BiSupport className="support_box_icon" />
                </div>

                <div className="support_box_text">
                    <h1>24/7 CUSTOMER SERVICE</h1>
                    <p>Friendly 24/7 customer support</p>
                </div>


            </div>

            <div className="support_box">

                <div className="support_box_icon_wrapper">
                    <GoShieldCheck className="support_box_icon" />
                </div>

                <div className="support_box_text">
                    <h1>MONEY BACK GUARANTEE</h1>
                    <p>We reurn money within 30 days</p>
                </div>


            </div>

        </div>


    </section>
}

export default Support;