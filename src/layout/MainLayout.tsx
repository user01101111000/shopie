import { Outlet, useLocation } from "react-router"
import NavBar from "../components/layout/NavBar";
import Footer from "../components/layout/Footer";
import { useTheme } from "../context/ThemeContext";
import { useEffect } from "react";

const MainLayout = () => {

    const { theme } = useTheme()

    const location = useLocation();


    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location.pathname])


    return <main className="main_layout" data-theme={theme}>
        <NavBar />
        <Outlet />
        <Footer />
    </main>
}

export default MainLayout;