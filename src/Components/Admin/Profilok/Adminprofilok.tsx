import { useEffect, useState, useContext } from "react";
import { ApiContext } from "../../../api"; // API kontextus
import { AdminNav } from "../Nav/AdminNav";
import './Adminprofilok.css'

interface User {
    id: number;
    username: string;
    email: string;
    role: string
}

function AdminProfilok() {
    const api = useContext(ApiContext);
    const [users, setUsers] = useState<User[]>([]);
    const [error, setError] = useState('');
    const [userid, setUserid] = useState(0)

    // Felhasználók betöltése
    async function loadAllUsers() {
        try {
            const response = await fetch('http://localhost:3000/users');
            if (!response.ok) {
                throw new Error('Error loading all users');
            }
            const content = await response.json() as User[];
            setUsers(content);
        } catch (error) {
            setError('Error loading all users');
        }
    }

    // Felhasználó törlése
    const removeUser = async () => {
        const confirmDelete = window.confirm('Biztosan törölni akarod ezt a felhasználót?');
        if (!confirmDelete) return; // Ha a felhasználó nem erősíti meg, akkor kilép a függvényből.

        try {
            const userIdToDelete = typeof userid === 'number' ? userid : parseInt(userid); // Ha nem int, akkor átkonvertálja az id-t
            const response = await fetch(`http://localhost:3000/users/${userIdToDelete}`, {
                method: 'DELETE',
            });
            if (!response.ok) {
                throw new Error('Failed to remove User');
            }
            loadAllUsers(); // Frissítsd a felhasználók listáját
        } catch (error) {
            console.error('Hiba történt a felhasználó törlésekor:', error);
            setError('Hiba történt a felhasználó törlésekor');
        }
    };







    useEffect(() => {
        loadAllUsers(); // Felhasználók betöltése komponens betöltésekor
    }, []);

    return (<>
        <h1>Felhasználók</h1>
        <div className="admin-container">
            <AdminNav user={api.currentUser!} />
            <br />
            {error && <p className="error-message">{error}</p>} {/* Hibák megjelenítése */}
            <ul className="user-list">
                {users.map((user) => (
                    <li key={user.id} className="user-item">
                        <span className="user-info">
                            <strong>{user.username} ({user.role})</strong><br /> <span className="user-email">({user.email})</span>
                        </span>
                        <button className="delete-button" onMouseEnter={() => setUserid(user.id)} onClick={removeUser}>Törlés</button>
                    </li>
                ))}
            </ul>
        </div>
    </>
    );
}

export default AdminProfilok;
