import { useEffect, useState } from "react";
import { useTheme } from "../context/ThemeContext";
import { themes } from "../themes";

interface RatingType {
    count: number;
    rate: number
}

interface ProductType {
    category: string;
    description: string;
    id: number;
    image: string;
    price: number;
    rating: RatingType;
    title: string;
}

export const Home = () => {
  const [products, setProducts] = useState<ProductType[]>([]);
  const { theme } = useTheme();

  const fetchProductData = async () => {
    try {
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();
      setProducts(data);
    } catch (err) {
      console.error(`Error: ${err}`);
    }
  };

  useEffect(() => {
    fetchProductData();
  }, []);

  return (
    <>
      <div className={`p-6 transition-all ${themes[theme].layout}`}>
        <div className="flex flex-col items-center justify-center mb-6 text-center">
          <h1 className="text-2xl font-bold mb-3">
            Welcome to Multi-Theme Switcher App
          </h1>
          <p className="mb-5 max-w-xl">
            This is a demonstration of a dynamic, themed React app. Try
            switching themes!
          </p>
          <button
            className={`px-4 py-2 rounded mb-4 transition border ${themes[theme].text} cursor-pointer`}
          >
            Shop Now
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {products.map((product) => (
            <div
              key={product.id}
              className={`p-4 shadow rounded ${themes[theme].card} `}
            >
              <img
                src={product.image}
                alt={product.title}
                className="w-24 h-24 object-contain mx-auto"
              />
              <h2 className="font-semibold mt-2 text-center">
                {product.title.substring(0, 30)}...
              </h2>
              <p className="text-sm text-center">${product.price}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
