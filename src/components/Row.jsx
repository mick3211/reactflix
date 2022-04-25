import { useRef, useState } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

export default function Row({ title, ...props }) {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isFullScrolled, setIsFullScrolled] = useState(false);
    const rowRef = useRef(null);

    const scrollRight = () => {
        const scroll = rowRef.current.scrollLeft + window.innerWidth;
        if (!isFullScrolled) {
            rowRef.current.scrollTo({ left: scroll, behavior: 'smooth' });
            setIsScrolled(true);
            if (scroll >= rowRef.current.clientWidth) setIsFullScrolled(true);
        } else {
            rowRef.current.scrollTo({ left: 0, behavior: 'smooth' });
            setIsFullScrolled(false);
            setIsScrolled(false);
        }
    };

    const scrollToLeft = () => {
        const scroll = rowRef.current.scrollLeft - window.innerWidth;
        if (isScrolled) {
            rowRef.current.scrollTo({ left: scroll, behavior: 'smooth' });
            setIsFullScrolled(false);
            if (scroll <= rowRef.current.clientWidth) setIsScrolled(false);
        } else {
            rowRef.current.scrollTo({
                left: rowRef.current.clientWidth,
                behavior: 'smooth',
            });
            setIsFullScrolled(true);
            setIsScrolled(true);
        }
    };

    return (
        <div>
            <div className="container px-4 mx-auto">
                <h3 className="text-2xl md:mb-4 text-neutral-200 font-bold">
                    {title}
                </h3>
            </div>
            <div className="relative w-full group">
                <button
                    type="button"
                    className="row-button left-0 bg-gradient-to-r"
                    onClick={scrollToLeft}
                >
                    <FaChevronLeft
                        size={'3em'}
                        className="invisible group-hover:visible"
                    />
                </button>

                <div className="py-4 overflow-x-auto no-scrollbar" ref={rowRef}>
                    <div className="w-min pl-[5%] flex gap-2 overflow-y-hidden ">
                        {props.children}
                    </div>
                </div>

                <button
                    type="button"
                    className="row-button right-0 bg-gradient-to-l"
                    onClick={scrollRight}
                >
                    <FaChevronRight
                        size={'3em'}
                        className="invisible group-hover:visible"
                    />
                </button>
            </div>
        </div>
    );
}
