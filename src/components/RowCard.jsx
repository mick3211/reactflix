export default function RowCard(props) {
    return (
        <div className="w-[17vw] min-w-[160px] cursor-pointer relative md:scale-90 md:hover:scale-100 transition-transform">
            {props.children}
        </div>
    );
}
