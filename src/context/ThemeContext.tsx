import React from "react";
import { ETheme } from "../ts/enums/Theme";
import { ThemeContextType } from "../ts/types/Theme";

const ThemeContext = React.createContext<ThemeContextType>({
    theme: ETheme.LIGHT,
    change_theme: () => { }
});

const ThemeContextProvider: React.FC<{ children: React.ReactNode }> = (props: { children: React.ReactNode }) => {

    const [theme, setTheme] = React.useState(localStorage.getItem("theme") as ETheme || ETheme.LIGHT);

    const data: ThemeContextType = {
        theme,
        change_theme: () => {
            const current_theme = theme === ETheme.LIGHT ? ETheme.DARK : ETheme.LIGHT;

            localStorage.setItem("theme", current_theme);
            setTheme(current_theme);
        }
    }

    return <ThemeContext.Provider value={data}>
        {props.children}
    </ThemeContext.Provider>
}

const useTheme = () => React.useContext(ThemeContext);

export { ThemeContextProvider, useTheme }