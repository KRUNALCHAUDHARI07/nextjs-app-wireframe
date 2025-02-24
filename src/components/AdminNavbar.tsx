'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Home, User, Settings, Menu, Files, Contact } from 'lucide-react';
import { checkAuth } from '@/util/auth';

export default function Sidebar() {
    const [isOpen, setIsOpen] = useState(true);
    const isLoggedIn = checkAuth();


    const list = [
        {
            text: 'Home',
            link: '/',
            icon: <Home size={24} />
        },
        // {
        //     text: 'Blog',
        //     link: '/blog',
        //     icon: <Files size={24} />
        // },
        {
            text: 'Blog',
            link: '/blog',
            icon: <Files size={24} />
        },
        {
            text: 'Contact',
            link: '/contact',
            icon: <Contact size={24} />
        },
    ]
    return (
        <div className="flex h-screen">
            <div
                className={`bg-gray-900 text-white p-4 transition-all duration-300 ${isOpen ? 'w-64' : 'w-16'}`}
            >
                <div className='flex'>
                    <button onClick={() => setIsOpen(!isOpen)} className="mb-4">
                        <Menu size={24} />
                    </button>
                    {isOpen && <h1 className="ml-3 text-lg font-bold mb-2">Dashboard</h1>}
                </div>

                <nav className="flex flex-col space-y-4">
                    {list.map((item, index) => {
                        return (
                            <Link key={index} href={item.link} className="flex items-center space-x-2 p-2 hover:bg-gray-800 rounded">
                                {item.icon}
                                {isOpen && <span>{item.text}</span>}
                            </Link>
                        )
                    })}
                </nav>
            </div>
            {/* <div className="flex-1 p-6">Main Content</div> */}
        </div>
    );
}
