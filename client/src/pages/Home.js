import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Home extends Component{
    componentDidMount(){
        fetch('http://localhost:5000/api/movies/trending')
            .then(res => res.json())
            .then(data => console.log(data))
            .catch(err => console.log(err));
    }
    render(){
        return(
            <div className="home">
                <Link to="/movies" >Movies</Link>
            </div>
        );
    }
}

export default Home;