'use client';
import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="bg-white shadow-md p-4 sticky top-0 z-50" >
            <div className="container mx-auto flex justify-between items-center" >
                {/* Logo */}
                < Link href="/" >
                    <span className="text-2xl font-bold text-blue-600 cursor-pointer" > NextApp </span>
                </Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex space-x-6" >
                    <Link href="/" className="hover:text-blue-600" > Home </Link>
                    < Link href="/about" className="hover:text-blue-600" > About </Link>
                    < Link href="/contact" className="hover:text-blue-600" > Contact </Link>
                </div>

                {/* Mobile Menu Button */}
                <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Menu */}
            {
                isOpen && (
                    <div className="md:hidden flex flex-col items-center bg-white shadow-md p-4 space-y-4" >
                        <Link href="/" className="hover:text-blue-600" onClick={() => setIsOpen(false)
                        }> Home </Link>
                        < Link href="/about" className="hover:text-blue-600" onClick={() => setIsOpen(false)}> About </Link>
                        < Link href="/contact" className="hover:text-blue-600" onClick={() => setIsOpen(false)}> Contact </Link>
                    </div>
                )}
        </nav>
    );
};

export default Navbar;