import Header from './components/Header';
import Highlight from './components/Highlight';
import Row from './components/Row';
import RowCard from './components/RowCard';

function App() {
    return (
        <div className="select-none">
            <Header />

            <section id="highlight">
                <Highlight />
            </section>

            <section id="top10">
                <Row title="Top 10 filmes no Brasil hoje">
                    <RowCard>
                        <div className="flex justify-end h-full items-center w-full">
                            <span className="grey-border text-7xl lg:text-[8vw] translate-x-2 -translate-y-2 scale-[2] text-neutral-1000 font-extrabold">
                                1
                            </span>
                            <img
                                src="https://br.web.img3.acsta.net/pictures/22/02/14/18/29/1382589.png"
                                className="w-3/5 z-10 object-contain"
                            />
                        </div>
                    </RowCard>

                    <RowCard>
                        <div className="flex justify-end items-center w-full">
                            <span className="grey-border text-7xl lg:text-[8vw] translate-x-2 -translate-y-2 scale-[2] text-neutral-1000 font-extrabold">
                                2
                            </span>
                            <img
                                src="https://br.web.img3.acsta.net/pictures/22/02/14/18/29/1382589.png"
                                className="w-3/5 z-10 object-contain"
                            />
                        </div>
                    </RowCard>
                    <RowCard>
                        <div className="flex justify-end items-center w-full">
                            <span className="grey-border text-7xl lg:text-[8vw] translate-x-2 -translate-y-2 scale-[2] text-neutral-1000 font-extrabold">
                                3
                            </span>
                            <img
                                src="https://br.web.img3.acsta.net/pictures/22/02/14/18/29/1382589.png"
                                className="w-3/5 z-10 object-contain"
                            />
                        </div>
                    </RowCard>
                    <RowCard>
                        <div className="flex justify-end items-center w-full">
                            <span className="grey-border text-7xl lg:text-[8vw] translate-x-2 -translate-y-2 scale-[2] text-neutral-1000 font-extrabold">
                                4
                            </span>
                            <img
                                src="https://br.web.img3.acsta.net/pictures/22/02/14/18/29/1382589.png"
                                className="w-3/5 z-10 object-contain"
                            />
                        </div>
                    </RowCard>
                    <RowCard>
                        <div className="flex justify-end items-center w-full">
                            <span className="grey-border text-7xl lg:text-[8vw] translate-x-2 -translate-y-2 scale-[2] text-neutral-1000 font-extrabold">
                                6
                            </span>
                            <img
                                src="https://br.web.img3.acsta.net/pictures/22/02/14/18/29/1382589.png"
                                className="w-3/5 z-10 object-contain"
                            />
                        </div>
                    </RowCard>
                    <RowCard>
                        <div className="flex justify-end items-center w-full">
                            <span className="grey-border text-7xl lg:text-[8vw] translate-x-2 -translate-y-2 scale-[2] text-neutral-1000 font-extrabold">
                                7
                            </span>
                            <img
                                src="https://br.web.img3.acsta.net/pictures/22/02/14/18/29/1382589.png"
                                className="w-3/5 z-10 object-contain"
                            />
                        </div>
                    </RowCard>
                    <RowCard>
                        <div className="flex justify-end items-center w-full">
                            <span className="grey-border text-7xl lg:text-[8vw] translate-x-2 -translate-y-2 scale-[2] text-neutral-1000 font-extrabold">
                                8
                            </span>
                            <img
                                src="https://br.web.img3.acsta.net/pictures/22/02/14/18/29/1382589.png"
                                className="w-3/5 z-10 object-contain"
                            />
                        </div>
                    </RowCard>

                    <RowCard>
                        <div className="flex justify-end h-full items-center w-full">
                            <span className="grey-border text-7xl lg:text-[8vw] translate-x-2 -translate-y-2 scale-[2] text-neutral-1000 font-extrabold">
                                10
                            </span>
                            <img
                                src="https://br.web.img3.acsta.net/pictures/22/02/14/18/29/1382589.png"
                                className="w-3/5 z-10 object-contain"
                            />
                        </div>
                    </RowCard>
                </Row>
            </section>
        </div>
    );
}

export default App;
