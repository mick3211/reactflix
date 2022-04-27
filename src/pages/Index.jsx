import { useState, useEffect } from 'react';
import Highlight from '.././components/Highlight';
import Row from '.././components/Row';
import RowCard from '.././components/RowCard';
import requests from '.././data/requests';
import { RiLoader3Fill } from 'react-icons/ri';

export default function Index() {
    const [topRated, setTopRated] = useState([]);
    const [popular, setPopular] = useState([]);
    const [horrorMovies, setHorrorMovies] = useState([]);
    const [comedyMovies, setComedyMovies] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        Promise.all(
            requests.map(request => fetch(request).then(resp => resp.json()))
        ).then(([popular, topRated, horrorMovies, comedyMovies]) => {
            setTopRated(topRated.results);
            setPopular(popular.results);
            setHorrorMovies(horrorMovies.results);
            setComedyMovies(comedyMovies.results);
            setIsLoading(false);
        });
    }, []);

    return isLoading ? (
        <RiLoader3Fill
            size={'8em'}
            className="text-red-700 animate-spin fixed top-1/2 left-0 right-0 mx-auto"
        />
    ) : (
        <>
            <section id="highlight">
                <Highlight
                    content={popular?.at(
                        Math.floor(Math.random() * popular.length)
                    )}
                />
            </section>

            <section id="top10">
                <Row title="Top 10 filmes no Brasil hoje">
                    {popular?.slice(0, 10).map((movie, index) => (
                        <RowCard key={movie.id} content={movie}>
                            <div className="flex justify-end h-full items-center w-full">
                                <span className="grey-border text-7xl lg:text-[8vw] translate-x-2 -translate-y-2 scale-[2] text-neutral-1000 font-extrabold">
                                    {index + 1}
                                </span>
                                <img
                                    src={
                                        'http://image.tmdb.org/t/p/w300' +
                                        movie.poster_path
                                    }
                                    className="w-3/5 z-10 object-contain rounded-md"
                                    loading="lazy"
                                    alt={movie.title}
                                    title={movie.title}
                                />
                            </div>
                        </RowCard>
                    ))}
                </Row>
            </section>

            <section id="toprated" className="mt-10">
                <Row title="Filmes mais bem avaliados">
                    {topRated?.map(movie => (
                        <RowCard key={movie.id} content={movie}>
                            <img
                                src={
                                    'http://image.tmdb.org/t/p/w300' +
                                    movie.poster_path
                                }
                                className="w-full object-contain rounded-md"
                                loading="lazy"
                                alt={movie.title}
                                title={movie.title}
                            />
                        </RowCard>
                    ))}
                </Row>
            </section>

            <section id="horror" className="mt-10">
                <Row title="Filmes de terror">
                    {horrorMovies?.map(movie => (
                        <RowCard key={movie.id} content={movie}>
                            <img
                                src={
                                    'http://image.tmdb.org/t/p/w300' +
                                    movie.poster_path
                                }
                                className="w-full object-contain rounded-md"
                                loading="lazy"
                                alt={movie.title}
                                title={movie.title}
                            />
                        </RowCard>
                    ))}
                </Row>
            </section>

            <section id="comedy" className="mt-10">
                <Row title="Filmes de comédia">
                    {comedyMovies?.map(movie => (
                        <RowCard key={movie.id} content={movie}>
                            <img
                                src={
                                    'http://image.tmdb.org/t/p/w300' +
                                    movie.poster_path
                                }
                                className="w-full object-contain rounded-md"
                                loading="lazy"
                                alt={movie.title}
                                title={movie.title}
                            />
                        </RowCard>
                    ))}
                </Row>
            </section>
        </>
    );
}
