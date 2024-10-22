import './ProfileNav.css'
import '../User'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { ApiContext } from '../../../api'
import { User } from '../User'


//The user object containing information about the current user
interface Props {
    user: User;
}


//Opens the navigation sidebar
function openNav() {
    document.getElementById("mySidenav")!.style.width = "270px";
    document.getElementById("main")!.style.marginLeft = "270px";
    document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
}


//Closes the navigation sidebar
function closeNav() {
    document.getElementById("mySidenav")!.style.width = "0";
    document.getElementById("main")!.style.marginLeft = "0";
    document.body.style.backgroundColor = "white";
}


/**
 * This component represents the navigation sidebar within the user's profile. It provides links to different pages and allows users to toggle the sidebar to access navigation options
 */
export function ProfileNav({ user }: Props) {
    const api = useContext(ApiContext)

    return <>

        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
        <div id="mySidenav" className="sidenav"> {/* Sidebar container */}
            <h3 className='user'>{user.username}</h3> {/* Displaying the username of the current user */}
            <a href="javascript:void(0)" className="closebtn" onClick={closeNav}>×</a> {/*  Close button to close the sidebar */}
            <Link className="fa fa-fw fa-home" to={'/fooldal'}>Főoldal</Link> {/* Navigation links to Főoldal pages of the application */}
            <Link className="nav-link fa fa-fw fa-user" to={'/profil'}>Profil</Link> {/* Navigation links to Profil pages of the application */}
            <Link className="nav-link fa fa-fw fa-search" to={'/kereses'}>Keresés</Link>
            {/* Navigation links to Keresés pages of the application */}
            <Link className='nav-link fa fa-fw fa-sign-out' to={'/login'} onClick={api.logout}>Kijelentkezés</Link> {/* Log out of the user's prifile */}
        </div>
        <div id="main"> {/* Main container with a toggle button (☰) to open the sidebar */}
            <span style={{ fontSize: 30, cursor: "pointer" }} onClick={openNav} onDoubleClickCapture={closeNav}>☰</span>
        </div>
    </>


}

