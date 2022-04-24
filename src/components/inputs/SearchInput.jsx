import { useRef, useState } from 'react';

export default function SearchInput({ icon, ...props }) {
    const [isExpanded, setIsExpanded] = useState(false);
    const inputRef = useRef(null);

    const toggle = () => {
        const x = !isExpanded;
        setIsExpanded(x);

        if (x) inputRef.current.focus();
        else inputRef.current.blur();
    };

    return (
        <div className="relative">
            <button
                type="button"
                id="45"
                className={`absolute cursor-pointer ${
                    isExpanded ? 'left-2' : '-left-2'
                } top-1/2 -translate-y-1/2`}
                onClick={toggle}
            >
                {icon}
            </button>
            <div
                className={`overflow-hidden transition-all duration-500 ${
                    isExpanded ? 'w-64' : 'w-0'
                }`}
            >
                <input
                    type="text"
                    placeholder="Títulos, gente e gêneros"
                    ref={inputRef}
                    className="w-full pl-8 py-1 inline-block bg-neutral-1000 outline-none border border-neutral-200"
                />
            </div>
        </div>
    );
}
