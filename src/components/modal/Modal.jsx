import { useContext, useEffect, useState } from 'react';
import { FaPlay, FaPlus } from 'react-icons/fa';
import { AiOutlineClose, AiOutlineLike } from 'react-icons/ai';
import Button from '../inputs/Button';
import { modalContext } from './ModalContext';
import { formatDate } from '../../data/services/dateService';

export default function Modal() {
    const { isVisible, content, closeModal, showModal } =
        useContext(modalContext);
    const [recomendations, setRecomendations] = useState([]);

    useEffect(() => {
        if (content)
            fetch(
                `https://api.themoviedb.org/3/movie/${content?.id}/recommendations?api_key=cbed50781df83a50dfe2599e20da8a87&language=pt-BR&page=1`
            )
                .then(resp => resp.json())
                .then(data => setRecomendations(data.results));
    }, [content]);

    return !isVisible ? (
        <></>
    ) : (
        <div className="backdrop p-4 overflow-y-auto no-scrollbar">
            <div className="bg-neutral-900 text-neutral-200 max-w-5xl rounded-lg overflow-hidden fixed top-10 left-0 right-0 mx-auto animate-expand">
                <div className="relative">
                    <button
                        type="button"
                        className="absolute right-4 top-4 p-2 z-40 bg-neutral-900 rounded-full"
                        onClick={closeModal}
                    >
                        <AiOutlineClose />
                    </button>
                    <div className="absolute z-20 top-0 left-0 w-full h-full bg-gradient-to-t from-neutral-900 to-transparent" />
                    <img
                        src={
                            content &&
                            'http://image.tmdb.org/t/p/w1280' +
                                content.backdrop_path
                        }
                        alt={content?.title}
                        className="object-contain relative z-10"
                    />
                </div>

                <div className="px-6 pb-6 space-y-10 -mt-32 relative z-40">
                    <div className="space-y-6">
                        <h2 className="text-4xl font-semibold">
                            {content?.title}
                        </h2>
                        <div className="flex items-center space-x-3">
                            <Button icon={<FaPlay className="text-black" />}>
                                <span className="text-black">Assitir</span>
                            </Button>
                            <button className="p-2 h-fit text-2xl bg-neutral-900 border-2 border-neutral-400 rounded-full hover:border-neutral-200">
                                <FaPlus />
                            </button>
                            <button className="p-2 h-fit text-2xl bg-neutral-900 border-2 border-neutral-400 rounded-full hover:border-neutral-200">
                                <AiOutlineLike />
                            </button>
                        </div>
                    </div>

                    <div className=" space-y-6">
                        <div className="space-x-4">
                            <span>
                                <strong>Nota: </strong>
                                {content?.vote_average}
                            </span>
                            <span>
                                <strong>Lançamento: </strong>
                                {formatDate(content?.release_date)}
                            </span>
                        </div>
                        <p className="text-lg">{content?.overview}</p>
                    </div>
                </div>

                <div className="px-4 space-y-4">
                    <h4 className="text-2xl font-bold ">
                        Títutlos semelhantes
                    </h4>
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
                        {recomendations.map(movie => (
                            <img
                                src={
                                    'http://image.tmdb.org/t/p/w185' +
                                    movie?.poster_path
                                }
                                className="w-full object-contain rounded-md cursor-pointer hover:scale-110 transition-transform"
                                loading="lazy"
                                alt={movie?.title}
                                title={movie?.title}
                                onClick={() => showModal(movie)}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
