import { useContext } from 'react';
import { FaPlay, FaPlus } from 'react-icons/fa';
import { AiOutlineClose, AiOutlineLike } from 'react-icons/ai';
import Button from '../inputs/Button';
import { modalContext } from './ModalContext';
import { formatDate } from '../../data/services/dateService';

export default function Modal() {
    const { isVisible, content, closeModal } = useContext(modalContext);

    return !isVisible ? (
        <></>
    ) : (
        <div
            className="backdrop grid place-items-center overflow-y-auto"
            onClick={closeModal}
        >
            <div className="bg-neutral-900 max-w-5xl mx-auto rounded-lg overflow-hidden">
                <div className="relative">
                    <button
                        type="button"
                        className="absolute right-4 top-4 p-2 z-40 bg-neutral-900 text-neutral-200 rounded-full"
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

                <div className="px-6 space-y-10 -translate-y-32 relative z-40">
                    <div className="space-y-6">
                        <h2 className="text-4xl text-neutral-200 font-semibold">
                            {content?.title}
                        </h2>
                        <div className="flex items-center space-x-3">
                            <Button icon={<FaPlay />}>Assitir</Button>
                            <button className="p-2 h-fit text-2xl bg-neutral-900 text-neutral-200 border-2 border-neutral-400 rounded-full hover:border-neutral-200">
                                <FaPlus />
                            </button>
                            <button className="p-2 h-fit text-2xl bg-neutral-900 text-neutral-200 border-2 border-neutral-400 rounded-full hover:border-neutral-200">
                                <AiOutlineLike />
                            </button>
                        </div>
                    </div>

                    <div className="text-neutral-200 space-y-6">
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
            </div>
        </div>
    );
}
