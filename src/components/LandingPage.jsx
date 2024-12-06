import React from "react";
import { Link } from "react-router-dom";

const LandingPage = () => {
    return (
        <div className="bg-gray-50 font-sans">
            {/* Hero Section */}
            <section
                className="relative bg-cover bg-center h-screen"
                style={{
                    backgroundImage:
                        "url(https://via.placeholder.com/1600x900)",
                }}
            >
                <div className="absolute inset-0 bg-black opacity-50"></div>
                <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white px-6 md:px-12">
                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-6">
                        Step into Style with Our New Collection
                    </h1>
                    <p className="text-lg sm:text-xl mb-8">
                        Discover the perfect pair for every occasion and walk
                        with confidence.
                    </p>
                    <Link to="/product">
                        <button className="bg-blue-600 text-white py-3 px-8 rounded-full text-lg hover:bg-blue-700 transition duration-300">
                            Shop Now
                        </button>
                    </Link>
                </div>
            </section>

            {/* Features Section */}
            <section className="bg-white py-16">
                <div className="max-w-screen-xl mx-auto px-6 md:px-12 text-center">
                    <h2 className="text-3xl font-semibold mb-8">
                        Why Choose Us?
                    </h2>
                    <div className="flex justify-center gap-16">
                        <div className="flex flex-col items-center">
                            <img
                                className="w-20 h-20 mb-4"
                                src="https://via.placeholder.com/80"
                                alt="Feature 1"
                            />
                            <h3 className="text-lg font-semibold">
                                Premium Quality
                            </h3>
                            <p className="text-gray-600 mt-2">
                                Our shoes are crafted with high-quality
                                materials for comfort and durability.
                            </p>
                        </div>
                        <div className="flex flex-col items-center">
                            <img
                                className="w-20 h-20 mb-4"
                                src="https://via.placeholder.com/80"
                                alt="Feature 2"
                            />
                            <h3 className="text-lg font-semibold">
                                Stylish Designs
                            </h3>
                            <p className="text-gray-600 mt-2">
                                Fashionable styles that suit every occasion,
                                from casual to formal wear.
                            </p>
                        </div>
                        <div className="flex flex-col items-center">
                            <img
                                className="w-20 h-20 mb-4"
                                src="https://via.placeholder.com/80"
                                alt="Feature 3"
                            />
                            <h3 className="text-lg font-semibold">
                                Affordable Prices
                            </h3>
                            <p className="text-gray-600 mt-2">
                                Get high-end shoes without breaking the bank.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Product Section */}
            <section className="bg-gray-100 py-16">
                <div className="max-w-screen-xl mx-auto px-6 md:px-12 text-center">
                    <h2 className="text-3xl font-semibold mb-8">
                        Shop Our Latest Collection
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                        {/* Product Card 1 */}
                        <div className="bg-white border rounded-lg shadow-lg overflow-hidden">
                            <img
                                className="w-full h-60 object-cover"
                                src="https://via.placeholder.com/400"
                                alt="Product 1"
                            />
                            <div className="p-4">
                                <h3 className="text-xl font-semibold">
                                    Stylish Sneaker
                                </h3>
                                <p className="text-gray-600 mt-2">$120.00</p>
                            </div>
                        </div>

                        {/* Product Card 2 */}
                        <div className="bg-white border rounded-lg shadow-lg overflow-hidden">
                            <img
                                className="w-full h-60 object-cover"
                                src="https://via.placeholder.com/400"
                                alt="Product 2"
                            />
                            <div className="p-4">
                                <h3 className="text-xl font-semibold">
                                    Leather Boots
                                </h3>
                                <p className="text-gray-600 mt-2">$150.00</p>
                            </div>
                        </div>

                        {/* Product Card 3 */}
                        <div className="bg-white border rounded-lg shadow-lg overflow-hidden">
                            <img
                                className="w-full h-60 object-cover"
                                src="https://via.placeholder.com/400"
                                alt="Product 3"
                            />
                            <div className="p-4">
                                <h3 className="text-xl font-semibold">
                                    Classic Loafers
                                </h3>
                                <p className="text-gray-600 mt-2">$80.00</p>
                            </div>
                        </div>

                        {/* Product Card 4 */}
                        <div className="bg-white border rounded-lg shadow-lg overflow-hidden">
                            <img
                                className="w-full h-60 object-cover"
                                src="https://via.placeholder.com/400"
                                alt="Product 4"
                            />
                            <div className="p-4">
                                <h3 className="text-xl font-semibold">
                                    Running Shoes
                                </h3>
                                <p className="text-gray-600 mt-2">$100.00</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer Section */}
            <footer className="bg-black text-white py-6">
                <div className="max-w-screen-xl mx-auto text-center">
                    <p>&copy; 2024 ShoeStore. All rights reserved.</p>
                    <div className="mt-4">
                        <a
                            href="#!"
                            className="mx-4 text-lg hover:text-gray-400"
                        >
                            Privacy Policy
                        </a>
                        <a
                            href="#!"
                            className="mx-4 text-lg hover:text-gray-400"
                        >
                            Terms & Conditions
                        </a>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default LandingPage;
