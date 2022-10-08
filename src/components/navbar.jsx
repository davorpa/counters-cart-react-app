import React, { Component } from "react";

class NavBar extends Component {
    render() {
        return (
            <nav className="navbar navbar-light bg-light">
                <span className="navbar-brand mb-0 h1">
                    Navbar
                    {this.props.badge !== undefined && (
                        <span className="badge badge-pill badge-secondary m-2">
                            {this.props.badge}
                        </span>
                    )}
                </span>
            </nav>
        );
    }
}

export default NavBar;
