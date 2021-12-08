import React from "react";
import { Link } from "react-router-dom";

function Footer() {
    return (
        <div className="footer my-5">
            <footer className="py-5 bg-dark">
                <div className="container">
                    <div class="link-wrapper text-center">
                            <Link to="/">
                            Home
                            </Link>
                            <Link to="/news">
                            News
                            </Link>
                            <Link to="/contact">
                            Contact
                            </Link>
                            <Link to="/about/our-story">
                            Our Story
                            </Link>
                            <Link to="/about/who-we-are">
                            Who We Are
                            </Link>
                            <Link to="/about/funding">
                            Funding
                            </Link>
                    </div>
                    <p className="m-0 text-center">
                        Copyright &copy; Open Arms Kington 2021
                    </p>
                </div>
            </footer>
        </div>
    )
}

export default Footer;