import Header from './components/Header';
import ModalContext from './components/modal/ModalContext';
import Modal from './components/modal/Modal';
import Index from './pages/Index';

function App() {
    return (
        <div className="select-none">
            <Header />
            <ModalContext>
                <Index />
                <Modal />
            </ModalContext>
        </div>
    );
}

export default App;
