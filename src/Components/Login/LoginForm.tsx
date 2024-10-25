import { FormEvent, useContext, useState } from "react";
import { ApiContext } from "../../api";
import { NavBar } from "../NavBar/Nav";
import 'bootstrap/dist/css/bootstrap.css';
import './Login.css';

/**
 * Component for handling user login and registration.
 * Manages state for login and registration form fields, as well as error messages.
 */
export function LoginForm() {
  // State variables for login form
  const [email, setEmail] = useState(''); // Stores the email entered in the login form
  const [pass, setPass] = useState(''); // Stores the password entered in the login form
  const [loginError, setLoginError] = useState('Minden mező kitöltése kötelező'); // Stores any error message occurred during the login process

  // State variables for registration form
  const [remail, setREmail] = useState(''); // Stores the email entered in the registration form
  const [rpass, setRPass] = useState(''); // Stores the password entered in the registration form
  const [rusername, setRUsername] = useState(''); // Stores the username entered in the registration form
  const [registerError, setRegisterError] = useState('Minden mező kitöltése kötelező'); // Stores any error message occurred during the registration

  // Accessing the API context for login and registration functionality
  const api = useContext(ApiContext);

  // Handles the login form submission
  async function login(e: FormEvent) {
    e.preventDefault();

    // Calls the login API method with email and password
    api.login(email, pass).then(() => {
      // Resets login form fields and error message upon successful login
      setLoginError('');
      setEmail('');
      setPass('');
    }).catch((e: Error) => {
      // Sets the login error message if login fails
      setLoginError(e.message);
    })
  }

  // Handles the registration form submission
  async function register(e: FormEvent) {
    e.preventDefault();

    // Calls the register API method with email, username, and password
    api.register(remail, rusername, rpass).then(() => {
      // Resets registration form fields and error message upon successful registration
      setRegisterError('');
      setRUsername('');
      setREmail('');
      setRPass('');
      window.alert("Sikeres regisztráció!"); // Displays a success alert upon successful registration
      window.location.reload()
    }).catch((e: Error) => {
      // Sets the registration error message if registration fails
      setRegisterError(e.message);
      window.alert(registerError)
    })
  }

  // Displays a login error alert if loginError is truthy
  function AlertL() {
    if (loginError) {
      window.alert(loginError);
    }
  }
  
    
  // Component JSX rendering
  return <>
    <div>
      <NavBar />
      <link href="https://fonts.googleapis.com/css2?family=Jost:wght@500&display=swap" rel="stylesheet" />
      <div className="logindiv">
        {/* Login form */}
        <div className="login">
          <form onSubmit={login}>
            <label htmlFor="chk">Login</label>
            <input id="input" type="text" placeholder="Email" value={email} onChange={e => setEmail(e.currentTarget.value)} />
            <input id="input" type="password" placeholder="Password" value={pass} onChange={e => setPass(e.currentTarget.value)} />
            <input id="button" type="submit" value='Login' onClick={AlertL} />
          </form>
        </div>

        {/* Checkbox to toggle registration form */}
        <input type="checkbox" id="chk" aria-hidden="true" />

        {/* Registration form */}
        <div className="signup">
          <form onSubmit={register}>
            <label htmlFor="chk" aria-hidden="true">Sign Up</label>
            <input id="input" type="text" placeholder="Email" value={remail} onChange={e => setREmail(e.currentTarget.value)} />
            <input id="input" type="text" placeholder="Username" value={rusername} onChange={e => setRUsername(e.currentTarget.value)} />
            <input id="input" type="password" placeholder="Password" value={rpass} onChange={e => setRPass(e.currentTarget.value)} />
            <input id="button" type="submit" value='Sign Up' />
          </form>
        </div>
      </div>
    </div>
  </>
}
