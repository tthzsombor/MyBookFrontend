import React, { useState, useEffect } from "react";
import { NavBar } from "../NavBar/Nav"; // Importing the NavBar component
import './Admin.css' // Importing the CSS file for styling

// Define the Book interface
interface Book {
    id: number;           // Unique identifier for the book
    bookname: string;     // Name of the book
    genre: string;        // Genre of the book (if needed)
    release: string;      // Release date of the book
    writer: string;       // Author of the book
}

// AdminProfile component definition
export function AdminProfile() {
    // State variables
    const [books, setBooks] = useState<Book[]>([]); // Array to store books
    const [newBook, setNewBook] = useState<Partial<Book>>({}); // New book object
    const [ujcim, setUjcim] = useState('');
    const [ujkiadas, setUjkiadas] = useState('');
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
        const data = [ujcim, ujiro, ujkiadas];
        try {
            const response = await fetch(`http://localhost:3000/books/${ujcim}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify(data),
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
        try {
            const response = await fetch(`http://localhost:3000/books/${bookId}`, {
                method: 'DELETE',
            });
            if (!response.ok) {
                throw new Error('Failed to remove book');
            }
            loadAllBooks(); // Refresh book list after removing a book
        } catch (error) {
            console.error(error);
        }
    };

    // Function to update a book
    const updateBook = async () => {
        try {
            const response = await fetch(`http://localhost:3000/books/${ujcim}`, {
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
            <NavBar /> {/* Render the NavBar component */}
            <div className="admin-content">
                <div className="admin-section">
                    <h2 className="admin-heading">Add Book</h2>
                    <div className="admin-inputs">
                        <input
                            type="text"
                            value={ujcim}
                            onChange={e => setUjcim(e.currentTarget.value)}
                            placeholder="Title"
                        />
                        <input
                            type="number"
                            value={ujkiadas}
                            onChange={e => setUjkiadas(e.currentTarget.value)}
                            placeholder="Release Year"
                        />
                        <input
                            type="text"
                            value={ujiro}
                            onChange={e => setUjiro(e.currentTarget.value)}
                            placeholder="Author"
                        />
                        <button onClick={addBook} className="admin-button">Add Book</button>
                    </div>
                </div>
                <div className="admin-section">
                    <h2 className="admin-heading">Books</h2>
                    <ul className="admin-book-list">
                        {/* Render the list of books */}
                        {books.map((book) => (
                            <li key={book.id} className="admin-book-item">
                                <span>{book.bookname} - {book.writer}</span>
                                <button onClick={() => removeBook(book.id)} className="admin-remove-button">Remove</button>
                                <button onClick={() => setSelectedBook(book)} className="admin-update-button">Update</button>
                            </li>
                        ))}
                    </ul>
                </div>
                {/* Render update section if a book is selected */}
                {selectedBook && (
                    <div className="admin-section">
                        <h2 className="admin-heading">Update Book</h2>
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
                                onChange={(e) => setSelectedBook({ ...selectedBook, release: e.target.value })}
                                placeholder="Release Year"
                            />
                            <input
                                type="text"
                                value={selectedBook.writer}
                                onChange={(e) => setSelectedBook({ ...selectedBook, writer: e.target.value })}
                                placeholder="Author"
                            />
                            <button onClick={updateBook} className="admin-button">Update Book</button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default AdminProfile;
