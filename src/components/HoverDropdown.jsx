export default function HoverDropdown({ button, ...props }) {
    return (
        <span className="group relative">
            {button}
            <div className="hidden pt-8 absolute -left-1/2 top-0 hover:inline-block group-hover:inline-block">
                {props.children}
            </div>
        </span>
    );
}
