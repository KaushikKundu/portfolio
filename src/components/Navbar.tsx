'use client';
import { useState } from "react";

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    return (
    <nav className="w-full bg-white/90 backdrop-blur border-b border-gray-200 shadow-sm sticky top-0 z-50">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Logo */}
                    <span className="text-2xl font-extrabold text-black tracking-tight">Kaushik</span>
                    <div className="hidden md:flex space-x-8 text-lg font-medium">
                        <a href="#home" className="hover:text-gray-700 transition-colors text-black">Home</a>
                        <a href="#projects" className="hover:text-gray-700 transition-colors text-black">Projects</a>
                        <a href="#blogs" className="hover:text-gray-700 transition-colors text-black">Blogs</a>
                        <a href="#contact" className="hover:text-gray-700 transition-colors text-black">Contact</a>
                    </div>
                    {/* Mobile Hamburger */}
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={() => setMenuOpen(!menuOpen)}
                            className="inline-flex items-center justify-center p-2 rounded-md text-black hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-700"
                            aria-label="Toggle menu"
                        >
                            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                {menuOpen ? (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                ) : (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8h16M4 16h16" />
                                )}
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
            {/* Mobile Menu */}
            {menuOpen && (
                <div className="md:hidden bg-white/95 border-t border-gray-200 shadow px-4 py-4 space-y-2">
                    <a href="#home" className="block text-lg font-medium hover:text-gray-700 transition-colors text-black">Home</a>
                    <a href="#projects" className="block text-lg font-medium hover:text-indigo-600 transition-colors">Projects</a>
                    <a href="#blogs" className="block text-lg font-medium hover:text-indigo-600 transition-colors">Blogs</a>
                    <a href="#contact" className="block text-lg font-medium hover:text-indigo-600 transition-colors">Contact</a>
                </div>
            )}
        </nav>
    );
}