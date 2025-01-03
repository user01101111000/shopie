// react

import React, { useEffect } from "react";

// icons 

import { NavigateFunction, NavLink } from "react-router";
import { MdOutlineShoppingBag } from "react-icons/md";
import { FiUser } from "react-icons/fi";
import { IoMdMenu, IoMdClose } from "react-icons/io";

import { MdOutlineLightMode, MdOutlineDarkMode } from "react-icons/md";

// components

import HeaderBanner from "./HeaderBanner";

// other

import { useNavigate } from "react-router";
import { useTheme } from "../../context/ThemeContext";
import SearchComponent from "./SearchComponent";


const NavBar = () => {


    const { change_theme } = useTheme();
    const [mode, setMode] = React.useState<boolean>(false)
    const navigate: NavigateFunction = useNavigate();
    const [show_menu, setShowMenu] = React.useState<boolean>(false)


    const [isSmallScreen, setIsSmallScreen] = React.useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsSmallScreen(window.innerWidth < 1024);
        };

        handleResize();
        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);


    return <header className="nav_bar">
        <HeaderBanner />

        <nav className="nav_bar_container container">

            <div className="logo" onClick={() => {
                navigate("/")
            }}>shopie</div>

            <ul className={"nav_links" + (show_menu ? " show_menu" : "")}>
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/about">About</NavLink></li>
                <li><NavLink to="/contact">Contact</NavLink></li>

                <IoMdClose className="close_icon_mobile" onClick={() => setShowMenu(false)} />


            </ul>

            <div className="nav_tools">

                {!isSmallScreen && <SearchComponent />}

                {mode ? <MdOutlineLightMode className="nav_tools_icon" onClick={() => {
                    change_theme()
                    setMode(false)
                }} /> : <MdOutlineDarkMode className="nav_tools_icon" onClick={() => {
                    change_theme()
                    setMode(true)
                }} />}
                <MdOutlineShoppingBag className="nav_tools_icon" />
                <FiUser className="nav_tools_icon" />

                <IoMdMenu className="nav_tools_icon menu_icon" onClick={() => setShowMenu(true)} />
            </div>


        </nav>


        {isSmallScreen && <div className="container" style={{
            paddingBottom: "1.5rem"
        }}><SearchComponent /></div>}


    </header>
}

export default NavBar;