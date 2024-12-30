import { Outlet } from "react-router"
import NavBar from "../components/layout/NavBar";
import Footer from "../components/layout/Footer";
import { useTheme } from "../context/ThemeContext";


const MainLayout = () => {

    const { theme } = useTheme()

    return <main className="main_layout" data-theme={theme}>
        <NavBar />

        <Outlet />

        <Footer />
    </main>
}

export default MainLayout;