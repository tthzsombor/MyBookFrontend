import { Link } from "react-router-dom";
import './Nav.css'

/**
 * Component for rendering the navigation bar.
 * Contains links to different pages of the application.
 */
export function NavBar() {
  return (
    <>
      <header>
        <link
          href="https://fonts.googleapis.com/css2?family=Jost:wght@500&display=swap"
          rel="stylesheet" />
        <nav className="header"> {/* Container for the navigation bar */}
          <div className="logo"> {/* Container for the logo */}
            <h1>MyBook</h1> {/* Title of the application */}
          </div>
          <div>
            <ul>
              <li>
                <Link className="link" to='/'>Kezdőlap</Link> {/* Link to Kezdőlap pages of the application. */}
              </li>
              <li>
                <Link className="link" to='/login'>Login</Link> {/* Link to Login pages of the application. */}
              </li>
              <li>
                <Link className="link" to='/admin'>Admin</Link> {/* Link to Admin pages of the application. */}
              </li>
            </ul>
          </div>
        </nav>
      </header>
    </>
  );
};
