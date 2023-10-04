import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { Authcontext } from "./provider/AuthProvider";

const Navbar = () => {
    const { user, logout } = useContext(Authcontext);

    const handlesignout = () => {
        logout()
            .then(() => {
                console.log("User signed out successfully");
            })
            .catch((error) => {
                console.error("Error signing out:", error);
            });
    };
    const Navlinks = (
        <>
            <li>
                <NavLink to="/">Home</NavLink>
            </li>
            <li>
                <NavLink to="/Login">Login</NavLink>
            </li>
            <li>
                <NavLink to="/register">Register</NavLink>
            </li>
        </>
    );

    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16"
                                />
                            </svg>
                        </label>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {Navlinks}
                        </ul>
                    </div>
                    <a className="btn btn-ghost normal-case text-xl">
                        User Registration
                    </a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">{Navlinks}</ul>
                </div>
                <div className="navbar-end">
                    <label
                        tabIndex={0}
                        className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            <img
                                src="/images/stock/photo-1534528741775-53994a69daeb.jpg"
                                alt="User Avatar"
                            />
                        </div>
                    </label>

                    {user ? (
                        <button
                            onClick={handlesignout}
                            className="btn btn-success">
                            Sign Out
                        </button>
                    ) : (
                        <Link to="/Login">
                            <button className="btn btn-success">Login</button>
                        </Link>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Navbar;
