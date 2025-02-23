"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useAuth } from "@/context/AuthContext";
import { checkAuth } from "@/util/auth";

const Navbar = () => {
    const { token } = useAuth();
    const [isOpen, setIsOpen] = useState(false);
    const [isMounted, setIsMounted] = useState(false);
    const isLoggedIn = checkAuth();
    useEffect(() => {
        setIsMounted(true);
    }, []);

    if (!isMounted) return null; // Prevents hydration mismatch

    return (
        <div>
            {isLoggedIn === true && (
                <nav className="bg-white shadow-md p-4 sticky top-0 z-50">
                    <div className="container mx-auto flex justify-between items-center">
                        <Link href="/">
                            <span className="text-2xl font-bold text-blue-600 cursor-pointer">
                                NextApp
                            </span>
                        </Link>

                        <div className="hidden md:flex space-x-6">
                            <Link href="/" className="hover:text-blue-600">
                                Home
                            </Link>
                            <Link href="/about" className="hover:text-blue-600">
                                About
                            </Link>
                            <Link href="/contact" className="hover:text-blue-600">
                                Contact
                            </Link>
                            <Link href="/login" className="hover:text-blue-600">
                                Login
                            </Link>
                        </div>

                        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
                            {isOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>

                    {isOpen && (
                        <div className="md:hidden flex flex-col items-center bg-white shadow-md p-4 space-y-4">
                            <Link href="/" className="hover:text-blue-600" onClick={() => setIsOpen(false)}>
                                Home
                            </Link>
                            <Link href="/about" className="hover:text-blue-600" onClick={() => setIsOpen(false)}>
                                About
                            </Link>
                            <Link href="/contact" className="hover:text-blue-600" onClick={() => setIsOpen(false)}>
                                Contact
                            </Link>
                        </div>
                    )}
                </nav>
            )}
        </div>
    );
};

export default Navbar;
