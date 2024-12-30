import { useTheme } from "../../context/ThemeContext";

const PageLoading = () => {
    const { theme } = useTheme()

    return <div className="page_loading" data-theme={theme}>
        <h1>Loading...</h1>
    </div>
};

export default PageLoading;