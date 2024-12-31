import { apay, gpay, master, paypal, visa } from "../../utils/assets";
import { FaTwitter, FaInstagram, FaFacebook, FaGithub } from "react-icons/fa";
import { TfiEmail } from "react-icons/tfi";


const Footer = () => {
    return <footer className="footer">

        <div className="email_subscribe container">

            <div className="email_subscribe_text">
                <h1>STAY UPTO DATE ABOUT OUR LATEST OFFERS</h1>
            </div>


            <form className="email_subscribe_input_area" onSubmit={(e) => e.preventDefault()}>
                <div className="input_area">

                    <TfiEmail className="input_area_icon" />

                    <input type="email" placeholder="Enter your email address" />

                </div>
                <button type="submit">Subscribe to newsletter</button>
            </form>
        </div>

        <div className="footer_container container">

            <div className="footer_main">

                <ul className="ul_logo">
                    <li>
                        <div className="logo">shopie</div>
                    </li>
                    <li>We have clothes that suits your style and which you’re proud to wear. From women to men.</li>

                    <li>
                        <ul className="ul_social">
                            <li><FaTwitter className="ul_social_icon" /></li>
                            <li><FaInstagram className="ul_social_icon" /></li>
                            <li><FaFacebook className="ul_social_icon" /></li>
                            <li><FaGithub className="ul_social_icon" /></li>
                        </ul>
                    </li>
                </ul>


                <div className="footer_links">

                    <ul className="ul_links">
                        <li>Company</li>
                        <li>About</li>
                        <li>Features</li>
                        <li>Works</li>
                        <li>Career</li>
                    </ul>

                    <ul className="ul_links">
                        <li>Company</li>
                        <li>About</li>
                        <li>Features</li>
                        <li>Works</li>
                        <li>Career</li>
                    </ul>

                    <ul className="ul_links">
                        <li>Company</li>
                        <li>About</li>
                        <li>Features</li>
                        <li>Works</li>
                        <li>Career</li>
                    </ul>

                    <ul className="ul_links">
                        <li>Company</li>
                        <li>About</li>
                        <li>Features</li>
                        <li>Works</li>
                        <li>Career</li>
                    </ul>

                </div>

            </div>


            <hr />

            <div className="footer_copyright">
                <p>Shop.co © 2000-2023, All Rights Reserved.</p>


                <div className="footer_payment">
                    <img src={visa} alt="visa" />
                    <img src={master} alt="master" />
                    <img src={paypal} alt="paypal" />
                    <img src={apay} alt="apay" />
                    <img src={gpay} alt="gpay" />
                </div>
            </div>


        </div>


    </footer>
}

export default Footer;