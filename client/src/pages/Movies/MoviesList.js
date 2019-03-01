import React, { Component } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { formatDate } from '../../tools';

import '../css/MoviesList.css';

class MoviesList extends Component{
    render(){
        return(
            <ul className="moviesList">
                {
                    this.props.movies && this.props.movies.map((movie, key) => {
                        return <li key={key}><MoviesCard movie={movie} /></li>
                    })
                }
            </ul>
        );
    }
}

const MoviesCard = ({movie}) => {
    console.log(movie);
    return(
        <div className="moviesCard">
            <LazyLoadImage className="moviesPoster" effect="blur" src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt=""/>
            <div className="moviesMetaData">
                <h4 className="moviesTitle">{movie.title}</h4>
                <span className="dateReleased">{formatDate(movie.release_date)}</span>
                <div className="moviesOverview">
                    {movie.overview}
                </div>
            </div>
        </div>
    );
}

export default MoviesList;