import React, { Component } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Link } from 'react-router-dom';

import './css/Home.css';

class Home extends Component{
    state={
        media: []
    }
    componentDidMount(){
        fetch('/api/media/trending')
            .then(res => res.json())
            .then(data => {
                this.setState({
                    media: data.results
                });
            })
            .catch(err => console.log(err));
    }
    render(){
        return(
            <div className="home">
                <div className="homeHeader">
                    <h3>Watcher</h3>
                    <ul className="homeHeaderList">
                        <li>
                            <Link to="/movies">Browse</Link>
                        </li>
                        <li>
                            <Link to="/login">Login</Link>
                        </li>
                        <li>
                            <Link to="/signUp">Sign Up</Link>
                        </li>
                    </ul>
                </div>
                <div className="homeCarousel">
                    <ul className="homeCarouselList">
                    {
                        this.state.media && this.state.media.map((media, key) => {
                            return(
                                <li key={key}>
                                    <LazyLoadImage className="moviesPoster" effect="blur" src={`https://image.tmdb.org/t/p/w500/${media.poster_path}`} alt=""/>
                                </li>    
                            )
                        })
                    }
                    </ul>
                </div>
            </div>
        );
    }
}

export default Home;