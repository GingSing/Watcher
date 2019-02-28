import React, { Component } from 'react';

class MoviesList extends Component{
    render(){
        return(
            <ul className="moviesList">
                {
                    this.props.movies && this.props.movies.map((movie, key) => {
                        return <li key={key}><MovieCard movie={movie} /></li>
                    })
                }
            </ul>
        );
    }
}

const MovieCard = ({movie}) => {
    return(
        <div className="movieCard">
            {movie.title}
        </div>
    );
}

export default MoviesList;