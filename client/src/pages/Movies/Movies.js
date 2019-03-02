import React, { Component } from 'react';
import { Filter } from '../../components';
import MoviesList from './MoviesList';

import '../css/Movies.css';

class Movies extends Component{
    state={
        movies: []
    }
    componentDidMount(){
        fetch('/api/movies/trending')
            .then(res => res.json())
            .then(data => this.setState({
                movies: data.results
            }))
            .catch(err => console.log(err));
    }
    render(){
        console.log(this.state.movies);
        return(
                <div className="movies">
                    <div className="moviesLeft">
                        <Filter />
                    </div>
                    <div className="moviesRight">
                        <MoviesList movies={this.state.movies} />
                    </div>
                </div>
        );
    }
}

export default Movies;