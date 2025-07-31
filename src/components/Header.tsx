import { Link } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";
import { themes } from "../themes";

export const Header = () => {

    const {theme, setTheme} = useTheme();

    return (
        <header className="fixed top-0 left-0 w-full flex items-center justify-between px-6 h-16 shadow bg-opacity-80 z-50">
            <Link to="/" className="font-bold text-lg">Dukanwala</Link>
            <select
            className="rounded px-2 py-1"
            value={theme}
            onChange={(e) => setTheme(e.target.value as keyof typeof themes)}
            >
                {Object.entries(themes).map(([key, t]) => (
                    <option value={key} key={key}>{t.name}</option>
                ))}
            </select>
            <nav className="space-x-4">
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/contact">Contact</Link>
            </nav>
        </header>
    );
}