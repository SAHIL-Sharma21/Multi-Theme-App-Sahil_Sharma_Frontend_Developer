import React, { createContext, useContext, useEffect, useState } from "react";
import { themes, type ThemeName } from "../themes";

interface ThemeContextType {
    theme: ThemeName;
    setTheme : (theme: ThemeName) => void;
}


const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{children: React.ReactNode}>  = ({children}) => {

    const getInitialTheme = (): ThemeName => {
        const stored = localStorage.getItem("theme");
        if(stored && ["theme1", "theme2", "theme3"].includes(stored)){
            return stored as ThemeName;
        }
        return "theme1";
    }

    const [theme, setTheme] = useState<ThemeName>(getInitialTheme);

    useEffect(() => {
        localStorage.setItem("theme", theme)
    }, [theme]);

    const safeTheme = themes[theme] ?? themes["theme1"];

    useEffect(() => {
    if (!["theme1", "theme2", "theme3"].includes(theme)) {
        setTheme("theme1");
    }
}, [theme]);

    return (
        <ThemeContext.Provider value={{theme, setTheme}}>
            <div className={`${safeTheme.bg} ${safeTheme.text} min-h-screen ${safeTheme.font} transition-all duration-300`}>
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