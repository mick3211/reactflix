export default function Button({ icon, opacity, ...props }) {
    return (
        <button
            type="button"
            className={`flex items-center gap-4 bg-neutral-200 font-semibold text-lg md:text-2xl px-7 py-2 rounded-md hover:opacity-75`}
            style={{ '--tw-bg-opacity': opacity / 100 || 1 }}
        >
            {icon}
            {props.children}
        </button>
    );
}
