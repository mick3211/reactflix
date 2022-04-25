import { useState } from 'react';

export default function RowCard(props) {
    const [showHover, setShowHover] = useState(false);

    let timeout;

    const handleHover = () =>
        (timeout = setTimeout(() => setShowHover(true), 500));

    const handleMouseLeave = () => {
        setShowHover(false);
        clearTimeout(timeout);
    };

    return (
        <div
            className="w-[17vw] min-w-[160px] cursor-pointer relative"
            onMouseEnter={handleHover}
            onMouseLeave={handleMouseLeave}
        >
            {props.children}
            {showHover && (
                <div className="w-[480px] h-[270px] bg-neutral-1000 animate-expand shadow-lg absolute z-30 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
            )}
        </div>
    );
}
