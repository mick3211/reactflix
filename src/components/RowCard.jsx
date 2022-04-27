import { useState } from 'react';

export default function RowCard(props) {
    return (
        <div className="w-[17vw] min-w-[160px] cursor-pointer relative scale-90 hover:scale-100 transition-transform">
            {props.children}
        </div>
    );
}
