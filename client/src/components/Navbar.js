import React, { Component } from 'react';

import './css/Navbar.css';

class NavBar extends Component{
    render(){
        return(
            <div className="navBar">
                <div className="logo">
                    Watcher
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