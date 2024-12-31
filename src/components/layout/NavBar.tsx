// react

import React from "react";

// icons 

import { NavigateFunction, NavLink } from "react-router";
import { MdOutlineShoppingBag } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa";
import { FiUser, FiSearch } from "react-icons/fi";
import { IoMdMenu, IoMdClose } from "react-icons/io";

// components

import HeaderBanner from "./HeaderBanner";

// other

import { useNavigate } from "react-router";


const NavBar = () => {

    const navigate: NavigateFunction = useNavigate();
    const [show_menu, setShowMenu] = React.useState<boolean>(false)

    return <header className="nav_bar">
        <HeaderBanner />

        <nav className="nav_bar_container container">

            <div className="logo" onClick={() => {
                navigate("/")
            }}>shopie</div>

            <ul className={"nav_links" + (show_menu ? " show_menu" : "")}>
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/">Shop</NavLink></li>
                <li><NavLink to="/">On Sale</NavLink></li>
                <li><NavLink to="/">Brands</NavLink></li>

                <IoMdClose className="close_icon_mobile" onClick={() => setShowMenu(false)} />


            </ul>

            <div className="nav_tools">
                <div className="input_area">

                    <input type="text" placeholder="Search for products" />

                    <FiSearch className="nav_tools_icon" />
                </div>

                <FaRegHeart className="nav_tools_icon" />
                <MdOutlineShoppingBag className="nav_tools_icon" />
                <FiUser className="nav_tools_icon" />

                <IoMdMenu className="nav_tools_icon menu_icon" onClick={() => setShowMenu(true)} />
            </div>


        </nav>


    </header>
}

export default NavBar;