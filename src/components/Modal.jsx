export default function Modal({ content }) {
    return (
        <div className="bg-neutral-900 max-w-5xl mx-auto rounded-lg overflow-hidden fixed top-20 left-0 right-0 z-40">
            <div className="absolute -z-40 top-0 left-0 w-full h-full min-h-[600px] bg-gradient-to-t from-neutral-900 to-transparent" />
            <img
                src={
                    'http://image.tmdb.org/t/p/original' +
                    content?.backdrop_path
                }
                alt=""
                className="sticky top-0 left-0 -z-50 object-contain"
            />
        </div>
    );
}
