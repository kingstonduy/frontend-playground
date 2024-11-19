import React, { useState } from "react";
import { Link } from "react-router-dom";

const SearchTray = ({ openTray, closeTray, isTrayOpen, setIsTrayOpen }) => {
    const suggestedProducts = [
        "Air Max Supreme",
        "Sneaker Pro Ultra",
        "Urban Jogger 3000",
        "Trail Blazer Sneakers",
        "CloudFit Sneakers",
        "SpeedRunner X1",
        "StreetSport Kicks",
        "HighTop Classic",
    ];

    return (
        <div className="flex flex-col h-1/4 border-b border-black">
            {/* Search Section */}
            <div className="py-3 px-3 relative flex items-center justify-between w-full transition-all duration-500 ease-in-out flex-row pl-[50px] pr-[50px]">
                {/* Logo Section */}
                <Link className="nav-symbol">
                    <div className="text-3xl text-black font-jost font-semibold tracking-[0.1rem]">
                        Sneaker
                    </div>
                </Link>

                {/* Search Section */}
                <div className="flex items-center bg-white border border-gray-300 rounded-full px-4 py-2 shadow transition-all duration-500 ease-in-out w-2/5 space-x-4">
                    <input
                        type="text"
                        className="flex-1 border-none outline-none text-lg bg-transparent transition-all duration-500 ease-in-out w-full"
                        placeholder="Search"
                    />
                    <button
                        className="bg-none border-none outline-none p-1"
                        onClick={openTray}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="2"
                            stroke="currentColor"
                            className="w-5 h-5 text-gray-500"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M15.75 15.75L21 21m-5.25-5.25A6.75 6.75 0 1114.25 3 6.75 6.75 0 0115.75 15.75z"
                            />
                        </svg>
                    </button>
                </div>

                {/* Cancel Button */}
                <div className="px-4">
                    <button
                        className="text-gray-500 text-sm font-medium py-2 px-4 border border-gray-300 rounded hover:bg-gray-100"
                        onClick={closeTray}
                    >
                        Cancel
                    </button>
                </div>
            </div>

            {/* Suggestion Section */}
            <div className="flex flex-col justify-start py-4 pl-[200px] pr-[200px]">
                {/* Suggestion Header */}
                <div className="text-sm font-semibold text-black">
                    Suggested Products
                </div>

                {/* Suggested Products */}
                <div className="flex flex-wrap gap-4 mt-4">
                    {suggestedProducts.map((product, index) => (
                        <div
                            key={index}
                            className="text-sm px-4 py-2 bg-gray-100 text-black font-medium border border-gray-300 rounded-full shadow-md cursor-pointer hover:bg-gray-500"
                            style={{
                                fontFamily:
                                    "'Helvetica Now Text Medium', Helvetica, Arial, sans-serif",
                                lineHeight: "1.5",
                            }}
                        >
                            {product}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default SearchTray;
