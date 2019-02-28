const fetch = require('node-fetch');

const discoverMovies = (req, res) => {

    const {
        language='en-US', 
        sort_by='popularity_desc', 
        certification_country, 
        include_adult=false, 
        include_video=false, 
        page=1, 
        primary_release_year,
        primary_release_date_gte,
        primary_release_date_lte,
        release_date_gte,
        release_date_lte,
        vote_count_gte,
        vote_count_lte,
        vote_average_gte,
        vote_average_lte,
        with_cast,
        with_crew,
        with_companies,
        with_genres,
        with_keywords,
        with_people,
        year,
        without_genres,
        with_runtime_gte,
        with_runtime_lte,
        with_release_type,
        with_original_language,
        without_keywords
    } = req.query;

    const link = `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.TMDB_API_KEY +
    ( language && '&language=' + language ) +
    ( sort_by && '&sort_by=' + sort_by ) +
    ( certification_country !== undefined ? '&certification_country=' + certification_country : '' ) +
    ( include_adult !== undefined ? '&include_adult=' + include_adult : '' ) +
    ( include_video !== undefined ? '&include_video=' + include_video : '' ) +
    ( page && '&page=' + page ) +
    ( primary_release_year !== undefined ? '&primary_release_year=' + primary_release_year : '') +
    ( primary_release_date_gte !== undefined ? '&primary_release_date.gte=' + primary_release_date_gte : '') +
    ( primary_release_date_lte !== undefined ? '&primary_release_date.lte=' + primary_release_date_lte : '' ) +
    ( release_date_gte !== undefined ? '&release_date.gte=' + release_date_gte : '' ) +
    ( release_date_lte !== undefined ? '&release_date.lte=' + release_date_lte : '' ) +
    ( vote_count_gte !== undefined ? '&vote_count.gte=' + vote_count_gte : '' ) +
    ( vote_count_lte !== undefined ? '&vote_count.lte=' + vote_count_lte : '' ) +
    ( vote_average_gte !== undefined ? '&vote_average.gte=' + vote_average_gte : '' ) +
    ( vote_average_lte !== undefined ? '&vote_average.lte=' + vote_average_lte : '' ) +
    ( with_cast !== undefined ? '&with_cast=' + with_cast.join() : '' ) +
    ( with_crew !== undefined ? '&with_crew=' + with_crew.join() : '' ) +
    ( with_companies !== undefined ? '&with_companies=' + with_companies.join() : '' ) +
    ( with_genres !== undefined ? '&with_genres=' + with_genres.join() : '' ) +
    ( with_keywords !== undefined ? '&with_keywords=' + with_keywords.join() : '' ) +
    ( with_people !== undefined ? '&with_people=' + with_people.join() : '' ) +
    ( year !== undefined ? '&year=' + year : '' ) +
    ( without_genres !== undefined ? '&without_genres=' + without_genres.join() : '' ) +
    ( with_runtime_gte !== undefined ? '&with_runtime.gte=' + with_runtime_gte : '' ) +
    ( with_runtime_lte !== undefined ? '&with_runtime_lte=' + with_runtime_lte : '' ) +
    ( with_release_type !== undefined ? '&with_release_type=' + with_release_type : '' ) +
    ( with_original_language !== undefined ? '&with_original_language=' + with_original_language.join() : '' ) +
    ( without_keywords !== undefined ? '&without_keywords=' + without_keywords.join() : '' )
    }`;
    console.log(link);
    fetch(link)
        .then(res => res.json())
        .then(data => res.json(data))
        .catch(err => console.log(err));
}

module.exports = {
    discoverMovies
}