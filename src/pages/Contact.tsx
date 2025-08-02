import { useTheme } from "../context/ThemeContext";
import { themes } from "../themes";

export const Contact = () => {
  const { theme } = useTheme();

  return (
    <>
      <div className={`p-6 ${themes[theme].layout}`}>
        <h1 className="text-2xl font-bold mb-2">Contact Us</h1>
        <form className="max-w-md flex flex-col gap-4">
          <input
            className="p-2 border rounded"
            type="text"
            placeholder="Your Name"
          />
          <input
            className="p-2 border rounded"
            type="email"
            placeholder="Your Email"
          />
          <textarea
            className="p-2 border rounded"
            placeholder="Your Message"
            rows={4}
          />
          <button type="submit" className={`px-4 py-2 rounded ${themes[theme].bg} outline }`}>Send Message</button>
        </form>
      </div>
    </>
  );
};
