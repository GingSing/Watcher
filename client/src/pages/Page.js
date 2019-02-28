import React, { Component } from 'react';
import { NavBar } from '../components';

import './css/Page.css';

class Page extends Component{
    render(){
        return(
            <div className="page">
                <NavBar />
                <div className="pageContent">
                { this.props.children }
                </div>
            </div>
        );
    }
}

export default Page;