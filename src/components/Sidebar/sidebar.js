import React from "react";
import "./sidebar.css";
import { Link } from "react-router-dom";

function Sidebar() {
    return(
        <div className="sidebar">
            <div className="sidebar-container">
                <div className="sidebar-options">
                    <div className="sidebar-option"><Link to="/" className="link">Dashboard</Link></div>
                    <div className="sidebar-option"><Link to="/user" className="link">Users</Link></div>
                    <div className="sidebar-option"><Link to="/profile" className="link">Profile</Link></div>
                </div>
            </div>
        </div>
    );
}

export default Sidebar;