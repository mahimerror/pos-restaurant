import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Main = () => {

    const foodItems = ["Pizza", "Burger", "Sushi", "Pasta", "Salad", "Steak", "Tacos", "Ice Cream", "Fries", "Sandwich"]

    const [currentIndex, setCurrentIndex] = useState(0);
    const [visibleItems, setVisibleItems] = useState(5);

    // Update visible items based on screen width
    useEffect(() => {
        const updateVisibleItems = () => {
            setVisibleItems(window.innerWidth >= 768 ? 5 : 3);
        };

        updateVisibleItems(); // Set on initial render
        window.addEventListener("resize", updateVisibleItems);
        return () => window.removeEventListener("resize", updateVisibleItems);
    }, []);

    const getVisibleItems = () => {
        const items = [...foodItems, ...foodItems, ...foodItems]; // Triple the array for smooth scrolling
        const startIndex = currentIndex + foodItems.length; // Start in the middle set
        const offset = Math.floor(visibleItems / 2);
        return items.slice(startIndex - offset, startIndex + offset + 1);
    };

    const scroll = (direction) => {
        setCurrentIndex((prevIndex) => {
            if (direction === "left") {
                return (prevIndex - 1 + foodItems.length) % foodItems.length;
            } else {
                return (prevIndex + 1) % foodItems.length;
            }
        });
    };


    const products = [
        { name: "Appelsin juice kartong", price: 28.00, color: "bg-red-700" },
        { name: "Bonaqua", price: 20.00, color: "bg-blue-500" },
        { name: "Bonaqua med sitronsmak", price: 20.00, color: "bg-slate-400" },
        { name: "Daim sjokolade", price: 25.00, color: "bg-teal-600" },
        { name: "Eplejuice kartong", price: 25.00, color: "bg-yellow-600" },
        { name: "Extra tyggis eplemak", price: 15.00, color: "bg-slate-500" },
        { name: "Extra tyggis sitronsmak", price: 15.00, color: "bg-blue-400" },
        { name: "Frossen pizza grandiosa", price: 99.00, color: "bg-slate-300" },
        { name: "Hodetelefoner Apple", price: 399.00, color: "bg-yellow-500" },
        { name: "Kaffe (Liten)", price: 10.00, color: "bg-purple-500" },
        { name: "Kaffe (Medium)", price: 15.00, color: "bg-slate-400" },
        { name: "Kaffe (Stor)", price: 0.00, color: "bg-purple-600" },
        { name: "m&m sjokolade", price: 40.00, color: "bg-orange-600" },
        { name: "Sushi", price: 79.00, color: "bg-blue-600" },
        { name: "Snickers", price: 25.00, color: "bg-teal-500" },
        { name: "Sokker herre 38-43", price: 99.00, color: "bg-green-500" },
        { name: "Sokker herre 43-46", price: 99.00, color: "bg-green-600" },
        { name: "Sprite", price: 20.00, color: "bg-blue-400" },
        { name: "Spylervaeske", price: 159.00, color: "bg-slate-400" },
        { name: "Spylervaeske med smak", price: 199.00, color: "bg-zinc-800" },
        { name: "USB-C Lader", price: 149.00, color: "bg-slate-400" },
    ]

    const addToCart = (product) => {
        console.log(product)
    }

    return (
        <div className="py-8 h-full">
            <div className="relative h-full">
                <div className="flex flex-col justify-between h-full">

                    <div className="upper grid grid-cols-3 md:grid-cols-5 lg:grid-cols-7 gap-4">
                        {products.map((product) => (
                            <button
                                key={product.name}
                                className={`aspect-square ${product.color} text-white text-left flex flex-col items-start justify-between p-2`}
                                onClick={() => addToCart(product)}
                            >
                                <div className="font-bold text-sm">{product.name}</div>
                                <div className="ml-auto">{product.price.toFixed(2)}</div>
                            </button>
                        ))}
                    </div>

                    <div className="lower absolute bottom-0 right-0 w-full">
                        <div className="flex items-center justify-center rounded w-full bg-zinc-900 h-12">
                            {/* Left button */}
                            <button
                                size="icon"
                                className="mr-auto h-full rounded-none text-white hover:bg-zinc-800 px-5"
                                onClick={() => scroll("left")}
                                aria-label="Scroll left"
                            >
                                <ChevronLeft className="h-4 w-4" />
                            </button>

                            {/* Slider */}
                            <div className="flex items-center justify-center space-x-2 sm:space-x-4 overflow-hidden">
                                {getVisibleItems().map((item, index) => {
                                    const centerIndex = Math.floor(visibleItems / 2);
                                    return (
                                        <button
                                            key={`${item}-${index}`}
                                            className={`px-2 sm:px-4 py-2 text-xs sm:text-sm min-w-24 font-medium rounded-none whitespace-nowrap transition-all duration-300 ${index === centerIndex
                                                ? "bg-zinc-700 text-white scale-110"
                                                : "text-white hover:bg-zinc-800"
                                                }`}
                                            onClick={() => setCurrentIndex(currentIndex + index - 2)}
                                        >
                                            {item.toUpperCase()}
                                        </button>
                                    );
                                })}
                            </div>

                            {/* Right button */}
                            <button
                                size="icon"
                                className="ml-auto h-full rounded-none text-white hover:bg-zinc-800 px-5"
                                onClick={() => scroll("right")}
                                aria-label="Scroll right"
                            >
                                <ChevronRight className="h-4 w-4" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Main;