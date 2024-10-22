import { MouseEvent, useContext, useEffect, useState } from "react";
import { ProfileNav } from "../Nav/ProfileNav";
import { ApiContext } from "../../../api";
import './ProfileKeres.css';
import 'bootstrap/dist/css/bootstrap.css';

/**
 * Defines the structure of a book object.
 */
interface Book {
    id: number;
    bookname: String;
    genre: string;
    release: String;
    writer: String;
}

/**
 * Component responsible for handling book search functionality and displaying the search results on the profile page.
 */
export function ProfileKereses() {
    // Accesses the ApiContext to get the current user
    const api = useContext(ApiContext)

    // State variables to store books, sorted books, error message, selected filters, status, book id, and token
    const [book, setBook] = useState([] as Book[]);
    const [sorted, setSorted] = useState([] as Book[]);
    const [errorMessage, setErrorMessage] = useState('');
    const [valasztottmufaj, setValasztottmufaj] = useState('');
    const [valasztottszerzo, setValasztottszerzo] = useState('');
    const [valasztottcim, setValasztottcim] = useState('');
    const [statusz, setStatusz] = useState('');
    const [bookid, setBookid] = useState(0);
    const [token, setToken] = useState('');

    // Fetches the list of books from the server when the component mounts
    useEffect(() => {
        async function load() {
            try {
                const response = await fetch('http://localhost:3000/books/SearchName');
                if (!response.ok) {
                    setErrorMessage('Hiba a letöltéskor');
                    return;
                }
                const content = await response.json() as Book[];
                setBook(content);
                setSorted(content);
            } catch {
                setErrorMessage('Hiba a letöltéskor');
            }
        }
        load();
    }, []);

    // Retrieves the authentication token from local storage when the component mounts
    useEffect(() => {
        const storedToken = localStorage.getItem('token');
        if (storedToken) {
            setToken(storedToken);
        }
    }, []);

    // Sends a status update request to the server for a specific book
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

    // Handles the book search functionality based on user input
    function Keres(e: MouseEvent) {
        e.preventDefault();
        const sorted = book
            .filter(book => book.writer.includes(valasztottszerzo))
            .filter(book => book.bookname.includes(valasztottcim));
        setSorted(sorted);
    }

    // Returns JSX elements for the profile page
    return <>
        <html>
            <body>
                {/* Displays the profile navigation component */}
                <ProfileNav user={api.currentUser} />
                {/* Imports font awesome stylesheet */}
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
                {/* Contains search filters and input */}
                <div className="topnav">
                    {/* Dropdown to select author */}
                    <select
                        className="szerzo"
                        id="szerzo"
                        value={valasztottszerzo}
                        onChange={e => setValasztottszerzo(e.target.value)}>
                        <option value="" disabled selected hidden>Szerző</option>
                        <option value="Stephen King">Stephen King</option>
                        <option value="Dosztojevszkij">Dosztojevszkij</option>
                        <option value="Sigmund Freud">Sigmund Freud</option>
                        <option value="Albert Camus">Albert Camus</option>
                    </select>
                    {/* Search input */}
                    <div className="search-container">
                        <form>
                            <input id="keresomezo" type="text" value={valasztottcim} onChange={e => setValasztottcim(e.target.value)} placeholder="Search.." name="search" />
                            <button onClick={Keres}><i className="fa fa fa-search"></i></button>
                        </form>
                    </div>
                </div>

                {/* Displays the searched books */}
                <div id="talalat" className="container-fluid">
                    <div className="row kartya justify-content-center">
                        {/* Maps over the sorted books and displays each book with details and status dropdown */}
                        {sorted.map(book => (
                            <div className="col-12 col-sm-6 col-md-4 book text-center" key={book.id}>
                                <h5><b>{book.bookname}</b></h5>
                                <h6><i>{book.release}</i></h6>
                                <br />
                                <p>{book.writer}</p>
                                <br />
                                <select
                                    className="statusz"
                                    id="statusz"
                                    value={statusz}
                                    onMouseOver={() => setBookid(book.id)}
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
                        ))}
                    </div>
                </div>

            </body>
        </html>
    </>
}
