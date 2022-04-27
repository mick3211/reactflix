const BASE_URL = 'https://api.themoviedb.org/3/';
const KEY = 'cbed50781df83a50dfe2599e20da8a87';

const requests = [
    `${BASE_URL}movie/popular?api_key=${KEY}&language=pt-BR&page=1&region=BR`,
    `${BASE_URL}movie/top_rated?api_key=${KEY}&language=pt-BR&page=1&region=BR`,
    `${BASE_URL}discover/movie?api_key=${KEY}&language=pt-BR&sort_by=popularity.desc&include_adult=true&include_video=false&page=1&with_genres=27&with_watch_monetization_types=flatrate`,
];

export default requests;
