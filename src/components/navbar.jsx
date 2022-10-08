import React from "react";

const NavBar = ({ badge }) => {
    return (
        <nav className="navbar navbar-light bg-light">
            <span className="navbar-brand mb-0 h1">
                Navbar
                {badge !== undefined && (
                    <span className="badge badge-pill badge-secondary m-2">
                        {badge}
                    </span>
                )}
            </span>
        </nav>
    );
};

export default NavBar;
