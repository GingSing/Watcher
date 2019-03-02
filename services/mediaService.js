const fetch = require('node-fetch');

const getTrending = (req, res) => {

    const { time_window = 'day' } = req.query;

    fetch(`https://api.themoviedb.org/3/trending/all/${time_window + '?api_key=' + process.env.TMDB_API_KEY}`)
        .then(res => res.json())
        .then(data => res.json(data))
        .catch(err => console.log(err));
}

module.exports = {
    getTrending
}