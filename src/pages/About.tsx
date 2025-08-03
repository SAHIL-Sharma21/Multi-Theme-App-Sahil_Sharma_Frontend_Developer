import { useTheme } from "../context/ThemeContext";
import { themes } from "../themes";

export const About = () => {
  const { theme } = useTheme();

  return (
    <div className={`flex items-center justify-center ${themes[theme].bg} ${themes[theme].text} ${themes[theme].font}`}>
      <div className={`p-6 w-full max-w-lg text-center transition-all`}>
        <h1 className="text-4xl font-bold mb-2">About Us</h1>
        <p className="mb-4">
          We are a team of passionate developers creating stylish and robust
          apps for the modern web. Our app demonstrates advanced React theming
          and routing.
        </p>
        <ul className="list-disc list-inside space-y-1 text-left mx-auto max-w-xs">
          <li>Context-based theming</li>
          <li>Persistent theme selection</li>
          <li>Fully responsive layouts</li>
        </ul>
      </div>
    </div>
  );
};
