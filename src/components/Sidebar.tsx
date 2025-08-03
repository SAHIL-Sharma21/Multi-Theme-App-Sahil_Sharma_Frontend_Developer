import { Link } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";
import { themes } from "../themes";


export const Sidebar = () => {
    const {theme} = useTheme();
    
    if(theme !== "theme2") return null;

    return(
        <>
            <aside className={`${themes[theme].sidebarBg} fixed top-16 left-0 h-[calac(100vh-4rem)]`}>
                <nav className="flex flex-col space-y-4 mt-4">
                    <Link to="/" className="hover:underline">Home</Link>                    
                    <Link to="/about" className="hover:underline">About Us</Link>
                    <Link to="/contact" className="hover:underline">Contact</Link>
                </nav>
            </aside>
        </>
    );
}