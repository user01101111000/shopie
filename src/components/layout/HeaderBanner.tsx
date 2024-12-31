import React from "react";
import { IoMdClose } from "react-icons/io";


const HeaderBanner = () => {

    const [show, setShow] = React.useState<boolean>(true)

    return show && <div className="header_banner">
        <div className="header_banner_container container">

            <div></div>
            <p>Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%! <span>Sign up now</span></p>
            <IoMdClose className="close_icon" onClick={() => setShow(false)} />

        </div>
    </div>
}

export default HeaderBanner;