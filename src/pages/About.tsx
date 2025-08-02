import { useTheme } from "../context/ThemeContext";
import { themes } from "../themes";

export const About = () => {
  const { theme } = useTheme();

  return (
    <>
      <div className={`p-6 ${themes[theme].layout}`}>
        <h1 className="text-2xl font-bold mb-2">About Us</h1>
        <p className="max-w-lg mb-4">
          We are a team of passionate developers creating stylish and robust
          apps for the modern web. Our app demonstrates advanced React theming
          and routing.
        </p>
        <ul className="list-disc pl-7 space-y-1">
          <li>Context-based theming</li>
          <li>Persistent theme selection</li>
          <li>Fully responsive layouts</li>
        </ul>
      </div>
    </>
  );
};
