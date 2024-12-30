import { ETheme } from "../enums/Theme"

export type ThemeContextType = {
    theme: ETheme,
    chnage_theme: () => void
}
