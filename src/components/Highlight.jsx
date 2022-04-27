import { FaPlay } from 'react-icons/fa';
import { FiInfo } from 'react-icons/fi';
import Button from './inputs/Button';

export default function Highlight({ content }) {
    return (
        <>
            <div className="container px-4 pt-16 mx-auto h-[80vh] min-h-[500px] flex items-center">
                <div className="max-w-4xl space-y-6">
                    <h1 className="text-4xl md:text-6xl font-bold text-neutral-200">
                        {content?.title}
                    </h1>
                    <p className="text-lg text-neutral-200 md:text-2xl clamp">
                        {content?.overview}
                    </p>
                    <div className="flex flex-col gap-3 sm:flex-row">
                        <Button icon={<FaPlay />}>Assistir</Button>
                        <Button
                            icon={
                                <FiInfo className="text-neutral-200 text-3xl" />
                            }
                            opacity="40"
                        >
                            <span className="text-neutral-200">
                                Mais informações
                            </span>
                        </Button>
                    </div>
                </div>
            </div>
            <div className="absolute -z-40 top-0 left-0 w-full h-screen min-h-[600px] bg-gradient-to-t from-neutral-900 to-transparent" />
            <img
                src={
                    'http://image.tmdb.org/t/p/original' +
                    content?.backdrop_path
                }
                className="absolute top-0 -z-50 h-full w-full min-h-[600px] object-cover"
            />
        </>
    );
}
