import { useContext } from "react";
import { ApiContext } from "../../api";

/**
 * Component for rendering a logout button in the profile page.
 * When clicked, it triggers the logout function provided by the ApiContext.
 */
export function ProfileLogout() {
    // Access the logout function from the ApiContext
    const api = useContext(ApiContext);

    return (
        <>
            {/* Render a button for logging out */}
            <button onClick={api.logout}>Log out</button>
        </>
    );
}
