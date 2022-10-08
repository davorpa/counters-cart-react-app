import React from "react";

const NavBar = (props) => {
    return (
        <nav className="navbar navbar-light bg-light">
            <span className="navbar-brand mb-0 h1">
                Navbar
                {props.badge !== undefined && (
                    <span className="badge badge-pill badge-secondary m-2">
                        {props.badge}
                    </span>
                )}
            </span>
        </nav>
    );
};

export default NavBar;
