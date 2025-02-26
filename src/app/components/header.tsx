"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import ButtonCustom from "./ui/button-custom";
import ThemeToggle from "./ui/theme-toggle";

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => setMenuOpen((prev) => !prev);
    const closeMenu = () => setMenuOpen(false);

    const menuLinks = [
        { title: "Product", href: "/" },
        { title: "Why Join", href: "/about" },
        { title: "Pricing", href: "/#pricing" },
        { title: "Company", href: "/careers" },
    ];

    return (
        <header className="flex items-center justify-center h-16 md:h-24 bg-[#F9F9FF] dark:bg-[#24282b]">
            <nav className="fixed z-50 flex items-center justify-between w-full max-w-[1240px] h-16 md:h-[69px] px-4 bg-white dark:bg-[#212529] md:dark:bg-[#212529ca] md:bg-white/80 backdrop-blur-md rounded-none md:rounded-full">
                {/* Logo */}
                <Link href="/" className="flex items-center">
                    <Image
                        src="/logo.png"
                        alt="ClimateForge Logo"
                        width={48}
                        height={48}
                        priority
                    />
                    <p className="ml-2 text-lg md:text-xl lg:text-2xl">ClimateForge</p>
                </Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex md:gap-4 lg:gap-6">
                    {menuLinks.map(({ title, href }) => (
                        <Link key={title} href={href} className="font-semibold text-sm lg:text-base text-nowrap">
                            {title}
                        </Link>
                    ))}
                </div>

                {/* Buttons */}
                <div className="hidden md:flex gap-4">
                    <ButtonCustom
                        variant="outline"
                        onClick={() => window.open("https://climateforge.vercel.app/", "_blank")}
                    >
                        Sign In
                    </ButtonCustom>
                    <ButtonCustom
                        onClick={() => window.open("https://calendly.com/giovanni-climateforge-qttf", "_blank")}
                    >
                        Book a Demo
                    </ButtonCustom>
                    <ThemeToggle/>
                </div>

                {/* Mobile Menu Button */}
                <button className="block md:hidden p-2" onClick={toggleMenu} aria-label="Toggle Menu">
                    <svg className="w-6 h-6" viewBox="0 0 24 24" stroke="currentColor" fill="none" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16m-7 6h7" />
                    </svg>
                </button>
            </nav>

            {/* Mobile Menu */}
            <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: menuOpen ? "auto" : 0, opacity: menuOpen ? 1 : 0 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className={`fixed top-16 left-0 w-full bg-white dark:bg-[#212529] pb-6 z-50 md:hidden rounded-b-15 shadow-lg overflow-hidden ${menuOpen ? "block" : "hidden"}`}
            >
                <div className="flex flex-col justify-center items-center gap-6 p-4">
                    <div className="flex justify-center max-w-[300px] w-full flex-wrap gap-4">
                    {menuLinks.map(({ title, href }) => (
                        <Link key={title} href={href} onClick={closeMenu} className="font-semibold text-sm">
                            {title}
                        </Link>
                    ))}</div>
                    <ButtonCustom className="w-full max-w-[300px]"
                        variant="outline"
                        onClick={() => {
                            closeMenu();
                            window.open("https://climateforge.vercel.app/", "_blank");
                        }}
                    >
                        Sign In
                    </ButtonCustom>
                    <ButtonCustom className="w-full max-w-[300px]"
                        onClick={() => {
                            closeMenu();
                            window.open("https://calendly.com/giovanni-climateforge-qttf", "_blank");
                        }}
                    >
                        Book a Demo
                    </ButtonCustom>
                </div>
            </motion.div>
        </header>
    );
};

export default Header;
