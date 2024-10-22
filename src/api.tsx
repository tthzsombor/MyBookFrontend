import { createContext, useEffect, useState } from "react";
import { User } from "./Components/Profile/User";
import { Book } from "./Components/Profile/Book";

// Create a context for the API
export const ApiContext = createContext({
    error: '',
    login: async (email: string, password: string) => { },
    logout: () => { },
    register: async (email: string, username: string, password: string) => { },
    listAllBook: async () => ([] as Book[]),
    deleteUser: async (id: number) => { },
    currentUser: null as (User | null),
});

// Define the props interface
interface Props {
    children: React.ReactNode;
}

// Component for providing API functionality throughout the application
export function ApiProvider({ children }: Props) {
    // State for authentication token
    const [token, setToken] = useState('');
    // State for current user
    const [user, setUser] = useState(null as User | null);
    // State for error messages
    const [error, setError] = useState('');
    // State for book data
    const [book, setBook] = useState(null as Book | null);

    // Effect to load token from local storage on component mount
    useEffect(() => {
        const storedToken = localStorage.getItem('token');
        if (storedToken) {
            setToken(storedToken);
        }
    }, []);

    // Effect to load user data when token changes
    useEffect(() => {
        async function loadUserData() {
            const response = await fetch(`${import.meta.env.VITE_SERVER_URL}/users/me`, {
                method: 'GET',
                headers: {
                    'Accept': 'application/json',
                    'Authorization': `Bearer ${token}`,
                }
            });
            if (response.status === 401) {
                setToken('');
                localStorage.removeItem('token');
                setError('Please login again');
                return;
            }
            if (!response.ok) {
                setError('An error occurred, try again later');
                return;
            }
            const userData = await response.json() as User;
            setUser(userData);
        }

        if (token) {
            loadUserData();
        } else {
            setUser(null);
        }
    }, [token]);

    // API object containing authentication and user-related functions
    const apiObj = {
        currentUser: user,
        error,
        // Function for user login
        login: async (email: string, password: string) => {
            const loginData = { email, password };

            const response = await fetch(`${import.meta.env.VITE_SERVER_URL}/auth/login`, {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json',
                    'Accept': 'application/json',
                },
                body: JSON.stringify(loginData),
            });
            if (!response.ok) {
                const errorObj = await response.json();
                throw new Error(errorObj.message);
            }
            const tokenObj = await response.json();
            setToken(tokenObj.token);
            localStorage.setItem('token', tokenObj.token);
        },
        // Function for user logout
        logout: () => {
            setToken('');
            localStorage.removeItem('token');
        },
        // Function for user registration
        register: async (email: string, username: string, password: string) => {
            const registerData = { email, username, password };

            const response = await fetch(`${import.meta.env.VITE_SERVER_URL}/users/Register`, {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json',
                    'Accept': 'application/json',
                },
                body: JSON.stringify(registerData),
            });
            if (!response.ok) {
                const errorObj = await response.json();
                throw new Error(errorObj.message);
            }
        },
    };

    // Provide the API context to the children components
    return <ApiContext.Provider value={apiObj}>{children}</ApiContext.Provider>;
}
