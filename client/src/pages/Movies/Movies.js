import React, { Component } from 'react';
import { Filter } from '../../components';
import MoviesList from './MoviesList';
import Page from '../Page';

import '../css/Movies.css';

class Movies extends Component{
    state={
        movies: []
    }
    componentDidMount(){
        fetch('/api/movies')
            .then(res => res.json())
            .then(data => this.setState({
                movies: data.results
            }))
            .catch(err => console.log(err));
    }
    render(){
        console.log(this.state.movies);
        return(
            <Page>
                <div className="movies">
                    <div className="moviesLeft">
                        <Filter />
                    </div>
                    <div className="moviesRight">
                        <MoviesList movies={this.state.movies} />
                    </div>
                </div>
            </Page>
        );
    }
}

export default Movies;