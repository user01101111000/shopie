import { useTheme } from "../context/ThemeContext";

const HomeContainer = () => {

    const { chnage_theme } = useTheme()


    return <div className="home_container container">

        <h1>HomeContainer</h1>

        <button onClick={chnage_theme}>Switch Theme</button>

    </div>
}

export default HomeContainer;