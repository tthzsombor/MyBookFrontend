import { useContext, useEffect, useState } from "react";
import { ProfileNav } from "../Nav/ProfileNav";
import { ApiContext } from "../../../api";
import 'bootstrap/dist/css/bootstrap.css';

/**
 * Represents the user's books fetched from the API.
 */
interface UserBooks {
    id: number;           // Unique identifier for the user's book
    statusid: number;     // Status ID indicating the status of the book
    bookid: number;       // ID of the book
    userid: number;       // ID of the user
}

/**
 * Represents a book object.
 */
interface Book {
    id: number;           // Unique identifier for the book
    bookname: string;     // Name of the book
    genre: string;        // Genre of the book
    release: string;      // Release date of the book
    writer: string;       // Author of the book
}

/**
 * Component to display and manage the user's profile and their books.
 */
export function ProfileProfile() {
    const api = useContext(ApiContext);

    // State variables
    const [token, setToken] = useState('');               // User token
    const [errorMessage, setErrorMessage] = useState(''); // Error message
    const [allBooks, setAllBooks] = useState([] as Book[]);    // All books fetched from the API
    const [userBooks, setUserBooks] = useState([] as UserBooks[]);  // User's books fetched from the API
    const [filteredBooks, setFilteredBooks] = useState([] as UserBooks[]); // Filtered list of user's books
    const [filterStatus, setFilterStatus] = useState(0);   // Filter status for displaying books
    const [statusz, setStatusz] = useState('');            // Selected status for changing book status
    const [bookid, setBookid] = useState(0);               // Selected book ID for changing book status

    /**
     * Effect hook to load user's books from the API.
     */
    useEffect(() => {
        const storedToken = localStorage.getItem('token');
        if (storedToken) {
            setToken(storedToken);
        }
    }, []);

    useEffect(() => {
        async function loadUserBooks() {
            try {
                const response = await fetch(`${import.meta.env.VITE_SERVER_URL}/books/SearchUserBook/`, {
                    method: 'GET',
                    headers: {
                        'Content-type': 'application/json',
                        'Accept': 'application/json',
                        'Authorization': `Bearer ${token}`,
                    }
                });
                if (!response.ok) {
                    const loadError = await response.json();
                    throw new Error(loadError.message);
                }
                const content = await response.json() as UserBooks[];
                setUserBooks(content);
            } catch (error) {
                setErrorMessage('Error loading user books');
            }
        }

        if (token) {
            loadUserBooks();
        }
    }, [token]);

    /**
     * Effect hook to load all books from the API.
     */
    useEffect(() => {
        async function loadAllBooks() {
            try {
                const response = await fetch('http://localhost:3000/books/SearchName');
                if (!response.ok) {
                    setErrorMessage('Error loading all books');
                    return;
                }
                const content = await response.json() as Book[];
                setAllBooks(content);
            } catch {
                setErrorMessage('Error loading all books');
            }
        }
        loadAllBooks();
    }, []);

    /**
     * Effect hook to filter user's books based on status.
     */
    useEffect(() => {
        if (filterStatus === 0) {
            setFilteredBooks(userBooks);
        } else {
            setFilteredBooks(userBooks.filter(book => book.statusid === filterStatus));
        }
    }, [userBooks, filterStatus]);

    /**
     * Function to retrieve details of a book.
     * @param bookId ID of the book
     * @returns Details of the book
     */
    const getBookDetails = (bookId: number): Book | undefined => {
        return allBooks.find(book => book.id === bookId);
    };

    /**
     * Function to get the status string based on status ID.
     * @param statusId Status ID
     * @returns Status string
     */
    const getStatusString = (statusId: number): string => {
        switch (statusId) {
            case 1:
                return 'Tervben van';
            case 2:
                return 'Kiolvasva';
            case 3:
                return 'Most olvasom';
            case 4:
                return 'Szüneteltetem';
            case 5:
                return 'Abbahagytam';
            default:
                return '';
        }
    };

    /**
     * Function to handle filter change for displaying books.
     * @param statusId Status ID for filtering books
     */
    const handleFilterChange = (statusId: number) => {
        setFilterStatus(statusId);
    };

    /**
     * Function to change the status of a book.
     */
    async function Staus() {
        if (token) {
            const response = await fetch(`${import.meta.env.VITE_SERVER_URL}/books/Status/${bookid}`, {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json',
                    'Accept': 'application/json',
                    'Authorization': `Bearer ${token}`,
                },
                body: JSON.stringify({ status: parseInt(statusz) })
            });
            if (!(await response).ok) {
                const statuszerror = response.json();
                throw new Error(statuszerror.message);
            }
        }
    }

    // If current user is not available, return null
    if (!api.currentUser) return null;

    // Render the component
    return (
        <>
            {/* Render user navigation */}
            <ProfileNav user={api.currentUser} />
            <h1 style={{ textAlign: "center" }}>Könyveid</h1>
            <br />
            {/* Render filter buttons for book status */}
            <div style={{ textAlign: "center" }}>
                <button style={{ margin: 10 }} onClick={() => handleFilterChange(0)}>Összes könyv</button>
                <button style={{ margin: 10 }} onClick={() => handleFilterChange(1)}>Tervben van</button>
                <button style={{ margin: 10 }} onClick={() => handleFilterChange(2)}>Kiolvasva</button>
                <button style={{ margin: 10 }} onClick={() => handleFilterChange(3)}>Most olvasom</button>
                <button style={{ margin: 10 }} onClick={() => handleFilterChange(4)}>Szüneteltetem</button>
                <button style={{ margin: 10 }} onClick={() => handleFilterChange(5)}>Abbahagytam</button>
            </div>
            {/* Render user's filtered books */}
            <div id="talalat" className="container-fluid">
                <div className="kartya row justify-content-center">
                    {filteredBooks.map(userBook => {
                        const bookDetails = getBookDetails(userBook.bookid);
                        return (
                            bookDetails && (
                                <div className="col-12 col-sm-6 col-md-4 book text-center" key={userBook.id}>
                                    {/* Render book details */}
                                    <h3>{bookDetails.bookname}</h3>
                                    <p>{bookDetails.release}</p>
                                    <p>{bookDetails.writer}</p>
                                    <p>{getStatusString(userBook.statusid)}</p>
                                    {/* Render select dropdown for changing status */}
                                    <select
                                        className="statusz"
                                        id="statusz"
                                        value={statusz}
                                        onMouseOver={() => setBookid(bookDetails.id)}
                                        onClick={Staus}
                                        onChange={e => setStatusz(e.target.value)}>
                                        <option value="" disabled selected hidden>Státusz</option>
                                        <option value="1">Tervben van</option>
                                        <option value="2">Kiolvasva</option>
                                        <option value="3">Most olvasom</option>
                                        <option value="4">Szüneteltetem</option>
                                        <option value="5">Abbahagytam</option>
                                    </select>
                                </div>
                            )
                        );
                    })}
                </div>
            </div>
        </>
    );
}
