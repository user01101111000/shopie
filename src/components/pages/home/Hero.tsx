import Slider from "./Slider";
import { IoGameControllerOutline } from "react-icons/io5";
import { MdOutlineAudiotrack } from "react-icons/md";
import { MdOutlinePhoneAndroid } from "react-icons/md";
import { FaTv } from "react-icons/fa";
import { MdOutlineLaptopMac } from "react-icons/md";
import { FaHome } from "react-icons/fa";


const Hero = () => {
    return <section className="hero">

        <div className="hero_categories_container">
            <ul>
                <li><IoGameControllerOutline /> Gaming</li>
                <li><MdOutlineAudiotrack /> Audio</li>
                <li><MdOutlinePhoneAndroid /> Mobile</li>
                <li><FaTv /> TV</li>
                <li><MdOutlineLaptopMac /> Laptop</li>
                <li><FaHome /> Appliances</li>
            </ul>
        </div>

        <div className="swiper_wrapper">


            <Slider />


        </div>


    </section>
}

export default Hero;