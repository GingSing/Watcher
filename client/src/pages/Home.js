import React, { Component } from 'react';

class Home extends Component{
    componentDidMount(){
        fetch('http://localhost:5000/movies/trending')
            .then(res => res.json())
            .then(data => console.log(data))
            .catch(err => console.log(err));
    }
    render(){
        return(
            <div className="home">

            </div>
        );
    }
}

export default Home;