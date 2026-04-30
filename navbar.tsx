// "use client";
import { useState } from "react";
// import Link from "next/link";

interface NavProps {
  label: string;
  href: string;
};

const NavItems: NavProps[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Products", href: "/products" },
  { label: "Contact", href: "/contact" },
];

const mobileMenuButton = "block w-6 h-0.5 bg-black rounded-full transition-all duration-300 ease-out";

export const Navbar = () => {    // default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav 
            className="sticky top-0 left-0 w-full h-18 px-2 md:px-4 bg-white/50 backdrop-blur-lg shadow-xl z-50"
            role="navigation"
            aria-label="main navigation"
        >
            <div className="h-full p-4">
                <div className="flex items-center justify-between">
                    {/* LOGO */}
                    <div className="shrink-0">
                        <a                   // <Link>
                            href="/"
                            className="block w-8 h-8"
                            aria-label="link to home"
                        >
                            LOGO
                        </a>
                    </div>
            
                    {/* DESKTOP NAV */}
                    <ul className="hidden md:flex flex-row items-center gap-6 lg:gap-8">
                        {NavItems.map((item, index) => (
                            <li key={index} className="group">
                                <a             // <Link>
                                    href={item.href}
                                    className="relative inline-block text-xl lg:text-2xl text-black font-bold"
                                >
                                    {item.label}
                                    <span className="absolute left-0 bottom-0 bg-black h-0.5 w-full scale-x-0 origin-center
                                                    transition-all duration-500 ease-in-out group-hover:scale-x-100"
                                    />
                                </a>
                            </li>
                        ))}
                    </ul>

                    {/* MOBILE MENU BUTTON */}
                    <button
                        onClick={() => setIsOpen((prev) => !prev)}
                        className="md:hidden relative w-10 h-10 flex flex-col items-center justify-center gap-1.5 z-50
                                focus:outline-none focus:ring focus:ring-black rounded-lg transition-all duration-200"
                        aria-label={isOpen ? "close menu" : "open menu"}
                        aria-expanded={isOpen}
                        aria-controls="mobile-menu"
                    >
                        <span className={`${mobileMenuButton} ${isOpen ? "rotate-45 translate-y-2" : ""}`} />
                        <span className={`${mobileMenuButton} ${isOpen ? "opacity-0" : ""}`} />
                        <span className={`${mobileMenuButton} ${isOpen ? "-rotate-45 -translate-y-2" : ""}`} />
                    </button>

                    {/* MOBILE MENU */}
                    {isOpen && (
                        <div
                            className="fixed md:hidden left-0 right-0 top-18 h-[calc(100vh-4.5rem)] shadow-2xl
                                    bg-black/50 backdrop-blur-xl transition-transform duration-300 ease-out"
                            aria-hidden={!isOpen}
                            role="menu"
                        >
                            <ul className="flex flex-col items-start justify-start p-4 gap-y-2 max-w-screen">
                                {NavItems.map((item, index) => (
                                    <li key={index} className="w-full">
                                        <a
                                            href={item.href}
                                            className="block w-full p-4 text-white font-medium text-xl"
                                            aria-label={`navigate to ${item.label}`}
                                            role="menuitem"
                                        >
                                            {item.label}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}
                </div>
            </div>
        </nav>
    )
};
  
  
