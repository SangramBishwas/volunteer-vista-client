import { Link, NavLink } from "react-router-dom";
import useAuth from "./CustomHooks/useAuth";

const Navbar = () => {
    const { user, LogOut } = useAuth();
    const handleLogout = () => {
        LogOut()
            .then()
            .catch(error => console.error(error))
    }

    const links = <>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/need&volunteer">Need Volunteer</NavLink></li>
        <li><NavLink to="/register">Register</NavLink></li>
        {/* <li><NavLink to="/err">404</NavLink></li> */}
    </>
    return (
        <div className="navbar bg-base-300 px-5 lg:pl-20">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {links}
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl">daisyUI</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {links}
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user ?
                        <div className="dropdown dropdown-end">
                            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                <div className="w-10 rounded-full">
                                    <img alt="Tailwind CSS Navbar component" src={user.photoURL} />
                                </div>
                            </div>
                            <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-40 space-y-3 md:w-64 text-center font-semibold">
                                <Link to="/my&post" className="hover:underline hover:font-bold text-base">My Post</Link>
                                <Link to="/add&volunteer" className="hover:underline hover:font-bold text-base">Add Volunteer Post</Link>
                                <li className="font-bold">{user.email}</li>
                                <button onClick={handleLogout} className="btn btn-sm">Logout</button>
                            </ul>
                        </div> :
                        <Link to="/login">
                            <button className="btn">Login</button>
                        </Link>
                }
            </div>


        </div>
    );
};

export default Navbar;