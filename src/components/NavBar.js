import React from 'react';
import {NavLink} from "react-router-dom";

function NavBar() {
    
    return (
        <>
            <div className="row">
                <div className="col-12">
                    <nav className="navbar navbar-dark bg-primary mb-3 justify-content-center">
                            <NavLink className="navbar-brand" exact to="/">Home</NavLink>
                    </nav>
                </div>
            </div>
        </>
    );
};

export default NavBar;