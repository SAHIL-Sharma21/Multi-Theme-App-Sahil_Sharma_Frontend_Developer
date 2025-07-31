import React, { createContext, useContext, useEffect, useState } from "react";
import { themes, type ThemeName } from "../themes";

interface ThemeContextType {
    theme: ThemeName;
    setTheme : (theme: ThemeName) => void;
}


const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{children: React.ReactNode}>  = ({children}) => {

    const [theme, setTheme] = useState<ThemeName>(() => {
        return (localStorage.getItem("theme") as ThemeName) || "theme1";
    });

    useEffect(() => {
        localStorage.setItem("theme", theme)
    }, [theme]);

    return (
        <ThemeContext.Provider value={{theme, setTheme}}>
            <div className={`${themes[theme].bg} ${themes[theme].text} min-h-screen ${themes[theme].font} transition-all duration-300`}>
                {children}
            </div>
        </ThemeContext.Provider>
    )
};



export const useTheme = () => {
    const ctx = useContext(ThemeContext);

    if(!ctx) throw new Error("useTheme must be used within Themeprovider");

    return ctx;
}