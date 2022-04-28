import { useContext } from 'react';
import { modalContext } from './modal/ModalContext';

export default function RowCard(props) {
    const { showModal } = useContext(modalContext);

    return (
        <div
            className="w-[17vw] min-w-[160px] cursor-pointer relative md:scale-90 md:hover:scale-100 transition-transform"
            onClick={() => showModal(props.content)}
        >
            {props.children}
        </div>
    );
}
