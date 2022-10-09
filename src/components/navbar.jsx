import React from "react";

const NavBar = ({ badge, className }) => {
    let cssClass = "navbar";
    badge !== undefined && (cssClass += " navbar-with-badge");
    className && (cssClass += " " + className);

    return (
        <nav className={cssClass}>
            <span className="navbar-brand mb-0 h1">
                Navbar
                {badge !== undefined && (
                    <span className="badge badge-pill badge-secondary m-1">
                        {badge}
                    </span>
                )}
            </span>
        </nav>
    );
};

export default NavBar;
