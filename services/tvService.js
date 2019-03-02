const fetch = require('node-fetch');

const discoverTV = (req, res) => {
    const {
        language='en-US', 
        sort_by='popularity_desc',
        page=1,
        air_date_gte,
        air_date_lte,
        first_air_date_gte,
        first_air_date_lte,
        first_air_date_year,
        timezone,
        with_networks,
        include_null_first_air_dates,
        screened_theatrically,
        vote_count_gte,
        vote_average_gte,
        with_companies,
        with_genres,
        without_genres,
        with_runtime_gte,
        with_runtime_lte,
        with_original_language,
        without_keywords
    } = req.query;

    const link = `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.TMDB_API_KEY +
    ( language && '&language=' + language ) +
    ( sort_by && '&sort_by=' + sort_by ) +
    ( page && '&page=' + page ) +
    ( vote_count_gte !== undefined ? '&vote_count.gte=' + vote_count_gte : '' ) +
    ( vote_average_gte !== undefined ? '&vote_average.gte=' + vote_average_gte : '' ) +
    ( with_companies !== undefined ? '&with_companies=' + with_companies.join() : '' ) +
    ( with_genres !== undefined ? '&with_genres=' + with_genres.join() : '' ) +
    ( without_genres !== undefined ? '&without_genres=' + without_genres.join() : '' ) +
    ( with_runtime_gte !== undefined ? '&with_runtime.gte=' + with_runtime_gte : '' ) +
    ( with_runtime_lte !== undefined ? '&with_runtime_lte=' + with_runtime_lte : '' ) +
    ( with_original_language !== undefined ? '&with_original_language=' + with_original_language.join() : '' ) +
    ( without_keywords !== undefined ? '&without_keywords=' + without_keywords.join() : '' )
    }`;

    fetch(link)
        .then(res=>res.json())
        .then(data=>res.json(data))
        .catch(err=>console.log(err));
}

module.exports={
    discoverTV
}