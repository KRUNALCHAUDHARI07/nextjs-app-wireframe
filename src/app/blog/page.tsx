"use client"
import Link from 'next/link';
import React, { useState } from 'react'
import { BsThreeDotsVertical } from "react-icons/bs";

const users = [
    { name: "Lindsay Walton", title: "Front-end Developer", email: "lindsay.walton@example.com", role: "Member" },
    { name: "Courtney Henry", title: "Designer", email: "courtney.henry@example.com", role: "Admin" },
    { name: "Tom Cook", title: "Director of Product", email: "tom.cook@example.com", role: "Member" },
    { name: "Whitney Francis", title: "Copywriter", email: "whitney.francis@example.com", role: "Admin" },
    { name: "Leonard Krasner", title: "Senior Designer", email: "leonard.krasner@example.com", role: "Owner" },
    { name: "Floyd Miles", title: "Principal Designer", email: "floyd.miles@example.com", role: "Member" },
];

const Blog = [
    { image: 'https://cmslooks.themelooks.us/public/storage/all_files/2023/Apr/3_992.jpg', title: 'Summer Adventure Essentials From Backcountry', auther: 'Wade Wilson', category: 'Video,Groccery,E-commerce', status: 'published' },
    { image: 'https://cmslooks.themelooks.us/public/storage/all_files/2023/Apr/1_1001.jpg', title: 'The One Thing I Do When Fashion Come Over', auther: 'Wade Wilson', category: 'Travel,Fashion', status: 'Draft' },
    { image: 'https://cmslooks.themelooks.us/public/storage/all_files/2023/Apr/4_991.jpg', title: 'Summer Adventure Essentials From Backcountry', auther: 'Wade Wilson', category: 'Video,Groccery,E-commerce', status: 'published' },
    { image: 'https://cmslooks.themelooks.us/public/storage/all_files/2023/Apr/5_990.jpg', title: 'Summer Adventure Essentials From Backcountry', auther: 'Wade Wilson', category: 'Video,Groccery,E-commerce', status: 'published' },
    { image: 'https://cmslooks.themelooks.us/public/storage/all_files/2023/Apr/8_987.jpg', title: 'Summer Adventure Essentials From Backcountry', auther: 'Wade Wilson', category: 'Video,Groccery,E-commerce', status: 'published' }, { image: 'https://cmslooks.themelooks.us/public/storage/all_files/2023/Apr/3_992.jpg', title: 'Summer Adventure Essentials From Backcountry', auther: 'Wade Wilson', category: 'Video,Groccery,E-commerce', status: 'published' },
    { image: 'https://cmslooks.themelooks.us/public/storage/all_files/2023/Apr/13_997.jpg', title: 'Summer Adventure Essentials From Backcountry', auther: 'Wade Wilson', category: 'Video,Groccery,E-commerce', status: 'published' },
]


const page = () => {
    const [menuOpen, setMenuOpen] = useState<number | null>(null);
    return (
        <div className="w-full h-screen flex items-center justify-center bg-gray-900 text-white">
            <div className="w-full h-full p-6 bg-gray-900 text-white rounded-lg shadow-lg">
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-2xl font-semibold">All Blogs</h2>
                    <Link href='/blog/add' className="bg-indigo-500 hover:bg-indigo-600 text-white py-2 px-4 rounded-lg">Add New Blog</Link>
                </div>
                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="border-b border-gray-700">
                                <th className="py-2 px-4">Image</th>
                                <th className="py-2 px-4">Title</th>
                                <th className="py-2 px-4">Auther</th>
                                <th className="py-2 px-4">Category</th>
                                <th className="py-2 px-4">Status</th>
                                <th className="py-2 px-4">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {Blog.map((blog, index) => (
                                <tr key={index} className="border-b border-gray-800 hover:bg-gray-800">
                                    <td className="py-2 px-4 font-medium">
                                        <img src="https://cmslooks.themelooks.us/public/storage/all_files/2023/Apr/3_992.jpg" width='52px' alt="" />
                                    </td>
                                    <td className="py-2 px-4">{blog.title}</td>
                                    <td className="py-2 px-4 text-gray-300">{blog.auther}</td>
                                    <td className="py-2 px-4">{blog.category}</td>
                                    <td className="py-2 px-4 text-indigo-400 cursor-pointer hover:text-indigo-500">{blog.status}</td>
                                    <td className="py-2 px-4 relative">
                                        <button onClick={() => setMenuOpen(menuOpen === index ? null : index)} className="text-gray-400 hover:text-white">
                                            <BsThreeDotsVertical />
                                        </button>
                                        {menuOpen === index && (
                                            <div className="absolute right-0 mt-2 w-32 bg-gray-800 shadow-lg rounded-md py-2">
                                                <button className="block w-full text-left px-4 py-2 text-sm text-white hover:bg-gray-700">Edit</button>
                                                <button className="block w-full text-left px-4 py-2 text-sm text-white hover:bg-gray-700">Delete</button>
                                            </div>
                                        )}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default page
