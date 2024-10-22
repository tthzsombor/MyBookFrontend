import { useContext } from "react";
import { ApiContext } from "../../api";

// Define the props interface for the LoggedIn and Guest components
interface Props {
    children: React.ReactNode; // Children elements to be conditionally rendered
}

// Component for rendering content intended for logged-in users
export function LoggedIn({ children } : Props ) {
    const api = useContext(ApiContext); // Access the API context to get user authentication status

    // If the user is logged in (api.currentUser exists), render the children
    // Otherwise, return null to hide the content intended for logged-in users
    if (api.currentUser) {
        return children;
    } else {
        return null;
    }
}

// Component for rendering content intended for guest users (not logged in)
export function Guest({ children } : Props ) {
    const api = useContext(ApiContext); // Access the API context to get user authentication status

    // If the user is not logged in (api.currentUser does not exist), render the children
    // Otherwise, return null to hide the content intended for guest users
    if (api.currentUser) {
        return null;
    } else {
        return children;
    }
}
