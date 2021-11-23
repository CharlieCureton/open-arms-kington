import React from "react";
import { NavLink } from "react-router-dom";

function Navigation() {
    return (
        <div className="navigation-wrapper">
            <div className="navigation">
                <nav className="navbar navbar-expand navbar-dark bg-dark scroll-top">
                    <div className="container">
                        <NavLink className="navbar-brand" to="/">
                            <h1 className="nav-header">Open Arms <span>Kington</span></h1>
                        </NavLink>
                        <h2>Herefordshire</h2>
                        <div>
                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item noselect">
                                    <NavLink className="nav-link" to="/">
                                        Home
                                        <span className="sr-only">(current)</span>
                                    </NavLink>
                                </li>
                                <li className="nav-item noselect">
                                    <NavLink className="nav-link" to="/news">
                                        News
                                    </NavLink>
                                </li>
                                <li className="nav-item noselect">
                                    <NavLink className="nav-link" to="/contact">
                                        Contact
                                    </NavLink>
                                </li>
                                <li className="nav-item noselect">
                                    <NavLink className="nav-link" to="/about">
                                    About
                                    </NavLink>
                                    <div className="dropdown closed nav-dropdown">
                                        <div className="caretUp"></div>
                                        <ul className="hidden sublist nav-sublist">
                                            <li className="nav-item noselect nav-sublist-el">
                                                <NavLink className="nav-link" to="/about/our-story">
                                                    Our Story
                                                </NavLink>
                                            </li>
                                            <li className="nav-item noselect nav-sublist-el">
                                                <NavLink className="nav-link" to="/about/who-we-are">
                                                    Who We Are
                                                </NavLink>
                                            </li>
                                            <li className="nav-item noselect nav-sublist-el">
                                                <NavLink className="nav-link" to="/about/funding">
                                                    Funding
                                                </NavLink>
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    )
}
export default Navigation;