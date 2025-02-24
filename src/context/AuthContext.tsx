"use client";

import { createContext, useContext, useState, useEffect } from "react";
import { checkAuth } from "@/util/auth";

const AuthContext = createContext<{
    isLoggedIn: boolean;
    setIsLoggedIn: (val: boolean) => void;
} | null>(null);

export function AuthProvider({ children }: { children: React.ReactNode }) {
    const [isLoggedIn, setIsLoggedIn] = useState<any>(() => checkAuth());

    useEffect(() => {
        setIsLoggedIn(checkAuth()); // Update auth state on mount
    }, []);

    return (
        <AuthContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
            {children}
        </AuthContext.Provider>
    );
}

export function useAuth() {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error("useAuth must be used within an AuthProvider");
    }
    return context;
}
