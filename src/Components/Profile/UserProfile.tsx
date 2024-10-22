import { User } from "./User";
import bg from "../../../public/img/user.png";
import { ProfileNav } from "./Nav/ProfileNav";
import { useContext } from "react";
import { ApiContext } from "../../api";

/**
 * The properties for UserProfile component.
 * The user object containing user information.
 */
interface Props {
  user: User;
}

/**
 * Component for rendering the user profile after successful login.
 * Displays the user's email and a welcome message along with an image.
 * Also includes a navigation bar for profile actions.
 */

export function UserProfile({ user }: Props) {
  // Access the ApiContext to check the current user
  const api = useContext(ApiContext);

  // If no current user, return null
  if (!api.currentUser) return null;

  return (
    <>
      {/* Render a heading for successful login */}
      <h1>Sikeres bejelentkezés</h1>
      {/* Render a welcome message with user's email */}
      <h2 style={{ textAlign: 'center' }}>Üdvözöljük</h2>
      <h2 style={{textAlign: 'center'}}>{user.email}</h2>
      <br />
      {/* Render an image */}
      <img src={bg} style={{ width: 200, height: 200, marginLeft: 170 }} /> 
      {/* Render the profile navigation bar */}
      <ProfileNav user={api.currentUser!} />
    </>
  );
}



