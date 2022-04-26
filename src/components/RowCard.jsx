import { useState } from 'react';

export default function RowCard(props) {
    return (
        <div className="w-[17vw] min-w-[160px] cursor-pointer relative">
            {props.children}
        </div>
    );
}
