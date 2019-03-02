import React, { Component } from 'react';

import './css/Filter.css';

class Filter extends Component{
    render(){
        // const filters = [

        // ];
        return(
            <div className="filter">
                <input className="filterSearch" placeholder="Search" />
                <div className="filterType">
                    <h3 className="filterHeaders">Type</h3>
                    <ul className="filterTypeList">
                        <li>Movies</li>
                        <li>TV</li>
                    </ul>
                    <h3 className="filterHeaders">Year</h3>
                    <input type="range" min="1" max="100" onChange={(e) => console.log(e.target.value)}/>
                    <h3 className="filterHeaders">Filters</h3>
                    <ul className="filters">
                        
                    </ul>
                </div>
            </div>
        );
    }
}

export default Filter;