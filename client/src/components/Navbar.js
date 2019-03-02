import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './css/Navbar.css';

class NavBar extends Component{
    render(){
        return(
            <div className="navBar">
                <div className="logo">
                    <Link to="/"><h2>W</h2></Link>
                </div>
                <div className="links">
                    <div>Browse</div>
                    <div>Login</div>
                    <div>SignUp</div>
                </div>
            </div>
        );
    }
}

export default NavBar;