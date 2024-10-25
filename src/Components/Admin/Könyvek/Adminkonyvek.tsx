import React, { useState, useEffect, useContext } from "react";
import { AdminNav } from "../Nav/AdminNav"; // Importing the NavBar component
import { User } from "../../Profile/User";
import { ApiContext } from "../../../api";
import './Adminkonyvek.css'

// Define the Book interface
interface Book {
    id: number;           // Unique identifier for the book
    bookname: string;     // Name of the book
    genre: string;        // Genre of the book (if needed)
    release: number;      // Release date of the book
    writer: string;       // Author of the book
}

interface Props {
    user: User
}


// AdminProfile component definition
export function AdminKonyvek() {
    const api = useContext(ApiContext)

    // State variables
    const [books, setBooks] = useState<Book[]>([]); // Array to store books
    const [newBook, setNewBook] = useState<Partial<Book>>({}); // New book object
    const [ujcim, setUjcim] = useState('');
    const [ujkiadas, setUjkiadas] = useState(Number);
    const [ujiro, setUjiro] = useState('');
    const [selectedBook, setSelectedBook] = useState<Book | null>(null); // Selected book for update
    const [errorMessage, setErrorMessage] = useState<string>(''); // Error message state

    // Function to fetch books from the server
    async function loadAllBooks() {
        try {
            const response = await fetch('http://localhost:3000/books/SearchName');
            if (!response.ok) {
                throw new Error('Error loading all books');
            }
            const content = await response.json() as Book[]; // Parse response as an array of Book objects
            setBooks(content); // Update the state with the fetched books
        } catch (error) {
            setErrorMessage('Error loading all books'); // Set error message state if fetching fails
        }
    }

    // Function to add a new book
    const addBook = async () => {
        const bookData = {
            bookname: ujcim,
            writer: ujiro,
            release: ujkiadas,
            genre: 'defaultGenre' // Ha van műfaj, állítsd be itt.
        };
        try {
            const response = await fetch(`http://localhost:3000/books/Bookname`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify(bookData), // Küldd el az objektumot
            });
            if (!response.ok) {
                throw new Error('Failed to add book');
            }
            setNewBook({}); // Clear new book object
            loadAllBooks(); // Refresh book list after adding a new book
        } catch (error) {
            console.error(error);
        }
    };

    // Function to remove a book
    const removeBook = async (bookId: number) => {
        // Megerősítés a törlés előtt
        const confirmDelete = window.confirm('Biztosan törölni akarod ezt a könyvet?');
    
        if (!confirmDelete) {
            return; // Ha a felhasználó nem erősíti meg, ne folytasd
        }
    
        try {
            const response = await fetch(`http://localhost:3000/books/${bookId}`, {
                method: 'DELETE',
            });
            if (!response.ok) {
                throw new Error('Failed to remove book');
            }
            loadAllBooks(); // Frissítsd a könyvek listáját törlés után
        } catch (error) {
            console.error(error);
        }
    };
    

    // Function to update a book
    const updateBook = async () => {
        if (!selectedBook) return; // Ellenőrizd, hogy van kiválasztott könyv
        try {
            const response = await fetch(`http://localhost:3000/books/${selectedBook.id}`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(selectedBook),
            });
            if (!response.ok) {
                throw new Error('Failed to update book');
            }
            setSelectedBook(null); // Clear selected book after updating
            loadAllBooks(); // Refresh book list after updating a book
        } catch (error) {
            console.error(error);
        }
    };

    // Effect to fetch books on component mount
    useEffect(() => {
        loadAllBooks(); // Load books when the component mounts
    }, []);

    return (
        <div className="admin-container">
            <AdminNav user={api.currentUser!} /> {/* Render the NavBar component */}
            <div className="admin-content">
                <div className="admin-section">
                    <h2 className="admin-heading">Könyv hozzáadása</h2>
                    <div className="admin-inputs">
                        <input
                            type="text"
                            value={ujcim}
                            onChange={e => setUjcim(e.currentTarget.value)}
                            placeholder="Cím"
                        />
                        <input
                            type="number"
                            value={ujkiadas}
                            onChange={e => setUjkiadas(parseInt(e.currentTarget.value))}
                            placeholder="Kiadás éve"
                        />
                        <input
                            type="text"
                            value={ujiro}
                            onChange={e => setUjiro(e.currentTarget.value)}
                            placeholder="Író"
                        />
                        <button onClick={addBook} className="admin-button">Hozzáadás</button>
                    </div>
                </div>
                <div className="admin-section">
                    <h2 className="admin-heading">Könyvek</h2>
                    <ul className="admin-book-list">
                        {books.map((book) => (
                            <li key={book.id} className="admin-book-item">
                                <span>{book.bookname} - {book.writer}</span>
                                <div className="admin-buttons"> {/* Új div a gombokhoz */}
                                    <button onClick={() => removeBook(book.id)} className="admin-remove-button">Törlés</button>
                                    <button onClick={() => setSelectedBook(book)} className="admin-update-button">Módosítás</button>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
                {/* Render update section if a book is selected */}
                {selectedBook && (
                    <div className="admin-section">
                        <h2 className="admin-heading">Módosítás</h2>
                        <div className="admin-inputs">
                            <input
                                type="text"
                                value={selectedBook.bookname}
                                onChange={(e) => setSelectedBook({ ...selectedBook, bookname: e.target.value })}
                                placeholder="Title"
                            />
                            <input
                                type="number"
                                value={selectedBook.release}
                                onChange={(e) => setSelectedBook({ ...selectedBook, release: parseInt(e.target.value) })}
                                placeholder="Release Year"
                            />
                            <input
                                type="text"
                                value={selectedBook.writer}
                                onChange={(e) => setSelectedBook({ ...selectedBook, writer: e.target.value })}
                                placeholder="Author"
                            />
                            <button onClick={updateBook} className="admin-button">Módosítás</button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default AdminKonyvek;
