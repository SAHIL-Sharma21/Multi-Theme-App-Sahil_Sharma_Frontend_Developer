import type React from "react";
import { useTheme } from "../context/ThemeContext";
import { themes } from "../themes";
import { Sidebar } from "./Sidebar";

export const Layout: React.FC<{children: React.ReactNode}> = ({children}) => {

    const {theme} = useTheme();

    if(theme === "theme2"){
        return (
            <div className={`${themes[theme].bg} ${themes[theme].text} ${themes[theme].font} flex min-h-screen pt-16`}>
                <Sidebar />
                <main className={`${themes[theme].contentBg} ml-0 md:ml-56`}>
                    {children}
                </main>
            </div>
        );
    }


    return(
        <main className={`${themes[theme].bg} ${themes[theme].text} ${themes[theme].font} min-h-screen pt-16 p-6 transition-all`}>
            {children}
        </main>
    );
}