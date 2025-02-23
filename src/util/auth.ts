// utils/auth.js
let isLoggedIn = false;

export const login = () => {
    isLoggedIn = true;
};

export const logout = () => {
    isLoggedIn = false;
};

export const checkAuth = () => {
    if (typeof window !== "undefined") {
        return localStorage.getItem('token') ? true : false;
    }
};