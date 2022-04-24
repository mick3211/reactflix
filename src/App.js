import Header from './components/Header';
import Highlight from './components/Highlight';

function App() {
    return (
        <div className="select-none">
            <Header />
            <section id="highlight">
                <Highlight />
            </section>
            <section id="top10">
                <div className="container px-4 mx-auto h-96">
                    <h3 className="text-2xl text-neutral-200 font-bold">
                        Top 10 em filmes no Brasil hoje
                    </h3>
                </div>
            </section>
        </div>
    );
}

export default App;
