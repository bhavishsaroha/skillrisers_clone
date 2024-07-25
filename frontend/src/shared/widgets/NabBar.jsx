import React from "react";
import {Logo} from "./Logo"
import { Link } from "react-router-dom";


export const NavBar = () => {
    return(
        <div>
        <nav className="navbar">
            <div className="navbar-logo">
                <Logo/>
            </div>
            <div className="navbar-search">
                <input className="search_box" type="text" placeholder="Enter your search here..." />
                <button className="search_button">Search</button>
            </div>
            <div className="navbar-links">
                {/* <a href="#">Courses</a>
                <a href="#">Pricing</a>
                <a href="#">My Courses</a>
                <a href="#">Cart</a>
                <a href="#">Account</a> */}

                
                <Link to="/courses">Courses</Link>
                <Link to="/pricing">Pricing</Link>
                <Link to="/my-courses">My Courses</Link>
                <Link to="/cart">Cart</Link>
                <Link to="/account">Account</Link>
            </div>
        </nav>
        </div>
    );
}