import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default function Navbar(props) {
    return (
        <nav
            className="navbar navbar-expand-lg bg-body-tertiary"
            data-bs-theme={props.mode === "light" ? "light" : "dark"}>
            <div className="container-fluid">
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarTogglerDemo01"
                    aria-controls="navbarTogglerDemo01"
                    aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                    <Link className="navbar-brand" to="/">
                        {props.nav_title}
                    </Link>
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link" aria-current="page" to="/">
                                Home
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/about">
                                {props.about_text}
                            </Link>
                        </li>
                    </ul>
                    <div className={`form-check form-switch m-3 text-${props.mode === "light" ? "dark" : "light"}`}>
                        <input
                            className="form-check-input"
                            type="checkbox"
                            role="switch"
                            id="mode-switch"
                            onClick={props.toggleMode}
                        />
                        <label className="form-check-label" htmlFor="mode-switch">
                            Enable dark mode
                        </label>
                    </div>
                </div>
            </div>
        </nav>
    );
}

Navbar.propTypes = {
    // nav_title: PropTypes.bool,
    nav_title: PropTypes.string.isRequired,
    about_text: PropTypes.string.isRequired,
};

Navbar.defaultProps = {
    nav_title: "defaultTitle",
    about_text: "About Us",
};
