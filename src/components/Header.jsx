import { useEffect, useState } from 'react';
import { FaSearch, FaBell } from 'react-icons/fa';

export default function Header() {
    const [isOpaque, setIsOpaque] = useState(false);

    useEffect(() => {
        const isScrolled = () => {
            if (window.scrollY > 0) setIsOpaque(true);
            else setIsOpaque(false);
        };

        window.addEventListener('scroll', isScrolled);

        return () => window.removeEventListener('scroll', isScrolled);
    });

    return (
        <header
            className={`fixed top-0 left-0 w-screen transition-colors duration-500 ${
                isOpaque ? 'bg-neutral-900' : 'bg-transparent'
            }`}
        >
            <div className="container mx-auto px-4 py-5 flex items-center">
                <img
                    src="https://rb.gy/ulxxee"
                    width={100}
                    height={100}
                    alt="Netlfix"
                    title="Netflix"
                    className="cursor-pointer object-contain mr-10 w-20 md:w-24"
                />

                <nav>
                    <a href="/" className="navlink md:hidden">
                        Navegar {'\u25BC'}
                    </a>
                    <ul className="hidden space-x-4 md:flex">
                        <li>
                            <a href="/" className="navlink active">
                                Início
                            </a>
                        </li>
                        <li>
                            <a href="/" className="navlink">
                                Séries
                            </a>
                        </li>
                        <li>
                            <a href="/" className="navlink">
                                Filmes
                            </a>
                        </li>
                        <li>
                            <a href="/" className="navlink">
                                Bombando
                            </a>
                        </li>
                        <li>
                            <a href="/" className="navlink">
                                Minha lista
                            </a>
                        </li>
                        <li>
                            <a href="/" className="navlink">
                                Idioma e legendas
                            </a>
                        </li>
                    </ul>
                </nav>

                <div className="ml-auto text-neutral-200 space-x-6 flex items-center">
                    <FaSearch className="cursor-pointer" />
                    <a href="/" className="navlink hidden lg:inline">
                        Infantil
                    </a>
                    <FaBell className="text-lg cursor-pointer" />
                    <a href="/" className="flex space-x-2 items-center">
                        <img
                            src="https://rb.gy/g1pwyx"
                            alt=""
                            className="cursor-pointer rounded"
                        />
                        <span className="text-xs">{'\u25BC'}</span>
                    </a>
                </div>
            </div>
        </header>
    );
}
