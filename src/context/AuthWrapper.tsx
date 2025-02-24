"use client";

import { useAuth } from "@/context/AuthContext";
import Sidebar from "@/components/AdminNavbar";
import { useState, useEffect } from "react";

export default function AuthWrapper({ children }: { children: React.ReactNode }) {
    const { isLoggedIn } = useAuth();
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true); // Ensure this component only renders on the client
    }, []);

    if (!isMounted) {
        return null; // Prevents hydration mismatch by delaying rendering
    }

    return (
        <div className="flex">
            {isLoggedIn ? <Sidebar /> : null}
            <main className="flex-1">{children}</main>
        </div>
    );
}
