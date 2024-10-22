import { FormEvent, useContext, useState } from "react";
import { ApiContext } from "../../api";
import { NavBar } from "../NavBar/Nav";
import 'bootstrap/dist/css/bootstrap.css';
import '../Login/Login.css';

/**
 * Component for handling admin login functionality.
 */
export function AdminLogin() {
    // State variables for admin username, password, and login error message
    const [adminname, setAdminname] = useState('');
    const [pass, setPass] = useState('');
    const [loginError, setLoginError] = useState('');

    // Accesses the API context using the useContext hook
    const api = useContext(ApiContext);

    // Handles admin login form submission
    async function login(e: FormEvent) {
        e.preventDefault();

        // Calls the API login method with admin credentials
        api.login(adminname, pass).then(() => {
            // Resets state variables and login error message on successful login
            setLoginError('');
            setAdminname('');
            setPass('');
        }).catch((e: Error) => {
            // Sets the login error message on failed login attempt
            setLoginError(e.message);
        })
    }

    return  (
        <>
            {/* Renders the navigation bar */}
            <NavBar />
            {/* Imports Google Fonts for styling */}
            <link href="https://fonts.googleapis.com/css2?family=Jost:wght@500&display=swap" rel="stylesheet" />
            {/* Main login form */}
            <div className="main" style={{ marginTop: 113 }}>
                <input type="checkbox" id="chk" aria-hidden="true" />
                <div className="login">
                    <form onSubmit={login}>
                        <label htmlFor="chk" aria-hidden="true">Admin</label>
                        {/* Input fields for admin username and password */}
                        <input id="input" type="text" name="txt" placeholder="Username" />
                        <input id="input" type="password" name="pswd" placeholder="Password" />
                        {/* Submit button for admin login */}
                        <input id="button" type="submit" value='Login' />
                    </form>
                </div>
            </div>
            {/* Displays login error message */}
            <p>{loginError}</p>
        </>
    );
}
