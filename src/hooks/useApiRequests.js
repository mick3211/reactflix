const BASE_URL = 'https://api.themoviedb.org/3/';
const KEY = 'cbed50781df83a50dfe2599e20da8a87';

export default function useApiRequests() {
    const popular = async () =>
        await fetch(
            `${BASE_URL}movie/popular?api_key=${KEY}&language=pt-BR&page=1&region=BR`
        )
            .then(response => response.json())
            .then(data => data.results);

    const top_rated = async () =>
        await fetch(
            `${BASE_URL}movie/top_rated?api_key=${KEY}&language=pt-BR&page=1&region=BR`
        )
            .then(response => response.json())
            .then(data => data.results);

    return [popular(), top_rated()];
}
