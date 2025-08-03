import { useTheme } from "../context/ThemeContext";
import { themes } from "../themes";

export const Contact = () => {
  const { theme } = useTheme();

  return (
    <div className={`flex items-center justify-center ${themes[theme].bg} ${themes[theme].text} ${themes[theme].font}`}>
      <div className="p-6 w-full max-w-md transition-all">
        <h1 className="text-3xl font-bold mb-4 text-center">Contact Us</h1>
        <form className="flex flex-col gap-4">
          <input
            className="p-2 border rounded w-full placeholder-gray-400 dark:placeholder-gray-300"
            type="text"
            placeholder="Your Name"
          />
          <input
            className="p-2 border rounded w-full placeholder-gray-400 dark:placeholder-gray-300"
            type="email"
            placeholder="Your Email"
          />
          <textarea
            className={`p-2 border rounded w-full placeholder-gray-400 dark:placeholder-gray-300`}
            placeholder="Your Message"
            rows={4}
          />
          <button
            type="submit"
            className={`w-full px-4 py-2 rounded transition ${themes[theme].bg} outline`}
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};
