import React, { Component } from 'react';

import './css/Filter.css';

class Filter extends Component{
    render(){
        return(
            <div className="filter">
                <input className="filterSearch" placeholder="Search" />
                <div className="filterType">
                    <h3>Type</h3>
                    <ul className="filterTypeList">
                        <li>Movies</li>
                        <li>TV</li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default Filter;