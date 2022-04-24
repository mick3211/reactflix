export default function Button({ icon, opacity, ...props }) {
    return (
        <button
            type="button"
            className={`flex items-center gap-4 bg-neutral-200/${
                opacity || '100'
            } font-semibold text-2xl px-7 py-2 rounded-md hover:opacity-75`}
        >
            {icon}
            {props.children}
        </button>
    );
}
