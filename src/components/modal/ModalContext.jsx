import { createContext, useState } from 'react';

function useModalContext() {
    const [isVisible, setIsVisible] = useState(false);
    const [content, setContent] = useState(null);

    function showModal(content) {
        setContent(content);
        setIsVisible(true);
    }

    function closeModal() {
        setIsVisible(false);
    }

    return { showModal, isVisible, content, closeModal };
}

export const modalContext = createContext();

export default function ModalContext(props) {
    return (
        <modalContext.Provider value={useModalContext()}>
            {props.children}
        </modalContext.Provider>
    );
}
