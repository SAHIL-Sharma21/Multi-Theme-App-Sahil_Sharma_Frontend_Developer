export type ThemeName = "theme1" | "theme2" | "theme3";

export const themes = {
    theme1: {
        name: 'Minimal Light',
        layout: 'minimal',
        font: 'font-sans',
        bg: 'bg-gray-50',
        text: 'text-gray-900',
        primary: 'bg-blue-600 text-white',
        card: 'bg-white shadow',
    },
    theme2: {
        name: 'Dark Sidebar',
        layout: 'sidebar',
        font: 'font-serif',
        bg: 'bg-gray-900',
        text: 'text-gray-100',
        primary: 'bg-purple-700 text-white',
        card: 'bg-gray-800 shadow-lg',
    },
    theme3: {
        name: "Colorful Cards",
        layout: 'cards',
        font: 'font-pacifico',
        bg: 'bg-yellow-50',
        text: 'text-pink-700',
        primary: 'bg-pink-500 text-white',
        card: 'bg-orange-100 shadow-md',
    },
}