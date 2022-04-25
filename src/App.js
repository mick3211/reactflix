import { useEffect, useState } from 'react';
import Header from './components/Header';
import Highlight from './components/Highlight';
import Row from './components/Row';
import RowCard from './components/RowCard';
import useApiRequests from './hooks/useApiRequests';

function App() {
    const promisses = useApiRequests();
    const [movies, setMovies] = useState({});

    useEffect(() => {
        Promise.all(promisses)
            .then(data => {
                return { popular: data[0], top_rated: data[1] };
            })
            .then(data => setMovies(data));
    }, []);

    return (
        <div className="select-none" onClick={() => console.log(movies)}>
            <Header />

            <section id="highlight">
                {<Highlight content={movies.popular?.at(0)} />}
            </section>

            <section id="top10">
                <Row title="Top 10 filmes no Brasil hoje">
                    {movies?.popular?.slice(0, 10).map((movie, index) => (
                        <RowCard key={movie.id}>
                            <div className="flex justify-end h-full items-center w-full">
                                <span className="grey-border text-7xl lg:text-[8vw] translate-x-2 -translate-y-2 scale-[2] text-neutral-1000 font-extrabold">
                                    {index + 1}
                                </span>
                                <img
                                    src={
                                        'http://image.tmdb.org/t/p/original' +
                                        movie.poster_path
                                    }
                                    className="w-3/5 z-10 object-contain"
                                />
                            </div>
                        </RowCard>
                    ))}
                </Row>
            </section>

            <section id="toprated" className="mt-10">
                <Row title="Filmes mais bem avaliados">
                    {movies?.top_rated?.map((movie, index) => (
                        <RowCard key={movie.id}>
                            <img
                                src={
                                    'http://image.tmdb.org/t/p/original' +
                                    movie.backdrop_path
                                }
                                className="w-full object-contain"
                            />
                        </RowCard>
                    ))}
                </Row>
            </section>
        </div>
    );
}

export default App;
