// react

import React from "react";

// icons 

import { NavigateFunction, NavLink } from "react-router";
import { MdOutlineShoppingBag } from "react-icons/md";
import { FiUser, FiSearch } from "react-icons/fi";
import { IoMdMenu, IoMdClose } from "react-icons/io";

import { MdOutlineLightMode, MdOutlineDarkMode } from "react-icons/md";



// components

import HeaderBanner from "./HeaderBanner";

// other

import { useNavigate } from "react-router";
import { useTheme } from "../../context/ThemeContext";


const NavBar = () => {


    const { chnage_theme } = useTheme();
    const [mode, setMode] = React.useState<boolean>(false)
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

                {mode ? <MdOutlineLightMode className="nav_tools_icon" onClick={() => {
                    chnage_theme()
                    setMode(false)
                }} /> : <MdOutlineDarkMode className="nav_tools_icon" onClick={() => {
                    chnage_theme()
                    setMode(true)
                }} />}
                <MdOutlineShoppingBag className="nav_tools_icon" />
                <FiUser className="nav_tools_icon" />

                <IoMdMenu className="nav_tools_icon menu_icon" onClick={() => setShowMenu(true)} />
            </div>


        </nav>


        <div className="mobile_search_area container">
            <div className="input_area">

                <input type="text" placeholder="Search for products" />

                <FiSearch className="nav_tools_icon" />
            </div>
        </div>


    </header>
}

export default NavBar;