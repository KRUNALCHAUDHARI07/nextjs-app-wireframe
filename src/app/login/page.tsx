"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";
import { checkAuth, login } from "@/util/auth";

export default function AuthPage() {
    const router = useRouter();
    const { setToken } = useAuth();
    const [form, setForm] = useState({ email: "", password: "" });
    const [error, setError] = useState("");
    const isLoggedIn = checkAuth();


    useEffect(() => {
        if (isLoggedIn) {
            router.push("/");
        }
    }, [isLoggedIn, router]);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError("");
        try {
            localStorage.setItem("token", "token");
            setToken("token");
            login();
            router.push("/");
        } catch (error) {
            setError("Login failed. Please check your credentials.");
        }
    };

    return (
        <div className="flex items-center justify-center h-screen">
            <div className="bg-white p-8 shadow-lg rounded-lg w-96">
                <h2 className="text-2xl font-bold text-center mb-4">Login</h2>
                {error && <p className="text-red-500 text-center">{error}</p>}
                <form onSubmit={handleSubmit}>
                    <input
                        type="email"
                        placeholder="Email"
                        className="border p-2 w-full mb-2"
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        required
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        className="border p-2 w-full mb-2"
                        value={form.password}
                        onChange={(e) => setForm({ ...form, password: e.target.value })}
                        required
                    />
                    <button type="submit" className="bg-blue-500 text-white p-2 w-full">
                        Login
                    </button>
                </form>
            </div>
        </div>
    );
}
