import { useEffect, useState } from 'react';
import Header from './components/Header';
import Modal from './components/Modal';
import Index from './pages/Index';

function App() {
    return (
        <div className="select-none">
            <Header />

            <Index />
        </div>
    );
}

export default App;
