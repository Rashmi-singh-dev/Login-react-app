import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";

import { Link, useNavigate } from "react-router-dom";
// import { useState, useEffect } from 'react';
// import { Collapse } from "react-bootstrap";


  



const Layout = () => {


    return (
        <>
         <div className="container-fluid af-layout-navbar">
                    <nav className="navbar  navbar-expand-lg af-navbar-text-color">
                        <ul className="ml-auto navbar-nav af-navbar-list-item">
                            {/* <li className="nav-item"><Link to="/Signup" className="nav-link">SignUp</Link></li> */}
                            <li className="nav-item"><Link to="/" className="nav-link">Login</Link></li>
                            <li className="nav-item"><Link to="/Signup" className="nav-link">Login without Validation</Link></li>

                        </ul>
                    </nav>
                </div>
            
        </>
    )
}

export default Layout;