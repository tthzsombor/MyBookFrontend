import { FormEvent, useContext, useState } from "react";
import { ApiContext } from "../../api";
import { NavBar } from "../NavBar/Nav";
import 'bootstrap/dist/css/bootstrap.css';
import '../Login/Login.css';

export function AdminLogin() {
    const [adminname, setAdminname] = useState('');
    const [adminpass, setAdminPass] = useState('');
    const [loginError, setLoginError] = useState('');
    const api = useContext(ApiContext);

    async function Alogin(e: FormEvent) {
        e.preventDefault();
    
        // Calls the login API method with email and password
        api.adminLogin(adminname, adminpass).then(() => {
          // Resets login form fields and error message upon successful login
          setLoginError('');
          setAdminname('');
          setAdminPass('');
        }).catch((e: Error) => {
          // Sets the login error message if login fails
          setLoginError(e.message);
          window.alert(loginError)
        })
      }



    return (
        <>
            <NavBar />
            <link href="https://fonts.googleapis.com/css2?family=Jost:wght@500&display=swap" rel="stylesheet" />
            <div className="logindiv">
                <div className="login">
                    <form onSubmit={Alogin}>
                        <label htmlFor="chk">Admin</label>
                        <input id="input" type="text" placeholder="Email" value={adminname} onChange={e => setAdminname(e.currentTarget.value)} />
                        <input id="input" type="password" placeholder="Password" value={adminpass} onChange={e => setAdminPass(e.currentTarget.value)} />
                        <input id="button" type="submit" value='Login' />
                    </form>
                </div>
            </div>
        </>
    );
}
