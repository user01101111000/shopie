import { ETheme } from "../enums/Theme"

export type ThemeContextType = {
    theme: ETheme,
    change_theme: () => void
}
