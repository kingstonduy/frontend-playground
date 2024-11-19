import React, { useState } from "react";
import { Link } from "react-router-dom";
import SearchTray from "./SearchTray";

const Header = ({ isLoggedIn }) => {
    const [isTrayOpen, setIsTrayOpen] = useState(false);
    const openTray = () => setIsTrayOpen(true);
    const closeTray = () => setIsTrayOpen(false);

    const Navbar = [
        {
            name: "Home",
            link: "/",
        },
        {
            name: "Men",
            link: "/",
        },
        {
            name: "Women",
            link: "/",
        },
        {
            name: "All product",
            link: "/",
        },
        {
            name: "About us",
            link: "/",
        },
    ];

    const renderHeader = () => {
        if (!isTrayOpen) {
            return (
                <>
                    <div className="w-full h-auto  shadow-md flex items-center justify-between">
                        {/* Logo Section */}
                        <div className="nav-symbol pl-10">
                            <Link className="text-3xl text-black font-jost font-semibold tracking-[0.1rem]">
                                Sneaker
                            </Link>
                        </div>

                        {/* Navigation Items */}
                        <div className="nav-items pl-[20px] pr-[50px] ">
                            <ul className="list-none flex gap-x-12 items-center">
                                {Navbar.map((item, index) => (
                                    <li key={index}>
                                        <Link
                                            to={item.link}
                                            className="text-black text-[1.25rem] font-inter font-semibold hover:text-gray-500 ease-out duration-300 hover:underline"
                                        >
                                            {item.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Icon Section */}
                        <div className="nav-icon right-0 flex flex-row items-center justify-between gap-x-6 pl-[5px] pr-[15px] ">
                            {/* Magnifying Glass Icon */}
                            <div className="py-3 relative ml-auto  transition-all duration-500 ease-in-out">
                                <button
                                    className="flex items-center w-[80px] bg-white border h-[40px] border-gray-300 rounded-full px-2 py-2 shadow transition-all duration-500 ease-in-out cursor-pointer hover:bg-gray-500 "
                                    onClick={openTray}
                                >
                                    <input
                                        type="text"
                                        className="flex-1 border-none outline-none text-[1.5rem] bg-transparent transition-all duration-500 ease-in-out w-full cursor-pointer"
                                        placeholder=""
                                        readOnly
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
                                            className="w-10 h-8 text-black"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M15.75 15.75L21 21m-5.25-5.25A6.75 6.75 0 1114.25 3 6.75 6.75 0 0115.75 15.75z"
                                            />
                                        </svg>
                                    </button>
                                </button>
                            </div>

                            {/* Avatar/User Icon */}
                            <div className="relative group">
                                {/* User Icon */}
                                <div className="flex items-center justify-center w-10 h-10 rounded-full cursor-pointer hover:bg-gray-500 transition duration-300">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth={1.5}
                                        stroke="currentColor"
                                        className="w-10 h-10"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                                        />
                                    </svg>
                                </div>

                                {/* Dropdown Menu */}
                                <div className="absolute left-0 mt-2 w-48 bg-white border border-gray-300 rounded-lg shadow-lg z-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-opacity duration-300">
                                    <a
                                        href="#"
                                        className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                                    >
                                        My Account
                                    </a>
                                    <a
                                        href="#"
                                        className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                                    >
                                        Purchase
                                    </a>
                                    <a
                                        href="#"
                                        className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                                    >
                                        Log Out
                                    </a>
                                </div>
                            </div>

                            {/* Cart Icon */}
                            <div className="">
                                <div class="flex items-center justify-center w-10 h-10 rounded-full cursor-pointer hover:bg-gray-500 transition duration-300">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth={1.5}
                                        stroke="currentColor"
                                        className="w-10 h-10 text-black cursor-pointer hover:text-black duration-500"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                                        />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            );
        } else {
            return <SearchTray openTray={openTray} closeTray={closeTray} />;
        }
    };

    return <>{renderHeader()}</>;
};

export default Header;
