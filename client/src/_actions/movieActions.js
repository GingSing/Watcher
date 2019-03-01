import { UPDATE_MOVIES_DATA_FAILURE, UPDATE_MOVIES_DATA_REQUEST, UPDATE_MOVIES_DATA_SUCCESS, CONCAT_MOVIES } from './types';

const updateMovies = () => {
    return dispatch => {
        const link = '';
        dispatch(request());
        fetch(link)
            .then(res => res.json())
            .then(movieData => {
                dispatch(success(movieData));
            })
            .catch(err => {console.log(err); dispatch(failure());});
    }
    function request(){ return { type: UPDATE_MOVIES_DATA_REQUEST }}
    function success(movieData){ return { type: UPDATE_MOVIES_DATA_SUCCESS, movieData }}
    function failure(){ return { type: UPDATE_MOVIES_DATA_FAILURE }}
} 

const concatMovies = (movies) => {
    return dispatch => {
        dispatch({type: CONCAT_MOVIES, movies});
    }
}

export{
    updateMovies,
    concatMovies
}